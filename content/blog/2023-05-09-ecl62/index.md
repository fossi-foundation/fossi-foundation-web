---
layout: post
title: "El Correo Libre Issue 62"
description: El Correo Libre Newsletter, Issue 62
author: Gareth Halfacree
date: 2023-05-09
---

<img src="/blog/2023-05-09-ecl62/opentitan.jpg" style="max-width:100%" />

## The OpenTitan Project Hits a Major Milestone: RTL Feature Freeze

The OpenTitan project, created by lowRISC as a fully-open silicon root of trust (RoT), has reached a significant milestone: the full feature freeze of its register transfer level (RTL) design.

"Together with our partners, we began the OpenTitan project in 2019 with the goal of producing the world's first open-source silicon Root of Trust," says lowRISC chief executive Gavin Ferris of the project's progress. "With this new achievement we are a step closer to realising that goal.

"Getting to this point has taken a lot of coordinated work, as we’ve had to navigate the many stumbling blocks that have traditionally made open-source silicon development a challenge. In a recent article for EETimes, where we first made this announcement, we discussed the seven 'deadly sins' that have kept open-source silicon from reaching its full potential — and how OpenTitan has addressed these difficulties, starting with our Silicon Commons framework.

"By following this framework — which mandates a scrupulously neutral and strictly enforced governance approach, a mature, shared continuous integration, verification and development infrastructure, and a rigorous collaborative development workflow — we have flipped those seven sins into seven virtues," Gavin claims.

Those virtues, as seen by lowRISC: strong commercial viability with a sustainable business plan; a fully open repository, which should be open from the start of development; known-good IP provenance and interoperability; high-quality design verification (DV) collateral and infrastructure with accessible dashboards; high-quality documentation; strong governance structures and community guidance; and a "laser-focus" on solving real-world problems.

Gavin's full article is available [on EE Times](https://www.eetimes.com/ushering-in-a-new-era-for-open-source-silicon-development/) now, while [the OpenTitan GitHub repository](https://github.com/lowrisc/opentitan) hosts the project under the permissive Apache 2.0 licence.

<img src="/blog/2023-05-09-ecl62/chipignite.jpg" style="max-width:100%" />

## Efabless Plans an Open-Source Shuttle Competition with Four Slots


Matt Venn, open silicon developer, Zero to ASIC educator, and host of the Open Source Silicon News Update on YouTube, has teased Efabless' plans to run a new open silicon shuttle with free entry - and a judging panel to see which projects will be selected.

"They've announced a new open-source shuttle competition," Matt revealed on his latest video update. "That's going to be a limited number of free slots on their chipIgnite service - that's the $10,000 for 100 QFN or 300 wafer-level chip-scale package parts - and there'll be a to-be-decided process on how you can get your chips made.

"So far we're thinking there's going to be four slots to win - two full size and two with four designs each, so enough to make ten different designs. You have to submit a proposal first [and] there will be a minimum level of quality to enter the competition. Votes can be given by the community, and there'll be a final decision made by a panel of judges to be selected."

Matt's discussion on the subject is available [on YouTube now](https://www.youtube.com/watch?v=Mvx319O8NEo&t=350s), though Efabless has yet to post about the competition on its website.

<img src="/blog/2023-05-09-ecl62/wasmeronriscv.jpg" style="max-width:100%" />

## Wasmer 3.2 Brings the Project's First Support for RISC-V Chips


The Wasmer project has announced the latest release of its open-source WebAssembly runtime, Wasmer 3.2, and it comes with a big change over previous releases: support for running on RISC-V hardware.

"One of the main promises of WebAssembly is to run software anywhere, with no boundaries regarding the operating system (Windows, Linux, or macOS) or the chipset (x86_64, ARM64, …)," explains Wasmer's Sébastien Chevalier. "On that front, we have worked for over a year on adding support for RISC-V.

"We would like to give a big shoutout and thanks to Toru Nayuki, who created the initial implementation PR that sparked our interest in RISC-V. A few months after the initial PR was opened, we were able to get our hands on a RISC-V board. And some tests and dependency updates later, we are now very excited to see how anyone can use Wasmer fully in RISC-V chipsets (with support in both compilers: Cranelift and LLVM!)"

