---
title: "Google Summer of Code 2022 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization for Google
Summer of Code 2022. That means that we give small projects the
chance to participate in the program. Below you can find a list of
ideas that community mentors had, but mentees are encouraged to propose
their own ideas. These projects are mostly open-ended and can be
tailored to your level of experience, assuming that you have the
appropriate set of required skills for the particular project idea.

Whether you’re an aspiring mentee or mentor, feel free to contact us,
either through the private GSoC-specific mailing list [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org),
through the public [discussion mailing list](https://lists.librecores.org/listinfo/discussion),
or through the mentors listed for each project below.
We are also available on [Gitter in librecores/Lobby](https://gitter.im/librecores/Lobby).

Looking forward to meet you all!

* TOC
{:toc}


### Jupyter Notebook add-ons for Open Silicon development

*Details:* Jupyter Notebook allows developers to share interactive documents that allow to reproduce a given computation, by capturing in a single file:
the environment with the tools installation
the code with a given set of parameters
the results and their analysis

This is a natural fit for Open Silicon design that often tuning input parameters, inspecting visual results and comparing metrics and simulation measurements.

Possible contributions to this project:
- Create Jupyter extensions that interface the common Open Silicon data formats (GDS, LEF, DEF, Waveform, Timing and Power analysis report) with its display primitives.
- Create Jupyter kernels to support writing cells in HDL and HSL languages and evaluating their testbenches.
- Create a corpus of notebook examples that capture popular Open Silicon flows (analog, digital, hls-based).
Bootstrap the developer infrastructure and community to maintain those projects.

*Skill level:* Beginner to Intermediate

*Duration:* ~350 hrs.

*Language/Tools:* Python, Typescript

*Mentor:* [Johan Euphrosine](mailto:proppy@google.com)

### TinyParrot: A minimal BlackParrot RISC-V Multicore variant
*Details:* BlackParrot aims to be the default open-source, Linux-capable, cache-coherent, RV64GC multicore used by the world. It has been FPGA and Silicon-validated as an industry-strength design with leading efficiency. We wish to support open-source toolchains for FPGA and ASIC flows, but current open-source SRAM generators have not quite matured to make this seamless. This project will shrink BlackParrot to have extremely tiny caches, provide minimal ISA support and have other logic-saving optimizations with the goal of being able to easily synthesize to gates.

*Skill level:* beginner-intermediate

*Project length:* medium (175 hours)

*Mentors:* [Dan Petrisko](mailto:petrisko@cs.washington.edu), [Michael Taylor](mailto:prof.taylor@gmail.com)

*Language/Tools:* SystemVerilog, some knowledge of computer architecture, RISC-V knowledge preferred but not required

### Logical Equivalence Checks with LLHD

The Low Level Hardware Description language, or [LLHD](https://llhd.io/) in short, is simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. The IR has been developed alongside the [Moore](https://github.com/fabianschuiki/moore) compiler and published as a [paper](https://arxiv.org/pdf/2004.03494) at PLDI 2020. Since then, we have been busy merging LLHD into the [CIRCT](https://github.com/llvm/circt) project, a larger joint effort to develop Circuit IR Compilers and Tools.

When working with LLHD, you can assume that all the nasty parts of languages like SystemVerilog or VHDL have already been taken care of by a language frontend, and you are dealing with a much simpler but still complete representation of a circuit. As of today there are already a basic reference simulator as well as a faster LLVM-JIT-compilation-based simulator available for LLHD.

As a proof of concept for LLHD's verification prowess we would like you to implement a basic Logical Equivalence Check (LEC) for LLHD designs. This is essentially the process of taking two circuits and formally proving (or disproving) that they logically do the same thing, even if they use a different combination of logic gates to do so. This is a crucial step in chip design flows, to ensure that a synthesizer has properly translated RTL into a gate-level implementation, and that further place-and-route work did not violate the operation of a design.

In this project you will take two LLHD designs, translate them into the fundamental boolean equations, and formulate a satisfiability problem for an existing optimized SAT/SMT solver with them. You can scale this project's complexity to your liking, for example simplifying by looking only at combinational circuits, or complicating by finding ways to use registers as invariant anchor points in a circuit.

SAT/SMT solvers are tools that are extremely fun and satisfying to work with, but generally don't get the love they deserve in the circuit design community. With this project you'll be able to contribute to a key process in the ASIC design flow and generally show that, with good existing abstractions such as LLHD and the standardized solver file formats, it is very easy to create seemingly daunting formal tools for an open ASIC world.

*Skill Level:* Intermediate to Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* C++, SAT/SMT Solver (e.g. Z3, Boolector, Bitwuzla, or others)

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)

### Building Manycore SoCs with OpenPiton + LiteX
[LiteX](https://github.com/enjoy-digital/litex) makes building FPGA-based SoCs easy. Using the Python hardware design library Migen, LiteX provides a variety of peripherals to enable users to build a complex SoC around a core of their choice. For this project, we would like to connect a manycore [OpenPiton](http://www.openpiton.org/) processor design in order to build a new manycore LiteX SoC.

*Skill level:* Intermediate

*Duration:* 175 hours or 350 hours

*Language/Tools:* Python (Migen), Verilog

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### Minimal RISC-V core with AI Acceleration synthesizable with open source tools

A series of  projects between Embecosm and Southampton University over the past and a FOSSi GSoC project from 2021 have developed a simple (8 instruction) open source ISA extension for the CV32E40P and CV32E40X RISC-V cores to accelerate neural network inference acceleration.  The project [GitHub](https://github.com/AI-Vector-Accelerator) has demonstrated a 5 fold increase in inference performance.   [YouTube](https://youtu.be/DY8WXLF7CEg) has the most recent presentation of the project, given at the London Open Source RISC-V meetup in January 2022.

This demonstrated the potential benefit of this approach, but could only be synthesized using proprietary FPGA synthesis tools.  This project proposes trying to create a stripped down version which can be synthesized using the Yosys open source tool suite.

The core is delivered within the CORE-V MCU, a SoC wrapper which provides a debug interface, memory and a range of peripherals.  In order to make this project tractable, this will be stripped down to a minimal MCU providing just the debug interface and memory alongside the core. CORE-V MCU uses FuseSoc for ease of development, but the AVA work has not picked this up, so cleaning up the code to use FuseSoc will be an important starting point.

There are a series of steps in this project, so it can be provided as either a medium or long project. It is also quite open ended, so applicants should consider how they would wish to craft the project to directions that most interest them.

The deliverables of this project would be for the medium project:

 - the stripped down, synthesizable with Verilator as a model;
 - the stripped down CORE-V MCU with the CV32E40P core, synthasizable for FPGA with Yosys; and
 - Embench benchmarking of the stripped down CORE-V MCU on FPGA.

The long project would then extend these deliverables with the AI interface using the CV32E40X core:

 - a modified stripped down CORE-V MCU using the CV32E40X core with AI instruction set extensions cleaned up to build completely under FuseSoc.
 - a modified stripped down CORE-V MCU using the CV32E40X core with AI instruction set extensions as a Verilator model;
 - a modified stripped down CORE-V MCU using the CV32E40X core with AI instruction set extensions, synthasizable for FPGA with Yosys; and
 - measurement of the impact on AI inference using TinyMLPerf.

*Skill level:* Advanced (particularly FPGA synthesis using Yosys)

*Project length:* medium or long

*Mentors:* [Jeremy Bennett](https://github.com/jeremybennett) ([email](mailto:jeremy.bennett@embecosm.com)) and [William Jones](https://github.com/william-r-jones) ([email](mailto:william.jones@embecosm.com))

*Language/Tools:* Verilog, SystemVerilog, RISC-V, Yosys open source tool suite, TinyML benchmark suite

### OpenRISC Benchmarking and Performance improvements

The [OpenRISC](https://openrisc.io) CPU architecture has multiple CPU implementations
including the mor1kx and marocchino.  Recent testing has shown that memory access
on the marocchino is slightly slower compared to the mor1kx.

This project will have the student:

* Use tools like the [Embench](https://www.embench.org/news.html) modern benchmark suite
  to measure OpenRISC processor and compiler toolchain performance.
* Document the OpenRISC performance at [Embench IoT results](https://github.com/embench/embench-iot-results)
  to be able to compare OpenRISC vs other popular CPUs.
* Track down and improve OpenRISC CPU performance by finding and fixing deficiencies in the verilog designed cores.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Verilog, Shell scripting, C, Assembly, Python

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### Circuit Visualization

*Details:* The Makerchip platform for open-source circuit design has introduced support for custom
visualization of circuit simulations. This has been used to great success in RISC-V training and
is useful for circuit debug and conveying microarchitectural behavior as well. Any circuit can
be visualized in useful ways. Find a few examples [here](https://makerchip.com/sandbox/?tabs=VIZ%20Guide,Code-Examples#).

Some circuits we would like to provide visibility into include:

  - [SweRV](https://github.com/chipsalliance/Cores-SweRV)
  - [SERV](https://github.com/olofk/serv)
  - [TL-Verilog flow library](https://github.com/stevehoover/tlv_flow_lib/blob/master/pipeflow_lib.tlv)
  - [BaseJump STL](https://github.com/bespoke-silicon-group/basejump_stl)
  - basic circuits for instructional purposes
  - [virtualized FPGA boards](https://github.com/BalaDhinesh/Virtual-FPGA-Lab) (completed in GSoC 2021)
  - this [neural network](https://github.com/vineetjain07/DNN_TL-V)
  - gamified circuit design challenges

Visualization is written in (very straight-forward) JavaScript that has access to trace data from simulation and a canvas to draw on, described [here](https://makerchip.com/sandbox/?tabs=Code-Examples,VIZ%20Guide#).

*Skill level:* Beginner/Intermediate

*Duration:* ~175 or ~350 hrs.

*Language/Tools:* JavaScript, Verilog/SystemVerilog/TL-Verilog

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com)), *Alternate Mentor* (for gamified circuit education) [Gayatri Mehta](https://www.linkedin.com/in/gayatri-mehta-64aa7411/) ([email](gayatri.mehta@unt.edu)) (or other alternates depending on the specific project)

### LiteX SMP SoC for OpenRISC

The [LiteX](https://github.com/enjoy-digital/litex) project makes creating
FPGA-based SoCs easy.  LiteX supports creating SoCs containing OpenRISC CPU cores.
Up until now however, there have been no LiteX SoCs that support running
OpenRISC multicore/SMP Linux.  The [linux-on-litex-vexrisc](https://github.com/litex-hub/linux-on-litex-vexriscv)
project provides a good example of how to develop and document getting Linux
up and running on a LiteX SoC; including multicore.

Using `linux-on-litex-vexrisc` as an example, this project will have the student
creating a project to help people get up and running with OpenRISC.  The final
goal shall be to have a documented multicore OpenRISC LiteX SoC running Linux
SMP.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Verilog, LiteX, Linux, Python, OpenRISC architecture

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### The World's smallest AI processor

The prize winning bit-serial [SERV core](https://github.com/olofk/serv), created by Olof Kindgren, is the world's smallest RISC-V processor. In this project, we propose combining SERV with the miinimal AI instruction set extension developed under the AVA project (https://github.com/AI-Vector-Accelerator). This could for example use the CFU-LI interface.

The goal would be to demonstrate the world's smallest processor optimized for AI inference.

*Skill level:* Intermediate (particularly FPGA synthesis using Yosys)

*Project length:* medium

*Mentors:* [Jeremy Bennett](https://github.com/jeremybennett) ([email](mailto:jeremy.bennett@embecosm.com)) and [Olof Kindgren](https://github.com/olofk) ([email](mailto:olof@fossi-foundation.org))

*Language/Tools:* Verilog/SystemVerilog, RISC-V, Yosys open source tool suite


### 1st CLaaS for Local FPGAs

[1st ClaaS](https://github.com/stevehoover/1st-CLaaS) supports web application communication with FPGA
logic in the cloud. It would be nice to support local FPGA use cases as well. This is useful for local
applications as well as to support development that will ultimately be deployed to the cloud.

[FuseSoC](https://github.com/olofk/fusesoc) and [Apio](https://github.com/FPGAwars/apio) are worth
considering for vendor-agnostic FPGA support.

*Discussion:* [TL-Verilog User's Slack workspace](https://join.slack.com/t/tl-verilog-users/shared_invite/zt-4fatipnr-dmDgkbzrCe0ZRLOOVm89gA) `#1st-claas` channel.

*Skill level:* Advanced

*Languages/Tools:* FPGAs, Linux, Scripting, Makefiles

*Project length:*: ~350 hours

*Mentors:* [Theo Omtzigt](https://www.linkedin.com/in/theodoreomtzigt/) ([email](mailto:theo@stillwater-sc.com)), [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com))


### Giving AnyCore an Open-Source FPU
[AnyCore](https://people.engr.ncsu.edu/ericro/research/anycore.htm) is an advanced superscalar processor developed at NC State University, designed to be highly configurable across parameters like issue width and pipeline depth. This project would entail connecting an open-source Floating Point Unit (FPU) to the high performance AnyCore processor, which runs the RISC-V ISA.

*Skill level:* Beginner/Intermediate

*Duration:* 175 hours

*Language/Tools:* Verilog/SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### Other TL-Verilog-Related Projects

If you are interested in the TL-Verilog ecosystem, you might also consider any of these [TL-Verilog project ideas](https://github.com/stevehoover/TL-V_Projects). All would make excellent GSoC projects and mentors can be identified.


### Architectural Improvements to OpenPiton+Ariane
[OpenPiton+Ariane](https://openpiton-blog.princeton.edu/2018/11/announcing-openpiton-with-ariane/) is a permissively-licensed RISC-V manycore processor, built as a collaboration between the [PULP Platform](https://www.pulp-platform.org/) from ETH Zürich and the [OpenPiton Platform](http://www.openpiton.org/) from Princeton University. We would like to co-optimise OpenPiton and Ariane in their combined platform, to improve performance of the processor both in FPGA emulation systems and for eventual silicon chips. One possible idea this year is to implement the RISC-V cache management operation (CMO) extensions. We are open to many potential projects aimed at improving the performance of aspects of either Ariane or OpenPiton and encourage you to get in touch to discuss ideas.

*Skill level:* Intermediate

*Duration:* 175 or 350 hours

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu), [Nils Wistoff](mailto:nwistoff@iis.ee.ethz.ch)

### OpenRISC Linux Feature Development

The OpenRISC Linux kernel support is under constant development but there are
certain Linux facilities that are not yet used or available on the OpenRISC
platform.

This project will have the student developing, testing and sending patches up to
the Linux kernel.  This includes:

* Develop [rseq](https://lwn.net/Articles/650333/) support to OpenRISC Linux
  and glibc.
* Add floating point support to OpenRISC Linux.
* Use the cacheinfo API for reporting CPU details in OpenRISC Linux.
* Add [virtio](https://developer.ibm.com/articles/l-virtio/) support to OpenRISC
  Linux which would allow running OpenRISC containers.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Linux, C, Assembly, OpenRISC architecture

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### Push a Design through the Moore HDL Compiler

[Moore](https://github.com/fabianschuiki/moore) is a compiler for SystemVerilog and VHDL hardware designs. Its goal is world domination by finally moving the burden of implementing SV and VHDL out of tools like synthesizers and simulators and into a separate frontend, very much like what Clang and LLVM did for the software world. In contrast to other projects that focus on specific use cases such as synthesis or netlists processing, Moore strives to support the entirety of the SV and VHDL languages. As output the compiler produces [LLHD IR](https://llhd.io/), a simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. (See also the [LLHD paper](https://arxiv.org/pdf/2004.03494) from PLDI 2020 for details.)

We would love to have you help make Moore even better! As a proof of concept that goes beyond the single RISC-V core that Moore tackles successfully, we would like to push a larger, more complex compute cluster through the compiler. This could be for example a [Snitch](https://github.com/pulp-platform/snitch) compute cluster of ETH Zurich which contains complex caches, interconnects, memory systems, multiple processor cores and large floating-point data paths. The goal of this project is to take this cluster's SV source code and implement the pieces Moore currently lacks in order to be able to compile the cluster. You'll be able to look for frequent sources of errors and juicy implementation targets, implement them in the compiler, and see the errors disappear one by one. If it turns out that not a lot of pieces are missing, you'll be able to fully simulate the cluster with an LLHD-based simulator and push the project forward significantly.

The Moore compiler is written in Rust. Don't be scared if you haven't touched Rust before -- if you know C or C++ you'll feel right at home. The main language we're currently tackling with Moore right now is SystemVerilog, so either knowing the language a bit or not being scared of looking into language reference manual will be useful.

*Skill Level:* Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* Rust, SystemVerilog

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)

### Embench DSP Extensions

We will be developing a set of new digital signal processing benchmarks to add to the current suite of Embench DSP benchmarks.  The starting point will be the current suite of DSP benchmarks (FIR, IIR, and FFT).  New benchmarks will be run on a microprocessor and its performance evaluated.

These new benchmarks will be added to the Embench DSP suite and be made available to the world.

There will the opportunity to engage with students at Rice University who are also working on the project.

*Skill level:* Beginner (accessible to students who have some programming experience and are willing to learn)

*Project length:* medium

*Mentors:* Ray Simar ([email](mailto:ray.simar@rice.edu)).

*Language/Tools:* C, embedded platforms on which to evaluate the benchmarks.

### Extend LibreCores.org

[LibreCores](https://www.librecores.org) is a community web site with the goal of providing an overview of IP cores and the corresponding ecosystem. We strive for LibreCores to be *the* resource for free and open source IP: it should be easy to find, integrate, and contribute to the projects found there -- to make digital design projects as easy as writing software. For further information on our goals, see the [FOSDEM Presentation slides](https://fosdem.org/2016/schedule/event/digital_hardware_design/attachments/slides/1037/export/events/attachments/digital_hardware_design/slides/1037/fossi_fosdem.pdf) announcing LibreCores. The full site source code is available on [GitHub](https://github.com/librecores/librecores-web).

You can find a non-exhaustive [list of available tasks in our documentation](http://librecores-web.readthedocs.io/en/latest/contributing.html). Please talk to Philipp if you have other ideas, or didn't find an interesting project. We welcome your own ideas!

*Skill Level:* Intermediate

*Duration:* 175 or 350 hours

*Language/Tools:* PHP with the [Symfony Framework](http://symfony.com/), MySQL, HTML/JS

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)

### Adding Language Servers (VHDL/Verilog/SV) to TerosHDL

*Details:* TerosHDL (https://terostechnology.github.io/) is an open source IDE for FPGA/ASIC development based in VSCode. It includes support for VHDL, Verilog and SystemVerilog.
One of the most important features in a code editor is related to “go to definition”, linting… Currently TerosHDL supports those features partially. Tha main idea of this project is to integrate open source HDL language servers (Verible LSP, GHDL LSP, rusthdl…) in TerosHDL and provide all their capabilities. The language servers should work on Windows, Linux and Mac operating systems. Also create an interface for the plugin that allows users to enable/disable each feature independently.

*Skill level:* Beginner

*Duration:* 175h

*Language/Tool:* Javascript, NodeJS

*Mentor:* [Carlos Alberto Ruiz](mailto:carlosruiznaranjo@gmail.com), [Ismael Pérez](mailto:ismaelprojo@gmail.com)

### Improve Test Coverage of the Moore HDL Compiler

[Moore](https://github.com/fabianschuiki/moore) is a compiler for SystemVerilog and VHDL hardware designs. Its goal is world domination by finally moving the burden of implementing SV and VHDL out of tools like synthesizers and simulators and into a separate frontend, very much like what Clang and LLVM did for the software world. In contrast to other projects that focus on specific use cases such as synthesis or netlists processing, Moore strives to support the entirety of the SV and VHDL languages. As output the compiler produces [LLHD IR](https://llhd.io/), a simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. (See also the [LLHD paper](https://arxiv.org/pdf/2004.03494) from PLDI 2020 for details.)

We would love to have you help make Moore even better! Since the input languages are very complex, a key aspect of Moore is to perform well on existing test suites and benchmarks. The [SymbiFlow](https://github.com/SymbiFlow) project maintains a [large suite of SystemVerilog tests](https://symbiflow.github.io/sv-tests-results/) where Moore is also represented. The goal of this project is to go into these tests and extend and improve the Moore compiler to support more of the use cases that are currently failing. You'll be able to look for juicy optimization targets and common reasons of failure, fix them, and reap the benefits of seeing a lot more green on this dashboard!

The Moore compiler is written in Rust. Don't be scared if you haven't touched Rust before -- if you know C or C++ you'll feel right at home. The main language we're currently tackling with Moore right now is SystemVerilog, so either knowing the language a bit or not being scared of looking into language reference manual will be useful.

*Skill Level:* Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* Rust, SystemVerilog

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)

### Embench Interrupt Latency benchmark

Embench has always envisaged measuring the dynamic behavior of systems as well as computation throughput.  This is the Embench-RT benchmark suite.

One of the benchmarks on [Embench-RT](https://github.com/embench/embench-rt) is [IRQ latency](https://github.com/embench/embench-rt/blob/main/irq_latency/design/rv-int-latency.md).  The benchmark goal is to measure an MCU interrupt latency. This factor is crucial for RT FW/SW that is driven by interrupts.

Currently, this benchmark can run on RISCV cores; the project will be to integrate the benchmark for the reference Arm Cortex M4 board used for the main [Embench IoT](https://github.com/embench/embench-iot) benchmark. This will act as the reference against which all others will be compared.

*Skill level:* Intermediate (some experience with embedded devices and board support packages).

*Project length:* long

*Mentors:* Ofer Shinaar ([email](mailto:Ofer.Shinaar@wdc.com)) assisted by one of his colleagues (name TBC).

*Language/Tools:* C, embedded platforms on which to evaluate the benchmarks.

### Python bindings for OpenROAD

*Details:* OpenROAD is a standalone application capable of performing RTL-to-GDSII SoC design, from floorplanning through detailed routing with metal fill insertion, signoff parasitic extraction and timing analysis. It currently provides a comprehensive high-level scriptable layer in TCL, but also embeds a Python interpreter.  The embedded Python interpreter provides support only for the database (odb) and is a subset of what is available in TCL.

Possible contributions to this project:
- Compile odb as a standalone python module
- Extend the bindings to other components of OpenROAD
- Write Python and/or Conda packaging recipes for the package and its dependencies
- Bootstrap infrastructure to continuously build and publish the package to PyPI and/or Conda.

*Skill level:* Intermediate to Advanced

*Duration:* ~350 hrs.

*Language/Tools:* Python, C++, Conda

*Mentor:* [Johan Euphrosine](mailto:proppy@google.com), [Matt Liberty](mailto:mliberty@eng.ucsd.edu)

### Support for multiple RISC-V cores on a mini MCU

[OpenHW Group](https://www.openhwgroup.org/) is a not-for-profit organization that develops industrial-quality open-source HW. The CORE-V RISC-V cores family includes embedded and application class processors. The embedded cores are customized for performance [CV32E40P](https://github.com/openhwgroup/cv32e40p), security [CV32E40S](https://github.com/openhwgroup/cv32e40s), extendability, [CV32E40X](https://github.com/openhwgroup/cv32e40x), and for code size [CV32E41P](https://github.com/openhwgroup/cv32e41p). [core-v-mini-mcu](https://github.com/davideschiavone/core-v-mini-mcu) is a simple MCU meant to quickly try out new core HW and SW features. It targets simulation with Verilator, Questasim, etc, as well as real implementation on FPGAs and ASICs. FuseSoc is used to handle tools and targets.

In this project, we propose extending the core-v-mini-mcu to support all the OpenHW Group embedded class cores (as today we only use CV32E40P) and to demonstrate performance and code size differences across them.

*Skill level:* Medium (SystemVerilog)

*Project length:* medium

*Mentors:* [Davide Schiavone](https://github.com/davideschiavone) ([email](mailto:davide@openhwgroup.org)) and Veronia Bahaa ([email](mailto:veronia.iskandar@mailbox.tu-dresden.de))

*Language/Tools:* SystemVerilog, RISC-V, C, Verilator


### Development Framework for Open MPW Shuttles

Efabless, Google, and SkyWater Technologies, through the Open MPW and ChipIgnite programs, provide free ASIC fabrication.
To help streamline the development flow, this project will provide a starting template for development within the
free online Makerchip IDE. This will include:

  - visualization of the [Caravel](https://github.com/efabless/caravel) harness
  - support for FPGA prototyping, leveraging this [environment](https://github.com/BalaDhinesh/Virtual-FPGA-Lab)
  - default stimulus
  - build flow enhancements to the [Caravel sample user project](https://github.com/efabless/caravel_user_project),
    adding support for TL-Verilog and Makerchip
  - clear development flow documentation

*Skill level:* Intermediate/Advanced

*Languages/Tools:* Caravel (https://github.com/efabless/caravel), FPGAs, TL-Verilog, Makerchip

*Project length:* ~175 or ~350 hours

*Mentors:* [Mohamed Kassem](https://www.linkedin.com/in/mkkassem/), [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com))


### Improving state of code generation for RISC-V based manycore architectures in LLVM
The RISC-V ISA will transform the world. Recently, UW taped out an open source RISC-V manycore processor with thousands of cores which executes trillions of RISC-V instructions per second in one chip. We are working on finding answers to questions like how to efficiently program and run code on thousands of cores?

We want to improve the state of the code generation for manycore architectures in LLVM by developing techniques to better specialize different parts of the compiler for manycore architectures, for example, congestion awareness, instruction scheduling and register allocation. We plan to do this by analyzing different workloads or comparing with other compilers like gcc for finding generalized improvement opportunities.

*Skill level:* intermediate

*Project length:* long (350 hours)

*Mentors:* [Reshabh K Sharma](mailto:reshabh@cs.washington.edu), [Michael Taylor](mailto:prof.taylor@gmail.com)

*Language/Tools:* C++, LLVM

### Enhancing the Sootty Terminal-based Graphical Waveform Viewer
[Sootty](https://github.com/Ben1152000/sootty) is a terminal-based waveform viewer which takes advantage of modern terminals' capabilities to give a full graphical display of the users' waveforms. Combined with this, the tool introduces a textual query language for searching waveforms for interesting events to assist in debugging. Sootty is in a fairly early stage of development and so there are a variety of new features that could be added. Get in touch and we can figure out some fun and useful new features for our users!

*Skill level:* Beginner

*Duration:* 175 or 350 hours

*Language/Tools:* Python, Verilog/VHDL/...

*Mentors:* [Ben Darnell](mailto:bdarnell@ucsb.edu), [Jonathan Balkind](mailto:jbalkind@ucsb.edu)

### Javascript library for FuseSoC core files
*Details:* FuseSoC core description files are a language-agnostic description of an IP core. So far, the only implementations for working with core description files are written in Python (e.g. FuseSoC). A javascript library would make it easier to parse interesting information from the core description files and present on websites.

*Skill level:* beginner-intermediate

*Project length:* medium

*Language/Tools:* JavaScript. Python knowledge is useful for looking at the current implementation

*Mentors:* [Olof Kindgren](mailto:olof.kindgren@gmail.com)

### Conda packages for Open Silicon tooling

*Details:* Bootstrapping a working environment for Open Silicon development is often a tedious task that involves installing multiple tools written in many different languages from various distribution channels (PyPI, debian, homebrew, containers image) and more often than not building them directly from sources!

The https://github.com/hdl/conda-eda/ project aims to fix this by providing conda.io packages for popular FPGA and ASIC tools and distributing them on a dedicated channel: https://anaconda.org/LiteX-Hub/.

Possible contributions to this project:
- Make an inventory of the tools commonly used in popular Open Silicon flows.
- Identify the tools (and their dependencies) that are not yet packaged.
- Add new recipes to the project to cover those gaps.
- Moving the package to conda-forge.org to provide automated build and distribution for Linux, MacOSX and Windows.
- Creating meta-packages that capture the environment for popular Open Silicon flows (analog, digital, hls-based).

*Skill level:* Beginner

*Duration:* ~175 hrs.

*Language/Tools:* Conda, Shell scripting, Git

*Mentor:* [Johan Euphrosine](mailto:proppy@google.com)

### Integration of WARP-V with OpenPiton

*Details:* In GSoC 2020, one of Shivam Potdar's accomplishments was to prepare the [WARP-V](https://warp-v.org) CPU core for integration with the [OpenPiton](https://parallel.princeton.edu/openpiton/) heterogeneous many-core framework. This project would aim to complete that integration.

This will enable academic exploration of the combined flexibility benefits of OpenPiton and WARP-V. OpenPiton provides flexibility through the integration of different CPU cores. WARP-V provides flexibility of the CPU core itself. WARP-V can be optimized for the cycle-time of OpenPiton, and differently-configured WARP-V cores could be run within the same system along with other CPU cores.

*Duration:* ~350 hrs.

*Skill level:* Advanced

*Languages/Tools:* Verilog, TL-Verilog, Makerchip, GNU Make

*Co-mentors:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com)), [Jonathan Balkind](https://www.linkedin.com/in/jbalkind/) ([email](mailtojbalkind@ucsb.edu))

*Discussion:* [WARP-V LibreCores Gitter Room](https://gitter.im/librecores/warp-v), [TL-Verilog Users Slack Workspace](https://join.slack.com/t/tl-verilog-users/shared_invite/zt-4fatipnr-dmDgkbzrCe0ZRLOOVm89gA), [OpenPiton LibreCores Gitter Room](https://gitter.im/librecores/openpiton)

### Porting Compiler test-suite (micro-benchmarks) to Embench

Embench contains several benchmarks for IoT, benchmarks targeting performance, and code-size comparison. One missing piece is a compiler test-suite.

The project goal is to port the [riscv32-Code-density-test-bench](https://github.com/westerndigitalcorporation/riscv32-Code-density-test-bench) to Embench IoT new repo. The effort will include porting the Embench build system, bringing up the repo for users (instructions, build, and full run), adding "correctness testing" to the test suite.

*Skill level:* Beginner (some experience with C Python and Git).

*Project length:* medium

*Mentors:* Ofer Shinaar ([email](mailto:Ofer.Shinaar@wdc.com)) assisted by one of his colleagues (name TBC).

*Language/Tools:* C, embedded platforms on which to evaluate the benchmarks.

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

*Duration:* ~175 or ~350 hrs.

*Language/Tool:* Verilog, VHDL, Chisel, TL-Verilog, ...

*Mentor:* We will find the mentor with you,
 [LibreCores GSoC team](mailto:gsoc@fossi-foundation.org)



### Klayout ASAP7 DRC and LVS decks

ASAP7 PDK is a 7-nm predictive process design kit (PDK) c, developed by Arizona State University in collaboration with ARM Ltd. for academic use. The PDK is realistic, based on current assumptions for the 7-nm technology node. Currently, there is an effort to port ASAP7 to OpenLane. To complete the port, ASA7 technology files must be ported to physical verification tools used by OpenLane.

The objective of this project is to develop ASAP7 Design Rules Checker (DRC) and Layout vs. Schematic (LVS) technology files for Klayout. Also, the scope of the project includes the development of a CI regression test suite.

*Skill level:* intermediate

*Project length:* medium

*Language/Tools:*  Python, Ruby and Klayout

*Other requirements:* Good EE background

*Mentors:* [Mohamed Shalan](mailto:mshalan@efabless.com),  [Mohamed Kassem](mailto:mkk@efabless.com)



### Fault Silicon Validation and Open MPW integration

Design for Testability (DFT) is a technique which facilitates a design to become testable after fabrication. “Extra” logic is added to the design during the implementation process, which helps post-fabrication testing. Post-fabrication testing is necessary because IC fabrication is not 100% error free; thus, identifying faulty silicon as early as possible and before reaching the end-user is essential to reduce its impact.

The objective of the project is to Fully integrate Fault into OpenLane to enable DFT. Also, the project aims at adding DFT support to Caravel chip to enable post fabrication testing using Automatic Testing Equipment (ATE) before packaging to exclude faulty chips.

*Skill level:* intermediate

*Project length:* medium

*Language/Tools:*   Python, Verilog and OpenLane

*Other requirements:* Good knowledge of RTL design as well as DFT.

*Mentors:* [Mohamed Shalan](mailto:mshalan@efabless.com),  [Kareem Farid](mailto:kareem.farid@efabless.com)


### IRSIM dynamic power analysis and other improvements:

Summary:
Dynamic power analysis is a requirement for digital designs that
need to be power efficient.  Static timing analysis tools do not
understand actual circuit operation, so they can only estimate
dynamic power usage, and will not be able to analyze specific
power mitigation techniques, like having unused portions of a
circuit shut down into a low-power or sleep mode.  Proper
dynamic power analysis requires simulating a circuit while
computing switching power, with simulation setups designed to
put the circuit into specific operating modes.  SPICE analysis
can do this but is prohibitively compute-expensive for large
digital designs.  Verilog simulators do not have the information
to compute power consumption.  Currently there are no open-source
tools for dynamic power analysis.

IRSIM is an open source switch-level simulator that analyzes digital
circuits on the transistor level, but with a simplified linear model
of transistors as resistive switches.  Because digital circuits
operate by treating FET transistors as switches in one of two
states, "on" (saturated) or "off", the simplified linear model
works quite well, and changes in the state of a switch can be
applied as "events" in a queue, similar to the way verilog
simulators operate.  Consequently, IRSIM runs only about an order
of magnitude slower than a verilog gate-level simulator, but
many orders of magnitude faster than a SPICE simulator.  The
slow speed of simulation relative to verilog simulators is one
reason that IRSIM has largely fallen out of use.

However, IRSIM has had built-in power analysis for decades.  But
it has not been exercised for a long time, with considerable
development in IRSIM happening without checking against the
power analysis code.

The purpose of the project is to test the operation of power
analysis in IRSIM, and to upgrade it where needed to make use
of features in IRSIM added in recent years.  That includes
defining a Tcl command-line interface for power analysis.

Time permitting (e.g., 330 hour internship instead of 165 hour),
an additional needed feature for IRSIM is to be able to handle
multiple transistor types and, by extension, multiple power
domains.  The latter is particularly important for power
analysis because many circuits operate in "sleep" modes by
lowering the power supply to a minimum that can trigger a
"wake-up" mechanism.  Proper power analysis depends on
understanding the different voltage domains.  The
implementation should be straightforward, as it adds nothing
new to the analyses done by IRSIM, but is mostly just
record-keeping.


*Skill level:* intermediate

*Project length:* 175 or 350 hrs

*Language/Tools:*  C, Tcl/Tk, iverilog, ngspice

*Mentors:* [Tim Edwards](mailto:tim@opencircuitdesign.com)



### Parameterized device layouts for Sky130

Summary: The purpose of this internship is to expand the set
of available parameterized devices available in magic for use
with the SkyWater Sky130 foundry process.  These devices are
created using an existing framework written in Tcl/Tk, although
most of the code involves magic command-line commands (which
are implemented in Tcl).  Only a basic understanding of Tcl
variables, conditionals, loops, and subroutine calls is needed.

New devices of interest that have not yet been done in
parameterized cells include (but are not limited to):  The
photodiode, extended-drain MOSFETs, bipolar transistors, ESD
transistors, inductors, metal fuses, UHV (ultra-high-voltage)
devices.

Each new device should follow the design specifications for
device layout from the SkyWater DRC manual, and needs to
implement five routines that (1) define the device parameters and
limits, (2) convert parameters from a SPICE netlist, (3) define
the user interface dialog (UI) for setting those parameters, (4)
check and enforce parameter limits, and (5) draw the device.
After implementing, each device needs to be checked for DRC
correctness by generating a "torture test" of a large array of
devices with different sets of parameters which can be passed to
the DRC checkers to make sure that the drawing routine produces
DRC clean layouts.

Time permitting (e.g., 330 hour internship instead of 165 hour),
the internship can include generating an analog layout implementing
many different devices that can be tested from a probe station.
This layout would be placed on an Efabless ChipIgnite run and
tested at NIST.

*Skill level:* intermediate

*Project length:* 175 or 350 hrs

*Language/Tools:* Tcl/Tk, Magic

*Mentors:* [Tim Edwards](mailto:tim@opencircuitdesign.com)


### RISC-V TensorCore for Edge AI

The goals of the RISC-V TensorCore project are to create
RISC-V V-extension-based hardware accelerators that leverage
custom numerics to gain energy-efficiency, performance,
reproducibility, or reliable computations for robotics,
model-predictive control, AI/ML, Reinforcement Learning,
data acquisition and signal processing applications.

As many embedded intelligence applications will reside
on the edge, and hardware experimentation requires a
cost-effective and flexible design environment, most
of the vector engines presented here are targeted as
softcores on different FPGA platforms.

As the reconfigurability of an FPGA adds overhead to the
realization of the logic for a computational transformation,
it is paramount for energy-efficiency that the computational
engine takes full advantage of the hardmacros available
in the FPGA. The micro-architecture of a vector engine maps
well to the DSP-slice architecture of most FPGAs, they
are a productive technology target to deliver on custom
compute engines with custom numerics.

Furthermore, when introducing custom numerics, the language
support for these new types will always lag by many years,
and sometimes the language standard committee will never
be motivated to adapt. This means that only languages that
offer user-defined types, such as Julia and C++, are ready
to take advantage of custom hardware accelerators that
differentiate through custom numerics. The user-defined
type can be emulated by the scalar core, and computational
kernels can be executed faithfully in the custom arithmetic
by the vector engine. A user-defined type library, such as
[Universal](https://github.com/stillwater-sc/universal)
will function as the custom type emulation layer,
and higher level libraries, such as
[hprBLAS](https://github.com/stillwater-sc/hpr-blas)
will function as the kernel dispatch layer.

*Skill level:* intermediate

*Project length:* 175 or 350 hrs

*Language/Tools:* TL-V, SV, Verilog

*Mentors:* [Theodore Omtzigt](mailto:theo@stillwater-sc.com)


### RISC-V core benchmarks using SiliconCompiler

[SiliconCompiler](https://github.com/siliconcompiler/siliconcompiler) is an
open-source build framework for chip design that automates translation from
source code to silicon. For this project, we would like to use SiliconCompiler
to compile a handful of open-source RISC-V cores to open technology targets like
FreePDK45 or Skywater130, and document optimal performance and area for each.

In order to demonstrate SiliconCompiler's flexibility, we would like to pick an
interesting range of cores implemented in different HDLs. Some cores we are
considering include:

- [PicoRV32](https://github.com/YosysHQ/picorv32) (Verilog)
- [Ibex](https://github.com/lowrisc/ibex) (SystemVerilog)
- [VexRiscv](https://github.com/SpinalHDL/VexRiscv) (SpinalHDL)
- [RISC-V Mini](https://github.com/ucb-bar/riscv-mini) (Chisel)
- [Flute](https://github.com/bluespec/Flute) (Bluespec)

However, we are open to suggestions from our mentee!

The expected outcome of this project is to pick 3-6 cores and write a
SiliconCompiler build script for each one (with tuned build parameters), and
then publish the build scripts along with layout screenshots and benchmarking
results. In addition, this project may entail contributing back any changes to
SiliconCompiler needed to complete the task. In particular, this project will
likely involve work on tool drivers for any non-Verilog frontends used.

*Skill Level:* Intermediate

*Duration:* 175 hours (3 cores) or 350 hours (6 cores)

*Language/tools:* Python, Yosys, OpenROAD, Verilog, other HDLs depending on cores chosen

*Mentors:* [Noah Moroze](mailto:noah@zeroasic.com), [Will Ransohoff](mailto:will@zeroasic.com)

### Interactive SiliconCompiler design summaries

SiliconCompiler produces automated reports for its designs, and one format
that we are testing is a browser-based visualization of a job's results.
This lets users view a small preview of the GDS result, alongside various metrics
reported by each task in the physical design flow.

We would like to improve the way that this data is presented, and add more information
from the SiliconCompiler job manifests. This would be a great project for someone
interested in frontend development and/or data visualization!

[This is what our reports currently look like.](https://user-images.githubusercontent.com/5217539/162544399-3c83d667-35b4-4013-b373-ae42c00c4ad6.png) We have a few improvements in mind, but we would also welcome suggestions:

- Past Results: SiliconCompiler retains metrics from past builds, which we would like to display.
- Data Visualization: We would like to explore options beyond simple tables for visualizing metrics within and across job runs.
- Input Parameters: In addition to a job's results, we would like to include the values of configurable inputs in our reports.
- Modal Dialogs: There is some content which we would like to display in 'hover-over' modals, rather than linking to it.
- "Flowgraph" Visualization: SiliconCompiler can generate diagrams describing which tasks ran over the course of a job, and we would like to include those in our reports.

*Skill Level:* Beginner

*Duration:* 175 hours

*Languate/tools:* Python (+Jinja), JS, HTML/CSS

*Mentors:* [Will Ransohoff](mailto:will@zeroasic.com)
