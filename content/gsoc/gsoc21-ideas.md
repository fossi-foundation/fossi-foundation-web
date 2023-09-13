---
title: "Google Summer of Code 2021 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization in Google
Summer of Code 2021. That means that we give small projects the
chance to participate in the program. Below you can find a list of
ideas that the projects had, but students are encouraged to propose
their own ideas. These projects are mostly open-ended and can be
tailored to your level of experience, assuming that you have the
appropriate set of required skills for the particular project idea.

Whether you’re an aspiring student or mentor, feel free to contact us,
either through the private GSoC-specific mailing list [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org),
through the public [discussion mailing list](https://lists.librecores.org/listinfo/discussion),
or through the mentors listed for each project below.
We are also available on [Gitter in librecores/Lobby](https://gitter.im/librecores/Lobby).

Looking forward to meet you all!

* TOC
{:toc}


### Compressed instruction support for SERV

The award-winning [SERV](https://github.com/olofk/serv) is the world's smallest RISC-V CPU

SERV currently implements the RISC-V RV32I base instruction set and a small part of the privileged specification to support timer interrupts which are required for running an RTOS such as Zephyr. While the CPU core is small, it does not support the RISC-V compressed (C) instruction set extension. Adding support for this would reduce code size for applications running on SERV.

The goal of this project is to add support for the RISC-V compressed instruction set extension in SERV

*Skill level:* intermediate

*Language/Tools:* Verilog

*Mentors:*
[Olof Kindgren](mailto:olof.kindgren@gmail.com), [@olofk on github](https://github.com/olofk)


### Porting BaseJump STL to FuseSoc

*Details:* FuseSoC is a package manager and set of build tools for reusable hardware building blocks, which makes it easy to share designs between projects and reuse open IP. BaseJump STL is a comprehensive hardware library for SystemVerilog that seeks to contain all of the commonly used hardware primitives, much as the C++ Standard Template Library does with software primitives. This project is to port BaseJumpSTL to FuseSoC so that new hardware projects can hit the ground running and reuse hand-optimized IP cores rather than re-designing and re-debugging.

*Skill level:* Beginner

*Language/Tool:* SystemVerilog, Python

*Mentor:* [Michael Taylor](mailto:prof.taylor@gmail.com)


### Logical Equivalence Checks with LLHD

The Low Level Hardware Description language, or [LLHD](https://llhd.io/) in short, is simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. The IR has been developed alongside the [Moore](https://github.com/fabianschuiki/moore) compiler and published as a [paper](https://arxiv.org/pdf/2004.03494) at PLDI 2020. Since then, we have been busy merging LLHD into the [CIRCT](https://github.com/llvm/circt) project, a larger joint effort to develop Circuit IR Compilers and Tools.

When working with LLHD, you can assume that all the nasty parts of languages like SystemVerilog or VHDL have already been taken care of by a language frontend, and you are dealing with a much simpler but still complete representation of a circuit. As of today there are already a basic reference simulator as well as a faster LLVM-JIT-compilation-based simulator available for LLHD.

As a proof of concept for LLHD's verification prowess we would like you to implement a basic Logical Equivalence Check (LEC) for LLHD designs. This is essentially the process of taking two circuits and formally proving (or disproving) that they logically do the same thing, even if they use a different combination of logic gates to do so. This is a crucial step in chip design flows, to ensure that a synthesizer has properly translated RTL into a gate-level implementation, and that further place-and-route work did not violate the operation of a design.

In this project you will take two LLHD designs, translate them into the fundamental boolean equations, and formulate a satisfiability problem for an existing optimized SAT/SMT solver with them. You can scale this project's complexity to your liking, for example simplifying by looking only at combinational circuits, or complicating by finding ways to use registers as invariant anchor points in a circuit.

SAT/SMT solvers are tools that are extremely fun and satisfying to work with, but generally don't get the love they deserve in the circuit design community. With this project you'll be able to contribute to a key process in the ASIC design flow and generally show that, with good existing abstractions such as LLHD and the standardized solver file formats, it is very easy to create seemingly daunting formal tools for an open ASIC world.

*Skill Level:* Intermediate to Advanced

*Language/Tools:* C++, SAT/SMT Solver (e.g. Z3, Boolector, Bitwuzla, or others)

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)


### Circuit Visualization

*Details:* The Makerchip platform for open-source circuit design has introduced support for custom visualization of circuit simulations. This has been used to great success in RISC-V training and has other applicability as well. In fact, any circuit can be visualized in useful ways. A few examples can be opened from [this repo](https://github.com/stevehoover/makerchip_examples). Some circuits we would like to provide visibility into include:

  - SweRV
  - SERV
  - TL-Verilog flow library
  - BaseJump STL
  - basic circuits for instructional purposes
  - virtualized FPGA boards

Visualization is written in (very straight-forward) JavaScript that has access to trace data from simulation and a canvas to draw on. A bit more detail on these ideas can be found [here](https://github.com/stevehoover/TL-V_Projects)

*Skill level:* Beginner

*Language/Tools:* JavaScript, Verilog/SystemVerilog/TL-Verilog

*Mentor:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com)), Secondary: [Akos Hadnagy](https://www.linkedin.com/in/akos-hadnagy/)


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


### WARP-V TensorCore Extension for Deep Learning

*Details:* Deep Learning continues to be a key application for custom processors. The core operation in high-performance implementations are fused dot products and matrix multiply. This project will add a tensor core to the WARP-V RISC-V processor. The main challenges will be:

  - developing the tensor core ISA
  - debugging the design in simulation
  - using Xilinx FPGA tools to optimize the implementation(s) (optionally)
  - developing the integration with TVM or TensorFlow (optionally)

This project will not only produce a Deep Learning hardware accelerator, it will also serve as a proof-point for a Deep Learning research platform to experiment with tensor operators and custom number systems.

*Skill level:* Advanced

*Language/Tools:* TL-Verilog, Makerchip, Xilinx tools

*Mentor:* [Theodore Omtzigt](https://www.linkedin.com/in/theodoreomtzigt/) ([email](mailto:theo@stillwater-sc.com)), Secondary: [Akos Hadnagy](https://www.linkedin.com/in/akos-hadnagy/) ([email](mailto:akos.hadnagy@gmail.com))


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


### Building Manycore SoCs with OpenPiton + LiteX
[LiteX](https://github.com/enjoy-digital/litex) makes building FPGA-based SoCs easy. Using the Python hardware design library Migen, LiteX provides a variety of peripherals to enable users to build a complex SoC around a core of their choice. For this project, we would like to connect a manycore [OpenPiton](http://www.openpiton.org/) processor design in order to build a new manycore LiteX SoC.

*Skill level:* Intermediate

*Language/Tools:* Python (Migen), Verilog

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### WARP-V Many-Core in the Cloud

*Details:* In the past GSoCs, Akos Hadnagy, Ahmed Salman, Alaa Salman, Vineet Jain, and Shivam Potdar helped to mature three ground-breaking projects that have received a good deal of attention:

  1. [WARP-V](https://github.com/stevehoover/warp-v): a flexible TL-Verilog CPU core generator
  2. a library of [TL-Verilog "flow" components](https://github.com/stevehoover/tlv_flow_lib) (think STL for TL-Verilog)
  3. [1st CLaaS](https://github.com/stevehoover/1st-CLaaS): a framework for hardware acceleration of web/cloud applications using cloud FPGAs

This year, these projects can come together as an accelerator microservice running on cloud FPGAs! WARP-V is our CPU core. The flow library provides a network-on-chip (NoC) (that is not well tested). And 1st-CLaaS gives us our cloud FPGA infrastructure. We already have a basic single-core implementation of [WARP-V in 1st CLaaS](https://github.com/stevehoover/1st-CLaaS/tree/master/apps/warpv) capable of loading a program from a web client, executing it, and returning a result value. And WARP-V already supports multiple cores using a simple NoC from the flow library (with one known remaining bug). This project will produce a functional multi-core running in the cloud.

The first half of this project will demonstrate the three pieces coming together in "hello-world" fashion in simulation. The web client will load a program on a specified core and run that program which reads a status register containing the core ID, and returns it to the web client.

The remainder of the project can focus on any of the following, depending on the interests of the student:

  - the maturity of the hardware functionality
  - characterization and optimization of implementation(s) using Xilinx FPGA tools
  - constraining the implementation using Xilinx FPGA tools to reduce synthesis run time
  - developing test programs in RISC-V assembly language
  - developing the front-end web application to interface with the FPGA many-core

This project will not only lead to a highly-configurable many-core hardware accelerator PaaS; it will also:

  - serve to motivate the industry toward FPGA-accelerated web applications and FPGA-accelerated cloud computing
  - demonstrate the flexibility of TL-Verilog and WARP-V to motivate the industry toward better design methodology

*Primary Mentor:* [Akos Hadnagy](https://www.linkedin.com/in/akos-hadnagy/) ([email](mailto:akos.hadnagy@gmail.com)), Secondary: [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com))

*Skill level:* Advanced

*Languages/Tools:* TL-Verilog, Vivado (logic synthesis and simulation debug), GTKWave, Makerchip.com, AWS F1, and optionally: JavaScript, HTML5

*Discussion:* [WARP-V LibreCores Gitter Room](https://gitter.im/librecores/warp-v), [1st CLaaS Gitter Room](https://gitter.im/librecores/fpga-webserver)


### Embench IoT OpenRISC port

The [Embench](https://www.embench.org/news.html) benchmark suite is a modern tool used to measure embedded processor and compiler toolchain performance.  The [Embench IoT project](https://github.com/embench/embench-iot) has ports for ARM, RISC-V and other embedded processors.  The goal of this project will be to port Embench to run the OpenRISC toolchain and collect benchmarks.  The benchmarks should be recorded at [Embench IoT results](https://github.com/embench/embench-iot-results) to be able to compare OpenRISC vs other popular CPUs.

*Skill level:* Easy

*Language/Tools:* Shell scripting, C, Makefile, Python

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)


### Architectural Enhancement of the BlackParrot Linux-Capable RISC-V Multicore

*Details:* BlackParrot aims to be the default open-source, Linux-capable, cache-coherent, RV64GC multicore used by the world. It has been FPGA and Silicon-validated as an industry-strength design with leading efficiency. But we need your help to make it even better! We have projects in arithmetic/logic design, FPGA optimization, additional parameterizations, memory system enhancements… For newer hardware designers or those just looking to get their feet wet, simply trying out BlackParrot in a new environment to shake out setup or documentation bugs is a great help.

*Skill level:* All

*Prerequisite:* Basic knowledge of Computer Architecture

*Language/Tool:* Any/all of SystemVerilog, C, linker scripts, Makefile

*Mentor:* [Dan Petrisko](mailto:petrisko@cs.washington.edu)


### Integration of WARP-V with OpenPiton

*Details:* In GSoC 2020, one of Shivam Potdar's accomplishments was to prepare the [WARP-V](https://github.com/stevehoover/warp-v) CPU core for integration with the [OpenPiton](https://parallel.princeton.edu/openpiton/) heterogeneous many-core framework. This project would aim to complete that integration.

This will enable academic exploration of the combined flexibility benefits of OpenPiton and WARP-V. OpenPiton provides flexibility through the integration of different CPU cores. WARP-V provides flexibility of the CPU core itself. WARP-V can be optimized for the cycle-time of OpenPiton, and differently-configured WARP-V cores could be run within the same system along with other CPU cores.

*Skill level:* Advanced

*Languages/Tools:* Verilog, TL-Verilog

*Co-mentors:* [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com)), [Jonathan Balkind](https://www.linkedin.com/in/jbalkind/) ([email](mailtojbalkind@ucsb.edu)), [Akos Hadnagy](https://www.linkedin.com/in/akos-hadnagy/) ([email](mailto:akos.hadnagy@gmail.com))

*Discussion:* [WARP-V LibreCores Gitter Room](https://gitter.im/librecores/warp-v), [OpenPiton LibreCores Gitter Room](https://gitter.im/librecores/openpiton)


### Improve Test Coverage of the Moore HDL Compiler

[Moore](https://github.com/fabianschuiki/moore) is a compiler for SystemVerilog and VHDL hardware designs. Its goal is world domination by finally moving the burden of implementing SV and VHDL out of tools like synthesizers and simulators and into a separate frontend, very much like what Clang and LLVM did for the software world. In contrast to other projects that focus on specific use cases such as synthesis or netlists processing, Moore strives to support the entirety of the SV and VHDL languages. As output the compiler produces [LLHD IR](https://llhd.io/), a simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. (See also the [LLHD paper](https://arxiv.org/pdf/2004.03494) from PLDI 2020 for details.)

We would love to have you help make Moore even better! Since the input languages are very complex, a key aspect of Moore is to perform well on existing test suites and benchmarks. The [SymbiFlow](https://github.com/SymbiFlow) project maintains a [large suite of SystemVerilog tests](https://symbiflow.github.io/sv-tests-results/) where Moore is also represented. The goal of this project is to go into these tests and extend and improve the Moore compiler to support more of the use cases that are currently failing. You'll be able to look for juicy optimization targets and common reasons of failure, fix them, and reap the benefits of seeing a lot more green on this dashboard!

The Moore compiler is written in Rust. Don't be scared if you haven't touched Rust before -- if you know C or C++ you'll feel right at home. The main language we're currently tackling with Moore right now is SystemVerilog, so either knowing the language a bit or not being scared of looking into language reference manual will be useful.

*Skill Level:* Advanced

*Language/Tools:* Rust, SystemVerilog

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)


### Co-optimizing Debian with BlackParrot

*Details:* The RISC-V ISA is transforming the world of computing. While much research has goes into optimizing RISC-V cores for generally accepted industry and academic benchmarks, little research has been done to study applications running on these cores in their normal environment: running on a full OS like Debian. This project is to profile the Debian OS running on a Linux-capable RISC-V multicore, BlackParrot, to determine where bottlenecks exist, how to tweak software and hardwares parameters and examine the impact of the presence or omittance of various RISC-V extensions.

*Skill level:* Intermediate to Advanced

*Language/Tool:* C, Makefile, Bash, SystemVerilog

*Mentors:* [Dan Petrisko](mailto:petrisko@cs.washington.edu), [Farzam Gilani](mailto:farzamgl@uw.edu)


### Giving AnyCore an Open-Source FPU
[AnyCore](https://people.engr.ncsu.edu/ericro/research/anycore.htm) is an advanced superscalar processor developed at NC State University, designed to be highly configurable across parameters like issue width and pipeline depth. This project would entail connecting an open-source Floating Point Unit (FPU) to the high performance AnyCore processor, which runs the RISC-V ISA.

*Skill level:* Beginner/Intermediate

*Language/Tools:* Verilog/SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### Block-Based Circuit Design

*Details:* Two of the benefits of TL-Verilog are:

  1. that it is far simpler syntactically than Verilog or VHDL (sure, it's an extension, but it obviates much of Verilog)
  2. that you can do more with less

We have already witnessed a [12-year-old coding a RISC-V core](https://riscv.org/blog/2020/12/risc-v-microarchitecture-for-kids-steve-hoover-redwood-eda/) using TL-Verilog. There is a real opportunity to introduce students to circuit design at a younger age.

The [Scratch](https://scratch.mit.edu/) platform has gotten younger kids interested in programming through the use of block-based programming. Can we apply block-based programming to TL-Verilog?? It seems like.. maybe.. yes. This project will attempt to do so using [Blockly](https://developers.google.com/blockly).

*Skill level:* Beginner

*Language/Tools:* TL-Verilog, Blockly

*Mentors:* [Prof. Gayatri Mehta, UNT](https://electrical.engineering.unt.edu/people/gayatri-mehta) ([email](mailto:gayatri.mehta@unt.edu)) [Steve Hoover](https://www.linkedin.com/in/steve-hoover-a44b607/) ([email](mailto:steve.hoover@redwoodeda.com))


### Parallelising Verilog RTL Simulation Using MPI
Verilog simulators don’t scale well in speed when hardware designs become very large, but modern processors rely on networks-on-chip (NoCs) which could be used to partition the simulation. This project would involve implementing a verilog simulation infrastructure (using [Verilator](https://www.veripool.org/wiki/verilator)) which is partitioned into multiple simulation instances which communicate using OpenMPI, to enable verilog simulation of a large design (like a 1000-core processor).

*Skill level:* Intermediate

*Language/Tools:* Verilog, C++, OpenMPI

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### Other TL-Verilog-Related Projects

If you are interested in the TL-Verilog ecosystem, you might also consider any of these [TL-Verilog project ideas](https://github.com/stevehoover/TL-V_Projects). All would make excellent GSoC projects and mentors can be identified.


### Architectural Improvements to OpenPiton+Ariane
[OpenPiton+Ariane](https://openpiton-blog.princeton.edu/2018/11/announcing-openpiton-with-ariane/) is a permissively-licensed RISC-V manycore processor, built as a collaboration between the [PULP Platform](https://www.pulp-platform.org/) from ETH Zürich and the [OpenPiton Platform](http://www.openpiton.org/) from Princeton University. We would like to co-optimise OpenPiton and Ariane in their combined platform, to improve performance of the processor both in FPGA emulation systems and for eventual silicon chips. Possible improvements could be along the lines of: adding a global branch predictor, introducing a multi-level TLB, etc. We are also open to other projects aimed at improving the performance of aspects of either Ariane or OpenPiton.

*Skill level:* Intermediate

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### OpenRISC formal

The [OpenRISC](http://openrisc.io/) project dates back to 2000 and defines an open source RISC architecture.  With the recent developments with [Yosys formal](http://www.clifford.at/papers/2016/yosys-synth-formal/) it is now possible for us to provide formal verification for the OpenRISC cores like [mor1kx](https://github.com/openrisc/mor1kx).  This project will be to start to formally verify the subsystems of the [mor1kx](https://github.com/openrisc/mor1kx) OpenRISC implementation.  This will help generate interest from companies that know of OpenRISC but haven't chosen it due to unknowns about stability.

*Skill level:* Intermediate

*Language/Tools:* Verilog, OpenRISC, yosys

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)


### Extend LibreCores.org

[LibreCores](https://www.librecores.org) is a community web site with the goal of providing an overview of IP cores and the corresponding ecosystem. We strive for LibreCores to be *the* resource for free and open source IP: it should be easy to find, integrate, and contribute to the projects found there -- to make digital design projects as easy as writing software. For further information on our goals, see the [FOSDEM Presentation slides](https://fosdem.org/2016/schedule/event/digital_hardware_design/attachments/slides/1037/export/events/attachments/digital_hardware_design/slides/1037/fossi_fosdem.pdf) announcing LibreCores. The full site source code is available on [GitHub](https://github.com/librecores/librecores-web).

You can find a non-exhaustive [list of available tasks in our documentation](http://librecores-web.readthedocs.io/en/latest/contributing.html). Please talk to Philipp if you have other ideas, or didn't find an interesting project. We welcome your own ideas!

*Skill Level:* Intermediate

*Language/Tools:* PHP7 with the [Symfony Framework](http://symfony.com/), MySQL, HTML/JS

*Mentor:* [Philipp Wagner](mailto:mail@philipp-wagner.com)


### Push a Design through the Moore HDL Compiler

[Moore](https://github.com/fabianschuiki/moore) is a compiler for SystemVerilog and VHDL hardware designs. Its goal is world domination by finally moving the burden of implementing SV and VHDL out of tools like synthesizers and simulators and into a separate frontend, very much like what Clang and LLVM did for the software world. In contrast to other projects that focus on specific use cases such as synthesis or netlists processing, Moore strives to support the entirety of the SV and VHDL languages. As output the compiler produces [LLHD IR](https://llhd.io/), a simple intermediate representation that is able to capture the semantics of today's hardware description languages *including* their behavioral, verification, and testing features. (See also the [LLHD paper](https://arxiv.org/pdf/2004.03494) from PLDI 2020 for details.)

We would love to have you help make Moore even better! As a proof of concept that goes beyond the single RISC-V core that Moore tackles successfully, we would like to push a larger, more complex compute cluster through the compiler. This could be for example a [Snitch](https://github.com/pulp-platform/snitch) compute cluster of ETH Zurich which contains complex caches, interconnects, memory systems, multiple processor cores and large floating-point data paths. The goal of this project is to take this cluster's SV source code and implement the pieces Moore currently lacks in order to be able to compile the cluster. You'll be able to look for frequent sources of errors and juicy implementation targets, implement them in the compiler, and see the errors disappear one by one. If it turns out that not a lot of pieces are missing, you'll be able to fully simulate the cluster with an LLHD-based simulator and push the project forward significantly.

The Moore compiler is written in Rust. Don't be scared if you haven't touched Rust before -- if you know C or C++ you'll feel right at home. The main language we're currently tackling with Moore right now is SystemVerilog, so either knowing the language a bit or not being scared of looking into language reference manual will be useful.

*Skill Level:* Advanced

*Language/Tools:* Rust, SystemVerilog

*Mentor:* [Fabian Schuiki](mailto:fschuiki@iis.ee.ethz.ch)


### Bring up CV32E40P AI accelerator on FPGA
A joint project between Embecosm and Southampton university recently developed an open source ISA extension for the CV32E40P RISC-V core to accelerate neural network inference acceleration.  The project [GitHub](https://github.com/AI-Vector-Accelerator) demonstrated a 5 fold increase in inference performance.   [YouTube](https://youtu.be/t0Fpy4TzLUE) has a short presentation of the project, given at the London Open Source RISC-V meetup in January 2021.

However the project exists only as a verilator model, and speed ups are based on cycle counts, with no insight to any impact on clock speed in actual silicon This project is to take the existing work and bring it up on a FPGA platform of the student’s choice.  The project should use the tools which come with the FPGA, and if necessary, Embecosm can provide a suitable board for the students to work with.

The deliverables of this project are:

 - An implementation of this work in an FPGA, using standard EDA tools
 - Measurement of the impact of the changes on CV32E40P maximum clock speed
 - Real world performance measurement of the speed up for AI inference, as measured with TinyMLPerf.


*Primary Mentor:* [Jeremy Bennett](https://github.com/jeremybennett) ([email](mailto:jeremy.bennett@embecosm.com)), *Secondary Mentor:* [William Jones](https://github.com/william-r-jones) ([email](mailto:william.jones@embecosm.com))

*Skill level:* Advanced (specifically experience with FPGA synthesis)

*Language/Tools:* Verilog, SystemVerilog, RISC-V, FPGA Synthesis

### RISC-V core with AI Acceleration synthesizable with open source tools.
A joint project between Embecosm and Southampton university recently developed an open source ISA extension for the CV32E40P RISC-V core to accelerate neural network inference acceleration.  The project [GitHub](https://github.com/AI-Vector-Accelerator) demonstrated a 5 fold increase in inference performance.   [YouTube](https://youtu.be/t0Fpy4TzLUE) has a short presentation of the project, given at the London Open Source RISC-V meetup in January 2021.

This demonstrated the potential benefit of this approach, but relied on a core which can only be synthesized using proprietary FPGA synthesis tools.  This project proposes trying to repeat the approach using a RISC-V core (such as PicoRV or Fomu) which can be synthesized using the Yosys open source tool suite.

The deliverables of this project would be

 - A RISC-V core synthesisable with Yosys extended to accelerate AI inference
 - Bring up of the extended core on a suitable FPGA platform.
 - Measurement of the impact on AI inference using TinyMLPerf.

*Primary Mentor:* [Jeremy Bennett](https://github.com/jeremybennett) ([email](mailto:jeremy.bennett@embecosm.com)), *Secondary Mentor:* [William Jones](https://github.com/william-r-jones) ([email](mailto:william.jones@embecosm.com))

*Skill level:* Advanced (particularly FPGA synthesis using Yosys)

*Language/Tools:* Verilog, SystemVerilog, RISC-V, Yosys open source tool suite

### VPI based fst digital simulation waveform dumping

Most digital simulators use a proprietary binary data format for storing the simulation waveforms. This makes it impossible to access these waveforms for post processing. The only waveform format which is supported by all simulators is vcd. But the vcd waveform format is very limited as it does not support complex data structures and stores the waveform data in ASCII format resulting in very large waveform data files. The fst file format provided by GTKWave is an alternative. It is open available and represents an efficient binary file format overcoming the vcd file limitations.

The goal of the project is to develop VPI based functions to dump digital simulation waveforms in fst format.

*Primary Mentor:* Klaus Strohmayer / semify e.U. [email](mailto:office@semify.com)

*Skill level:* intermediate

*Language/Tools:* Verilog / SystemVerilog, C/C++