The RISC-V release is fully supported in the Wasmer project's automated installer, and also [distributed as a pre-compiled executable](https://github.com/wasmerio/wasmer/releases/latest) in a compressed tarball. The project's source code, meanwhile, is available [on the Wasmer GitHub repository](https://github.com/wasmerio/wasmer) under the permissive MIT licence.

<img src="/blog/2023-05-09-ecl62/skybox.jpg" style="max-width:100%" />

## Skybox Paper Describes the First Vulkan-Compatible RISC-V GPU Stack


Researchers at the Georgia Institute of Technology and California Polytechnic State University have published a paper unveiling Skybox, claimed to be the world's first open-source full-stack graphics processing unit (GPU) hardware and software implementation with support for the Vulkan application programming interface (API).

"Skybox, a full-stack open-source GPU architecture with integrated software, compiler, hardware, and simulation environment, that enables end-to-end GPU research," its creators claim in the abstract to their paper. "Using Skybox, we explore the design space of software versus hardware graphics rendering and propose and hybrid micro-architecture that accelerates the state-of-the art Vulkan graphics API.

"Skybox also introduces novel compiler and system optimizations to support its unique RISC-V ISA baseline. We evaluated Skybox on high-end Altera and also Xilinx FPGAs. We were able to generate and execute a 32 core (512 threads) Skybox graphics processor on Altera Stratix 10 FPGA, delivering a peak fill rate of 3.7 GPixels at 230 MHz."

Skybox itself is based on the RISC-V instruction set architecture, but with a custom extension dedicated to accelerating graphics rendering workloads. The team also developed a hybrid stack management architecture for the project, extending the stack space of the GPU to better support graphics workloads - workloads which are distributed between a fixed-function and a programmable shader pipeline.

"Our work stems from the open-source Vortex project," the researchers say, "that implements a full-scale GPGPU [General-Purpose GPU] process on FPGA, [but] the Vortex microarchitecture lacks the graphics pipeline needed to accelerate 3D rendering applications. Skybox implements the modern Vulkan graphics API for the first time on open-source hardware. Existing GPU simulators support OpenGL, an older API which modern applications often no longer support.

The team's work has been published under open-access terms in the [_Proceedings of the 28th ACM International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS 2023)_](https://dl.acm.org/doi/abs/10.1145/3582016.3582024).

<img src="/blog/2023-05-09-ecl62/openriscfpu.jpg" style="max-width:100%" />

## Stafford Horne Details the OpenRISC Floating Point Unit Port


Software engineer Stafford Horne has written a post detailing the work that has gone into updating the OpenRISC architecture specification to support user-space floating point applications.

"The FPU in modern CPU’s allow the processor to perform IEEE 754 floating point math like addition, subtraction, multiplication," Stafford explains. "When used in a user application the FPU’s function becomes more of a math accelerator, speeding up math operations including trigonometric and complex functions such as sin, sinf and cexpf. OpenRISC FPU support was added to the GCC compiler a while back.

"So if the OpenRISC toolchain already has support for FPU instructions what else needs to be done? When we add FPU support to glibc we are adding FPU support to the OpenRISC POSIX runtime and create a toolchain that can compile and link binaries to run on this runtime. As we started to work on the floating point support we found two issues: the OpenRISC floating point control and status register (FPCSR) is accessible only in supervisor mode, [and] we have not defined how the FPU should perform tininess detection.

"Writing to FPCSR from user-mode could be worked around in OpenRISC by introducing a syscall, but we decided to just change the architecture specification for this," Stafford writes of the way the above issues were resolved. "Updating the spec keeps it similar to all other architectures out there. In OpenRISC we have defined tininess detection to be done before rounding as this matches what existing FPU implementation have done.

"As of architecture specification revision 1.4 the FPCSR is defined as being writeable in user-mode and we have documented tininess detection to be before rounding."

Stafford's full write-up is available [on his blog](http://stffrdhrn.github.io/hardware/embedded/openrisc/2023/04/25/or1k-fpu-port.html), while the specification changes are live [in OpenRISC 1.4](https://openrisc.io/revisions/r1.4).

<img src="/blog/2023-05-09-ecl62/fusesoc.jpg" style="max-width:100%" />

## Olof Kindgren Details the Features and Fixes in FuseSoC 2.2


FOSSi Foundation director Olof Kindgren has announced FuseSoC 2.2, the latest version of the award-winning package manager and build tool set for projects in Hardware Description Language (HDL).

"Do you know the best way to find out who is using your open source software? Introduce bugs," Olof jokes. "You will suddenly come in touch with a lot of users you didn't know existed. And let's just say I found out about a lot of new users after the release of FuseSoC 2.1. And with FuseSoC 2.1 having a lot of new features, it's perhaps not too surprising that the odd bug crept in.

"A big one was that users of the old tool API (which I believe is still most users) noticed that the FPGA image or simulation model was not rebuilt when source files were changed. The new flow API has some properties that allows us to track changes in a much better way and avoids unnecessary rebuilds in many cases. Unfortunately, when these changes were made we didn't properly test how that affected the tool API."

While the new release fixes the above bug, and others, it also includes a few new features of its own - including tag support. " It's now possible to set tags for files or filesets, very much like we can set file_type or logical_name today. FuseSoC itself doesn't care about the tags, but they are passed on to Edalize through the EDAM file," Olof explains.

"This change opens up for use-cases such as gate-level simulation where we first send our code through a synthesis tool and then the created netlist is simulated together with a testbench. By marking the testbench files with simulation, we tell the synthesis tools to not try to synthesize them into the netlist but instead pass them on to the simulator untouched. I suspect we will see a whole bunch of more use-cases in the future."

More details on the new release, including the introduction of a JSON Schema definition of the CAPI2 format to improve maintainability and potentially turn CAPI2 into a stand-alone project, are available [on Olof's blog](https://blog.award-winning.me/2023/04/fusesoc-22.html); FuseSoC is available [on GitHub](https://github.com/olofk/fusesoc) under the permissive BSD two-clause licence.

<img src="/blog/2023-05-09-ecl62/riscv-logo.jpg" style="max-width:100%" />

## RISC-V Ratifies the Code Size Reduction Extension


The RISC-V project has officially ratified the Code Size Reduction Extension, Zc*, which targets RISC-V microcontrollers and other resource-constrained implementations, and has frozen it ready for implementation.

"Zc* is a group of extensions which define subsets of the existing C extension (Zca, Zcd, Zcf) and new extensions which only contain 16-bit encodings," RISC-V International explains of the newly-ratified extension, which is feature-frozen and ready for implementation. "Zcm* all reuse the encodings for c.fld, c.fsd, c.fldsp, c.fsdsp."

"For anyone not familiar with this," explains former SiFive developer Bruce Hoult [in a Reddit post](https://www.reddit.com/r/RISCV/comments/1354jgt/riscv_code_size_reduction_release_v10_ratified/) on the topic, "it is a group of three medium sized extensions adding 12 instructions in Zcb, 6 instructions in Zcmp, and 2 instructions in Zcmt. All new instructions are 2 bytes in size. What has until now been known as 'C' is now some or all of Zca + Zcf + Zcd, as appropriate."

The freshly-ratified extension is detailed in the V1.0 release [on the project's GitHub repository](https://github.com/riscv/riscv-code-size-reduction/releases/tag/v1.0).

<img src="/blog/2023-05-09-ecl62/mempool.jpg" style="max-width:100%" />

## MemPool Offers a Scalable Many-Core Architecture with Shared L1 Memory


Researchers from the Swiss Federal Institute of Technology have released a permissively-licensed many-core RISC-V system with shared low-latency L1 memory - scaling, they say, to hundreds of processing elements (PEs).

"MemPool [is] a many-core system with 256 RV32IMAXpulpimg 'Snitch' cores featuring application-tunable functional units," the researchers explain of the project. "We designed and implemented an efficient low-latency PE to L1-memory interconnect, an optimised instruction path to ensure each PE's independent execution, and a powerful DMA engine and system interconnect to stream data in and out.

"MemPool is easy to program, with all the cores sharing a global view of a large, multi-banked, L1 scratchpad memory, accessible within at most five cycles in the absence of conflicts. We provide multiple runtimes to program MemPool at different abstraction levels and illustrate its versatility with a wide set of applications. MemPool runs at 600MHz (60 gate delays) in typical conditions (TT/0.80V/25°C) in 22nm FDX technology and achieves a performance of up to 229 GOPS or 192 GOPS/W with less than 2% of execution stalls."

The team's test implementation, built on GlobalFoundries' 22DFX process node, occupies an area of 12.9mm², achieving "very high performance and comes close to an ideally scaled system," the team claims, "e.g. full linear speedup."

The paper detailing MemPool is available as a preprint [on the Cornell arXiv server](https://arxiv.org/abs/2303.17742), while the source has been published [to GitHub](https://github.com/pulp-platform/mempool) under the permissive Apache 2.0 licence.

<img src="/blog/2023-05-09-ecl62/tinytapeout3.jpg" style="max-width:100%" />

## Tiny Tapeout 3 Sees 100 Submissions, Including a DEC PDP-8 CPU


Matt Venn has offered a look into the projects which were submitted for production as part of the third Tiny Tapeout run - designed to introduce newcomers to the world of silicon design and production.

"Tiny Tapeout 3 closed on Monday, and I've been putting together the statistics and getting the datasheet built," Matt explains. "We had 100 submissions (25% from universities) and I filled the remaining space with 149 designs submitted to Tiny Tapeout 2.

"135 designs were Verilog, 94 were Wokwi and the remainder were other HDLs or HLS. 80k standard cells were used and 4 meters of wire to join them all up! My top project picks included a PDP8 cpu, prime number detector, a very interesting temperature sensor that somehow managed to be analogue despite being built out of standard cells, a guitar tuner, an MSF radio bitstream decoder, and a ring oscillator based temperature sensor."

Full details of the designs in Tiny Tapeout 3 are available [on the project website](https://tinytapeout.com/runs/tt03/), with additional information [in Matt's Mastodon thread](https://chaos.social/@matthewvenn/110270846086316373).

<img src="/blog/2023-05-09-ecl62/spiram.jpg" style="max-width:100%" />

## Olof Kindgren's SPI RAM Loader Makes it Easier to Work Without JTAG


FOSSi Foundation director Olof Kindgren has announced the release of a new project, designed to ease loading of data into an SRAM via the Serial Peripheral Interface (SPI) bus.

"Since I don't already have enough FOSSi projects to care about," Olof jokes, "I created a new one. spi_ram_loader is a simple component for loading data into an SRAM via SPI. This is useful for getting applications into SoCs that lack a JTAG interface.

"The code is only a handful of lines but it comes with basic instructions, an example that integrates it into the Subservient SoC, cocotb testbenches for the component itself and the whole SoC. And of course FuseSoC support for simulation and linting. Hope you find it useful."

The project's source code is available [on GitHub](https://github.com/olofk/spi_ram_loader) now.

<img src="/blog/2023-05-09-ecl62/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [Matt Venn solders the OpenMPW2 ASIC Chips with a hotplate and a hot-air gun.](https://www.youtube.com/watch?v=1eEGGWLCVsc)
-   [...and they get X-rayed for good measure.](https://www.youtube.com/watch?v=Mvx319O8NEo&t=208s)
-   [Indian Minister of State and former chip designer Rajeev Chandrasekhar says "RISC-V is becoming a global movement with India as a leading player," sees a rebuilding of "centres of gravity" within five years.](https://pib.gov.in/PressReleseDetailm.aspx?PRID=1913995)
-   [RISC-V announces public review of Zicond conditional zeroing extension, ends 21st March 2023.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/hDiHzIMjzE4/m/nBbgoBB1BgAJ)
-   [RISC-V also announces public review of the Zfa additional floating-point instructions extension, ends 2nd June 2023.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/SED4ntBkabg/m/oiThxKfiAAAJ)
-   [The Linux Foundation announces the schedule for the Embedded Open Source Summit (EOSS) 2023, 27-30th June 2023.](https://events.linuxfoundation.org/embedded-open-source-summit/)
-   [Paper preprint: Simulation Environment with Customised RISC-V Instructions for Logic-in-Memory Architectures, Su et al.](https://arxiv.org/abs/2303.12128)
-   [Paper preprint: X-HEEP - An Open-Source, Configurable, and Extendible RISC-V Microcontroller, Schiavone et al.](https://infoscience.epfl.ch/record/302127) [(GitHub repository.)](https://github.com/esl-epfl/x-heep)
-   [Paper: DARKSIDE - A Heterogeneous RISC-V Compute Cluster for Extreme-Edge On-Chip DNN Inference and Training, Garofalo et al.](https://ieeexplore.ieee.org/document/9903915)
-   [Paper preprint: Manticore - Hardware-Accelerated RTL Simulation with Static Bulk-Synchronous Parallelism.](https://arxiv.org/abs/2301.09413)


<img src="/blog/2023-05-09-ecl62/ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
