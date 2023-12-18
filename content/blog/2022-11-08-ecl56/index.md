---
layout: post
title: "El Correo Libre Issue 56"
description: El Correo Libre Newsletter, Issue 56
author: Gareth Halfacree
date: 2022-11-08
---


<img src="mission-accomplished.jpg" style="max-width:100%" />

## Mission Accomplished - LibreCores is Closing Down

Effective immediately, LibreCores, the community hub and IP core directory site is closing its virtual doors.

Seven years ago, we at the FOSSi Foundation started LibreCores to show the world what’s possible with free and open source silicon. We showcased the diversity and the quality of IP blocks, and how easy it is to get started with a complex design by putting together freely available blocks.

LibreCores started as a directory of user-contributed, freely available IP blocks and quickly grew as we added tagging and advanced search features. One key question guided the design from the start: how can we help users to make an informed decision if a certain IP block was right for them? For example, we explored integrating information from the git repository directly into the project page, such as its update frequency, the number of contributors, and the availability of documentation.

Over time, LibreCores has become not only a place to look for building blocks for hardware designs, but also a “shop window”, showing what the free and open source community is capable of.

Seven years have passed, and free and open source silicon is no longer a dream. It’s a reality, and it’s here to stay. With that we feel the job LibreCores set out to accomplish is done. Today, finding good building blocks for hardware designs is only an internet search away. Blog posts, video tutorials, and our own El Correo Libre newsletter regularly inform readers about what’s new in the world of free and open source silicon and discuss the developments. Most importantly, we have seen a large number of tape-outs, boosting the industry’s confidence in the ability for free and open source silicon to deliver high-quality results.

