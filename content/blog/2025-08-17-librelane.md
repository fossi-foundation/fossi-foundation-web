---
layout: post
title: Announcing the Release of LibreLane
description: ""
category:
tags: []
author: Mohamed Donn Gaber
date: 2025-07-17
---

In late 2019, the open-source electronic design automation (EDA) space was changed forever by the open-sourcing of a 130nm process design kit (PDK). Spearheaded by Google, the Skywater 130nm Open Source PDK was the first fully manufacturable PDK available for everyone without lengthy legal agreements and approval processes.

The release of sky130 was accompanied by Efabless’s Caravel platform, a chip harness that offered a standardised padframe and RISC-V-based SoC in addition to a fully customisable user area. To allow users to customise their user projects as they saw fit, Efabless also released OpenLane: a dead-simple chip design flow that incorporates existing projects including Yosys, OpenROAD, Magic and KLayout to create a no-man-in-the-loop RTL-to-GDSII flow, configurable with just one file.

Today, after years of work, and major turbulence from the shuttering of Efabless Corporation, I am delighted to finally announce the release of [LibreLane](https://github.com/librelane/librelane), the successor to OpenLane — a ground-up reimagining which implements OpenLane-compatible flows by providing an infrastructure with which flows can freely be created, customised, and distributed.

### Motivation

OpenLane was revolutionary for its time, prioritising ease-of-install and ease-of-use above all. Unlike its nascent peers, OpenLane came with all batteries included, not requiring you to compile a single tool. Additionally, over time, tools like Volare came along which also removed the requirement for each user to build their own PDK from sources, where the PDK can simply be downloaded from GitHub using a command-line tool. This plug-and-play experience made it possible for everyday users to implement a toy chip in literal minutes.

That however, did not mean that OpenLane did not have its limitations. Far from it. For most digital MPW projects, few ran into issues, but under the hood, the flow amounted to little more than a set of Tcl procedures haphazardly manipulating the global state and calling tools. A combination of Tcl not being the best language with which to implement serious, scalable projects and the lack of a codified structure for the codebase meant that eventually, OpenLane was starting to constrain our ability to continue to implement complex chips using the flow.

Back at Efabless, as early as 2022, my colleagues ([Kareem Farid](http://github.com/kareefardi), [Mohamed Shalan](http://github.com/shalan)) and I started a project to rewrite OpenLane that we simply titled “OpenLane 2.” OpenLane 2 was a ground-up rewrite of OpenLane, with the goal of continuing to support OpenLane configuration files, but providing far more flexibility and consistency than OpenLane ever did. “OpenLane 2” was soft-launched at Efabless in February 2024, but we waited patiently to get silicon with strict timing requirements back to verify STA quality of results until we could officially recommend the new flow to our then-customers. About a year later, we did the tests in question, but due to funding challenges, Efabless shut down just days after.

Undeterred, at the recommendation of my colleague, [Leo Moser](http://github.com/mole99), I joined the FOSSi Foundation with the intent of continuing to maintain OpenLane 2 myself. Given the complexity of having to acquire the relevant namespaces and such from Efabless, and the fact it was so different from OpenLane 1 anyway — we elected to simply rename the project “LibreLane.”

### About LibreLane

LibreLane is a Python-based infrastructure for the implementation of highly customisable and repeatable ASIC flows. The default flow, “Classic,” replicates OpenLane near-perfectly — even supporting the very same configuration files, but also allows unparalleled flexibility by allowing people to write fully-custom advanced data-flows.

We designed LibreLane with three goals in mind. The first and most important principle is to retain the ease-of-use for OpenLane: Like OpenLane, LibreLane allows flows to be configured entirely with one Tcl, JSON or YAML file that allows you to get from RTL-to-GDSII. We also wanted to remain “batteries-included”: we continued to pursue methods of bunding flows with their requisite binaries so users would not have to go and build each tool, or be affected by API and or functionality breaks. Last, setting LibreLane apart from OpenLane, we wanted a well-documented API with which users can create their own flows.

The core idea LibreLane was built around was an explicit representation of the current state of a design. We defined the state of a design as a simple object that stores paths to various files representing the design: netlists, design exchange format (DEF) files, JSON netlists, etc, in addition to a collection of “metrics”: a set of statistics about really anything in the design: design__die__area, for example, returns the area of the design in square microns. These objects are immutable, meaning they cannot be modified, only copied, and are fully serialisable to JSON for traceability, so they may be saved at multiple points in the flow to show how a flow has progressed.

To do EDA tasks, we create “Steps,” which are essentially functions that take in one state, and output another state. For example, the “Floorplan” Step takes a State with a Netlist, and creates a new State with a DEF file. The “Routing” Step takes a State with a DEF file, and creates a new State with a new DEF file. And so on. By modeling EDA tasks like this, we were able to make the steps highly repeatable, as no global database is being mutated, but it also allows flows to try to explore multiple configurations in parallel by running multiple steps on multiple threads.

Flows, on the other hand, are just aggregations of steps. They can be simple, serial “SequentialFlow”s, literally just running one step after another, or fully custom functions that do things like the aforementioned parallel exploration. Flows provide simpler configuration and the ability to more easily control the execution from the command-line, which is more difficult when running step by step (which mind you, is possible — you may ignore the flow module entirely if you’d prefer).

And last, the “Config” module. The config module is responsible for exposing all the various switches and knobs (read: input configuration variables) of steps to the user, allowing them to configure the flow using Tcl, JSON, or YAML files, as well as using a Python dictionary. The Configuration module also handles validation and type-checking, which was a pain point with OpenLane where the flow would simply crash at an undetermined point if an input variable happened to be invalid. As with States, Configs are also immutable and cannot be modified after the fact, though flows may create derivative configurations to feed different steps slightly different configurations.

With this architecture, we were able to recreate the OpenLane flow in a far, far more robust fashion, and empowered our place-and-route (PnR) engineers back at Efabless to accelerate their workflows by giving them the ability to implement their own steps including those that supported proprietary EDA tools, custom flows (including by [simply modifying the default flow from the configuration file](https://librelane.readthedocs.io/en/latest/usage/writing_custom_flows.html#by-substituting-steps)), and the ability to partially re-run flows to tweak a subset of variables. You can read more about the architecture in the [LibreLane documentation](https://librelane.readthedocs.io/en/latest/reference/architecture.html).

### The Classic Flow

While LibreLane supports infinitely many flows, we do provide a state-of-the-art implementation of an OpenROAD-based flow: the “Classic” flow. Based on OpenLane and verified over countless internal tapeouts, the Classic flow is battle-tested for commercial-grade tape-outs on the Skywater 130nm PDK, in addition to supporting the GlobalFoundries 180nm PDK and also, in an upcoming release, introducing support for the IHP Open PDK as well. It incorporates Yosys (with a litany of plugins), OpenROAD, OpenSTA, Magic, KLayout, and Netgen to provide a flow to deliver results that are both highly accurate and high quality.

There are naturally some key enhancements that were not present in OpenLane. The new State system means that metrics are not simply extracted by a relatively brittle script at the end of the flow, and the burden is moved to the Step itself, adding much-needed resilience to metrics collection. Another element delegated to steps is the capture and store of warnings and errors from tools. To top it all off, the better handling of nested objects meant the introduction of a dedicated MACROS configuration variable that stores information about hard macros and their instances as a first-class object instead of strewn across macro placement files, “extra netlists,” “extra LEFs,” or whatnot (though those are still supported for backwards compatibility).

These enhancements combined with the conveniences provided for the LibreLane architecture present what is a strict upgrade over the OpenLane flow, in addition to a variety of new configuration variables not present in the original flow that give you the control you need to tape-out high quality ASICs, whether you’re a student, startup, or chip design firm.

### Community and Adoption

Under the name OpenLane 2, LibreLane was widely used internally at Efabless, where it had entirely replaced OpenLane at release almost immediately, with my colleagues raving about the ability to incorporate tools like Synopsys® Design Compiler™ and PrimeTime™ into our flows using custom steps to squeeze just a bit more performance out of our chips, which fully enabled the ambitious [chipIgnite ML](https://efabless.com/chipignite-ml) project.

Some of our earliest partners to adopt LibreLane were Tiny Tapeout, who have used custom LibreLane-based flows to implement the top-level multiplexer for Tiny Tapeout 3.5 and as the ASIC implementation backend for every subsequent digital Tiny Tapeout project. LibreLane has already found its way into academic projects like [Greyhound](https://github.com/mole99/greyhound-ihp) and [Piel](https://github.com/daquintero/piel). Importantly, ChipFoundry, started by some of my former colleagues at Efabless, have agreed to adopt LibreLane as their primary flow as of their ChipCreate CC2509 shuttle, continuing OpenLane’s legacy in enabling the commercialisation of open-source EDA technology.

With these many stakeholders in mind, LibreLane aims to be more community-driven than OpenLane, the latter of which was developed top-down based on priorities at Efabless. We would like to continue to actively involve the community in setting roadmaps and priorities, as well as enhance developer documentation so engineers can freely contribute to the flow. To do this, we joined the FOSSi Foundation to draw on the community-based governance experience of many successful projects such as cocotb, but also, I encourage you to reach out personally if you would like to help.

### Getting Started

LibreLane 2.4.0, the first version after the fork and rename, is available for macOS and Linux (and Windows with WSL2). The [getting started guide](https://librelane.readthedocs.io/en/latest/getting_started/index.html) shows you how to install all requisite dependencies.

This represents years of hard work by many, many people, my colleagues back at Efabless, my friends at Tiny Tapeout, and my new colleagues at the FOSSi Foundation. It is my sincere hope that LibreLane will make chip design easier and more accessible than ever, and we’re not nearly done. We are hard at work at version 3.0.0, which will add first-class IHP Open PDK support by Leo Moser and the Tiny Tapeout team as well as a number of changes for architectural consistency that will make using LibreLane even simpler.
