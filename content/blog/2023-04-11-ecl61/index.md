---
layout: post
title: "El Correo Libre Issue 61"
description: El Correo Libre Newsletter, Issue 61
author: Gareth Halfacree
date: 2023-04-11
---

<img src="latchup-colour.jpg" style="max-width:100%" />

## Celebrating Latch-Up, and Planning for ORConf 2023

That was fun! Exhausting, but fun. I'm of course talking about [Latch-Up in Santa Barbara](https://www.fossi-foundation.org/latchup/), our first conference since ORConf in 2019. Having organized open source silicon conferences since 2012, I pretty much knew what we were getting into, but at some level I had forgotten exactly how much work it really is.

But, after three days with 35 presentations, around 100 visitors, good food, fantastic scenery and most of all hours and hours of discussions and exchange of ideas with curious and intelligent people from all over the world - it's all worth it!

And for all of you who couldn't make it, we can't bring the food, people and scenery into your homes, but we can at least bring you the presentations, which are now available [on the FOSSi Foundation YouTube channel](https://www.youtube.com/fossifoundation), together with videos from all our other events through the years.

What's next, then? We are now even more excited about [ORConf 2023](https://orconf.org/) which will take place in Munich, Germany, on September 15th to the 17th. Potential attendees, speakers and sponsors are very welcome to get in touch with us now. Hope to see you there!

_- Olof Kindgren, Director, FOSSi Foundation_

<img src="box64.jpg" style="max-width:100%" />

## Box64 Gets an Early RISC-V Port to Help Broaden the Software Ecosystem


Developer and project maintainer Sebastien Chevalier has shown off a version of the Box64 userspace AMD64/x86_64 emulator running on real RISC-V hardware - with a call for collaboration going out to make the tool even better on the platform.

"[Super Hexagon] ran using GL4ES and Box64, running on a VisionFive 2 SBC [Single-Board Computer] running the default Debian image," Sebastien wrote in the description of [a demo video](https://www.youtube.com/watch?v=6G9zMIaAvjY) showing just that.

"Box64's DynaRec [dynamic recompiler] for RISC-V is very young: there are just a few opcodes implemented for now, and that explains why loading and transition are slow. This will improve over time as more and more opcodes are implemented. Still, it now works, with wrapped OpenAL, LibVorbis and OpenGL, so it's a success."

Box64 was originally designed to allow binaries compiled for AMD64/x86_64 processors to run unmodified on 64-bit Arm cores. Its expansion to RISC-V means that proprietary closed-source software, including games, can be made to run on RISC-V hardware even if its developer hasn't released a RISC-V version or the source code for users to compile their own, thus dramatically expanding the RISC-V software ecosystem.

RISC-V developer Wei Wu, who is not involved in the project directly, has [posted](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/JEVMWgi2Gwc) that the Box64 team would "welcome more developers to join the effort" as it works to extend the tool's RISC-V support.

Anyone wishing to try the tool out, or aid with the port, can find more information [on the project's GitHub repository](https://github.com/ptitSeb/box64).

<img src="edalize2.jpg" style="max-width:100%" />

## Olof Kindgren Launches Edalize 0.5.0 with New Backends, New Flows, and More


FOSSi Foundation director and developer Olof Kindgren has announced a new version of Edalize, the open-source electronic design automation (EDA) tool abstraction library, which brings with it a wealth of enhancements.

"Three new backends were added for the legacy tool API. These are called _filelist_ for producing _.f_ files, _sandpipersaas_ for the SandPiper TL-Verilog compiler, and _openroad_ for the OpenROAD toolchain," Olof explains. "And with this, we now support 40 different EDA tools with the same simple interface. Not bad considering the EDA world is mostly known for its insane level of incompatibility, vendor lock-in and general user hostility.

"Two flows have been added to the new flow API. _generic_ is a customizable flow that can be used for all single-tool flows. It is also used internally as a parent class to the _sim_ and _lint_ flows which saves quite a few lines of code. _gls_ is a gate-level simulation flow that runs a synthesis flow to produce a netlist followed by a simulator. All simulators and synthesis tools covered by the new flow API should be automatically supported."

Other improvements in the new release include support for PEP0420 implicit namespace packages, the ability to avoid unnecessary rebuilds "in most cases" using the new flow API, and support for single compilation unit compiles in the _modelsim_ backend, multiple top levels in the _icarus_ backend, and Verilog output with simulation file tag recognition in the _yosys_ and _vivado_ backends.

"Getting the newest version of Edalize should be as easy as running _pip install -U edalize_ (the _-U_ forces an upgrade if you already have an older version installed)," Olof adds. "Hope you enjoy it!"

More information is available on Olof's blog, [Tales from Beyond the Register Map](https://blog.award-winning.me/2023/03/edalize-050.html), and [the Edalize GitHub repository](https://github.com/olofk/edalize/releases/latest) where the source code is available under the permissive BSD two-clause licence.

<img src="autodmp.jpg" style="max-width:100%" />

## Nvidia's DREAMPlace Analytical Placer Promises an Order of Magnitude Speed-Up


Nvidia has released an open-source analytical placer, for the place-and-route stage of silicon design, which it says can use GPU acceleration to improve performance by more than 30 times over competing CPU-based approaches.

"DREAMPlace formulates the [macro and cell] placement problem as a wire length optimisation problem under a placement density constraint and solves it numerically," the company's researchers explain.

"DREAMPlace computes both wire length and density gradients numerically using GPU-accelerated algorithms enabled by the PyTorch framework. It achieves over 30x speed-up on global placement alone. Further work also accelerated precise placement with GPUs, achieving over 16x speed-up on industrial benchmarks over CPU implementations."

In its latest work on the project, Nvidia has made DREAMPlace entirely autonomous - creating what it calls AutoDMP, or Automated DREAMPlace Macro Placement. Working alongside a commercial EDA tool, AutoDMP was able to place 256 RISC-V cores and 320 memory macros after a three and a half hour search with equal or better results than the commercial tool alone - though, it must be noted, on a high-priced DGX server with four A100 graphics processors and a whopping 320GB of total video RAM.

More information is available [on Nvidia's technical blog](https://developer.nvidia.com/blog/autodmp-optimizes-macro-placement-for-chip-design-with-ai-and-gpus/), and [in the AutoDMP paper](https://research.nvidia.com/publication/2023-03_autodmp-automated-dreamplace-based-macro-placement). The AutoDMP source code, meanwhile, is available [on GitHub](https://github.com/NVlabs/AutoDMP) under the permissive Apache 2.0 licence.

<img src="xilinxsmartnic.jpg" style="max-width:100%" />

## AMD-Xilinx Releases Nanotube, an Open-Source Framework for SmartNIC FPGAs


AMD-Xilinx has announced the release of Nanotube, a compiler and framework which targets the FPGA chips found in SmartNIC network interface cards - making the full source code available under a permissive licence.

"Nanotube is a collection of compiler passes, libraries, and an API to facilitate execution of EBPF XDP and similar networking code on an FPGA in a SmartNIC," the company explains. "The compiler takes EBPF XDP C code as input and outputs a packet processing pipeline in HLS C++. This HLS C++ code can then be synthesised using Vitis HLS and placed on an FPGA.

"The Nanotube library implements packet accesses and maps in an implementation which is synthesis friendly, meaning that it will be placed in the application and will create efficient hardware in high-level synthesis."

While the Nanotube tool itself is open-source, however, it does come with a requirement to use AMD-Xilinx' Vitis. "The Nanotube compiler compiles from EBPF XDP C to C++ with HLS annotations, converting the program in multiple steps. The output of each step can be executed for testing, including the produced HLS C++ code," its creators explain. "For that, we need Vitis-HLS headers; for synthesising the design onto an FPGA, a full installation of Vitis is required."

More information, along with the full source code under the permissive MIT license and an example project based on Facebook's Katran L4 load balancer, is available [on the project's GitHub repository](https://github.com/Xilinx/nanotube).

<img src="antmicrok410t.jpg" style="max-width:100%" />

## Antmicro Releases an Open-Hardware Kintex-7 K410T FPGA Dev Board


Open hardware specialist Antmicro has released the design files for an open-hardware development board built around AMD-Xilinx' Kintex-7 K410T FPGA - aiming to make it easier for developers to experiment with the system-on-chip designed as part of the OpenTitan hardware root-of-trust project.

"The AMD Xilinx Kintex-7 is a relatively inexpensive and obtainable commodity FPGA family which makes it an excellent prototyping and research platform that is possible to replicate at scale," the company explains. "As it happens, for their default Earl Grey SoC design the OpenTitan project has also been using a Kintex-7 K410T based FPGA platform. The board is, however, a custom, proprietary design which is hard to come by or replicate.

"Since Antmicro is using OpenTitan as a template for extending the open source SystemVerilog toolchain, to make it easier reproduce the entire design as-is (as an alternative to cutting it down to fit in more approachable hardware) we designed a versatile open hardware Kintex-7 K410T development board."

The resulting design uses a 400k logic-cell K410T FPGA with 512MB of DDR3L memory, 256MB of SPI NOR flash, and 8MB of static RAM, with quad-SPI interfaces for external flash. There are two Ethernet ports, one gigabit and one Fast Ethernet, two PMOD connectors and an FMC+ connector, USB Type-C debugging, and support for Power-over-Ethernet (PoE), USB Power Delivery (USB PD), or standard DC power. The board also includes USB 2.0 host ports, user-addressable DIP switches and push buttons, and a nano-ITX layout.

The board's design files are available [on the Antmicro GitHub repository](https://github.com/antmicro/kintex-410t-devboard) under the permissive Apache 2.0 licence.

<img src="fusesoc.jpg" style="max-width:100%" />

## FuseSoC 2.1 Brings Generator Caching, Improved Error Handling, and More


Alongside the new release of Edalize discussed above, Olof Kindgren has found time to release an updated version of the award-winning FuseSoC package management and hardware description language (HDL) build tool collection - bringing with it some notable improvements.

"I just released FuseSoC 2.1 with some much requested features," Olof announced at the time of the release, "like caching of generators and less unnecessary rebuilds when source is unchanged. And a few fixes of course."

In addition to the ability to cache generators, the new release includes the ability to set the version of a library when it's added, support for cloning repositories that don't support shallow-type clones, a tweak to avoid cleaning out existing work routes, and a performance boosting fix which avoids exporting files which haven't changed.

Other changes in the new release include improved error handling, Olof notes, along with a selection of bug fixes and some code refactoring.

The new release is available [on the FuseSoC GitHub repository](https://github.com/olofk/fusesoc/releases/latest), along with the full source code under the permissive BSD two-clause licence; existing users can upgrade with _pip install -U fusesoc_.

<img src="riscv.jpg" style="max-width:100%" />

## David Patterson Dispels the "Top Ten Fallacies" Surrounding RISC-V


David Patterson, in his role of vice-chair of the RISC-V International Board of Directors, has penned a document seeking to dispel the top ten myths surrounding the RISC-V instruction set architecture - and why they can't be used to conclude that RISC-V will never gain dominance over proprietary alternatives.

"RISC-V is an open-source processor, like Linux is an open-source operating system," David begins in his list of fallacies, which logically lead from one to the next. "All RISC Instruction Set Architectures (ISAs) are equivalent. Picking an established, closed ISA is a safer business decision than picking the new open RISC-V. RISC-V ISA is only gaining popularity because it’s cheaper. Closed ISAs do not have fragmented software ecosystems.

"RISC-V modularity leads to a more fragmented software ecosystem than those of closed ISAs," David continues. "RISC-V is only good for embedded applications. RISC-V is not as secure as a closed ISA. RISC-V processors will always trail the more established closed processors in high performance and robustness of the software ecosystem. Given the points above, RISC-V cannot become the dominant ISA."

All of these, David argues, are false - especially the latter. "In a little over a decade, RISC-V has arguably become at least the third most important ISA for future applications of computing," he notes. "The enthusiasm for an open ISA that we see across the industry reminds those of us old enough to remember of the groundswell for an open networking standard in the early days of the standardization of Ethernet. In the next few years it may become just as surprising to pick a proprietary ISA over the open RISC-V for a new project as it would to pick a closed alternative to Ethernet or USB."

David's full argument is available [on the RISC-V International blog](https://riscv.org/blog/2023/03/top-ten-fallacies-about-risc-v/).

<img src="gcc.jpg" style="max-width:100%" />

## GCC Adds "Basic Support" for T-Head's RISC-V ISA Extensions


The GNU Compiler Collection (GCC) project has added what is described as "basic support" for in-house extensions to the RISC-V instruction set architecture developed by T-Head, Alibaba's silicon arm, for its core designs.

"This patch add basic support for the following XTheadISA extensions," author Christoph Müllner writes in the commit to add the extensions: "XTheadBa; XTheadBb; XTheadBs; XTheadCmo; XTheadCondMov; XTheadFMemIdx; XTheadFmv; XTheadInt; XTheadMac; XTheadMemIdx; XTheadMemPair; [and] XTheadSync."

Each of the above are extensions developed by T-Head, Alibaba's silicon arm, for its RISC-V based processor cores. Not part of the official RISC-V ISA nor any of its officially-ratified extensions, the XThead* extensions are designed to improve performance or add features desired for Alibaba's particular use-cases - and are themselves permissively licensed under the Apache 2.0 licence, allowing other RISC-V developers to adopt the extensions themselves.

More notably, the move also telegraphs an acceptance by the GCC project that open ISAs like RISC-V, which invite experimentation and expansion, may attract unofficial extensions which should nevertheless be supported in the compiler - a green flag for others to begin investigating their own RISC-V extensions.

The patch adding XThead* support to GCC is available [on the GCC git repository](https://gcc.gnu.org/git/?p=gcc.git;a=commitdiff;h=8351535f20b52cf332791f60d2bf22a025833516), while the XTHead* extension specifications have been published [on GitHub](https://github.com/T-head-Semi/thead-extension-spec) under the Apache 2.0 licence.

<img src="riscvisaextensions.jpg" style="max-width:100%" />

## Researchers Publish a Survey of RISC-V Instruction Set Extension Work


Researchers from the China Telecom Research Institute in Beijing have published the results of a survey into RISC-V instruction set extensions - including a look at "possible future research opportunities."

"RISC-V is an open-source and royalty-free instruction set architecture (ISA), which opens up a new era of processor innovation. RISC-V has the characteristics of modularization and extensibility, and explicitly supports domain-specific custom extensions," the researchers explain.

"Nowadays, RISC-V is a popular ISA for embedded processors. However, there is still a gap between the capabilities of RISC-V and the requirements of various emerging computing scenarios (e.g., artificial intelligence, cloud computing). Recently, the RISC-V standards organization has continuously introduced new ISA extensions to meet the needs of advanced computing. There are also a variety of novel research proposed customized extensions of RISC-V for certain scenarios. As far as we know, there is a lack of a survey to systematically present the research progress of RISC-V ISA extensions."

That lack is exactly what the team sought to solve, publishing a 16-page paper which summarises RISC-V use-cases, dives into the progress on official RISC-V extension specifications, and looks into research carried out on extensions to the ISA for workloads in fields including the Internet of Things (IoT), artificial intelligence (AI), security, high-performance computing (HPC), and post-quantum cryptography.

The researchers' paper finishes with a look at future opportunities for research into possible extensions, ranging from in-memory and in-network computing to cloud computing, trusted computing, and reconfigurable computing.

The full paper is available under open-access terms [in the journal _IEEE Access_](https://ieeexplore.ieee.org/document/10049118).

<img src="artypadlock.jpg" style="max-width:100%" />

## The LLVM Project Adds Support for the RISC-V Vector Extension Draft


While the GCC project may be adding support for T-Head's in-house RISC-V instruction set extensions, the LLVM project has announced its own support for the official RISC-V vector cryptography extension - as defined in the v0.3 draft.

"Support [the] vector crypto extension ISA string and assembly," the commit comment notes of the added support. "LLVM implements the 0.3 draft specification."

The vector cryptographic extensions are designed with performance in mind, "with large application and server-class cores being the main target," the official documentation explains. The idea is to boost performance for common cryptographic operations, including encryption and decryption via the AES block cipher, hashing via SHA-2, and high-performance bit manipulation.

LLVM's support of the extensions allows developers to begin experimentation, though as the extensions have not yet been ratified is based on an already outdated draft: at the time of writing, the latest release of the specification was v0.5.1, which includes new and renamed extensions.

More information is available [in the LLVM GitHub commit](https://github.com/llvm/llvm-project/commit/9795aa042a843811120b1b2ef4f8a6d7f398a369), while the latest version of the vector cryptographic extensions draft can be found [on the RISC-V GitHub repository](https://github.com/riscv/riscv-crypto/releases/latest).

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [Paper: Human-machine collaboration for improving semiconductor process development (Kanarik et al, Nature).](https://www.nature.com/articles/s41586-023-05773-7)
-   [Paper: CVA6 RISC-V virtualisation: architecture, microarchitecture, and design space exploration (Sá et al, arXiv).](https://arxiv.org/abs/2302.02969)
-   [Ved Shanbhogue announces the public review period for the RISC-V IOMMU spec, AIA Chapter 8 (ends Sunday 29th of April 2023).](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/5SBhrQRMmmY)
-   [Paper: MetaSys: a practical open-source metadata management system to implement and velauate cross-layer optimisations (Vijayjumar et al, arXiv).](https://arxiv.org/abs/2105.08123v5) [(GitHub)](https://github.com/CMU-SAFARI/MetaSys)
-   [Paper: Optimisations of SpGEMM with RISC-V vector instructions (Le Fèvre et al, arXiv).](https://arxiv.org/abs/2303.02471)
-   [Matt Venn: Soldering the MPW ASICs with hotplate and hot air gun. (Video)](https://www.youtube.com/watch?v=1eEGGWLCVsc)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
