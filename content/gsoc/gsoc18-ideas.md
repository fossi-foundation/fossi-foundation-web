---
title: "Google Summer of Code 2018 - Ideas for Projects"
navigation: false
---

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

*Language/Tool:* Verilog, VHDL, Chisel, ...

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


### Open SoC Debug: Run-Control Debugging

*Details*: [Open SoC Debug](http://opensocdebug.org) is a free and open debug and trace system for embedded systems.
Our current developments mainly focused on the tracing part, leaving run-control debug for this GSoC project!
By run-control debug we mean the process of firing up GDB, setting breakpoints in a program, and stepping through the program.
In order to support these operations from GDB, the goal of this project is to create (a) [hardware](https://github.com/opensocdebug/osd-hw) extensions in SystemVerilog, which allow reading control registers from a CPU (these are used to set breakpoints and halt/continue the CPU), and (b) create a gdbserver implementation inside our [Open SoC Debug software implementation](https://github.com/opensocdebug/osd-sw) which GDB can connect to. To get you started, we have sample code available which can be used as a starting point.

*Skill level*: Intermediate

*Language/Tools*: System Verilog, C

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)

### OpTiMSoC: Extend the Linux Port

*Details:* The
[Open Tiled Manycore System-on-Chip](http://optimsoc.org) is a
prototyping platform for massively parallel multicore
system-on-chip. The main runtime environments we employ so far are
baremetal and a very lean operating system ("compute node OS").

In last year's GSoC [Pedro created an initial Linux port for OpTiMSoC](https://www.optimsoc.org/blog/2017/09/04/gsoc2917.html).
He solved all the hard problems of getting Linux up and running, and paved the path to continue with more high-level features of Linux.
By now the OpenRISC port of Linux is upstreamed and [extended to provide multi-core support (SMP)](https://lkml.org/lkml/2017/9/10/24).

The goal of this GSoC project is to extend the OpTiMSoC Linux port.
What extensions, you might ask? It's up to you!
How about enabling multi-core support? Or creating an extended device driver for our Network-on-Chip (NoC)? Or writing an accelerator interface to trigger computations in the compute grid of OpTiMSoC from software running on Linux? There's an endless stream of opportunities to choose from -- bring your own idea or get in touch with us to discuss ideas we have.

No matter which task you choose, you get unique insights into hardware (you can actually view the waveform of most signals in OpTiMSoC!) and Linux internals.

*Skill level:* Intermediate, Advanced

*Language/Tools*: Linux Kernel development (C), optional: FPGA synthesis flow

*Mentors:* [Stefan Wallentowitz](mailto:stefan@wallentowitz.de),
 [Philipp Wagner](mailto:mail@philipp-wagner.com),
 [Stafford Horne](mailto:shorne@gmail.com)


### OpenRISC GCC Port

[OpenRISC](https://openrisc.io/) is a processor architecture which is simple, yet widely used for soft cores and in deeply embedded scenarios.
For a long time a [port of the GCC compiler for OpenRISC](https://github.com/openrisc/or1k-gcc) has been in existence.
However, this port cannot be submitted upstream due to [FSF copyright assignment issues](https://lists.librecores.org/pipermail/openrisc/2018-January/000958.html).
Hence a clean room rewrite of the basic compiler architecture is required.

This work gives you great insight into the backend of a compiler and the OpenRISC Instruction Set Architecture.
To be successful in this project, you should have an understanding of compilers and be able to work in a very structured way.
You will be mentored by an OpenRISC expert, with the help of a seasoned GCC developer.

*Skill Level*: Advanced

*Language/Tools:* C, Compilers

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### GHDL profiling support

[GHDL](https://github.com/ghdl/ghdl) is a compiled VHDL simulator. This project would aim to profile and/or implement a profiler to improve speed of simulation and/or to detect hotspot in user design

*Skill level:* Intermediate

*Language/Tools:* ADA, VHDL

*Mentor:* [Tristan Gingold](mailto:tgingold@free.fr)

### GHDL: Improve LLVM backend

This project would aim to improve the LLVM backend of [GHDL](https://github.com/ghdl/ghdl), a compiled VHDL simulator.

Currently, llvm can be used as a backend, but this could be improved.  In particular, there is no generation of debugging information, the C++ API should be used instead of the C API, and there was no real try to find the best order of optimization passes.

*Skill level:* Intermediate

*Language/Tools:* ADA, C++, VHDL

*Mentor:* [Tristan Gingold](mailto:tgingold@free.fr)

### GHDL: Support 64-bit with mcode on Windows

GHDL has its own code generator (named mcode), which is light and fast but doesn't try to optimize.  Although x86-64 is supported on linux, win64 isn't.

*Skill level:* Intermediate

*Language/Tools:* ADA, C++, VHDL

*Mentor:* [Tristan Gingold](mailto:tgingold@free.fr)

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

### PCIe bus functional model (BFM) using Cocotb

*Goal:* Develop a [PCIe](https://en.wikipedia.org/wiki/PCI_Express)
bus functional model ([BFM](https://en.wikipedia.org/wiki/Bus_Functional_Model))
in Python for use with hardware simulations via
[Cocotb](http://potential.ventures/cocotb/).

*Details:* PCIe is a high-speed serial bus interface and is widely
used in modern computing systems. It is commonly used to interface
FPGAs and other ASICs to PCs or other host controller devices. The
protocol is reasonably complex, and a good open source bus functional
model (BFM) which can be used in hardware simulations of these FPGAs
or ASICs is lacking.

Cocotb is a set of libraries which provide access to hardware
simulation and essentially allows us to write testbench code in Python.

Given the complexity of the PCIe standard and the ease-of-use of Python
with the cocotb libraries to interface to a hardware simulation, it is
proposed that a PCIe BFM developed in cocotb-compatible Python.

The work in this project would be to, at first, develop a reasonably
simple PCIe-capable BFM and simple API for driving it. This would be
tested against a simulation of a simple FPGA design using the Xilinx
PCIe endpoint IP. Proving configuration writes and basic memory-mapped
accesses can be performed will be sufficient to begin with.

This work will expose the student to the concepts of writing behavioural
hardware models in Cocotb-compliant Python, and simulating them against
real designs.

*Skill Level:* Intermediate to Advanced

*Language/Tools:* Python, Verilog

*Mentors:* [Luke Darnell](mailto:luke.darnell@broadcom.com), [Julius Baxter](mailto:julius@fossi-foundation.org)

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


### Integration of Cloud FPGAs with JavaScript

The incorporation of FPGAs into the cloud, opens many possibilities
for new compute models. Hardware acceleration can become an integral
and ubiquitous part of cloud computing. This project will support
hardware acceleration of web applications by creating a communication
channel between JavaScript, running in a web browser, and FPGA
hardware, running on Amazon F1 FPGA instances. Imagine the
possibilities for web pages with access to hardware-acceleration!

An F1 instance is a cloud CPU (host machine) with attached FPGAs. The
host will be used as a web server. It will serve JavaScript content
that includes functions that communicate via a websocket back to the
server. The server/host will relay this data stream to the attached
FPGA. A return path from FPGA to host to client will also be created.

Communication between host and FPGA will be implemented using a
High-Level Synthesis flow in the CAOS framework, or using a
Verilog-based flow with the F1 Hardware Development Kit plus C++ code
in the F1 Software Development Kit. Successful completion will include
demonstration of a round-trip communication from web client to FPGA
and back. Success also requires clear documentation of the APIs and
hardware configuration steps.

*Skill level:* Advanced

*Languages/Tools:* Amazon F1, CAOS (C/C++/OpenCL) or F1 HDK/SDK, JavaScript, HTML5, Web Sockets, Node.js.

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### CPU Components in Transaction-Level Verilog

The RISC-V ISA has been the subject of massive interest in its short
history due to its open nature. RISC-V CPU implementations in Chisel
and BlueSpec Verilog show a degree of flexibility that is impractical
in RTL design. But this is nothing compared to the flexibility that is
possible with a new extension to Verilog, called Transaction-Level
Verilog (TL-Verilog). Here's your chance to develop open-source CPU
components for the most-configurable, most-adaptable RISC-V CPU core
generator, WARP-V. WARP-V can be configured as a low-power,
slow-clock, single stage pipeline, a high-frequency seven-stage
pipeline, or anywhere in between. You can even swap out the RISC-V ISA
for a completely different ISA altogether.

You will implement CPU components, such as branch predictors, caches,
etc., and add support for RISC-V ISA extensions to provide a rich set
of selectable components for WARP-V. You will learn advanced design
practices and CPU microarchitecture. TL-Verilog tutorials are
available at makerchip.com. You'll find WARP-V in the Makerchip IDE
under "Tutorials"/"Examples"/"CPUs".

*Skill level:* Intermediate/Advanced

*Language/Tools:* TL-Verilog, Makerchip IDE

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### Formally Verify the WARP-V RISC-V CPU Core

WARP-V is an emerging open-source CPU core generator for RISC-V
CPUs. It benefits from the flexibility of Transaction-Level Verilog
(TL-Verilog) to support a wide range of implementations from simple
CPUs for FPGAs through high-frequency ASIC implementations. You'll use
open-source formal verification tools to prove that WARP-V implements
the RISC-V specification. You'll debug and complete missing elements
of the microarchitecture. Find WARP-V in the Makerchip IDE under
"Tutorials"/"Examples"/"CPUs".

*Skill level:* Intermediate

*Language/Tools:* Yosys, riscv-formal, TL-Verilog, Makerchip IDE

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### Develop a Transaction-Level Verilog Component Library

Transaction-Level Verilog (TL-Verilog) is an emerging language
extension to SystemVerilog that is introducing a number of
game-changing capabilities. Among them is the ability to define
flexible reusable components. For this project, you will develop a
library of compatible components such as FIFOs, queues, arbiters,
elastic buffers, etc. that could form the basis of a new era of
hardware design. You will demonstrate the ease of composing these
components into sophisticated transaction flows and quickly
implementing what are currently considered to be complex designs, such
as a complete on-chip network!

*Skill level:* Intermediate/Advanced

*Language/Tools:* TL-Verilog, Makerchip IDE

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### Chisel learning journey

Implementing support for standard debugger(gdb), fpu and caches in
sodor and teach important chisel concepts through it. All of this
while keeping documentation as first priority

*Skill Level:* Intermediate

*Language:* Chisel, Scala and Verilog

*Mentor:* [Stefan Wallentowitz](mailto:stefan.wallentowitz@fossi-foundation.org)

### Capturing the dynamic rocket

Find and implement some effective way to capture rocket-chip ecosystem
which includes rocket, boom, uncore and hardfloat into
micro-architecture diagrams/schematics (possibly using draw.io) and
what makes it tough is parameterizable nature of this ecosystem, which
also needs to be captured

*Skill Level:* Advanced

*Language:* Chisel, Scala, Verilog

*Mentor:* [Stefan Wallentowitz](mailto:stefan.wallentowitz@fossi-foundation.org)

### Yosys Test Suite

Yosys is a framework for HDL synthesis and formal verification. This
project is about extending the Yosys test suite to comprehensively
cover the language constructs in Verilog 2001 and to comprehensively
cover all script commands available in Yosys, and integrate the test
suite with a CI infrastructure.

A comprehensive test suite can help development of Yosys by providing
a high degree of confidence that pull requests that pass the test
suite do not introduce new bugs. Therefore this project is vital to
opening Yosys to a larger community of open source developpers.

*Skill Level:* Intermediate

*Language/Tools:* Yosys, Verilog, GNU Make, Python

*Mentor:* [Clifford Wolf](mailto:clifford@clifford.at)

### SystemVerilog Support in Yosys

[YoSys](http://www.clifford.at/yosys/) is a framework for Verilog RTL
synthesis. It does not support SystemVerilog so far. This requires
extension of the frontend of Yosys and a good understanding of how to
map System Verilog constructs to the IR.

*Skill Level:* Advanced

*Language:* C

*Mentor:* [Tim Ansell](mailto:mithro@mithis.com)

### Common EDA tool output format

Proprietary and open source EDA synthesis and implementation tools all
have different output formats for warnings, error and synthesis
results. A translator tool that converts all outputs to a common
format is of high value for integration with other tool flows or
continuous integration. The goals are a definition of the format in
coordination with the community and then the implementation of this
tool.

*Skill Level:* Beginner, Intermediate

*Language:* tbd

*Mentor:* [Tim Ansell](mailto:mithro@mithis.com),
 [Stefan Wallentowitz](mailto:stefan@wallentowitz.de)

### Solar Cell Simulation

DEVSIM is simulation software which uses the finite volume method to
solve electrical behavior for semiconductor devices on a microscopic
level. It solves partial differential equations on a mesh. The Python
interface allows users to specify their own equations.

DEVSIM is a simulator capable of solving for the behavior of
individual semiconductor devices due to external voltage boundary
conditions. To simulate a solar cell, it is necessary to simulate the
propagation of light into the structure and the resulting electrical
current. This would require:

1. Reading in the existing structure from an external mesh tool tailored toward solar cell structure generation.

2. Modeling the propagation of light through the semiconductor structure using one of these methods:

 * Ray tracing
 * Transfer matrix method
 * Beam propagation method
 * Finite difference time domain

3. Implementing the equations coupling light intensity and the generation of current in the semiconductor.

4. Simulate figures of merit: Isc, Voc, Jsc, Pmax, Power curve, Fill Factor and IV curve.

Based on the scope of this project, a student should be able to tackle
reading in the structure, and solving for the propagation of light
using one of the listed methods.  In an initial implementation this
would be for 1D and 2D structures.  Based on the student's interest,
they may choose to tackle the problem for a 3D structure.
Alternatively, they may choose to address the models for generation of
current from light.  The system would then be well suited for
analyzing the device performance.

*Skill Level:* Advanced

*Languages/Tools:* C++, Python

*Mentor:* [Juan Sanchez](mailto:jsanchez@devsim.com)

### Digital filter blocks

This project includes developing various digital filters with
MyHDL and integrating the filter-blocks with
[PyFDA](https://github.com/chipmuenk/pyfda). The filter-blocks
will be added to the
[`filter-blocks`](https://github.com/cfelton/filter-blocks)
repository.  The student is encourage to start with simple digital
filters and use the tools to verify and demonstrate the
performance for the filters. 

After a basic filter or two is completed it
is expected the student will complete a more complex digital
filter, examples: systolic structure, non-linear estimation filters,
modular shared-resource structures, etc.

*Skill level:* Intermediate, Advanced

*language/Tool:* MyHDL

*Mentor:* [Christopher L. Felton](mailto:chris.felton@gmail.com), [Christian Münker](mailto:mail@chipmuenk.de)

### Interface driven design, Ethernet core

This project involves extending the Ethernet core that was
developed in a previous GSoC to be an "interface driven"
design.  The core is to be updated and extended with the
interfaces provided in the `rhea` or `crux` packages.
The following example illustrates the idea of the interface
driven design - the details will be developed with the student.


```python
def example(...)
    glbl = Global()         # clock and resets
    ethcfg = EthConfig()    # contains all the setup info
    ethc = EthController()  # main data interface to the eth
 
    # In this example, there are three blocks that are interfacing
    # with the Ethernet controller.
    b1 = ethc.get_branch()
    pkt1_inst = packet_type_a_handler(...)
 
    b2 = ethc.get_branch()
    pkt2_inst = packet_type_b_handler(...)

    b3 = ethc.get_branch()
    pkt3_inst = packet_type_c_handler(...)
 
    eth_inst = eth_core(glbl, ethc, ethcfg)
    # get the arbitration logic, handles
    arb_inst = ethc.arbitrate()  
```

It is desirable, but not required, that the student have a
development board with an tri-mode (10/100/1000) Ethernet phy.

*Skill level:* Intermediate, Advanced

*language/Tool:* MyHDL

*Mentor:* [Christopher L. Felton ](mailto:chris.felton@gmail.com), [Tom Dillon](mailto:tompdillon@dillonlogic.com)

### Rocket versus Ariane RISC-V "Deathmatch" and Analysis

The RISC-V ISA will transform the world. Recently, two Linux-capable
cores, one produced by SiFive/Berkeley, and one produced by ETH Zurich
have been produced. The goal of this project is to do a detailed
performance analysis of these two cores, and provide recommendations
and best practices back to those efforts for the path to increase
performance.

This group will be performed in conjunction with the Bespoke Silicon
Group team at U. Washington (which architected the 16nm 511-core
RISC-V core processor, Celerity.)

*Skills:* Knowledgable of both in-order and out-order processor
architecture. Hardware design skills.

*Language/Tools:* SystemVerilog, Comfortable with Unix Programming and
Scripting

*Mentor:* [Prof. Michael Taylor and the Basejump Team](mailto:prof.taylor@gmail.com)

### BaseJump RISC-V Manycore CUDA Design

The RISC-V ISA will transform the world. Recently, U. Washington taped
out an open source RISC-V manycore processor with 496 cores that hits
500 Billion RISC-V instructions per second in one chip.

We have silicon up and running in our lab and will be taping out a
second generation based on results from the first generation. Our goal
is to make this the defacto open source GPGPU design. (See
bjump.org/manycore.) You will work to help design the CUDA-like
programming environment and make recommends for future versions of the
architecture.

*Skills:* Knowledgeable of CUDA programming; Compiler or PL interests a plus.

*Language/Tools:* C, Comfortable with Unix Programming and Scripting

*Mentor:* [Prof. Michael Taylor and the Basejump Team](mailto:prof.taylor@gmail.com)

### BaseJump STL Hacker

We are prototyping new features for the SystemVerilog language,
including the equivalent of the C++ Standard Template Library, which
we intend to deploy into the SystemVerilog standard.

Our initial results show that HW productivity is dramatically improved
with this library. An initial version of this is up and running, and
we are looking for folks with an outside perspective to take it to the
next level.

*Skills:* Hardware Design Experience, Interest in HDL (hardware description language) design

*Language/Tools:*  SystemVerilog

*Mentor:* [Prof. Michael Taylor and the Basejump Team](mailto:prof.taylor@gmail.com)

### VHDL Frontend for Yosys

VHDL is one of the "major" hardware description languages alongside Verilog.
Yosys is an open-source HDL synthesis tool, and it currently only supports
Verilog (it supports VHDL only via the proprietary Verific frontend). The goal
of this project is to write an open-source VHDL frontend for Yosys.

There are currently a number of open-source tools that support VHDL that can be
leveraged as a base. For example, there is [GHDL](https://github.com/ghdl/ghdl),
a VHDL simulation tool written in Ada; [NVC](https://github.com/nickg/nvc), a
VHDL simulation tool written in C; [vhdlpp](https://github.com/steveicarus/iverilog/tree/master/vhdlpp),
a VHDL frontend for the Icarus Verilog simulator; and
[Robert Ou's stalled project](https://github.com/rqou/yavhdl), a VHDL
parser written in mostly Bison and Rust. You may choose to start with any one of
these existing projects or any other projects you may discover (starting from
scratch is likely to be too difficult given the time limitations).

*Skill Level:* Advanced

*Language/Tools:* VHDL, C, C++, Ada(?), Flex/Bison(?), Rust(?)

*Mentor:* [Robert Ou](mailto:rqou@berkeley.edu)

### Framework for Mixed-Language Simulation

There are a number of open-source HDL simulators currently available. For
example, [Icarus Verilog](https://github.com/steveicarus/iverilog) and
[Verilator](https://www.veripool.org/wiki/verilator) support Verilog, and
[GHDL](https://github.com/ghdl/ghdl), [NVC](https://github.com/nickg/nvc), and
[Icarus Verilog (via vhdlpp)](https://github.com/steveicarus/iverilog/tree/master/vhdlpp)
support VHDL. However, most of these support only one of VHDL or Verilog
(Icarus supports both, but its VHDL support is incomplete), and it is very
difficult to simulate projects using a mix of both languages. The goal of this
project is to design some method for doing mixed-language HDL simulation
with open-source tools that has good support for the features of all of the
HDLs.

Some possible solutions to this problem include:
* Write a program that uses the procedural interfaces (i.e. VPI, VHPI) of each
  simulator and somehow "glue" them together (one such hack that does so is
  [here](https://github.com/rqou/myhdl-vhdl-verilog-test))
* Lower all of the HDLs into a common intermediate representation and then
  write/modify a simulator to simulate that

Some other things that you should consider include support for HDLs other than
Verilog and VHDL (e.g. MyHDL, Migen, Chisel, etc.) and cosimulation
(e.g. simulation including external software, simulation with hardware in the
loop).

*Skill Level:* Intermediate/Advanced

*Language/Tools:* VHDL, Verilog, C, C++

*Mentor:* [Robert Ou](mailto:rqou@berkeley.edu)
