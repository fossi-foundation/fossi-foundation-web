---
layout: post
title: "El Correo Libre Issue 96"
description: El Correo Libre Newsletter, Issue 96
author: Gareth Halfacree
date: 2026-04-14
---

<img src="/blog/2026-04-14-ecl96/librelane.jpg" style="max-width:100%" />

## LibreLane Hits 3.0, Celebrates With a Website and a Logo

  
Leo Moser and Mohamed Gaber have announced a milestone achievement for the LibreLane project, an infrastructure library for application-specific integrated circuits and designed as the successor to the popular OpenLane, as it reaches release 3.0 - which brings with it a new website and logo.

“This is the second major version release for LibreLane and our first outside of Efabless,” write Leo and Mohamed of LibreLane 3.0. “It has been in development for a fairly long time, and is packed with new features, enhancements, support for new technologies, and more, and our first API cleanup (which is what actually caused the major version bump, but the features are worth talking about too, promise.)”

The announcement comes alongside the launch of a dedicated website for the project. “We’re hoping that this website serves as a friendly introduction to LibreLane,” the pair say, “its capabilities, design principles, and community. This website – and our beautiful new logo by Jon Walters – mark us fully settling in in our home at the FOSSi Foundation. It has been a long journey. From the shutdown of Efabless, to the forking of OpenLane 2, to setting up all of our development infrastructure – until we finally could work on new LibreLane features and improvements again.”

LibreLane 3.0 introduces, among other changes and improvements, a new alternative to the OpenLane-based “Classic flow”: “Chip flow.” This, built by Leo, is intended for the tape-out of top-level chips using pad-ring generation. and has already been used for designs submitted using the IHP SG13CMOS5L open-source process design kit and the GlobalFoundries GF180MCU PDK via waver.space.

Other features of the update include an easier path to creating your own custom flows, a move to NixOS 25.11, updated tools, support for user-defined Yosys plugins and Python packages, improved chip layout rendering, reduced GDS file sizes, and two new plugins: Difetto, a work-in-progress design-for-test flow, and a plugin for the FABulous embedded FPGA framework.

