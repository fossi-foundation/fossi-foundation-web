---
title: "Google Summer of Code 2025 - Ideas for Projects"
navigation: false
---

FOSSi Foundation is applying as an umbrella organization for Google
Summer of Code 2025. That means that we give FOSSi community projects the
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

## ZynqParrot RISC-V Tracer

ZynqParrot (https://github.com/black-parrot-hdk/zynq-parrot) is a framework for doing self-contained, FPGA-based "hostless" ASIC accelerator development. It is designed to be extremely general and has been used to prototype IP from individual ASIC/FPGA cores to full multicore processors. In addition, ZynqParrot has been used to bringup N=1 ASIC silicon in the lab. 

RISC-V provides a trace format specification (https://github.com/riscv-non-isa/riscv-trace-spec) which can be used for diagnostic performance and debugging. This project will design and integrate a RISC-V Trace implementation into the ZynqParrot environment, requiring SystemVerilog implementation + testing, Block Diagram (Vivado IPI) design and well as writing C++ driver to work in both Co-Simulation and Co-Emulation.

*Skill level:* intermediate

*Project length:* medium (175 hours)

*Mentors:* [Dan Petrisko](mailto:petrisko@cs.washington.edu)

*Language/Tools:* SystemVerilog, C++, some knowledge of computer architecture. RISC-V knowledge preferred but not required. FPGA tools such as Vivado strongly encouraged but not required.

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

### Scaling Essent's SystemVerilog Simulation with metro-MPI

[Essent](https://github.com/ucsc-vama/essent) is a high-performance RTL simulator generator. Given a hardware design in firrtl, essent emits C++ that can be compiled to make a fast simulator of the design. Essent provides several optimizations to improve performance, and they can be turned on or off with command line flags. [Metro-MPI](https://github.com/metro-mpi/metro-mpi) is a generic methodology to distribute RTL simulation and unlock SoCs’ inherent parallelism. We partition well-defined blocks within designs into isolated simulation processes that communicate via MPI message passing. Metro-MPI works particularly well with replicated blocks of comparable size, such as manycores with NoCs.

We would love you to add the support of metro-MPI inside Essent. In this way, Essent can use MPI to communicate between the different partitions of the design and even influence when creating the partitions. The project will be divided into two big milestones: the initial task is to use the methodology from Metro-MPI to speed up the simulation (e.g. using messages with MPI to communicate between partitions); the second task would be to influence the partitions of the design to ease the usage of MPI between them.

Essent uses Scala, and Metro-MPI is implemented in Verilog and C++. Additionally, some background in hardware design is useful.

*Skill Level:* Medium/Advanced

*Duration:* 175 hours or 350 hours

*Language/Tools:* C++, Scala, MPI, SystemVerilog

*Mentors:* [Guillem López Paradís](mailto:guillem.lopez@bsc.es) and [Jonathan Balkind](mailto:jbalkind@ucsb.edu)

### Seamless multi-frontend support for OpenLane

*Details:* OpenLane is the premier open source RTL-to-GDSII flow. Versions 2.0+
currently support handling multiple frontends for compilation:

* Yosys Default - Verilog
* Synlig - SystemVerilog
* GHDL - VHDL (x86-64-only)

However, in the cases of VHDL and Verilog specifically– there is no way to mix
and match Verilog and VHDL in one design, for example, which is common when
reusing IPs.

This task proposes a retool to OpenLane synthesis to, instead of having two
different flows (`Classic` and `VHDLClassic`), have one flow accepting a
heterogeneous list of files, which can then be inspected to determine the proper
frontend to be used.

The task(s) may involve enhancements to one or more of the C++-based Yosys
frontends, as well as the addition of more frontends for languages such as
Chisel and Amaranth.

*Skill level:* Intermediate

*Duration:* 175 hrs.

*Language/Tools:* Python, Verilog, C++, Nix

*Mentor:* [Kareem Farid](mailto:kareem.farid@efabless.com),
  [Mohamed Shalan](mailto:mshalan@efabless.com)


### OpenLane Web-based Graphical User Interface

*Details:* OpenLane is the premier open source RTL-to-GDSII flow. Versions 2.0
or higher's modular architecture allows for constructing complex flows using
nodes called "steps,"  Users who are adept in Python can create many such
complex flows, including flows that are parallel. A web-based GUI of some kind
(based on a library such as ReactFlow https://reactflow.dev) would greatly
enhance the ability of novice users to create custom OpenLane-based flows with
ease.

*Skill level:* Beginner or Intermediate

*Duration:* 175 hrs.

*Language/Tools:*: TypeScript (React), Python

*Mentor:* [Mohamed Gaber](mailto:donn@efabless.com),
  [Mohamed Shalan](mailto:mshalan@efabless.com)

### Extending Verilator with insertion customization

*Details:* Verilator is a popular simulator for digital designs. For special simulations, such as fault injection simulation, it would be useful to have the ability to configure parts of the design where specific elements are inserted. This perfectly integrates into the flow of model creation and keep optimization high.

*Skill level:* Advanced

*Language/Tools:* C++

*Duration:* 350 hrs

*Mentors:* [Stefan Wallentowitz](mailto:stefan.wallentowitz@hm.edu)

