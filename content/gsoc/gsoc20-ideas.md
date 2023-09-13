---
title: "Google Summer of Code 2020 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization in Google
Summer of Code 2020. That means, that we give small projects the
chance to participate in the program. Below you can find a list of
ideas that the projects had, but students are encouraged to propose
their own ideas.

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

*Mentors:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)


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


### WARP-V Many-Core in the Cloud

*Details:* In the past two GSoCs, Akos Hadnagy, Ahmed Salman, and Alaa Salman helped to mature three ground-breaking projects that have received a good deal of attention:

  1. [WARP-V](https://github.com/stevehoover/warp-v): a flexible TL-Verilog CPU core generator
  2. a library of [TL-Verilog "flow" components](https://github.com/stevehoover/tlv_flow_lib) (think STL for TL-Verilog)
  3. [1st CLaaS](https://github.com/stevehoover/1st-CLaaS): a framework for hardware acceleration of web/cloud applications using cloud FPGAs

This year, these projects come together. A basic implementation of WARP-V on cloud FPGAs is in place using 1st CLaaS that utilizes the flow library. This project will evolve this single-core implementation to various many-core implementations.

The remaining TL-Verilog code development is minimal and can be provided by the mentor. The main challenges will be:

  - debugging the design in simulation
  - using Xilinx FPGA tools to constrain the implementations to reduce synthesis run time
  - developing the FPGA many-core accelerator RISC-V (and/or other ISAs) assembly code
  - developing the front-end web application to interface with the FPGA many-core (if student is capable)

This project will no only produce many-core hardware accelerator PaaS's; it will also serve as a proof-point for TL-Verilog, WARP-V, 1st CLaaS, and the flow library and will help to mature them. It will help to introduce better design methodology and new compute models to the open-source silicon community and the industry.

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](steve.hoover@redwoodeda.com))

*Skill level:* Intermediate, Advanced

*Languages/Tools:* TL-Verilog, Vivado (logic synthesis and simulation debug), GTKWave, Makerchip.com, AWS F1, and optionally: JavaScript, HTML5, sockets/Web Sockets


### Evolving fractalvalley.net

If you are excited about FPGA acceleration, but prefer web development, you can showcase the potential of cloud FPGAs without touching them. The current web front-end for <http://fractalvalley.net> is a quick-and-dirty hack that grew. It's time for a re-write with a proper framework. The back-end utilizes a Python webserver and would benefit from a Node.js implementation of server-side functions like video capture and playback and 3-D VR capabilities that are not currently robust enough to deploy.

*Skill level:* Intermediate

*Languages/Tools:* JavaScript, HTML5, Angular/React, Node.js, database

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](steve.hoover@redwoodeda.com))


### Integration of WARP-V with RISC-V SoC

WARP-V provides the CPU core only. It does not include a memory subsystem, I/O, etc. This project will integrate WARP-V with an existing RISC-V SoC, such as Rocket (written in Chisel), Ariane+OpenPiton, or DRAC.

The corresponding RISC-V SoC tools would be used to simulate, debug, and characterize the design. The flexibility of WARP-V will enable an optimized implementation that matches the frequency of the surrounding logic.

*Skill level:* Intermediate/Advanced

*Languages/Tools:* Verilog, TL-Verilog, a RISC-V SoC platform

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](steve.hoover@redwoodeda.com)), (maybe) Jonathan Balkind, (maybe) Guillem Cabo


### TL-Verilog Timing Reports

This project is an opportunity to build infrastructure that will elevate open-source silicon practices. TL-Verilog improves the design process by providing high-level context for design details. This project will help designers to relate timing information from synthesis tools back to TL-Verilog's higher-level context (hierarchy, pipelines, and transactions).

You'll build scripts to map RTL signal names to their original TL-Verilog names. You'll apply this to timing reports from open source synthesis tools so timing information can be reported with respect to TL-Verilog source code.

*Skill level:* Intermediate

*Language/Tools:* QFlow, yosys, Perl/Python/other

*Mentors:* Steve Hoover and possibly Tim Edwards (to be confirmed)


### TL-Clash/TL-Chisel/TL-VHDL Definition

The TL-X specification defines “transaction-level” language extensions that can, in theory, be applied to any underlying hardware description language. Today there is only support for Verilog as TL-Verilog. Others, such as TL-Clash, TL-Chisel, and TL-VHDL could also be supported. The first step is to define them in more detail.

This project would provide a unique opportunity to write open source code that cannot be compiled :). This will help to define the support required in compilers for these language variants, and it will expose the benefits. While it would be possible to implement support in [TLV-Comp](https://github.com/ypyatnychko/tlv-comp), this step may be left as a future project.

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

### Design and Integration of (n)Migen IIR Fixpoint Filters into pyFDA

[Python Filter Design and Analysis Tool (pyFDA)](https://github.com/chipmuenk/pyfda) is a modular open source tool for designing and simulating FIR and IIR digital filters.

The recent integration of [migen](https://github.com/m-labs/migen) allows simulation of fixpoint filters and export of Verilog netlists that can be used e.g. in an FPGA design flow. Currently, only a direct form FIR filter topology is implemented
in migen as a proof of concept. Simulation and design of IIR fixpoint filters would be highly desirable as these filters require careful scaling and verification with fixpoint arithmetics.

The goal of this project is to implement more IIR fixpoint filters in [migen](https://github.com/m-labs/migen) or, preferrably, its successor [nMigen](https://github.com/m-labs/nmigen), and integrate them into pyFDA.

The student should first implement a basic IIR (direct form) filter in (n)Migen with a python testbench to become acquainted with (n)Migen. In the next step, this filter is integrated into pyFDA. Depending on the speed of progress, more advanced filters like cascaded IIR, LDI, state-variable ... filters and their testbenches can be implemented and integrated. Quality is more important than quantity, well documented and structured code is a main project objective.

*Skill level:* intermediate

*Language/Tools:* Python, some knowledge of fixpoint arithmetics and DSP and Verilog or VHDL. Basic knowledge of (n)migen would be great but can be acquired during the project.

*Mentors:*
[Christian Muenker](mailto:chipmuenk@gmail.com), [@chipmuenk on github](https://github.com/chipmuenk)
