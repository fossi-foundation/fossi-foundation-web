---
title: "Google Summer of Code 2024 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization for Google
Summer of Code 2024. That means that we give FOSSi community projects the
chance to participate in the program. Below you can find a list of
ideas that community mentors had, but mentees are encouraged to propose
their own ideas. These projects are mostly open-ended and can be
tailored to your level of experience, assuming that you have the
appropriate set of required skills for the particular project idea.

Whether you’re an aspiring mentee or mentor, feel free to contact us,
either (for mentees) by directly contacting mentors or (for mentors)
through the private GSoC-specific mailing list [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org).

Looking forward to meet you all!

* TOC
{:toc}


### Improve CIRCT's Verilog Frontend

The [CIRCT](https://github.com/llvm/circt) project uses the [Slang](https://github.com/MikePopoloski/slang) frontend to parse the SystemVerilog hardware description language. The [sv-tests](https://chipsalliance.github.io/sv-tests-results/) project runs many SystemVerilog frontends on a benchmark suite of input files to test their quality. We would love you to use the sv-tests results as a starting point to find key missing features that you can add to `circt-verilog` and fix failing tests. Tests often fail for similar reasons, and fixing small things can cause large numbers of tests to start passing.

SystemVerilog is a complicated language and CIRCT builds a deep stack of intermediate representations using MLIR to process it. The Slang frontend produces an Abstract Syntax Tree which the ImportVerilog pass converts into the Moore dialect, the first IR level in circt-verilog. Various optimizations are already performed at this level. Then the MooreToCore conversion pass lowers the Moore dialect to the HW, Comb, Seq, and LLHD dialects for further processing. Finally, several optimization passed implemented on the LLHD dialect analyze the hardware design and detect common structures. If you want to sink your teeth into compiler and IR design, this is the perfect project for you!

Slang and CIRCT are based on MLIR and LLVM, and are implemented in C++. So you'll definitely want to have some experience writing C++ code, since LLVM-based projects often follow a fairly peculiar and performance-conscious style of C++.

*Skill Level:* Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* C++, CIRCT, MLIR, LLVM

*Mentor:* [Fabian Schuiki](mailto:fabian@schuiki.ch), [Martin Erhart](maerhart@outlook.com), and others in the CIRCT community

### Generate Counter Examples for Bounded Model Checks in CIRCT

The [CIRCT](https://github.com/llvm/circt) project has its own bounded model checking tool, circt-bmc. It takes a hardware design described in CIRCT's MLIR dialects and translates it into a program that uses the Z3 SMT solver to formally prove assertions. If it finds a way how assertions can be violated, it simply terminates with an error message. This is not very useful for a user that is trying to debug a hardware design that they have written. Instead, we would like circt-bmc to produce a counter-example, essentially a signal trace that shows and example of how the assertions can be violated. The Z3 SMT solver actually provides a counter-example as part of its checking, circt-bmc just does not use that yet.

We would love you to extend circt-bmc with a counter-example feature that produces a signal trace for violated assertions, ideally a VCD waveform as a starting point. This will require you to modify the lowering pass that translates a hardware design to Z3 solver calls: in addition to the asserts that need to be checked, you will also want to translate any named ports, wires, registers into the corresponding Z3 solver expressions. The bounded model check can then take a snapshot of all these expressions in every time step. When Z3 finds a counter-example, you can go through every time step, evaluate all the solver expression for all user-visible names, and write them to a waveform.

This may also be an excellent opportunity to introduce a waveform writing library for CIRCT. Eventually, we'd want different tools in CIRCT to be able to write various waveform formats such as VCD, FST, etc. It would be great if there is a common interface for waveform writers, and if CIRCT could then provide various implementations for different waveform formats. Tools like Arcilator, circt-bmc, and circt-lec would then use this library to produce signal traces.

CIRCT is based on MLIR and LLVM, and are implemented in C++. So you'll definitely want to have some experience writing C++ code, since LLVM-based projects often follow a fairly peculiar and performance-conscious style of C++. You may also benefit from knowing a little bit about SAT and SMT solvers, and how bounded model checks can be implemented incrementally using these solvers.

*Skill Level:* Medium

*Duration:* 175 hours or 350 hours

*Language/Tools:* C++, CIRCT, MLIR, LLVM

*Mentor:* [Fabian Schuiki](mailto:fabian@schuiki.ch), [Martin Erhart](maerhart@outlook.com), and others in the CIRCT community

### TinyParrot: A minimal BlackParrot RISC-V Multicore variant
*Details:* BlackParrot aims to be the default open-source, Linux-capable, cache-coherent, RV64GC multicore used by the world. It has been FPGA and Silicon-validated as an industry-strength design with leading efficiency. We wish to make it even tinier. This project will look into various size optimizations which may include parameterizing out support for the RISC-V MFD extensions or remapping FPGA primitives using the portability layer in BaseJump STL. The final optimizations may depend on the applicant's skill set. At the end of this project, we hope to use the ZynqParrot infrastructure to fit a BlackParrot multicore into affordable educational FPGA boards such as the Z2!

*Skill level:* intermediate

*Project length:* medium (175 hours)

*Mentors:* [Dan Petrisko](mailto:petrisko@cs.washington.edu), [Michael Taylor](mailto:prof.taylor@gmail.com)

*Language/Tools:* SystemVerilog, some knowledge of computer architecture, RISC-V knowledge preferred but not required

### Using AI to Improve Open-Source IP

What if we could instantly improve all the existing open-source Verilog by reducing its size, improving its maintainability, making it more configurable, identifying bugs, and creating visualization for it? How could you possibly do all those things over one summer as a student? Well, you can't. But you could help to make significant strides in that direction.

Transaction-Level Verilog (TL-Verilog) models are smaller, cleaner, and less bug-prone than their Verilog counterparts. But there's not much TL-Verilog in the wild yet. If you ask ChatGPT to convert your code today, you won't be happy with the results. But with careful coaching, AI models can be trained for the job.

Since LLMs understand Verilog better than TL-Verilog, we do as much as possible with the Verilog to prepare it for conversion to TL-Verilog. An initial flow has been put in place for this. A Python program iterates through a recipe of prompts, each performing an incremental refactoring step. After each step, formal equivalence verification (FEV) is used to ensure functional correctness. Human intervention is possible and is currently needed at almost every step.

Your project will be to use and enhance this flow to refactor an open-source Verilog project like SERV. In the process, you'll contribute to the automation, and your work will become training data to improve future LLMs for this task.

*Skill level:* Intermediate/Advanced

*Duration:* 350 hours

*Language/Tools:* Verilog, Python, TL-Verilog

*Repo:* https://github.com/stevehoover/conversion-to-TLV

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### OpenRISC Linux Feature Development

The OpenRISC Linux kernel support is under constant development but there are
certain Linux facilities that are not yet used or available on the OpenRISC
platform.

This project will have the student developing, testing and sending patches up to
the Linux kernel.  This includes:

* Use the cacheinfo API for reporting CPU details in OpenRISC Linux.
* Add [tracing facilities](https://docs.kernel.org/trace/index.html) to OpenRISC Linux including: jump_label, ftrace, kprobes, eBPF etc.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Linux, C, Assembly, OpenRISC architecture

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### OpenRISC Benchmarking and Performance improvements

The [OpenRISC](https://openrisc.io) CPU architecture has multiple CPU implementations
including the mor1kx and marocchino.  Recent testing has shown that memory access
on the marocchino is slightly slower compared to the mor1kx.

This project will have the student:

* Continue from where the 2024 GSoC student left off.
* Use tools like the [Embench](https://www.embench.org/news.html) modern benchmark suite
  to measure OpenRISC processor and compiler toolchain performance.
* Document the OpenRISC performance at [Embench IoT results](https://github.com/embench/embench-iot-results)
  to be able to compare OpenRISC vs other popular CPUs.
* Track down and improve OpenRISC CPU performance by finding and fixing deficiencies in the verilog designed cores.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Verilog, Shell scripting, C, Assembly, Python

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

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


### Klayout ASAP7 DRC and LVS decks

ASAP7 PDK is a 7-nm predictive process design kit (PDK) c, developed by Arizona State University in collaboration with ARM Ltd. for academic use. The PDK is realistic, based on current assumptions for the 7-nm technology node. Currently, there is an effort to port ASAP7 to OpenLane. To complete the port, ASA7 technology files must be ported to physical verification tools used by OpenLane.

The objective of this project is to develop ASAP7 Design Rules Checker (DRC) and Layout vs. Schematic (LVS) technology files for Klayout. Also, the scope of the project includes the development of a CI regression test suite.

*Skill level:* intermediate

*Project length:* medium

*Language/Tools:*  Python, Ruby and Klayout

*Other requirements:* Good EE background

*Mentors:* [Mohamed Shalan](mailto:mshalan@efabless.com),  [Mohamed Kassem](mailto:mkk@efabless.com)


### Architectural Improvements to OpenPiton+Ariane
[OpenPiton+Ariane](https://openpiton-blog.princeton.edu/2018/11/announcing-openpiton-with-ariane/) is a permissively-licensed RISC-V manycore processor, built as a collaboration between the [PULP Platform](https://www.pulp-platform.org/) from ETH Zürich and the [OpenPiton Platform](http://www.openpiton.org/) from Princeton University. We would like to co-optimise OpenPiton and Ariane/CVA6 in their combined platform, to improve performance of the processor both in FPGA emulation systems and for eventual silicon chips. One possible idea this year is to implement the RISC-V cache management operation (CMO) extensions. We are open to many potential projects aimed at improving the performance of aspects of either Ariane/CVA6 or OpenPiton and encourage you to get in touch to discuss ideas.

*Skill level:* Intermediate

*Duration:* 175 or 350 hours

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu), [Nils Wistoff](mailto:nwistoff@iis.ee.ethz.ch)

### cocotb v2 Code Migration Helper

The upcoming cocotb v2.x release will have quite some breaking changes (see https://docs.cocotb.org/en/latest/release_notes.html), so users and extension developers will have to actively migrate existing code.

A code migration helper tool would be helpful, even if it is not perfect.

Some links:
* https://libcst.readthedocs.io/
* https://lukeplant.me.uk/blog/posts/tools-for-rewriting-python-code/

*Skill level:* Intermediate/Advanced

*Duration:* medium (175 hours)

*Language/Tools:* Python, cocotb

*Mentor:* [Kaleb Barrett](mailto:dev.ktbarrett@gmail.com)

### Parameterized device layouts for Sky130

The purpose of this project is to expand the set of available parameterized devices available in magic for use with the SkyWater Sky130 foundry process.  These devices are created using an existing framework written in Tcl/Tk, although most of the code involves magic command-line commands (which are implemented in Tcl).  Only a basic understanding of Tcl variables, conditionals, loops, and subroutine calls is needed.

Existing devices could use more thorough checks of DRC cleanliness across a wide range of parameters.  FET devices could use an option to have all gate contacts merged into a single net, which would also allow a tighter pitch for the smallest length devices.

New devices of interest that have not yet been done in parameterized cells include (but are not limited to):  The photodiode, extended-drain MOSFETs, bipolar transistors, ESD transistors, inductors, metal fuses, UHV (ultra-high-voltage) devices.

Each new device should follow the design specifications for device layout from the SkyWater DRC manual, and needs to implement five routines that (1) define the device parameters and limits, (2) convert parameters from a SPICE netlist, (3) define the user interface dialog (UI) for setting those parameters, (4) check and enforce parameter limits, and (5) draw the device. After implementing, each device needs to be checked for DRC correctness by generating a "torture test" of a large array of devices with different sets of parameters which can be passed to the DRC checkers to make sure that the drawing routine produces DRC clean layouts.

*Skill level:* Intermediate/Advanced

*Duration:* medium (175 hours)

*Language/Tools:* Tcl/Tk, Magic

*Mentors:* [Tim Edwards](tim@opencircuitdesign.com)

### Spike + Sim-X

The project is to interface [Spike](https://github.com/riscv-software-src/riscv-isa-sim) with [Sim-X](https://github.com/vortexgpgpu/vortex/tree/master/sim/simx).
Spike is a functional RISC-V ISA simulator and Sim-X is a high-level simulator for the [Vortex GPGPU](https://github.com/vortexgpgpu/vortex/).

Existing work allowed us to integrate the Vortex GPGPU RTL in the OpenPiton multi-core research platform (https://cea.hal.science/cea-04772235/document).
To ease programming though, we would like to test software correctness using a high-level simulator. It would be faster than relying on RTL simulation.
Interfacing Spike with Sim-X would allow us to simulate functionaly our heterogeneous CPUs+GPU shared-memory architecture, hence allowing us to ease future software development.

*Skill level:* Intermediate

*Duration:* medium (175 hours)

*Language/Tools:* C++, RISC-V GNU Cross-compiler, Vortex LLVM compiler

*Mentor:* [Davy Million](mailto:davy.million@cea.fr)

### Capiche system development


The purpose of this project is to expand the set of scripts in the github repository [RTimothyEdwards/capiche](https://github.com/RTimothyEdwards/capiche) into a system for understanding and modeling parasitic capacitance in a foundry process.  This is ideally done using a Jupyter notebook and taking advantage of the existing Python scripts, but allow users to simulate and plot capacitance over a number of different variables.

The system should make it convenient for the user to create a set of model equations representing parasitic capacitance and then measure the accuracy vs. simulation by the field equation solver FasterCap.

Plots should be made interactive with matplotlib instead of the current method of generating static SVG images.

Plots should be extended to include surface plots over two variables.

Time permitting (e.g., 350 hour internship instead of 175 hour), the internship can include extending the FasterCap input file format to include 3-dimensional geometry.  Ideally, one would make a layout in magic, and convert the layout directly into an input file for FasterCap using the routines in Capiche plus some parsing of the 2D layout file.

*Skill level:*   Intermediate/Advanced

*Duration:* medium or long (175 or 350 hrs)

*Languages:* Python + scipy and matplotlib, C, Jupyter notebooks

*Tools:* Magic, FasterCap, Octave

*Mentors:* [Tim Edwards](tim@opencircuitdesign.com)

### Scaling Essent's SystemVerilog Simulation with metro-MPI

[Essent](https://github.com/ucsc-vama/essent) is a high-performance RTL simulator generator. Given a hardware design in firrtl, essent emits C++ that can be compiled to make a fast simulator of the design. Essent provides several optimizations to improve performance, and they can be turned on or off with command line flags. [Metro-MPI](https://github.com/metro-mpi/metro-mpi) is a generic methodology to distribute RTL simulation and unlock SoCs’ inherent parallelism. We partition well-defined blocks within designs into isolated simulation processes that communicate via MPI message passing. Metro-MPI works particularly well with replicated blocks of comparable size, such as manycores with NoCs.

We would love you to add the support of metro-MPI inside Essent. In this way, Essent can use MPI to communicate between the different partitions of the design and even influence when creating the partitions. The project will be divided into two big milestones: the initial task is to use the methodology from Metro-MPI to speed up the simulation (e.g. using messages with MPI to communicate between partitions); the second task would be to influence the partitions of the design to ease the usage of MPI between them.

Essent uses Scala, and Metro-MPI is implemented in Verilog and C++. Additionally, some background in hardware design is useful.

*Skill Level:* Medium/Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* C++, Scala, MPI, SystemVerilog

*Mentors:* [Guillem López Paradís](mailto:guillem.lopez@bsc.es) and [Jonathan Balkind](mailto:jbalkind@ucsb.edu)

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

### Seamless multi-frontend support for OpenLane 2

OpenLane 2 currently supports handling multiple frontends for compilation:
* Yosys Default - Verilog
* Synlig - SystemVerilog
* GHDL - VHDL

However, in the cases of VHDL and Verilog specifically– there is no way to mix and match Verilog and VHDL in one design, for example, which is common when reusing IPs.

This task proposes a retool to OpenLane synthesis to, instead of having two different flows (`Classic` and `VHDLClassic`),one flow accepting a heterogeneous list of files, which can then be inspected to determine the proper frontend to be used.

The task(s) may involve enhancements to one or more of the frontends, as well as the addition of more frontends from languages such as Chisel and Amaranth.

*Skill level:* Intermediate

*Duration:* 175 hrs.

*Language/Tools:* Python, Verilog, Nix

*Mentor:* [Mohamed Gaber](mailto:donn@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Testing for OpenLane 2

*Details:*  OpenLane is the world's most popular open-source RTL-to-GDSII flow. However, testing and coverage is still somewhat lacking as of 2023. There are two tasks that may be done to enhance this, ideally worked on by two candidates but can be done by the same candidate over a longer period:

* Expanding unit test coverage for Python for included steps and functions. There are already some non-exhaustive tests for OpenLane 2, and the candidate may add more tests to both exercise more options in existing steps and to break ground on uncovered steps.
* Creating an exhaustive design suite out of various open source projects that exercise the limits of OpenLane 2, including more niche use-cases.

*Skill level:* Intermediate

*Duration:* 175 hrs (two candidates,) 350 hrs (one candidate)

*Language/Tools:* Python, Verilog, Docker (or Nix)

*Mentor:* [Kareem Farid](mailto:kareem.farid@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Improving Fault's Regression Test Coverage

*Details:* [Fault](https://github.com/AUCOHL/Fault) is an open-source Design-for-Testability (DFT) toolchain that stands out as a comprehensive solution in the EDA space.

However, for its regular testing, Fault runs on very small, very specific designs, and does not run designs on the sky130 node as part of its regular testing. Additionally, the CI is quite brittle.

This task involves expanding Fault's CI coverage by adding multiple designs for sky130 and other PDKs, as well as fixing any bugs uncovered by this effort.

*Skill level:* Intermediate-Advanced

*Duration:* 350 hrs.

*Language/Tools:* Swift, Python, Verilog, Nix

*Mentor:* [Mohamed Gaber](mailto:donn@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Improving ATPG fault coverage in Fault

*Details:* [Fault](https://github.com/AUCOHL/Fault) is an open-source Design-for-Testability (DFT) toolchain that stands out as a comprehensive solution in the EDA space. The key capabilities of Fault include generating test vectors (TVs), simulating faults, and inserting scan chains into designs. This toolchain leverages existing open-source EDA technologies to perform these functions on synthesized netlists. 

This project aims to significantly enhance the effectiveness of Fault by optimizing its test vector generation process using advanced algorithms rather than pseudo-random vector generation and automating the insertion of control and observation points. By adopting these strategies, we expect to be able to achieve higher coverage for designs run through Fault.

Candidate is expected to be familiar with Design-for-Testability (DFT) and RTL synthesis.

*Skill level:* Intermediate-Advanced

*Duration:* 350 hrs.

*Language/Tools:* Swift, Python, Verilog

*Mentor:* [Mohamed Hosni](mailto:mohamed.hosni@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### RTL verification using Generative AI

This project's objective is a novel approach for the verification Register Transfer Level (RTL) IPs by leveraging the generative AI and UVM for Python (utilizing the CocoTB library).

The task chiefly involves prompt engineering to enable a large language model (LLM) to produce proper UVM components for the IPs under verification.

*Skill level:* Intermediate

*Duration:* 175 hrs.

*Language/Tools:* Python, Verilog, UVM, CocoTB, genAI APIs 

*Mentor:* [Mostafa Rady](mailto:mostafa.rady@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Extending Verilator with insertion customization

*Details:* Verilator is a popular simulator for digital designs. For special simulations, such as fault injection simulation, it would be useful to have the ability to configure parts of the design where specific elements are inserted. This perfectly integrates into the flow of model creation and keep optimization high.

*Skill level:* Advanced

*Language/Tools:* C++

*Duration:* 350 hrs

*Mentors:* [Stefan Wallentowitz](mailto:stefan.wallentowitz@hm.edu)

