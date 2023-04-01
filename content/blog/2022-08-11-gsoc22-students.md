---
layout: post
title: GSoC Class of 2022
description: ""
category:
tags: []
author: Jonathan Balkind
date: 2022-08-11
---

The FOSSi Foundation is happy to introduce our Google Summer of Code Class of 2022 projects.
This year we are grateful that we have been granted ten slots by Google to support projects and students.
We are thankful for all mentors who volunteered to supervise students, and we're looking forward to a great summer working together on Free and Open Source Silicon projects.

These projects are our "GSoC Class of 2022".
Please give our students a warm welcome!

### Development Framework for Open MPW Shuttles (Ali Imran)

Mentored by Steve Hoover and Mohamed Kassem

The Open MPW shuttle program provides an opportunity for free ASIC fabrication. Efabless provides the Caravel SoC template to simplify MPW development. This Google Summer of Code project further simplifies development by providing starting templates and aids for Caravel development using the Makerchip online IDE. This provides developers with an easy onramp, including support for TL-Verilog and simulation visualization.

### 1st CLaaS for PYNQ FPGAs (Srihari)

Mentored by Steve Hoover and Theodore Omtzigt

While 1st CLaaS provides a framework for cloud FPGA deployment of FPGA accelerators on the AWS F1 platform, the "1st CLaaS for PYNQ FPGAs" Google Summer of Code project supports deployment of the same accelerator kernels using PYNQ--a framework that interfaces FPGAs with Python code running within Jupyter notebooks. This project provides a hardware and software shell to interface Python with 1st CLaaS accelerator kernels as well as automation for compiling and programming the FPGAs. Additionally, this project automates the secure hosting of PYNQ notebooks and FPGAs for cloud access, initially for use in FPGA training.

### Enhancing AnyCore, a superscalar RISC-V processor (Gergely Bálint)

Mentored by Jonathan Balkind

AnyCore is an advanced superscalar processor developed at NC State University, designed to be highly configurable across parameters like issue width and pipeline depth. AnyCore also supports dynamic adaptivity. Since its release in 2016, AnyCore has been integrated into the OpenPiton platform, but has a number of limitations: outdated RISC-V instruction implementations, proprietary modules (Floating-Point Unit), issues related to physical memory access, and outdated and incomplete implementation of the RISC-V privileged specifications. This specification describes the Machine, Supervisor and User modes, or privilege levels which are needed to run a Unix-like operating system on AnyCore. Besides handling privilege levels, a Memory Management Unit (MMU) is also mandatory for this goal.

### Logical Equivalence Checks for CIRCT (Dragoș Cristian Lizan)

Mentored by Fabian Schuiki, Martin Erhart, and Jonathan Balkind

CIRCT is an open-source compiler framework and toolset for hardware development to which we aim to contribute a tool for logical equivalence checking. Designers will then be able to manually — or automatically — optimise their circuits then check for the absence of newly introduced bugs while CIRCT developers will be enabled to test the correctness of dialects transformations and optimisations. In the current state, the tool is able to analyse inputted circuit descriptions and formally prove or disprove their equivalence for a selection of basic operations like instancing and xor. Going forward, we intend improve its functionality and to cover most of the combinatorial operations defined in CIRCT.

### Enhancing the Sootty Terminal-based Graphical Waveform Viewer (Yihua Liu - 刘翊华)

Mentored by Ben Darnell and Jonathan Balkind

Sootty is a new terminal-based waveform viewer running on modern terminals written in Python. Currently, sootty supports VCD waveform format and decimal numbers only. This project consists of three tasks: to support more waveform formats, to support custom numeral systems, and to support multiple multi-color markers. This project will add arguments, translation modules, visualizing units, etc. based on sootty’s query language.

### IRSIM Dynamic Power Analysis and Other Improvements: (Jason Liang)

Mentored by Tim Edwards and Philipp Wagner

IRSIM is an open-source switch level simulator that analyzes digital circuits at the device (transistor) level, using a linear switch-based model that depends on whether a transistor is "on" or "off" but accounting for the resistance through the device for delay estimates. The event-based simulation makes IRSIM much faster than a device modeling simulator like SPICE, but slightly slower than a Verilog simulator, which models circuits at the gate level and lacks a power analysis component. The goal of this GSoC internship is to test the existing IRSIM power analysis features for proper functionality and update it to match recent developments to IRSIM outside of the power analysis code. The scope of the work includes developing a TCL command  line interface to visualize power in a simulation (e.g., simplified setup, and capture and display of histogram data), running IRSIM on various designs to verify proper power analysis (and modifying/adding code as needed), and adding support for multiple voltage domains.  As time permits, support will be added for multiple transistor device models, and a stretch goal will be to add static timing analysis.

### TinyParrot: A minimal BlackParrot RISC-V Multicore variant (Kinza Qamar Zaman)

Mentored by Mark Wyse, Dan Petrisko, and Olof Kindgren

The goal of this project is to have a minimal and optimized BlackParrot called TinyParrot. For doing so, the major focus goes towards reducing/parameterizing the size of L1 caches. The default size of L1 caches was 4KB Set Associative. To reduce it to 1KB, I basically changed a few parameters that the caches are using like the number of blocks, number of associativity levels, and block size. As the L1 caches are VIPT (Virtually Indexed, Physically Tagged) caches, we got an extra 2 untranslated tag bits that remained unused as the bits required to index the cache and byte are lesser than the page offset. This configuration avoids the synonym problem but presents an interesting challenge of which bits to translate and which to use directly.

### Porting the BlackParrot multicore to FuseSoC (Adithya Sunil)

Mentored by Dan Petrisko and Olof Kindgren

FuseSoC is a package manager and set of build tools for reusable hardware building blocks, which makes it easy to share designs between projects and reuse open IP. BlackParrot is an open-source, Linux-capable, cache-coherent, RV64GC multicore. This project is to port BlackParrot to FuseSoC so that new hardware projects can leverage this host core than spending time dealing with setup environments, dependencies and versioning.

### Improving Query Language functionality and adding features to Sootty (L Lakshmanan)

Mentored by Ben Darnell and Jonathan Balkind

The main aim of this project is to add features that improve the functionality of Sootty, which is a CLI waveform viewer, that provide the user more flexibility and ease of use. The main features that this project plans to introduce are:

- Bitwise operator functionality
- Option to save and reload queries as and when required
- Reload a query with a few modifications
- Adding SoC protocol support
- Multiple trigger expressions

These features will give the user a lot more power in terms of creating visualisations according to their specifications, and also allow them to deal with multiple different parts of a circuit at the same time.

### Fault Silicon Validation and Open MPW Integration (Rameen Anwar)

Mentored by Mohamed Kassem, Mohamed Shalan, and Tim Edwards

The project focuses on adding design for testability (DFT) support to the Caravel chip, consequently exhibiting the need to integrate a complete open-source solution (Fault in our case) to the currently used RTL to GDSII flow for the Caravel chip, OpenLane. This adds additional steps such as scan-chain insertion, JTAG interface insertion, etc. to the flow. The Caravel chip has two main components, namely the management core and the user project area. Implementing DFT for these two components separately and then daisy chaining their scan chains to end up with the JTAG interface for the Caravel chip is the approach being used in this project. Uptill now, the tool Fault has been built and integrated into the Docker image for Openlane with relevant commands implemented in TCL scripts that can be used both interactively and in non-interactive mode for adding DFT support to any design being used in the OpenLane flow.

