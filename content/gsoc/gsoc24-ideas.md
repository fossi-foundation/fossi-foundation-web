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
*Details:* BlackParrot aims to be the default open-source, Linux-capable, cache-coherent, RV64GC multicore used by the world. It has been FPGA and Silicon-validated as an industry-strength design with leading efficiency. We wish to make it even tinier. This project will look into various size optimizations which may include parameterizing out support for the RISC-V MFD extensions or remapping FPGA primitives using the portability layer in BaseJump STL. The final optimizations may depend on the applicant's skill set. At the end of this project, we hope to use the ZynqParrot infrastructure to fit a BlackParrot multicore into affordable educational FPGA boards such as the Z2!

*Skill level:* intermediate

*Project length:* medium (175 hours)

*Mentors:* [Dan Petrisko](mailto:petrisko@cs.washington.edu), [Michael Taylor](mailto:prof.taylor@gmail.com)

*Language/Tools:* SystemVerilog, some knowledge of computer architecture, RISC-V knowledge preferred but not required

### Building Manycore SoCs with OpenPiton + LiteX
[LiteX](https://github.com/enjoy-digital/litex) makes building FPGA-based SoCs easy. Using the Python hardware design library Migen, LiteX provides a variety of peripherals to enable users to build a complex SoC around a core of their choice. For this project, we would like to connect a manycore [OpenPiton](http://www.openpiton.org/) processor design in order to build a new manycore LiteX SoC.

*Skill level:* Intermediate

*Duration:* 175 hours or 350 hours

*Language/Tools:* Python (Migen), Verilog

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu)


### Using AI to Improving Open-Source IP

What if we could instantly improve all the existing open-source Verilog by reducing its size, improving its maintainability, making it more configurable, identifying bugs, and creating visualization for it? How could you possibly do all those things over one summer as a student? Well, you can't. But you could help to make significant strides in that direction.

Transaction-Level Verilog (TL-Verilog) models are smaller, cleaner, and less bug-prone than their Verilog counterparts. But there's not much TL-Verilog in the wild yet. Advancements in AI make it feasible to automate the process of converting existing Verilog models to TL-Verilog. If you ask ChatGPT to convert your code today, you won't be happy with the results. But with careful coaching, AI models can be trained for the job. Through a series of incremental conversion steps, backed by formal verification, LLMs can get the job done. Automation and human intervention will be important in the process.

Optionally/alternately, we can also explore the use of AI to generate visualization for Verilog and/or TL-Verilog circuits using the Visual Debug feature of the Makerchip.com platform.

*Skill level:* Advanced

*Duration:* 350 hours

*Language/Tools:* Verilog, TL-Verilog, EQY (EQuivalence checking with Yosys), ChatGPT API, Python, optionally: JavaScript, Visual Debug API

*Repo:* https://github.com/stevehoover/conversion-to-TLV

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)


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


### VS Code Extension for TL-Verilog

VS Code has become the editor of choice for most developers. While a VS Code extension exists for TL-Verilog, it could use an update and improvements. It may even be possible to go beyond text editing and integrate some of the capabilities of Makerchip into VS Code, such as waveform viewing and simulation visualization. Code compilation (using SandPiper-SaaS) should be added at a minimum.

*Skill level:* Intermediate/Advanced

*Duration:* 175 or 350 hours

*Language/Tools:* TypeScript

*Repo:* https://github.com/adamint/tlv-vscode

*Mentor:* [Steve Hoover](mailto:steve.hoover@redwoodeda.com)

### Other TL-Verilog-Related Projects

