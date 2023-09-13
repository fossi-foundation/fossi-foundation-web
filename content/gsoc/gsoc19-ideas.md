---
title: "Google Summer of Code 2019 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization in Google Summer of Code 2019. That means, that we give small projects the chance to participate in the program. Below you can find a list of ideas that the projects had, but students are encouraged to propose their own ideas.

<!--
We are happy to [announce](2017/03/02/gsoc) that we have been selected to participate in Google Summer of Code 2017!
-->
Whether you’re an aspiring student or mentor, feel free to contact us,
either through the private GSoC-specific mailing list [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org),
through the public [discussion mailing list](https://lists.librecores.org/listinfo/discussion),
or through the mentors listed for each project below.
We are also available on [Gitter in librecores/Lobby](https://gitter.im/librecores/Lobby).

Looking forward to meet you all!

* TOC
{:toc}



### Create your own LibreCores, or contribute to an existing one

*Details:* Our main goal is to grow the community around open source silicon
designs. LibreCores are IP cores, but they are free and open. While
there are many projects you can contribute too, you may have your own
great idea for a LibreCore. All projects start small, and we see this
is a great chance to bring forward new ideas and start building new
tiny bits and pieces that enable free and open source chips.

We are happy to mentor you with your own idea, but it is important
that it is re-usable and contains everything needed for simple and
flexible integration, like testbenches, the required software drivers
etc. So, it is important that you discuss a proposal intensively.

*Skill level:* All

*Language/Tool:* Verilog, VHDL, Chisel, TL-Verilog, ...

*Mentor:* We will find the mentor with you,
 [LibreCores GSoC team](mailto:gsoc@fossi-foundation.org)


### Extend LibreCores.org

[LibreCores](http://www.librecores.org) is a community web site with the goal of providing an overview of IP cores and the corresponding ecosystem. We strive for LibreCores to be *the* resource for free and open source IP: it should be easy to find, integrate, and contribute to the projects found there -- to make digital design projects as easy as writing software. For further information on our goals, see the [FOSDEM Presentation slides](https://fosdem.org/2016/schedule/event/digital_hardware_design/attachments/slides/1037/export/events/attachments/digital_hardware_design/slides/1037/fossi_fosdem.pdf) announcing LibreCores. The full site source code is available on [GitHub](https://github.com/librecores/librecores-web).

You can find a non-exhaustive [list of available tasks in our documentation](http://librecores-web.readthedocs.io/en/latest/contributing.html). Please talk to Philipp if you have other ideas, or didn't find an interesting project. We welcome your own ideas!

*Skill Level:* Intermediate

*Language/Tools:* PHP7 with the [Symfony Framework](http://symfony.com/), MySQL, HTML/JS

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)


### Continuous Integration for Hardware Projects on LibreCores CI

*Goal:* Setup verification and continuous integration flow for one of open-source digital hardware projects.

*Details:*
[LibreCores CI](https://www.librecores.org/static/librecores-ci) is a
under-development Continuous Integration service within
[LibreCores](http://librecores.org). In this project we offer students
to work with modern hardware verification tools, RTL codebase and
[Jenkins Pipeline](https://jenkins.io/solutions/pipeline/) in order to
setup efficient verification flows for one of the open-source hardware
project being hosted on LibreCores. The project includes improvements
of the HW project testability in RTL, development/improvement of
testing frameworks and a development of a new Pipeline Library for
automation in Jenkins.

Prerequisites:
* Basic knowledge of the hardware verification techniques
* Knowledge of one of RTL languages
* Knowledge of one of the scripting languages (preferably Python or Groovy)

*Skill Level:* Intermediate

*Language/Tools:* Verilog/VHDL/.../Python, Jenkins, Groovy

*Mentors:* [Oleg Nenashev](mailto:o.v.nenashev@gmail.com),
[Stefan Wallentowitz](mailto:stefan@wallentowitz.de)


### Open SoC Debug: Efficient Control-Flow Traces

Trace debugging is the method to observe the execution of a
system-on-chip. The [Open SoC Debug](http://www.opensocdebug.org) project
creates open source building blocks for a debug infrastructure, with a
strong focus on efficient trace debugging.

Control Flow tracing (or instruction tracing) is the process of observing a program execution on a processor, and creating a "trace" from these observations, which allows a tool to re-create the program flow as it happened on-chip.

To transmit traces efficiently from the chip to the host PC, trace compression must be applied. This compression reduces all non-essential parts of the trace, reducing it to (typically) only jump instructions where the target cannot be determined using the program binary.

The goal of this project is to (a) find a good trace compression algorithm for instruction traces, and (b) implement it in System Verilog (on the hardware side) and C (on the software side) for the Open SoC Debug system.

*Skill Level*: Intermediate

*Language/Tools:* SystemVerilog, C

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)

### Open SoC Debug: Trace Logging to Memory

*Details*: In the [Open SoC Debug](http://opensocdebug.org) we
currently transfer traces from the debug target to the host for
on-line visualization or offline processing. But low level traces may
be interesting even while the system-on-chip is in the field, similar
to system traces, e.g. from Linux. The idea is to write the traces to
a reserved space in the system memory and read them from the running
software.

Basically this idea involves two hardware tasks: A configuration
interface for trace logging and the interface between the debug
interconnect and the system memory. Ideally your proof-of-concept
includes a simple software. This setup can be optimized for example
with trace compression and circular buffering.

*Skill level*: Intermediate

*Language/Tools*: System Verilog

*Mentor:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)


### Open SoC Debug: Run-Control Debugging

*Details*: [Open SoC Debug](http://opensocdebug.org) is a free and open debug and trace system for embedded systems.
Our current developments mainly focused on the tracing part, leaving run-control debug for this GSoC project!
By run-control debug we mean the process of firing up GDB, setting breakpoints in a program, and stepping through the program.
In last year's GSoC we already added the [hardware modules necessary for run-control debug](http://opensocdebug.readthedocs.io/en/latest/02_spec/07_modules/cdm/index.html).
This year we'll focus on [finishing the software part](https://github.com/opensocdebug/osd-sw/pull/20), and improving it to interact seamlessly with GDB.

*Skill level*: Intermediate

*Language/Tools*: C

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)

### OpTiMSoC: Extend the Linux Port

*Details:* The
[Open Tiled Manycore System-on-Chip](https://www.optimsoc.org) is a
prototyping platform for massively parallel multicore
system-on-chip. The main runtime environments we employ so far are
baremetal and a very lean operating system ("compute node OS").

It has basic Linux support on a single compute tile, but doesn't have many drivers for OpTiMSoC-specific functionality so far.
One example would be a driver to send and receive messages over the Network-on-Chip (NoC).

The goal of this GSoC project is to extend the OpTiMSoC Linux port.
What extensions, you might ask? It's up to you!
How about enabling multi-core support? Or creating an extended device driver for our Network-on-Chip (NoC)? Or writing an accelerator interface to trigger computations in the compute grid of OpTiMSoC from software running on Linux? There's an endless stream of opportunities to choose from -- bring your own idea or get in touch with us to discuss ideas we have.

No matter which task you choose, you get unique insights into hardware (you can actually view the waveform of most signals in OpTiMSoC!) and Linux internals.

*Skill level:* Intermediate, Advanced

*Language/Tools*: Linux Kernel development (C), optional: FPGA synthesis flow

*Mentors:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de),
 [Philipp Wagner](mailto:mail@philipp-wagner.com),
 [Stafford Horne](mailto:shorne@gmail.com)


### Hardware Accelerated Web Applications

*Details:* The incorporation of FPGAs into the cloud makes it possible to combine the maturity of web and cloud infrastructure with the performance benefits of FPGA hardware acceleration. A web-based video game could provide live video chat where players are in character, with real-time voice and video processing in FPGAs. Or, maybe you'd like to quickly slap a web front-end on your graduate research project that uses FPGAs. The hardware infrastructure exists today to support this, but the software infrastructure is in it's infancy. In other words, there is HUGE opportunity to have impact in this space.

This project supports hardware acceleration of web applications by providing a communication channel between JavaScript, running in a web browser, and FPGA hardware, running on Amazon F1 FPGA instances or other FPGA hardware. [The project](https://github.com/alessandrocomodi/fpga-webserver) is off to a good start with a proof-of-concept implementation and a demo application hosted at [fractalvalley.net](http://fractalvalley.net).

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](steve.hoover@redwoodeda.com))

Within this effort there are several possible summer project:

#### Evolve the demo application into a generic framework

This project, in it's current form, implements the complete communication framework, but in a proof-of-concept form entangled with the demo application. This summer project will cleanly refactor the code into a generic framework separate from the demo application.

Several technologies are involved. An F1 instance is a cloud CPU (host machine) with attached FPGAs. The host acts as a web server implemented using Python and [Tornado](https://www.tornadoweb.org/en/stable/). Client JavaScript code communicates via REST or WebSockets with the server. The server relays the data stream to the attached FPGA where a custom hardware kernel processes the data. Output data is returned to the web client along a reverse path.

You're focus could be the hardware and/or software components of this communication. There may be an option of leveraging [Fletcher](https://github.com/johanpel/fletcher) for the host to FPGA kernel communication.

*Skill level:* Advanced

*Languages/Tools:* Amazon F1 infrastructure, C++, OpenCL, Python, JavaScript, HTML5, sockets/Web Sockets

#### Port to other FPGA platforms

Amazon F1 is accessible to everyone, but there are downsides to the platform as well. Provisioning is complicated, and although there is no up-front cost, the hardware can get expensive after a while. If you have access and experience with other FPGA hardware, let's give it a try.

*Skill level:* Advanced

*Languages/Tools:* FPGA expertise and access, C++, sockets.

#### Evolving fractalvalley.net

Fractals are endless fun. If you are excited about FPGA acceleration, but prefer front-end development, you can help the cause without touching the FPGA. The client code is a hack that grew. You can use the existing code as a point of reference for a re-write using a proper framework like Angular or React and code management with Node.js. Improve video capture and playback and incorporate a database of user-generated fractals. It's a well-sized fun summer project to play with various modern web technologies. Or, if you are a math geek, you can play with the fractal algorithms.

*Skill level:* Intermediate

*Languages/Tools:* JavaScript, HTML5, Angular/React, Node.js, OR C++, math, algorithms

#### Virtual Reality Fractals

There's a test feature enabling 3-D fractal navigation in a Google Cardboard VR viewer. It's pretty damn cool. There are many VR platforms that could be used to display FPGA-generated 3-D fractal navigations. You should be good with math and algorithms to be able to apply the Mandelbrot fractals to each platform.

*Skill level:* Intermediate

*Languages/Tools:* C++, VR platforms


### WARP-V RISC-V Core Generator

The WARP-V RISC-V core generator was developed in 2018, and was formally verified using open-source tools in last summer's GSoC.

WARP-V is the most-configurable, most-adaptable open-source RISC-V CPU core generator, taking advantage of advanced digital design features of TL-Verilog (see [makerchip.com](http://www.makerchip.com)). It can be configured as a low-power, slow-clock, single stage pipeline, a high-frequency seven-stage pipeline, or anywhere in between. You can even swap out the RISC-V ISA for a completely different ISA altogether.

As a participant in GSoC 2018, Akos Hadnagy formally verified all standard configurations of this design using open-source tools, in particular, Clifford Wolf's [riscv-formal](https://github.com/SymbioticEDA/riscv-formal). He subsequently presented his work at ORConf and VSD Open. There is plenty of information available from the [WARP-V repository](https://github.com/stevehoover/warp-v).

GSoC is your chance to be a part of this exciting effort which has received so much attention in so little time.

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](steve.hoover@redwoodeda.com))

Within this effort, several areas of focus are possible:

#### CPU Components in Transaction-Level Verilog

WARP-V microarchtectural options can be extended. You can implement CPU components like branch predictors, caches, etc., and add support for RISC-V ISA extensions to provide rich configurability. You will learn CPU microarchitecture and advanced design practices with TL-Verilog.

*Skill level:* Advanced

*Languages/Tools:* TL-Verilog, Makerchip IDE

#### Physical Implementation of the WARP-V CPU

At this point, little focus has been placed on the physical implementation of WARP-V. Early data looks comparable to other RISC-V implementations, but better characterization is needed. This project is for a student with access and experience with FPGAs to implement and optimize various configurations of WARP-V.

*Skill level:* Intermediate/Advanced

*Languages/Tools:* TL-Verilog, Makerchip IDE, FPGA

#### Integration of WARP-V, Ariane, and OpenPiton

WARP-V provides the CPU core only. It does not include a memory subsystem, I/O, etc. This project will integrate WARP-V with an existing RISC-V SoC, such as Ariane+OpenPiton.

*Skill level:* Intermediate/Advanced

*Languages/Tools:* Verilog, TL-Verilog

*Additional Mentor:* Jonathan Balkind

#### Implement MIPS ISA in WARP-V

The MIPS ISA is in the process of becoming open. Licensing details are not yet fully available, but assuming details come to light and the ISA is truly open, MIPS can be implemented in WARP-V. Steve Hoover will lead the initial implementation (which should take a week or two), and the student will work out corner cases, verify the implementation, and qualify it through channels currently taking shape in the new MIPS ecosystem.

*Skill level:* Intermediate

*Languages/Tools:* TL-Verilog


### Extend a Transaction-Level Verilog Component Library

Transaction-Level Verilog (TL-Verilog) is an emerging language extension to SystemVerilog that is introducing a number of game-changing capabilities. Among them is the ability to define flexible, reusable components--way more flexible than Verilog. For this project, you will extend [a library of compatible components](https://github.com/stevehoover/tlv_flow_lib) including FIFOs, queues, and arbiters that was developed as part of last year's GSoC by Ahmed Salman. This library has the potential to form the basis of a new era of hardware design. Ahmed presented his work at VSDOpen and published this [paper](https://arxiv.org/pdf/1811.01780.pdf). In addition to developing components, you will demonstrate the ease of composing these components into sophisticated transaction flows and quickly implementing what are currently considered to be complex designs, such as a complete on-chip network!

*Skill level:* Advanced

*Language/Tools:* TL-Verilog, Makerchip IDE


### TL-Verilog Timing Reports

TL-Verilog improves the design process by providing high-level context for design details. There are benefits to relating information from down-stream (RTL and below) tools, back to TL-Verilog's higher-level context (hierarchy, pipelines, and transactions).

You'll build scripts to map RTL signal names to their original TL-Verilog names. You'll apply this to timing reports from open source synthesis tools so timing information can be reported with respect to TL-Verilog source code. You're contributions will help to elevate open-source design to a level above current industry practice.

*Skill level:* Intermediate

*Language/Tools:* QFlow, yosys, Perl/Python/other

*Additional Mentors:* Tim Edwards (to be confirmed--was interested last year)


### TL-Clash/TL-Chisel/TL-VHDL Definition

The TL-X specification defines “transaction-level” language extensions that can, in theory, be applied to any underlying hardware description language. Today there is only support for Verilog as TL-Verilog. Others, such as TL-Clash, TL-Chisel, and TL-VHDL could also be supported. The first step is to define them in more detail.

This project would provide a unique opportunity to write open source code that cannot be compiled! This will help to define the support required in compilers for these language variants, and it will expose the benefits. While it would be possible to implement support in [TLV-Comp](https://github.com/ypyatnychko/tlv-comp), this step may be left as a future project.

There is particular interest in TL-Clash, as it would combine the best of TL-X and Clash. TL-X is strong with sequential logic through its timing abstract modeling, and Clash is strong with combinational logic because of its advanced type system.

This is an advanced project requiring skills with hardware modeling and hardware and software language theory.

*Skill level:* Advanced

*Language/Tools:* TL-Verilog, Clash/Haskell, Chisel/Scala, VHDL

*Mentors:* Steve Hoover, Jan Kuper(?)


### LLVM Code Generation for RISC-V Open Source GPU

The RISC-V ISA will transform the world. Recently, U. Washington taped out an open source RISC-V manycore processor with 496 cores that hits 500 Billion RISC-V instructions per second in one chip. We have silicon up and running in our lab and are developing a second generation design based on results from the first generation, with a target of improving programmability. Our goal is to make this the defacto open source GPGPU design. (See bjump.org/manycore.) You will work to help design the CUDA-light programming environment using LLVM and make recommends for future versions of the architecture. For the second version, the design is hosted on Amazon F1, which allows us to simulate having the real chip even as we develop new features.

*Skills:* Knowledgeable of LLVM

*Mentors:* Michael Taylor

### Optimization of the BlackParrot Linux-Capable RISC-V Multicore

The RISC-V ISA will transform the world. U. Washington has received funding from DARPA to develop the world's first truly open RISC-V Linux-capable multicore implementation. In contrast to prior projects, our SystemVerilog-based design is truly open and we encourage external contributors, and ultimately intend to hand the design off to the world to maintain.  By this summer, we will have the "genesis release" of the core ready, but the focus is on functionality rather than extreme performance or energy efficiency. We are looking for folks to help optimize parts of the design and take it to the next level.

*Skills:* Knowledgeable of SystemVerilog and Computer Architecture.

*Mentors:* Michael Taylor

### BaseJump STL

We are prototyping new features for the SystemVerilog language, including the equivalent of the C++ Standard Template Library, which we intend to deploy into the SystemVerilog standard.

Our initial results show that HW productivity is dramatically improved with this library. An initial version of this is up and running, and we are looking for folks with an outside perspective to take it to the next level.

*Skills:* Hardware Design Experience, Interest in HDL (hardware description language) design

*Language/Tools:* SystemVerilog, Computer Architecture

*Mentors:* Michael Taylor

### PRGA + FASM: Open-source Bitgen for FPGAs
[Princeton Reconfigurable Gate Array (PRGA)](https://prga.readthedocs.io/en/latest/) is an open-source framework for building and using custom FPGAs. It consists of a Python front-end API (the PRGA Builder) for building custom FPGAs, and a CAD flow (the PRGA Tool Chain) for implementing target RTL designs on those custom FPGAs. The PRGA Tool Chain uses [Yosys](http://www.clifford.at/yosys/) for synthesis, [VPR](https://verilogtorouting.org/) for place & route, and the PRGA Bitgen for bitstream generation. The goal of this project is to add support for [FPGA Assembly (FASM)](https://github.com/SymbiFlow/fasm), a generic bitstream file format and part of the [SymbiFlow](https://symbiflow.github.io/) project, to PRGA. Specifically:

1. Enable the PRGA Builder to output a FASM schema which describes all of the available logic resources in the FPGA. The PRGA Builder supports different types of configuration memories, and the FASM schema should be independent of that.
2. Replace the inputs to the PRGA Bitgen, namely *.blif (synthesis result), *.net (packing result), *.place (placing result) and *.route (routing result), with one FASM file.

*Skill level:* Intermediate

*Language/Tools:* Python, C++, basic knowledge of FPGA CAD tools

*Mentors:* Ang Li

### Architectural Improvements to OpenPiton+Ariane
[OpenPiton+Ariane](https://openpiton-blog.princeton.edu/2018/11/announcing-openpiton-with-ariane/) is a permissively-licensed RISC-V manycore processor, built as a collaboration between the [PULP Platform](https://www.pulp-platform.org/) from ETH Zürich and the [OpenPiton Platform](http://www.openpiton.org/) from Princeton University. We would like to co-optimise OpenPiton and Ariane in their combined platform, to improve performance of the processor both in FPGA emulation systems and for eventual silicon chips. Possible improvements include: adding a global branch predictor, introducing a multi-level TLB, supporting multiple outstanding memory transactions in the P-Mesh memory system, and widening the P-Mesh cache interface. We are also open to other projects aimed at improving the performance of aspects of either Ariane or OpenPiton.

*Skill level:* Intermediate

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* Jonathan Balkind

### Enhancing JuxtaPiton with X86 Support
[JuxtaPiton](https://openpiton-blog.princeton.edu/2018/11/juxtapiton-taking-openpiton-heterogeneous-with-risc-v/) is the world's first open-source, general-purpose, heterogeneous-ISA processor. It is built on [OpenPiton](http://www.openpiton.org/) and is designed to provide a platform for answering questions about heterogeneous-ISA systems. JuxtaPiton supports both the [OpenSPARC](https://www.oracle.com/technetwork/systems/opensparc/index.html) T1 core and the [PicoRV32](https://github.com/cliffordwolf/picorv32) RISC-V core in a single system, but needs support for more ISAs to enable systems-level research. This project would entail integrating the open-source [ao486](https://github.com/alfikpl/ao486) core, which implements the 486 version of the x86 instruction set, into JuxtaPiton. This would enable running standard x86 Linux or other operating systems and start to untangle the unique issues that come with building a heterogeneous-ISA system.

*Skill level:* Intermediate

*Language/Tools:* Verilog, x86 assembly

*Mentor:* Jonathan Balkind

### Integrating the AnyCore Processor into OpenPiton
[AnyCore](https://people.engr.ncsu.edu/ericro/research/anycore.htm) is an advanced superscalar processor developed at NC State University, designed to be highly configurable across parameters like issue width and pipeline depth. [OpenPiton](http://www.openpiton.org/) is a research platform for designing advanced chips from 1 core to 500 million cores, with a focus on providing a highly scalable cache-coherent memory system. This project would entail connecting the high performance AnyCore processor with OpenPiton's scalable P-Mesh memory system to build a completely new manycore processor, which runs the RISC-V ISA. The integration would involve writing an interface from AnyCore to P-Mesh, enhancing P-Mesh for higher performance, and implementing virtual memory in AnyCore.

*Skill level:* Intermediate/Advanced

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* Jonathan Balkind

### 1000-core Behavioural Simulation of a Tiled Manycore
The [OpenPiton](http://www.openpiton.org/) platform is designed to scale from 1 core to 500 million cores, but we must rely on slow behavioural simulation infrastructure to validate very large-scale designs. Existing verilog simulators don't scale well with such large designs, but tiled manycore processors which rely on networks-on-chip (NoCs) can use those NoCs to partition the simulation. This project would involve implementing a verilog simulation infrastructure (using Verilator) which is partitioned into multiple simulation instances which communicate using OpenMPI, to enable verilog simulation of a 1000-core processor.

*Skill level:* Intermediate

*Language/Tools:* Verilog, C++, OpenMPI

*Mentor:* Jonathan Balkind

### VHDL front-end  for Yosys

Yosys is a logic synthesis tool used is several open source ASIC implementation flows. Currently modern VHDL support is only available through a proprietary plugin. This work can likely build on earlier development work in this regard. First part of the project consists of investigating the current state and determine how to implement/complete the VHDL front-end. Second part is then execution of this plan.

*Skill level:* Intermediate

*Language/Tools:* VHDL, C++, Yosys

*Mentor:* [Staf Verhaegen](mailto:staf@fibraservi.eu)

### Continuous Integration for OpenRISC mor1kx

The [OpenRISC](http://openrisc.io/) project dates back to 2000 and defines an open source RISC architecture.  The current implementation of the architecture [mor1kx](https://github.com/openrisc/mor1kx) has a constantly evolving code base which is sometimes found to have bugs.  This project would be to extend the continuous integration (CI) system to test changes to mor1kx to ensure there are no regressions.  The CI should verify the core by running [or1k-tests](https://github.com/openrisc/or1k-tests), check that debugging features work with OpenOCD/GDB and monitor resource usages by running yosys synthesis.  The tests should also run with different options enabled for the codebase, i.e. caches enabled/disabled, load store buffers, pipelines CAPPUCCINO, MAROCCHINO, ESPRESSO.

*Skill level:* Beginner

*Language/Tools:* Verilog, Shell, Travis CI

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### OpenRISC formal

The [OpenRISC](http://openrisc.io/) project dates back to 2000 and defines an open source RISC architecture.  With the recent developments with [Yosys formal](http://www.clifford.at/papers/2016/yosys-synth-formal/) it is now possible for us to provide formal verification for the OpenRISC cores like [mor1kx](https://github.com/openrisc/mor1kx).  This project will be to start to formally verify the subsystems of the [mor1kx](https://github.com/openrisc/mor1kx) OpenRISC implementation.  This will help generate interest from companies that know of OpenRISC but haven't chosen it due to unknowns about stability.

*Skill level:* Intermediate

*Language/Tools:* Verilog, OpenRISC, yosys

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### SystemVerilog Language Processing Framework
SystemVerilog is a well-established language in the design and verification space. The ultimate goal of this project is to have a
SystemVerilog language-processing framework that can be used from C++, Java, and Python (three language bindings supported by ANTLR4).
This framework should support parsing, linking (connecting references to declarations), and semantic checks. This framework could be
used by tools (eg synthesis, lint, documentation, etc) that need to extract information from SystemVerilog sources.

The scope for this project, with respect to GSoC 2019, is open for discussion. Perhaps we focus on getting a pre-processor
in place. Perhaps we focus on getting pre-processing and an abstract syntax tree (AST) created.

*Skill level:* Intermediate
*Language/Tools:* ANTLR4, Java/C++/Python, SystemVerilog
*Mentor:* [Matthew Ballance](mailto:matt.ballance@gmail.com)
