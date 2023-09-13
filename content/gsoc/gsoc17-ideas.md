---
title: "Google Summer of Code 2017 - Ideas for Projects"
navigation: false
---

We are happy to [announce](2017/03/02/gsoc) that we have been selected to participate in Google Summer of Code 2017!

Whether you’re an aspiring student or mentor, feel free to contact us,
either through the private GSoC-specific mailing list [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org),
through the public [discussion mailing list](https://lists.librecores.org/listinfo/discussion),
or through the mentors listed for each project below.
We are also available at #librecores on freenode if you’re an IRC user.

Looking forward to meet you all!

### Ideas Overview

 * [Your LibreCore](#your-librecore) (Verilog, VHDL, Chisel)
 * [GPIO Switchbox](#gpio-switchbox) (Verilog)
 * [Museum on FPGA](#first-generation-museum-on-fpga) (Verilog, VHDL)
 * [FuseSoC Generators](#fusesoc-generators) (Python)
 * [FuseSoC Provider for LibreCores API](#fusesoc-provider-for-librecores-api) (Python)
 * [Open Source Allure Test Report Adapter for UVM](#open-source-allure-test-report-adapter-for-uvm)
   (SystemVerilog)
 * [Constrained randomised testing with coverage tracking in Cocotb](#constrained-randomised-testing-with-coverage-tracking-in-cocotb) (Python)
 * [Open Source Mixed-Language HDL Simulation](#open-source-mixed-language-hdl-simulation) (C++)
 * [Open Source HDL Micro-Benchmark Suite](#open-source-hdl-micro-benchmark-suite) (Verilog, Python)
 * [Contributions to Yosys Ecosystem](#contributions-to-yosys-ecosystem)
 * [Firrtlator Extensions](#firrtlator-extension) (C++)
 * [Extend LibreCores.org](#extend-librecoresorg) (PHP, Symfony, MySQL, HTML, Javascript)
 * [Continuous Integration for Hardware Projects on LibreCores CI](#continuous-integration-for-hardware-projects-on-librecores-ci) (HDL, Jenkins)
 * [EDA Tool plugin for Jenkins and LibreCores CI](#eda-tool-plugin-for-jenkins-and-librecores-ci) (Jenkins/Java)
 * [OpenRISC or RISC-V Port of the ROMCC (ROM C Compiler)](#openrisc-or-riscv-port-of-the-romcc-rom-c-compiler) (C)
 * [OpenRISC GCC Port](#openrisc-gcc-port) (C)
 * [Reference Implementation for a Leakage Aware Compiler Optimization](#reference-implementation-for-a-leakage-aware-compiler-optimization) (Verilog, C/C++)
 * [GNU Superoptimizer 2.0: Reference Implementation for the AAP](#gnu-superoptimizer-20-reference-implementation-for-the-aap) (C/C++, AAP Assembler)
 * [An Altruistic Processor (AAP): Reference Implementation](#an-altruistic-processor-aap-reference-implementation) (Verilog, FPGA)
 * [A SystemVerilog Preprocessor](#a-systemverilog-preprocessor) (Java/C++)
 * [Open SoC Debug: Nexus Trace Format](#open-soc-debug-nexus-trace-format) (SystemVerilog)
 * [Open SoC Debug: Trace Visualization and Configuration](#open-soc-debug-trace-visualization-and-configuration)
   (C++/Java/JS)
 * [Open SoC Debug: Trace Logging to Memory](#open-soc-debug-trace-logging-to-memory) (SystemVerilog)
 * [LimeSDR: Integrate RISC-V Core](#limesdr-integrate-risc-v-core) (FPGA, HDL)
 * [LimeSDR: Switch to a FuseSoC-based Development Flow](#limesdr-switch-to-a-fusesoc-based-development-flow) (FPGA)
 * [OpTiMSoC: Linux Port](#optimsoc-linux-port) (C)
 * [SystemC generator plugin for Kactus2](#systemc-generator-plugin-for-kactus2) (C++, SystemC)
 * [3D browser for IP-XACT library for Kactus2](#3d-browser-for-ip-xact-library-for-kactus2) (C++, UI)
 * [RISC-V DSP library on the Pulpino platform](#risc-v-dsp-library-on-the-pulpino-platform) (C, C++)
 * [Adding support for Pulpino platform on ARM mbed IoT Device Platform](#adding-support-for-pulpino-platform-on-arm-mbed-iot-device-platform) (C, C++, Python)
### Your LibreCore

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

*Language/Tool:* Verilog, VHDL, Chisel, ...

*Mentor:* We will find the mentor with you,
 [LibreCores GSoC team](mailto:gsoc@fossi-foundation.org)

### GPIO Switchbox

*Details:* FPGA boards are equipped with manyfold IO interfaces. Most
of those IO interfaces are general purpose IO (GPIO) that are
connected to standardized headers. One example are
[PMOD](http://store.digilentinc.com/pmod-modules/) connectors or the
[Arduino](https://www.arduino.cc/) shield connector.

If you build a system-on-chip nowadays the IO functions, such as GPIO,
UART or SPI, are hard-wired to pins on those headers. Connecting for
example other PMODs required re-synthesizing the design. I have
started [PMOD switchbox](https://github.com/wallento/pmod_switchbox)
to allow the programmer to dynamically configure the IO functions at
runtime. The goal is to generalize this approach and build an
interesting prototype.

*Skill level:* Beginner, Intermediate

*Language/Tool:* Verilog

*Mentor:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

### First-Generation Museum on FPGA

*Details:* The first computers were cabinet sized, vacuum tube-powered
and their computational power was very limited compared to what we
know today. Not only as fun projects, it is an interesting excercise
to implement those masterpieces on a single chip today. It helps
students and hobbyists to understand the inner working of computers
and learn about programming principles.

The goal of this project is to replicate one of those historic
computers, such as the
[EDSAC](https://en.wikipedia.org/wiki/Electronic_delay_storage_automatic_calculator),
[ENIAC](https://en.wikipedia.org/wiki/ENIAC),
[SSEM](https://en.wikipedia.org/wiki/Manchester_Small-Scale_Experimental_Machine)
in a hardware description language and port them to an FPGA
demonstrator.

Beside getting the basic understanding of the machine, an important
task is to map the (ancient) I/O devices to a modern demonstrator
setup.

*Skill level:* Beginner, Intermediate

*Language/Tool:* Verilog, VHDL, (Yosys) FPGA synthesis flow

*Mentor:* [Andrew Back](mailto:andrew@abopen.com), [Jeremy Bennett](mailto:jeremy.bennett@embecosm.com)

### FuseSoC Generators

*Goal:* Create a way to run external tools that generates files
on-the-fly in a FuseSoC workflow

*Details:* When running a simulation or a synthesis flow it is often
desirable to generate some files on-the-fly. This can be for
generating RTL files from vendor-specific IP core descriptions,
IP-XACT files or create an ELF file from C sources.

While FuseSoC already has support for calling external scripts at
different parts of the toolflow, and many EDA tools have built in
support for TCL scripting, it lacks a deeper integration into FuseSoC
that is needed to efficiently perform some of these tasks.

The task includes both support for allowing cores to register
themselves as generators as well as support for other cores to use
them.

Examples of tasks that could make good use of generators
* Xilinx CoreGen (replaces coregen provider)
* Altera Qsys
* Generate Wishbone interconnects (by running `wb_intercon_gen` in https://github.com/olofk/wb_intercon
* Create verilog from Chisel/Migen/IP-Xact descriptions... etc

*Skill level:* *Intermediate*

*Language/Tool:* Python, basic knowledge of EDA tools

*Mentor:* [Olof Kindgren](mailto:olof.kindgren@gmail.com)

### FuseSoC Provider for LibreCores API

*Details:* Currently, [FuseSoC](http://github.com/olofk/fusesoc)
fetches the core description files from local copies of
repositories. The goal of this project is to fetch the core
descriptions from the LibreCores website instead.

In a first step, you must first coordinate with our LibreCores team to
define the additional requirements for the API. Then FuseSoC should be
extended to provide core files from other sources and then implement
the (recursive) fetching of core files.

*Skill Level:* Intermediate

*Language/Tool:* Python

*Mentors:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de),
 [Olof Kindgren](mailto:olof.kindgren@gmail.com)

### Open Source Allure Test Report Adapter for UVM

*Goal:* The goal of this project is to create an
[Allure](http://allure.qatools.ru/) Test
[Report Adapter](https://github.com/allure-framework/allure1/wiki/Creating-Allure-Adapter)
that extends the UVM report server. Allure test reports can be
consumed by automation tools such as Jenkins.

*Details:* The
[Universal Verification Methodology (UVM)](https://github.com/accellera/uvm)
is a standardized methodology for verifying integrated circuit
designs. Integrated Circuit Verification is the most time consuming
activity in hardware development. The UVM standard is used by several
ASIC and FPGA teams to create complex verification environment that
ensure designs are thoroughly verified in simulation before being
released. A key aspect of verification is the ability to automatically
process millions of test reports, but the native test reporting
capabilities of UVM are limited and do not readily integrate with
existing automation tools.

*Skill level:* Intermediate

*Language/Tool:* SystemVerilog, Simulator

*Mentor:* [Martin d'Anjou](mailto:martin.danjou14@gmail.com)

### Constrained randomised testing with coverage tracking in Cocotb

*Goal:* Extend the [Cocotb](http://potential.ventures/cocotb/)
co-simulation library to support constrained randomised testing
(e.g. via Google [or-tools](https://code.google.com/p/or-tools/)) and
to track achieved coverage of the tested HDL.

*Details:* Cocotb is a Python framework for testing VHDL and
 [System]Verilog hardware designs. Although various open source
 simulators are available, none of them provide the advanced
 verification features of expensive proprietary simulators. This
 project will implement constrained randomisation and functional
 coverage collection in Cocotb, giving open source projects these
 capabilities.

Constrained Randomisation is a similar concept to fuzz testing;
generating random stimulus transactions according to certain
constraints in order to exercise a hardware design. To understand how
well the randomly generated inputs are testing design the we also need
to instrument the code to track metrics on which scenarios have been
exercised (known as functional coverage).

The goal of this project is to provide a convenient interface to an
existing constraint solver from Cocotb and create and manage a
database of functional coverage points. To facilitate processing of
the coverage data we’ll need to export to various formats for
consumption by other tools. We can also integrate coverage information
with existing software development services such as coveralls.io.

By undertaking this project you will learn about latest ASIC/FPGA
verification practices and the interaction between hardware and
software development

*Skill Level:* Intermediate

*Language/Tools:* Python

*Mentor:* [Chris Higgs](mailto:chris.higgs@potentialventures.com)

### Open Source Mixed-Language HDL Simulation

*Details:* While there are good Free and Open Source VHDL and Verilog
simulators, there is currently no project which allows the simulation
of mixed-language HDL designs with a reasonable coverage of the VHDL
*and* Verilog languages and with good performance. The project will
consist in finding a good way to capitalize on existing efforts
([GHDL](http://ghdl.free.fr/),
[Icarus Verilog](http://iverilog.icarus.com/),
[Verilator](http://verilator.org/), etc.) to come up with a solution
and implementing a proof-of-concept system that allows the simulation
of a simple mixed-language design.

*Skill Level:* Intermediate, Advanced

*Language/Tool:* C++, Flex/Bison, Understand the tool flow

*Mentor:* [Tristan Gingold](mailto:tgingold@free.fr),
 [Olof Kindgren](mailto:olof.kindgren@gmail.com)

### Open Source HDL Micro-Benchmark Suite

*Details:* The open source EDA tool ecosystem is growing
significantly. For example digital synthesis and formal verification
tools are reaching a state of professional performance. To compare
such tools to each other and improve the results of the tools,
standardized benchmark suites are commonly used, for example
[IWLS2005](http://iwls.org/iwls2005/benchmarks.html).

Such benchmarks are usually rather complex designs. The idea is hence
to collect benchnmarks and to generate micro-benchmarks from basic
functions automatically. Some example work has started
[here](https://github.com/cliffordwolf/yosys-benchmarks).

*Skill Level:* Intermediate

*Language/Tool:* Verilog, Python

*Mentor:* [FOSSi GSoC team](mailto:gsoc@fossi-foundation.org)

### Contributions to Yosys Ecosystem

[YoSys](http://www.clifford.at/yosys/) is a framework for Verilog RTL
synthesis. The following list is incomplete and is meant to inspire
student proposals. Do not simply pick one of the projects on this
list! We are interested in genuinely original student
proposals. Please contact the
[FOSSi GSoC team](mailto:gsoc@fossi-foundation.org) early in the
process to discuss your ideas.

*Ideas regarding [Project IceStorm](http://www.clifford.at/icestorm)
 (the FOSS iCE40 FPGA flow)*

* Improvements in [Arachne-pnr](https://github.com/cseed/arachne-pnr)
  place & route tool, such as
  * Analytical (e.g. quadratic wirelength) placement
  * Support for LUT cascade feature
  * Support for BRAM cascade feature
  * Improved inference of SB_IO cells
  * Timing driven place and route
  * Speedups (OpenCL?)
* Alternative iCE40 place and route flow (e.g. using VPR/VTR)
* Additional support for more iCE40 devices (e.g. UltraLite)
* In-hardware validation flow for chip databases

*Ideas regarding Yosys*

* Additional front- and back-ends
* New architectures (e.g. additional FPGA families)
* New non-synthesis flows (verification, etc.)
* New yosys commands and other features

*Ideas regarding [YosysJS](http://www.clifford.at/yosys/yosysjs.html)*

* Interactive schematic viewer running in the web browser
* Puzzle games and other web-based Verilog training tools
* Port of Icarus Verilog to JavaScript (using EMCC)

*Skill Level:* Intermediate/Advanced

*Mentor:* [FOSSi GSoC team](mailto:gsoc@fossi-foundation.org)

### Firrtlator Extensions

*Details:*
[firrtlator](https://github.com/SiliconSemantics/firrtlator) is a C++
library and tool to work on the
[Flexible Intermediate Representation for RTL (FIRRTL)](https://github.com/ucb-bar/firrtl). The
goal is to have a common library to interact with FIRRTL files, to
integrate it with other tools, and to elaborate and optimize on the
IR.

The project is at the beginning and I am open to all ideas around
it. Here are some suggetions:

* Integration with [Verilator](http://verilator.org)
* Integration with the [YoSys](http://www.clifford.at/yosys/) RTL-IR
* Automatic injection of debug probes
* Injection of logic to improve fault tolerance

*Skill Level:* Intermediate/Advanced

*Mentor:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

### Extend LibreCores.org

[LibreCores](http://www.librecores.org) is a community web site with the goal of providing an overview of IP cores and the corresponding ecosystem, similar to the now abandoned OpenCores.org site. For further information on our goals, see the [FOSDEM Presentation slides](https://fosdem.org/2016/schedule/event/digital_hardware_design/attachments/slides/1037/export/events/attachments/digital_hardware_design/slides/1037/fossi_fosdem.pdf) announcing LibreCores. The full site source code is available on [GitHub](https://github.com/librecores/librecores-web). The issues also contain some plans and tasks to be taken on.

Please talk to Philpp for a full description of available tasks and a discussion what can/should be done, also based on your existing experience.

*Skill Level:* Intermediate

*Language/Tools:* PHP with the Symfony Framework, MySQL, HTML/JS

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

### EDA Tool plugin for Jenkins and LibreCores CI

*Goal:* Create a new Jenkins plugin for an Electronic Design
Automation (EDA). This plugin is expected to be integrated with
Jenkins Pipeline

*Details:* In LibreCores we are working on setting up the
Jenkins-based continuous integration system for open-source digital
hardware projects (see LibreCores CI). We would be interested to
improve the integration of Jenkins with EDA tools being widely used in
open-source digital hardware projects. It could be either an
open-source EDA tool (e.g. Icarus Verilog, Cocotb, Verilator) or a
widely-used proprietary one with a free use option (e.g. Quartus
Prime, ModelSim).

Prerequisites:
* Basic knowledge of the hardware engineering area
* Basic knowledge of Java programming language
* In the case of FPGA flows it would be useful to have a prototyping board as well.

*Skill Level:* Intermediate

*Language/Tool:* Jenkins, one of EDA tools, Java

*Mentors:* [Oleg Nenashev](mailto:o.v.nenashev@gmail.com),
 [Martin d'Anjou](mailto:martin.danjou14@gmail.com)

### OpenRISC or RISC-V Port of the ROMCC (ROM C Compiler)

ROMCC, created by Eric Biederman, generates machine code from C that
uses only CPU registers—meaning machine code that needs no stack and,
therefore, no initialized RAM. This compiler is used in the
[Coreboot](https://www.coreboot.org/) project.

*Skill Level*: Beginner/Intermediate

*Language/Tools:* C, Assembly

*Mentor:* tbd, [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

### OpenRISC GCC Port

There is a GCC port for OpenRISC, but it lacks the potential to become
a part of the official upstream GCC due to copyright assignments. We
hence plan a clean room rewrite of the very basic infrastructure,
based on other clean room implementations. You should have an
understanding of compilers and be able to work in a very structured
way.

*Skill Level*: Advanced

*Language/Tools:* C, Compilers

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### Reference Implementation for a Leakage Aware Compiler Optimization

The
[Leakage Aware Design Automation Project (LADA)](http://www.bristol.ac.uk/news/2015/october/leaky-device.html)
is led by Dr Elisabeth Oswald at Bristol University and funded over
four years by the UK EPSRC.

Embecosm is industrial partner to this project, charged with applying
the research to the next generations of free and open source compilers,
such as GCC and LLVM. Many of these innovations involve hardware changes
that the compiler can leverage (e.g. checksumming code on the fly).

In this project you will work to add appropriate hardware functionality
to your favorite open hardware processor design (AAP, OpenRISC, RISC-V
etc), and then extend either GCC or LLVM to support that hardware
functionality. You will need both Verilog and Compiler skills, as well
as some grasp of side-channel attacks in cryptography.

*Skill Level:* Advanced

*Language/Tools:* Verilog, C/C++

Mentors: [Jeremy Bennett, Simon Cook](mailto:jeremy.bennett@embecosm.com)

### GNU Superoptimizer 2.0: Reference Implementation for the AAP

James Pallister presented the design and initial implementation for GSO
2.0 and GNU Tools Cauldron in 2015:
[Youtube](https://www.youtube.com/watch?v=DC2nhBkgmP0)

In this GSoC project you will implement GSO 2.0 for the AAP instruction
set and demonstrate its effectiveness over code generate using LLVM for
AAP. An advanced student would implement stochastic superoptimization to
allow longer code sequences to be tackled.

*Skill Level:* Intermediate/Advanced

*Language/Tools:* C/C++. AAP assembler

*Mentors:* [Jeremy Bennett, Ed Jones](mailto:jeremy.bennett@embecosm.com)

### An Altruistic Processor (AAP): Reference Implementation

AAP is the compiler writer's architecture from hell. It was created to
advance compiler support for common deeply embedded architectures, and
includes many features that cause great difficulty when compiling.

In order to be credible, we must show that AAP can be implemented on
real silicon. A student implementation was created by Dan Gorringe in
2015 and presented at ORConf 2015 at CERN:
[Youtube](https://www.youtube.com/watch?v=HKWS85b6PAU)

This GSOC project is to provide a full implementation, complete with
debug interface to run on an appropriate small FPGA board such as a
DE0-Nano.

*Skill Level:* Advanced

*Language/Tools:* Verilog, Yosys FPGA synthesis tool flow

*Mentors:* [Jeremy Bennett, Simon Cook, Andrew Burgess](mailto:jeremy.bennett@embecosm.com)

### A SystemVerilog Preprocessor

The SystemVerilog hardware description language has an extensive
set of preprocessor features, and [antlr](http://antlr.org) has
established itself as one of the best tools for building lexers
and parsers. However it is not possible to parse SystemVerilog
with **antlr** (or any other toolkit) unless the preprocessor
directives have been processed. The preprocessor directives
include among other things, parameterized macros, token pasting,
conditionals, includes, etc. The goal of this project is to write
this preprocessor. This will enable the creation, in the future,
of [antlr](http://antlr.org) based SystemVerilog tools
(code analyzers, compilers, simulators, synthesizers, etc).

*Skill Level:* Advanced

*Language/Tools:* [Antlr](http://antlr.org), Java or C++, [SystemVerilog](https://standards.ieee.org/getieee/1800/download/1800-2012.pdf)

*Mentors:* [Martin d'Anjou](mailto:martin.danjou14@gmail.com)

### Open SoC Debug: Nexus Trace Format

Trace debugging is the method to observe the execution of a
system-on-chip. The [Open SoC Debug](http://opensocdebug.org) project
creates open source building blocks for a debug infrastructure, with a
strong focus on efficient trace debugging.

One of the main challenges is the transfer of trace events to the
host. On the one for efficiency and on the other hand for
compatibility.

The goal of this project is to adopt the Open SoC Debug infrastructure
to packatize traces in the popular
[Nexus (IEEE 5001)](http://nexus5001.org/) format.

*Skill Level*: Intermediate

*Language/Tools:* SystemVerilog

*Mentor:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

### Open SoC Debug: Trace Visualization and Configuration

*Details:* The [Open SoC Debug](http://opensocdebug.org) project
creates open source building blocks for a debug infrastructure, with a
strong focus on efficient trace debugging. Currently we focus on the
target (hardware) side of the infrastructure, but want to improve the
host software, especially visualization of traces and configuration of
the debug hardware.

In this project you should not reinvent the wheel, but build around
existing infrastructure. For example the
[Open Trace Format 2](https://silc.zih.tu-dresden.de/otf2-current/html/)
and the
[SCORE-P infrastructure](http://www.vi-hps.org/projects/score-p/) are
good starting points. For the visualization and interface building we
suggest having a look at state of the visualization tools like
[ravel](https://github.com/LLNL/ravel) to integrate with or build a
new framework for example on [electron](http://electron.atom.io/).

*Skill level*: Beginner, Intermediate

*Language/Tools*: C++/Java/JS

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com),
 [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

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

### LimeSDR: Integrate RISC-V Core

*Details:* [LimeSDR](https://myriadrf.org/projects/limesdr/) is a
flexible software-defined platform, that integrates an FPGA and a Lime
Microsystems LMS7002M field-programmable RF transceiver, that is 2x2
MIMO and can be tuned anywhere from 100KHz to 3.8GHz. The FPGA is
presently used to take care of things such as interfacing, digital
down-conversion and tuning, and sample time-stamping.

Currently the Altera NIOS-II processor is used and in this project the
goal is to replace it with an open source softcore implementing the
RISC-V instruction set.

It consists of three parts:

* Identify a suitable RISC-V processor core
* Integrate the RISC-V processor core
* Proof-of-concept of the updated software environment

*Skill level*: Intermediate

*Language/Tools*: HDL, FPGA synthesis

*Mentor:* [Andrew Back](mailto:andrew@abopen.com)

### LimeSDR: Switch to a FuseSoC-based Development Flow

*Details:* The [LimeSDR-USB](https://myriadrf.org/projects/limesdr/)
platform integrates an FPGA that contains a System-on-Chip and DSP. The
System-on-Chip employs a softcore for interfacing with the programming
interface of RF transceiver, while hardware blocks take care of
streaming, DSP and sample time-stamping.

With the integration of more and more blocks and a varying number of
FPGA implementations for different users, a structured way of managing
the dependencies and composition of hardware blocks is needed. For that
we would like to provide a
[FuseSoC](http://github.com/olofk/fusesoc)-based environment.

The goal of this project is to structure the repositories and add the
infrastructure files for FuseSoC, along with a proof-of-concept
demonstration and a tutorial.

*Skill level*: Beginner, Intermediate

*Language/Tools*: Understanding of HDL Synthesis

*Mentor:* [Andrew Back](mailto:andrew@abopen.com)

### OpTiMSoC: Linux Port

*Details:* The
[Open Tiled Manycore System-on-Chip](http://optimsoc.org) is a
prototyping platform for massively parallel multicore
system-on-chip. The main runtime environments we employ so far are
baremetal and a very lean operating system ("compute node OS").

In this project the student should evaluate the minimal set of Linux
to compile for such platforms and customize the OpenRISC Linux port
accordingly. Beyond that the goal is to integrate the device driver
for the communication infrastructure. Finally, we want to explore
different use cases of Linux and if time permits the student should
explore different communication patterns.

*Skill level:* Intermediate, Advanced

*Language/Tools*: C, FPGA synthesis flow

*Mentors:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de),
 [Philipp Wagner](mailto:mail@philipp-wagner.com)

### SystemC generator plugin for Kactus2

The project objective is to implement a [SystemC](http://systemc.org)
generator for [Kactus2](http://funbase.cs.tut.fi/), an open-source
IP-XACT tool. IP-XACT captures designs and components independent of
implementation language, but the ability to generate SystemC from
IP-XACT would enable designers to leverage SystemC for simulation and
verification of their IP.

*Skill level:* Intermediate

*Language/Tools*: C++/Qt, SystemC

*Mentor:* [Esko Pekkarinen](mailto:esko.pekkarinen@tut.fi)

### 3D browser for IP-XACT library for Kactus2

Browsing lists and tree structures in a graphical user interface is
often tedious and relations between the objects may not be
intuitive. Recently 3D visualization has become a rich alternative to
traditional navigation. The project objective is to implement 3D
browsing for IP-XACT objects in [Kactus2](http://funbase.cs.tut.fi/)
tool.

*Skill level:* Advanced

*Language/Tools*: 3D graphics, C++/Qt, User interface design

*Mentor:* [Esko Pekkarinen](mailto:esko.pekkarinen@tut.fi)

### RISC-V DSP library on the Pulpino platform

Pulpino is an open-source design containing a 32-bit RISC-V implementation
enhanced with DSP extensions. Pulpino is part of the PULP project, an
ecosystem of open-source hardware and software targeting a new generation of
parallel ultra-low-power IoT devices.

The goal of this project is to develop a RISC-V DSP library for the Pulpino
platform. The implementation will consist in selecting a reasonable set of
common signal processing functions, implementing it on Pulpino, optimizing it
to take advantage of the RISC-V DSP extensions, and finally benchmarking it.
This will help measuring the impact of the existing extensions and drive future
extensions. Work could also be extended to the parallelization of this subset
on the Pulp platform.

*Skill level:* Intermediate

*Language/Tools:* C/C++

*Mentor:* [Davide Rossi](mailto:davide.rossi@unibo.it)

### Adding support for Pulpino platform on ARM mbed IoT Device Platform

Pulpino is an open-source design containing a 32-bit RISC-V implementation
enhanced with DSP extensions. Pulpino is part of the PULP project, an ecosystem
of open-source hardware and software targeting a new generation of parallel
ultra-low-power IoT devices. The ARM mbed IoT Device Platform provides the OS,
cloud services, tools and developer ecosystem to make the creation and
deployment of IoT solutions fast and portable.
The goal of this project is to extend the ARM mbed IoT Device Platform
components to target the Pulpino platform. During the project the ARM mbed OS
should be adapted to support the new target, and a proper support at IDE level
should be developed.

Links:
http://www.pulp-platform.org
https://github.com/pulp-platform/pulpino
https://github.com/ARMmbed/

*Skill level:* Advanced

*Language/Tools:* C/C++, Python

*Mentor:* [Davide Rossi](mailto:davide.rossi@unibo.it)