If you are interested in the TL-Verilog ecosystem, you might also consider any of these [TL-Verilog project ideas](https://github.com/stevehoover/TL-V_Projects). All would make excellent GSoC projects and mentors can be identified.


### Architectural Improvements to OpenPiton+Ariane
[OpenPiton+Ariane](https://openpiton-blog.princeton.edu/2018/11/announcing-openpiton-with-ariane/) is a permissively-licensed RISC-V manycore processor, built as a collaboration between the [PULP Platform](https://www.pulp-platform.org/) from ETH Zürich and the [OpenPiton Platform](http://www.openpiton.org/) from Princeton University. We would like to co-optimise OpenPiton and Ariane/CVA6 in their combined platform, to improve performance of the processor both in FPGA emulation systems and for eventual silicon chips. One possible idea this year is to implement the RISC-V cache management operation (CMO) extensions. We are open to many potential projects aimed at improving the performance of aspects of either Ariane/CVA6 or OpenPiton and encourage you to get in touch to discuss ideas.

*Skill level:* Intermediate

*Duration:* 175 or 350 hours

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu), [Nils Wistoff](mailto:nwistoff@iis.ee.ethz.ch)

### Transforming the OpenHW High Performance Data Cache into a High Performance Instruction Cache
The CVA6/Ariane core supports several different L1 data caches for different contexts and user demands. CEA are leading a new effort building a high performance data cache (HPDC) which was recently integrated into CVA6. This project would extend the HPDC to make it usable as an instruction cache.

*Skill level:* Intermediate

*Duration:* 350 hours

*Language/Tools:* Verilog, SystemVerilog, RISC-V

*Mentor:* [Jonathan Balkind](mailto:jbalkind@ucsb.edu), [César Fuguet Tortolero](mailto:Cesar.FUGUETTORTOLERO@cea.fr)

### OpenRISC Linux Feature Development

The OpenRISC Linux kernel support is under constant development but there are
certain Linux facilities that are not yet used or available on the OpenRISC
platform.

This project will have the student developing, testing and sending patches up to
the Linux kernel.  This includes:

* Develop [rseq](https://lwn.net/Articles/650333/) support to OpenRISC Linux
  and glibc.
* Use the cacheinfo API for reporting CPU details in OpenRISC Linux.
* Add [virtio](https://developer.ibm.com/articles/l-virtio/) support to OpenRISC
  Linux which would allow running OpenRISC containers.

*Skill level:* Advanced

*Project Length:* large

*Language/Tools:* Linux, C, Assembly, OpenRISC architecture

*Mentor:* [Stafford Horne](mailto:shorne@gmail.com)

### Embench DSP Extensions

We will be developing a set of new digital signal processing benchmarks to add to the current suite of Embench DSP benchmarks.  The starting point will be the current suite of DSP benchmarks (FIR, IIR, and FFT).  New benchmarks will be run on a microprocessor and its performance evaluated.

These new benchmarks will be added to the Embench DSP suite and be made available to the world.

There will the opportunity to engage with students at Rice University who are also working on the project.

*Skill level:* Beginner (accessible to students who have some programming experience and are willing to learn)

*Project length:* medium

*Mentors:* Ray Simar ([email](mailto:ray.simar@rice.edu)).

*Language/Tools:* C, embedded platforms on which to evaluate the benchmarks.

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

### Porting Compiler test-suite (micro-benchmarks) to Embench

Embench contains several benchmarks for IoT, benchmarks targeting performance, and code-size comparison. One missing piece is a compiler test-suite.

The project goal is to port the [riscv32-Code-density-test-bench](https://github.com/westerndigitalcorporation/riscv32-Code-density-test-bench) to Embench IoT new repo. The effort will include porting the Embench build system, bringing up the repo for users (instructions, build, and full run), adding "correctness testing" to the test suite.

*Skill level:* Beginner (some experience with C Python and Git).

*Project length:* medium

*Mentors:* Ofer Shinaar ([email](mailto:Ofer.Shinaar@wdc.com)) assisted by one of his colleagues (name TBC).

*Language/Tools:* C, embedded platforms on which to evaluate the benchmarks.

### Klayout ASAP7 DRC and LVS decks

ASAP7 PDK is a 7-nm predictive process design kit (PDK) c, developed by Arizona State University in collaboration with ARM Ltd. for academic use. The PDK is realistic, based on current assumptions for the 7-nm technology node. Currently, there is an effort to port ASAP7 to OpenLane. To complete the port, ASA7 technology files must be ported to physical verification tools used by OpenLane.

The objective of this project is to develop ASAP7 Design Rules Checker (DRC) and Layout vs. Schematic (LVS) technology files for Klayout. Also, the scope of the project includes the development of a CI regression test suite.

*Skill level:* intermediate

*Project length:* medium

*Language/Tools:*  Python, Ruby and Klayout

*Other requirements:* Good EE background

*Mentors:* [Mohamed Shalan](mailto:mshalan@efabless.com),  [Mohamed Kassem](mailto:mkk@efabless.com)


### Parameterized device layouts for Sky130

The purpose of this project is to expand the set of available parameterized devices available in magic for use with the SkyWater Sky130 foundry process.  These devices are created using an existing framework written in Tcl/Tk, although most of the code involves magic command-line commands (which are implemented in Tcl).  Only a basic understanding of Tcl variables, conditionals, loops, and subroutine calls is needed.

Existing devices could use more thorough checks of DRC cleanliness across a wide range of parameters.  FET devices could use an option to have all gate contacts merged into a single net, which would also allow a tighter pitch for the smallest length devices.

New devices of interest that have not yet been done in parameterized cells include (but are not limited to):  The photodiode, extended-drain MOSFETs, bipolar transistors, ESD transistors, inductors, metal fuses, UHV (ultra-high-voltage) devices.

Each new device should follow the design specifications for device layout from the SkyWater DRC manual, and needs to implement five routines that (1) define the device parameters and limits, (2) convert parameters from a SPICE netlist, (3) define the user interface dialog (UI) for setting those parameters, (4) check and enforce parameter limits, and (5) draw the device. After implementing, each device needs to be checked for DRC correctness by generating a "torture test" of a large array of devices with different sets of parameters which can be passed to the DRC checkers to make sure that the drawing routine produces DRC clean layouts.

*Skill level:* Intermediate/Advanced

*Duration:* medium (175 hours)

*Language/Tools:* Tcl/Tk, Magic

*Mentors:* [Tim Edwards](tim@opencircuitdesign.com)


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

### Enhancing the Sootty Terminal-based Graphical Waveform Viewer

[Sootty](https://github.com/Ben1152000/sootty) is a terminal-based waveform viewer that can be used to display the contents of a VCD file. It is written in Python in order to leverage the read-eval-print loop to enable interactive hardware debugging. It also provides a textual query language that lets the user search a waveform for interesting events to assist in debugging.

We are interested in developing a more robust backend to better support real-world designs, some of which contain gigabytes of data that must be efficiently stored and parsed. The goal for this project is to incorporate [polars](https://github.com/pola-rs/polars), a fast DataFrame library with Python bindings in order to improve the tool’s scalability and overall performance.

*Skill Level:* Beginner-Intermediate

*Duration:* 175 or 350 hours

*Language/Tools:* Python

*Other Requirements:* Familiarity with basic data structures/algorithm design

*Mentors:* [Benjamin Darnell](mailto:bzd2@illinois.edu), [Jonathan Balkind](mailto:jbalkind@ucsb.edu)

### Multiple Frontends for OpenLane
*Details:* OpenLane lacks support for many popular HDLs, including the previously DARPA-endorsed VHDL which continues to be popular in FPGA spaces and the European EDA scene, Chisel/FIRRTL, a Scala-based HDL and intermediate representation of integrated circuits, and BSV by Bluespec, a popular variant of SystemVerilog.

The project will entail both adding support for these frontends as well as adding a set of designs as tests.

*Skill level:* Beginner-Intermediate

*Duration:* 175 hrs.

*Language/Tools:* Python, Verilog, Docker (or Nix)

*Mentor:* [Mohamed Gaber](mailto:donn@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Testing for OpenLane
*Details:*  OpenLane is the world's most popular open-source RTL-to-GDSII flow. However, testing and coverage is still somewhat lacking as of 2023. There are two tasks that may be done to enhance this, ideally worked on by two candidates but can be done by the same candidate over a longer period:

Write an extensive Python unit test suite for an upcoming version of OpenLane, including for all included steps and functions. A candidate is to explore and evaluate the various Python test libraries, present a good option, then embark on writing the unit tests.
Create an exhaustive design suite out of various open source projects that exercise the limits of the OpenLane project, including niche use-cases.

*Skill level:* Intermediate

*Duration:* 175 hrs (two candidates,) 350 hrs (one candidate)

*Language/Tools:* Python, Verilog, Docker (or Nix)

*Mentor:* [Mohamed Gaber](mailto:donn@efabless.com), [Mohamed Shalan](mailto:mshalan@efabless.com)

### Remove X11-specific code and redundant backends from Magic and enhance C99 adherence
*Details:* The Magic VLSI utility, the primary signoff tool for OpenLane, does not compile on platforms without X11 support. As a layout viewer, Magic uses a mixture of X11 + Cairo to render its various views. Additionally, large swaths of the codebase are not C99-adherent, with declaration problems and the like.

This prevents it from compiling properly on some platforms we're looking to target, such as macOS and Windows.

The project will entail replacing the X11 and optional OpenGL dependencies on simple, pure Cairo code.

*Skill level:* Advanced

*Language/Tools:* C, Tcl/Tk, Magic

*Duration:* 175 or 350 hrs.

*Mentors:* [Mohamed Gaber](mailto:donn@efabless.com), Tim Edwards

### Extending Verilator with insertion customization

*Details:* Verilator is a popular simulator for digital designs. For special simulations, such as fault injection simulation, it would be useful to have the ability to configure parts of the design where specific elements are inserted. This perfectly integrates into the flow of model creation and keep optimization high.

*Skill level:* Advanced

*Language/Tools:* C++

*Duration:* 350 hrs

*Mentors:* [Stefan Wallentowitz](mailto:stefan.wallentowitz@hm.edu)