The new website is available at [LibreLane.org](https://librelane.org/), with Leo and Mohamed’s announcement [in the blog](https://librelane.org/blog/2026-03-25-website_release_3-0). LibreLane 3.0, meanwhile, is available [on GitHub](https://github.com/librelane/librelane/tree/main) under the permissive Apache 2.0 licence.

<img src="/blog/2026-04-14-ecl96/3dfx.jpg" style="max-width:100%" />

## SpinalVoodoo Brings 3dfx’s Classic GPU Back in SpinalHDL Form

  
Francisco Ayala Le Brun has released a SpinalHDL soft-core implementation of the 3dfx Voodoo, one of the first consumer-oriented 3D accelerators around - expressing surprise that modern tooling makes such a thing achievable by only one person.

“The [3dfx] Voodoo 1 is old, but it is not simple,” Francisco explains. "It has no transform-and-lighting hardware and no programmable shaders, so all of its graphics behavior is fixed in silicon: gradients for Gouraud shading, texture sampling, mipmapping, bilinear and trilinear filtering, alpha clipping, clipping, depth testing, fog, and more. A modern GPU concentrates much of its complexity in flexible programmable units. The Voodoo concentrates it in a large number of hardwired rendering behaviors.

"At first glance, the Voodoo looks almost modest. It is a memory-mapped accelerator with one job: render triangles as quickly as possible. Unlike later accelerators, it does not do transform and lighting, which means the host CPU handles the heavier 3D math. That can make the hardware sound simpler than it really is. Even a single triangle may involve interpolated colors, texture sampling, mip level selection, bilinear or trilinear filtering, alpha clipping, depth comparison, clipping, and fog. None of these operations are programmable in the modern sense. They are all baked into the silicon. That is the central contrast. In modern GPUs, complexity often comes from flexibility. In the original Voodoo, complexity comes from how many rendering behaviors are directly encoded in fixed-function hardware.

“What surprised me was not just that it worked. It was that a design like this can now be described, simulated, and debugged by one person, provided the tools let you express the architecture directly and inspect execution at the right level of abstraction,” Francisco says of the reimplementation. “What modern RTL tools changed for me was not the amount of complexity in the design. They changed how much of that complexity I had to hold in my head at once. SpinalHDL let me encode architectural intent directly in the source instead of scattering it across declarations, bus logic, and documentation. Conetrace let me inspect execution in terms closer to the structure of the design than a raw waveform usually allows. That combination is what made an FPGA reimplementation of the Voodoo feel tractable for one person. The machine is still complicated. But with the right abstractions, more of that complexity becomes representable, queryable, and therefore manageable.”

The full project write-up is available [on Francisco’s website](https://noquiche.fyi/voodoo); the source code is available [on GitHub](https://noquiche.fyi/voodoo) under an unspecified licence, with notes on what is and isn’t implemented compared to the original hardware.

<img src="/blog/2026-04-14-ecl96/demo.jpg" style="max-width:100%" />

## Tiny Tapeout Launches Second Demoscene Contest

  
Matt Venn has announced the second demoscene-inspired contest for the Tiny Tapeout multi-project chip initiative - and is offering a free tile to anyone who wants to submit an entry.

“The home computer demoscene has resulted in some amazing feats of hacking and pushing hardware to its limits,” Matt says of the scene which inspired both this latest and the original Tiny Tapeout demoscene contests. "The Tiny Tapeout demoscene competition sticks to the same audio/visual output format, but instead of using an existing computer, you create your own ASIC hardware!

“Thanks to Precision Innovations, every entrant will receive a free tile on the TTSKY26a chip,” Matt adds, though entrants taking advantage of the free tile offer - space on a multi-project shuttle, which will be manufactured such that any project is available to use - will not receive a physical chip once manufacturing is complete, and will be limited to the one-tile category without paying for additional tiles.

Other categories include two-tile, two-tile with quad-SPI PMOD and 4kB maximum flash with unlimited RAM, four-tile, and the usual “newcomer” category for those who haven’t participated in Tiny Tapeout before. Entries will be judged by by Jeri Ellsworth, Will Green, and Sprite_tm, Matt has confirmed, with prizes including lithographic masks, silicon wafers, Matt’s very first ASIC die mounted in an epoxy cube, and free tiles on future tapeouts.

More information is available [on the Tiny Tapeout website](https://tinytapeout.com/competitions/demoscene-ttsky26a-announce/).

<img src="/blog/2026-04-14-ecl96/bio.jpg" style="max-width:100%" />

## The Bao’s Input/Output Processor Gets Laid Bare

Noted maker Andrew “bunnie” Huang, creator of the “mostly-open” Baochip-1x system-on-chip, has detailed one of its biggest features: the BIO, or Bao Input/Output coprocessor.

“The BIO design starts with a PicoRV32 [RISC-V core] configured as an RV32E,” bunnie explains. "In this mode, instead of having a full complement of 32 registers (including the zero register), you get 16: only r0 – r15 are officially part of the RV32E specification. I then abuse r16 – r31 to map in a set of ‘register queues’ as well as GPIO access and synchronization primitives.

"The most interesting aspect of the extended register set are the blocking registers. These are registers where the current instruction being executed may not retire until certain FIFO-related conditions are met. The BIO is also capable of doing DMA via the ‘BDMA’ extension. This extension allows the load/store units of the PicoRV32 cores access the SoC’s bus, with a ‘dumb’ priority resolver in case of contending accesses (lowest numbered core always wins; other cores halt). Adding this capability allows the BIO to also act as a smart DMA engine for shuttling data to and from main memory, but it does add about 50% to the size of the base BIO core.

“The current BIO implementation prioritises area over performance, allowing it to be sensibly integrated as a peripheral on a modestly-sized FPGA. This implementation choice means the BIO can’t bitbang DVI like the [Raspberry Pi RP2040] PIO can, but it fits with room to spare on an Arty A7-100T board. However, I feel where the BIO really shines is offloading tasks like protocol stack management from the CPU. Despite the trade-offs, the Baochip-1x’s implementation running at 700MHz can comfortably emulate a SPI bus at 25MHz, which is fast enough for a range of embedded applications.”

The full post is available [on bunnie’s blog](https://www.bunniestudios.com/blog/2026/bio-the-bao-i-o-coprocessor/); the SystemVerilog RTL code is available [on GitHub](https://github.com/baochip/baochip-1x/tree/main/rtl/modules/bio_bdma/rtl) under the weakly reciprocal variant of the CERN Open Hardware License 2. Those looking to go hands-on can back the Daobao evaluation board for the Baochip-1x [on Crowd Supply](https://www.crowdsupply.com/baochip/dabao).

<img src="/blog/2026-04-14-ecl96/factorio.jpg" style="max-width:100%" />

## This Compiler Puts Your Verilog Creations into Factorio

Software engineer Ben C. has designed a toolchain which compiles Verilog designs to an unusual target: the 2020 management simulation game Factorio, which proved capable of handling a fully-functional, if basic, RISC-V processor core.

“Shortly after Factorio 2.0 released I realised that you could probably describe combinator circuits as Verilog and have a compiler translate it,” Ben writes of his inspiration for the project. "That’s what this project is. Input Verilog, output pure vanilla Factorio Blueprints.

"I took this new release [of the game] as an opportunity to dive into a new project and a new language! At first I was just trying to learn about rust and compilers, but it evolved into a big software experiment. I added Lua scripting, a nodes-based GUI (web and native support with egui), a combinator simulator, graph partitioning, SVG generation, ILP solvers, hyper parameter optimisation. Really its a bag of many things I was interested in.

"To accomplish this I employ two programs. The first is a front-end compiler to take Verilog and produce a graph of logic which can be roughly translated into Factorio logic. At the end of this process we are left with a mixture of fine-grained logic and coarse grain word-level representations. Now Rust enters the picture. I now read this JSON into what I call a ‘MappedDesign;’ there are some additional tweaks to make the format of a MappedDesign more favorable, but its not that important. Its essentially a deserialised Yosys output.

“Because the routing will place power poles, we can reuse them for power distribution. First thing is to determine if each combinator is covered by a power distribution area, if some combinators are missing, I place a new pole to maximize coverage over missing areas. Then once I am satisfied with coverage I do a heuristic based graph traversal to try to minimise [the] number of copper wires while also making sure we only have one power distribution network. Sometimes this isn’t perfect, but works well enough. I think for the RISC-V core I only needed to manually place a couple substations to get full coverage.”

More information is available [in Ben’s Reddit post](https://old.reddit.com/r/rust/comments/1s03w2o/my_first_rust_project_a_verilog_to_factorio/); source code has been published [on GitHub](https://github.com/ben-j-c/verilog2factorio) under the GNU Affero General Public License 3, with a live demo available [on Ben’s website](https://benjaminc.dev/v2f).

<img src="/blog/2026-04-14-ecl96/mvidia.jpg" style="max-width:100%" />

## Mvidia Puts You To Work at a Familiar-Sounding Chipmaker

  
Compute science and maths student Jason Abowho has released a work-in-progress game which puts the player in charge of building a graphics processing unit for a firm called “Mvidia” - no relation to any companies that might spring to mind, of course.

“[I’m] interested in making machine learning run fast on arbitrary hardware (used to be into Apple silicon, now more into Nvidia’s architectures),” Jason writes by way of background to the project. “I’m building a game in which one builds GPUs from scratch (I find this to be a good test of my own familiarity + useful to others hopefully). Broadly, I’m interested in kernels, synthetic data, and mechanistic interpretability.”

The game, played in-browser, starts with a memo from “Mvidia’s” chief exec, explaining that despite having been hired as a software engineer you’re being shunted across to working on the company’s hardware - starting at the very fundamental level of using NMOS and PMOS transistors to make a switch. These are then combined to create a NAND gate, then AND, OR, XOR gates, then the player moves on to making arithmetic and logic units to create a functional processor.

Software bring-up comes next, then building the processor up into a working graphics processor capable of running shaders - though, at the time of writing, these last two levels had yet to be completed.

Mvidia is available to play in-browser [on Jason’s website](https://jaso1024.com/mvidia/).  

<img src="/blog/2026-04-14-ecl96/runner.jpg" style="max-width:100%" />

## RISE Launches Free RISC-V GitHub Actions Runners

  
The RISC-V Software Ecosystem (RISE) project, run under the umbrella of the Linux Foundation to promote the adoption of the free and open-source RISC-V architecture as a target for software development, has announced the availability of free-of-charge GitHub Runners - allowing open source projects to use performant RISC-V hardware for continuous integration (CI) tasks, at no cost.

“Today, we are excited to announce the early availability of the RISE RISC-V Runners, a free, managed GitHub Actions runner service that gives any open source project access to real RISC-V hardware in their CI pipelines,” says RISE’s Ludovic Henry of RISE’s initiative. "No emulation, no cross-compilation hacks, no waitlist. Install a GitHub App, change one line in your workflow, and your jobs run on physical RISC-V boards.

“Until now, most open source projects that wanted to test on RISC-V hardware had to source their own boards, manage their own infrastructure, or rely on limited and oversubscribed shared resources,” Ludovic explains. “That’s a lot to ask of a maintainer who just wants to know if their library builds and passes tests on riscv64. The RISE RISC-V Runners remove that barrier entirely. As part of the RISE Project’s mission to accelerate the RISC-V software ecosystem, we are providing this service free of charge to any open source project on GitHub.”

Available to all open-source projects looking to target RISC-V, the RISE RISC-V Runners work by having the user’s workflow trigger a webook, which is then validated and recorded in Redis for a background worker to pick and provision a Kubernetes pod on a matching RISC-V node. Once provisioned, the pod registers as a just-in-time GitHub Actions runner and executes the job, and is then cleaned up automatically post-execution.

More information is available [in the RISE RISC-V Runners documentation](https://riseproject-dev.github.io/riscv-runner/).

<img src="/blog/2026-04-14-ecl96/fab.jpg" style="max-width:100%" />

## Leo Moser’s Tiny FABulous Project Packs an FPGA into Tiny Tapeout

  
The latest Tiny Tapeout shuttle run has, as always, a fascinating array of project on board - including a tiny FPGA, developed by Leo Moser.

“Yesterday the TTIHP26a shuttle from Tiny Tapeout has closed. In it, hundreds of incredible projects,” Leo explains. "I had the opportunity to submit an FPGA, which I created using my FABulous LibreLane plugin. For this fabric, I developed a ‘tiny’ tile library that better fits the constraints of Tiny Tapeout.

"While it is a small FPGA in terms of available resources, it is absolutely massive for a Tiny Tapeout project. It utilizes 8x4 TT tiles to implement an FPGA with 9x5 FABulous tiles. In total, there are 168 LUT4s and FFs available - enough for some simple designs! There are 3x7 CLB blocks surrounded by I/O and termination tiles. With four GBUFs, the FPGA supports up to four separate clock domains. User designs that run on the FPGA can be implemented with Yosys and nextpnr, for a fully open-source FPGA workflow.

“The FPGA was generated using the FABulous eFPGA framework and implemented using LibreLane with the IHP Open PDK,” Leo adds, “using my FABulous LibreLane plugin. The I/Os resemble the Tiny Tapeout interface, allowing for clk, rst_n, uo, ui and uio signals. This enables to directly implement simple Tiny Tapeout designs on the FPGA. The bitstream is uploaded to the fabric using a bitbang interface. The bitbang interface is active while reset is applied, this ensures that all I/Os are available for the active user design.”

The source code for the project is available [on GitHub](https://github.com/mole99/tt-fabulous-ihp-26a) under the permissive Apache 2.0 licence; an interactive visualisation of the design is available [on the Tiny Tapeout website](https://gds-viewer.tinytapeout.com/?model=https://raw.githubusercontent.com/mole99/tt-fabulous-ihp-26a/refs/heads/main/gds/tt_um_fabulous_ihp_26a.gds&pdk=ihp-sg13g2). Additional information is available [in Leo’s Mastodon thread](https://fosstodon.org/@mole99/116283986506343818).

<img src="/blog/2026-04-14-ecl96/svtools.jpg" style="max-width:100%" />

## CHIPS Alliance Announces the SV Tools Project

  
The CHIPS Alliance, operating under the umbrella of the Linux Foundation, has announced the launch of the SV Tools Project - which aims to improve the open-source ecosystem surrounding SystemVerilog.

“The SV Tools Project [is] facilitating the development of high-quality, open source tooling for working with SystemVerilog (SV) codebases,” the organisation explains in its announcement. "With support from CHIPS Alliance members and collaborators, we’ve grouped together a suite of open source tools used for development of hardware leveraging SystemVerilog and the most common SV design verification methodology, UVM.

“The effort aims to provide better visibility and support for both project maintainers and users, and foster a more coherent open source tooling experience for various aspects of ASIC development and verification with SV/UVM.”

“The SV Tools Project supersedes the previous entity referred to as ‘SystemVerilog Tools working group,’” the CHIPS Alliance notes. “To coordinate and formalise the workings of the SV Tools Project and the tools underneath its umbrella, a Technical Steering Committee has been appointed comprising the specific tool maintainers to oversee technical decisions in the Project. Regular TSC meetings will be held to discuss the ongoing developments in the specific tools and the broader ecosystem. These meetings will serve as a forum for reviewing proposals, prioritising features, and coordinating work across the different components of the Project.”

The project currently includes the sv-tests suite, the Verible toolkit, the Synlig SystemVerilog synthesis tool, and the RISCV-DV framework. “With the tools [included] we strive to facilitate large-scale adoption of open hardware,” the CHIPS Alliance says of its goals, “with hardware-software co-design and standardized development workflows.”

More information is available [on the CHIPS Alliance blog](https://www.chipsalliance.org/news/sv-tools-project-launch/), with additional information available [on the project’s GitHub repository](https://github.com/chipsalliance/sv-tools).  

<img src="/blog/2026-04-14-ecl96/titan.jpg" style="max-width:100%" />

## lowRISC Details the OpenTitan Post-Quantum Big Number Accelerator

  
lowRISC has dug into the details of a feature that will be heading into the second-generation OpenTitan open hardware root of trust: the extended OpenTitan post-quantum Big Number accelerator, or OTBN.

“In autumn 2025, lowRISC listed out the requirements for PQC [Post-Quantum Cryptography] implementations on OpenTitan and condensed previous, relevant discussions into an implementation proposal or RFC documents meeting these requirements,” the company explains by way of background. "This RFC was formally approved by the OpenTitan Technical Committee in Dec 2025. The OpenTitan project then started working on implementing the approved proposal and upstreaming the changes into the upstream OpenTitan code base.

"Out of the four discussed extensions to enable PQC support on OTBN, two hardware extensions have been fully upstreamed into the public OpenTitan repository. Concerning the two remaining hardware extensions, lowRISC’s Security Team has designed the corresponding specifications and is now working on the RTL implementations.

“Concerning the actual ML-DSA-87 implementation that will run on the extended OTBN hardware, the team has completed upstreaming a first version of the signature verification operation integrated into the cryptolib. This implementation consumes roughly 300k clock cycles on the simulated version of OTBN assuming all extensions [are enabled].”

Full details are available [on the lowRISC blog](https://lowrisc.org/news/opentitan-big-number-otbn-accelerator-hardware-extensions-for-post-quantum-cryptography-extended-design-rationale/); additional information is available [in this GitHub issue](https://github.com/lowRISC/opentitan/issues/26846).  

<img src="/blog/2026-04-14-ecl96/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Alexey Frunze's SediCi PC builds a working a 16-bit Microcomputer on an FPGA, atop a custom-designed CPU.](https://github.com/alexfru/SediCiPC)
-   [Leo Moser shows off the HeiChips Summer School 2025 open-source SG13CMOS design.](https://fosstodon.org/@mole99/116322893894538641)
-   [Optimising a pipelined RISC-V core, "from naive pipeline to near-superscalar performance."](https://mummanajagadeesh.github.io/blogs/optm-riscv-core/)
-   [The Hong Kong Investment Corporation announces the Hong Kong RISC-V Alliance, names StarFive among its members.](https://www.thestandard.com.hk/innovation/article/327317/HKIC-announces-the-launch-of-the-Hong-Kong-RISC-V-Alliance)
-   [The RISC-V Quality of Service Controllers Table (RQSC) specification is up for public review, until the 8th of May 2026.](http://groups.google.com/a/groups.riscv.org/group/isa-dev/t/80eefa352f519c5?utm_source=digest&utm_medium=email)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