The FOSSi Foundation is a small organization, and we’re always looking into ways to apply our resources most effectively. At this time, we felt that the free and open source silicon community is best served by us focusing on [projects](https://www.fossi-foundation.org/projects) such as our conferences (including Dial-Up and [ORConf](https://www.orconf.org)), this monthly newsletter [El Correo Libre](https://www.fossi-foundation.org/ecl), [cocotb](https://www.cocotb.org), and other initiatives.

Are you interested in making free and open source silicon a success as well? Have a look at the [projects page](https://www.fossi-foundation.org/projects) for ways to contribute, or reach out to any [FOSSi Foundation director](https://www.fossi-foundation.org/about-us/core-team).

We are extremely thankful to all contributors and GSoC students who helped to develop and maintain LibreCores over the years. You rock!

_-Philipp Wagner, Director, FOSSi Foundation_

<img src="googlechips.jpg" style="max-width:100%" />

## Applications Open for the First GlobalFoundries 180nm OpenMPW Shuttle


Google has announced the opening of applications for the first Open Multi-Project Wafer (OpenMPW) shuttle to make use of GlobalFoundries' 180nm process design kit (PDK), which the companies released under the permissive Apache 2.0 licence back in August this year.

"Following the announcement about GlobalFoundries joining Google’s open source silicon initiative," Google's Ethan Mahintorabi, Johan Euphrosine, and Aaron Cunningham write in a joint post, "we are now sponsoring a series of no-cost OpenMPW shuttle runs for the GF180MCU PDK in the coming months.

"Those shuttles will leverage the existing OpenMPW shuttle infrastructure based on the OpenLane automated design flow with the same Caravel harness and the Efabless platform for project submissions."

As with the earlier OpenMPW shuttles, which used SkyWater's 130nm PDK, the GlobalFoundries shuttles are open to up to 40 free and open-source silicon projects - providing they meet Google's criteria: design sources must be available under an open-source licence and reproducible using the GlobalFoundries 180nm PDK; they must be submitted before the shuttle deadline; and they must pass pre-manufacturing checks.

The first GlobalFoundries shuttle is open for submissions now, and closes on the 5th of December 2022. It will, Google has confirmed, act as a "test shuttle" with future shuttles enjoying a longer application window and improved testing.

Those interested in applying can submit a design [on Google's open silicon landing page](http://developers.google.com/silicon); projects already submitted as part of a SkyWater shuttle are welcome to reapply, the company has confirmed, as a means of testing portability between PDKs.

<img src="tinytapeout.jpg" style="max-width:100%" />

## Tiny Tapeout Aims to Go "From Idea to Chip Design in Minutes"


Matthew Venn and colleagues are aiming to "demystify" the design and manufacture of modern microchips with a beginner-friendly programme dubbed "Tiny Tapeout" - for those who find the OpenMPW programme a little daunting.

"Tiny Tapeout is an educational project that makes it easier and cheaper than ever to get your digital designs manufactured on a real chip," Matthew explains of the project, which follows on from his educational Zero to ASIC programme. "We ran TinyTapeout-01 in August and received 150 submissions in just a couple of weeks. Now we’re getting ready to open submissions for Tiny Tapeout 2!"

The Tiny Tapeout programme comes with accessible lessons in designing and submitting chips for manufacturing using either a Wowki template or a traditional hardware design language (HDL). All users get access to community support via what Matthew calls "fast & friendly chat."

Unlike the OpenMPW programme, there is a price attached - but one designed to be as affordable as possible: those wishing to submit a design without having it manufactured can do so at $25, while $100 plus shipping gets a submitted design manufactured in silicon and a carrier PCB.

More information is available [on the Tiny Tapeout website](https://tinytapeout.com/); submissions for the second Tiny Tapeout begin on the 9th of November 2022.

<img src="olofsocedalize.jpg" style="max-width:100%" />

## From Simulation to System-on-Chip with FuseSoC and Edalize


FOSSi Foundation director Olof Kindgren has written a tutorial on taking SERV, the award-winning ultra-compact bit-serial RISC-V CPU design, to a manufacturable system-on-chip (SoC) - with simulation and FPGA deployment to help prevent any unexpected problems in the finished physical chip.

"This tutorial will show we can take an existing building block, in this case SERV, turn it into an ASIC [Application Specific Integrated Circuit]-friendly SoC, run it in simulation, make an FPGA prototype and finally have it manufactured as an ASIC," Olof writes. "All using FuseSoC and Edalize to hide most of the differences between these vastly different tool environments.

"Afterwards, you should be able to use the same process and thinking to turn your own designs into FuseSoC packages that can be used with different tools and easily reused in your own and other people's designs."

The tutorial walks through taking the SERV CPU design and turning it into the Subservient SoC, simulating that SoC, prototyping it on an FPGA, and finally making it ready for manufacture using OpenLANE.

"With that, my friends, we have built a GDS file for the Subservient SoC that we can send to the fab and get real chips back," Olof's tutorial concludes. "And this we did, but that's for another day."

The full tutorial is available [on Olof's website now](https://olofkindgren.blogspot.com/2022/10/from-simulation-to-soc-with-fusesoc-and.html).

<img src="flamegraph.jpg" style="max-width:100%" />

## Frans Skarman's Yosys Plugin Turns FPGA Resource Monitoring into a Flame Graph


Developer Frans Skarman has written an experimental plugin for Yosys which aims to make it easier to interpret FPGA resource usage, by visualising resources in a flame graph.

"I wrote a Yosys plugin to generate a flame graph for each cell type used in the design and combine it all in a single HTML page," Frans explains. "[It's] made as a Yosys plugin which gathers all the cell mappings, then passes those to a Rust library which does the flame graph stuff using the Inferno crate.

"For now it needs the Spade compiler in order to try to translate Spade names to human readable format. This could probably be separated out with feature gates though, if anyone wants to use it outside Spade.

"It's also a nice demo of my new Swim (Spade build system) plugin feature," Frans adds. "To use it, you simply have to add two lines of TOML, and it will generate the flame graph for you when you call 'swim synth'."

A video demo is available [on Frans' Twitter thread](https://twitter.com/TheZoq2/status/1584179481081573377), with the plugin's source code available [on GitLab](https://gitlab.com/TheZoq2/yosys_flamegraph) under an unspecified open-source licence.

<img src="librebmc.jpg" style="max-width:100%" />

## OpenPOWER Foundation Presents a LibreBMC Showcase at the OCP Summit


The OpenPOWER Foundation has showcased its LibreBMC, a POWER-architecture open-source baseboard management controller, at the Open Compute Project (OCP) Global Summit 2022.

“The community-driven LibreBMC solution demonstrates the kind and pace of innovation that occurs when open collaboration is placed front and centre," claims James Kulina, executive director of the OpenPOWER Foundation. "LibreBMC proves that for a critical infrastructure component such as the baseboard management controller, an open platform supported by an active community enables improved performance, reliability, customisation, and security."

Built around the free and open source Microwatt POWER soft-core, the demonstration implementation of LibreBMC runs the OpenBMC firmware and adheres to the Open Compute Project's Datacentre Secure Control Module (DC-SCM) specification, its creators have confirmed.

"Well done to OpenPOWER Foundation for pushing on this," says IBM OzLabs developer Michael Neuling in support of the announcement, "and kudos to the rest of the team [at] Code Construct, Jeremy Kerr, Matt Johnston, Anton Blanchard, Joel Stanley, Paul Mackerras, Andrew Jeffery, IBM, and building on tools from Antmicro, Raptor Computer Systems, and Olof Kindgren."

A technical write-up of LibreBMC by Jeremy Kerr and Matt Johnston is available [on the Code Construct blog](https://codeconstruct.com.au/docs/dcscm-openbmc/); a video of the OCP Global Summit demo is available [on YouTube](https://www.youtube.com/watch?v=YYNegXDsRoU). The project's documentation is available [on the LibreBMC Git repository](https://git.openpower.foundation/librebmc/librebmc).

<img src="caliptra.jpg" style="max-width:100%" />

## The Open Compute Project Launches Caliptra 0.5, an Open Silicon Root-of-Trust


The Open Compute Project (OCP) has announced the launch of Caliptra, an open standard for a silicon root of trust - and with a reference implementation based on the free and open source RISC-V architecture.

"To address customers' requirements for computing solutions that include a consistent set of security features, and transparency across the ecosystem, AMD, Google, and Microsoft, joined by Nvidia, collaborated to define Caliptra, an open standard for silicon RoT, as part of the Open Compute Project (OCP)," AMD's chief technology officer Mark Papermaster explains of the launch announcement.

"Today marks a major step forward in industry-wide collaboration on security with the release of the Caliptra 0.5 specifications by OCP, and the availability of Caliptra 0.5 RTL through the CHIPS Alliance. AMD will continue as an active participant in Caliptra and the Open Compute Project in support of our customers and stakeholders across the ecosystem."

Having been initially proposed by staff at AMD, Google, and Microsoft in February this year, development of Caliptra has been swift - and its latest release includes a reference implementation based around the Chips Alliance SWeRV EL2 RISC-V core.

More information on the project is available in the Caliptra specification document, available from the Open Compute Project [as a PDF download](https://www.opencompute.org/documents/caliptra-silicon-rot-services-09012022-pdf).

<img src="serv120-docs.jpg" style="max-width:100%" />

## The Award-Winning SERV RISC-V CPU Hits v1.2.0, Still the World's Smallest


The SERV bit-serial CPU, the world's smallest RISC-V core, has reached v1.2.0 - a release which brings with it a selection of new features including support for two major extensions to the RISC-V instruction set architecture: M and C.

"Historically, focus has always been on size reduction, making it ever smaller, and that has paid off. It's now about half the size of when it was first introduced," FOSSi Foundation director and SERV creator Olof Kindgren explains. "But at this point we're not really getting much smaller, and frankly, that's fine. It still is the world's smallest RISC-V CPU by a good margin.

"So this time we focus on features instead. Most notably we have support for two major ISA extensions, both often requested by users, but there are also a number of other new features as well."

The latest release of the core includes support for the M extension, added by Zeeshan Rafique as part of the Google Summer of Code (GSoC), and the C extension, added by Abdul Wadood under the Linux Foundation Mentorship programme.

'"The C extension has been the most requested feature of SERV," Olof notes. "Since SERV is so small, the memory typically dominates the area and the C extension has the potential to allow for smaller memories and by extension a smaller system."

Other new features include improvements to the documentation, a fix for a bug which could cause immediates to sometimes get the wrong sign depending on prior instructions, the restoration of Model/QuestaSim compatibility, support for the RISC-V compliance test suite version 2.7.4, a system-on-chip implementation dubbed Servant, and support for the OpenLANE toolchain.

More information on all these new features, and others besides, are available [in Olof's announcement post](https://olofkindgren.blogspot.com/2022/10/serv-little-cpu-that-could.html); SERV itself, meanwhile, is available [on GitHub](https://github.com/olofk/serv) under the permissive ISC licence.

<img src="minimax.jpg" style="max-width:100%" />

## Graeme Smecher's Minimax is a Compressed-First RISC-V CPU


Graeme Smecher has released a new RISC-V CPU design which flips the compressed instruction (C) extension on its head - using it as the first port of call for running instructions and relying on a microcode layer to catch anything it misses.

"RISC-V's compressed instruction (RVC) extension is intended as an add-on to the regular, 32-bit instruction set, not a replacement or competitor." Graeme explains. "Its designers designed RVC instructions to be expanded into regular 32-bit RV32I equivalents via a pre-decoder.

"What happens if we explicitly architect a RISC-V CPU to execute RVC instructions, and 'mop up' any RV32I instructions that aren't convenient via a microcode layer? What architectural optimisations are unlocked as a result?

"'Minimax' is an experimental RISC-V implementation intended to establish if an RVC-optimised CPU is, in practice, any simpler than an ordinary RV32I core with pre-decoder," Graeme continues. "While it passes a modest test suite, you should not use it without caution."

The Minimax core handles compressed instructions as "first-class" and executes in a single clock, excluding shifts and branches, while some RV32I instructions are implemented in RTL and execute in two clocks. The remaining instructions are emulated in microcode. "This is not how the compressed ISA was intended to be implemented," Graeme admits.

Minimax is available now [on the project's GitHub repository](https://github.com/gsmecher/minimax), under the permissive BSD 3-clause licence.

<img src="riscvvp.jpg" style="max-width:100%" />

## Researchers Aim to Broaden Virtual Prototyping in the RISC-V Ecosystem


Researchers from DFKI GmbH and the University of Bremen have published a paper proposing a way to broaden the use and functionality of virtual prototyping in the RISC-V ecosystem.

"RISC-V is a modern Instruction Set Architecture (ISA) that, by its open nature in combination with a clean and modular design, has enormous potential to become a game changer in the Internet of Things (IoT) era," the researchers, including first author Pascal Pieper, explain. "Recently, SystemC-based Virtual Prototypes (VPs) have been introduced into the RISC-V ecosystem to lay the foundation for advanced industry-proven system-level use-cases.

"However, VP-driven environment modelling and interaction have mostly been neglected in the RISC-V context. In this paper, we propose such an extension to broaden the application domain for virtual prototyping in the RISC-V context."

The team's extension, building on an open-source platform, comes with a graphical user interface and libraries designed to offer a variety of hardware communication interfaces from the virtual prototype to an interactive environment model. A set of "building blocks" including buttons, LEDs, and an OLED display are also provided.

"Our evaluation with two different case-studies demonstrates the applicability of our approach in building virtual environments effectively and correctly when matching the real physical systems," the researchers claim. "To advance the RISC-V community and stimulate further research, we provide our extended VP platform with the environment configuration and visualization toolbox, as well as both case-studies as open source on GitHub."

The paper describing the project has been published in the _[Journal of Low Power Electronics and Applications](https://www.mdpi.com/2079-9268/12/4/52/htm)_ under open-access terms; the source code is available [on GitHub](https://github.com/agra-uni-bremen/riscv-vp) under the permissive MIT licence.

<img src="selene-accelerators.jpg" style="max-width:100%" />

## SELENE Project Releases New Linux-Class Six-Core RISC-V Design


The SELENE Project, which aims to develop an open platform for safety-related computing applications based on RISC-V, has announced a new release - offering a six-core Linux-class RISC-V system-on-chip design with FPGA-based acceleration for artificial intelligence (AI) workloads.

"We have released a new version of the SELENE platform," the project maintainers announce. "Our Linux class 6-core NOEL-V RISC-V SoC has been extended with FPGA AI acceleration. The accelerators can be programmed using the EDDL DeepHealth Library that supports ONNX."

The SELENE project was funded as part of the European Union's Horizon 2020 research and innovation programme to develop a self-monitored platform for high-performance safety-critical systems - using as its bases a heterogeneous multi-core RISC-V design.

In the latest release, the six-core system-on-chip - which uses Cobham Gaisler's open-source NOEL-V RISC-V cores, adds functionality for accelerating artificial intelligence and other deep-learning workloads using embedded FPGA hardware.

The latest version of the platform design has been published to the [SELENE GitLab repository](https://gitlab.com/selene-riscv-platform/selene-hardware), with more information available [on the project website](https://www.selene-project.eu/).

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [RISC-V support is now upstreamed into the Android Open Source Project (AOSP).](https://riscv.org/blog/2022/10/risc-v-celebrates-upstreaming-of-android-open-source-project-risc-v-port-risc-v-international/) [(More here.)](https://riscv.org/blog/2022/10/first-patches-from-alibaba-cloud-enable-android-open-source-project-on-risc-v-han-mao-and-david-chen-alibaba-could/)
-   [Researchers at ETH Zurich and Huawei release the "New Ara," an open-source high-efficiency RISC-V V 1.0 vector processor design.](https://arxiv.org/abs/2210.08882) [(Source code, Solderpad Hardware License v0.51.)](https://github.com/pulp-platform/ara)
-   [RISC-V announces public review for profiles RVI20, RVA20, RVA22,](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/wZFKPUcYJR0/m/R4OmMe9cBQAJ) and for [standard extensions Zca, Zcf, Zcd, Zcb, Zcmp, Zcmt.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/aTgHkmkPXrw)
-   [CHIPS Alliance announces new Python-based build system and command-line interface tool for F4PGA.](https://chipsalliance.org/blog/uncategorized/2022/10/09/f4pga-open-source-flow-gets-a-new-python-based-build-system-and-cli-tool/)
-   [Laura Dobberstein, The Register: "Chinese city of Shenzhen offers free money to boost chip industry." (Name-drops RISC-V.)](https://www.theregister.com/2022/10/12/chinese_city_of_shenzhen_chip_funds/)
-   [Stephen Vicinanza, Interesting Engineering: "Rise of RISC-V: The computer chip design you need to know about."](https://interestingengineering.com/innovation/rise-of-risc-v-the-computer-chip)
-   [RISC-V Summit schedule now live, opens December 12th 2022.](https://events.linuxfoundation.org/riscv-summit/program/schedule/)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**

