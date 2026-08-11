---
layout: post
title: "El Correo Libre Issue 99"
description: El Correo Libre Newsletter, Issue 99
author: Gareth Halfacree
date: 2026-08-11
---

<img src="/blog/2026-08-11-ecl99/ghent.jpg" style="max-width:100%" />

## ORConf 2026 Registrations Now Open

Registration for [ORConf 2026](https://fossi-foundation.org/orconf/2026), FOSSi Foundation’s annual weekend of presentations and networking for the free and open source silicon community, opened last month - and if you don’t have your ticket yet, there’s still time.

Taking place, in its 12th year, in Belgium’s Ghent, a walkable canal-crossed city with a medieval core, ORConf 2026 is scheduled for Friday the 11th of September through to Sunday the 13th of September 2026. It’s co-located with the 36th International Conference on Field-Programmable Logic and Applications (FPL 2026), which starts on the Monday - so if you’re already planning to attend that, it’s a great opportunity to extend your stay and come to ORConf too!

The schedule sees a single track of talks taking place on the Friday and Saturday - and if you haven’t submitted a proposal for a ten-minute-plus full talk or three-minute lightning talk you’ve got until the 16th of August to do so as part of [the general registration process](https://fossi-foundation.org/orconf/2026) - with a social event on the Saturday evening followed bv an “unconference” on the Sunday. The event is open to all, with talks considered on everything from electronic design automation tooling to formal verification, hardware description languages, and application-specific integrated circuits - as long as the work is open-source or in support of free and open source silicon!

You can register for a free attendee ticket [on the event website](https://fossi-foundation.org/orconf/2026) now, or sign up for a pay-what-you-want ticket if you want to support the event; those attending on behalf of a company are encouraged to pay for a professional ticket - or, even better, consider [a formal sponsorship opportunity](https://fossi-foundation.org/orconf/2026/orconf_2026_sponsorship_prospectus.pdf).

ORConf is always a highlight of the yearly event calendar for anyone interested in free and open source silicon, and we hope to see you in Ghent this September!

<img src="/blog/2026-08-11-ecl99/kianv.jpg" style="max-width:100%" />

## KianV RISC-V Chip Boots Linux - In Silicon

Hirosh Dabui has announced a major milestone for the KianV system-on-chip project, a from-scratch RISC-V chip manufactured by wafer.space: a successful boot of mainline Linux on the actual silicon, rather than a simulation or FPGA implementation.

“My KianV RISC-V ASIC is booting mainline Linux with SDRAM,” Hirosh announced [on Bluesky](https://bsky.app/profile/logicdestroyer.bsky.social/post/3mqp555ytik2p) of the successful bring-up. "Everything was developed from scratch. The board was made by Machdyne, and he also did the bring-up. Huge thanks to him! “Damn… a 32-bit Linux machine running on my own ASIC.”

KianV is a permissively-licensed RISC-V SV32 (MMU) system-on-chip integrated a 32-bit RV32IMA core with Zicntr, Zicsr, Zifencei, and Sstc extensions. There’s a memory subsystem with instruction and data cashes plus an SDRAM controller and peripherals including UART buses, an SD Card controller, Ethernet, flash controller, PLIC, CLINT, a boot ROM controller, OLED controller, and audio subsystem, plus general-purpose input/output (GPIO) capabilities. It was originally designed with FPGA targets in mind, but Dabui decided to submit it for production in silicon via wafer.space.

The design validation board turns that ASIC into a compact single-board computer, adding 32MB of SDRAM, flash storage, an SD Card slot, Ethernet connection, and a UART bus. A custom bootloader linking to OpenSBI allows it to boot the mainline Linux kernel - or, by the user’s own preference, µLinux or XV6. While this capability had previously been tested in simulation, it has now been proven in silicon for the first time.

More information is available [in Hirosh’s Bluesky thread](https://bsky.app/profile/logicdestroyer.bsky.social/post/3mqp555ytik2p), along with [an earlier wafer.space blog post](https://wafer.space/news/kianv-riscv-soc) about the bring-up; KianV itself is available [on GitHub](https://github.com/splinedrive/kianRiscV) under the permissive ISC licence, with the PCB design available in [a separate repository](https://github.com/splinedrive/gf180mcu-kianv-pcb) under an unspecified licence.

<img src="/blog/2026-08-11-ecl99/f14.jpg" style="max-width:100%" />

## Adam Taylor Recreates One of the First Ever Microprocessors

Adam Taylor has released sources for a recreation of what is arguably the first successful microprocessor design - originally used for the Central Air Data Computer (CADC) in the F-14A Tomcat.

“I feel the need for speed! I have been working on recreating the F14 Central Air Data Computer,” Adam explains. “At the time of the Intel 4004 (1970), which was four-bit, the CADC was 20-bit - only it was secret until 1998. Luckily its designer’s, Ray Holt’s, notebooks are available, enabling me to try and recreate it. I think it is nearly there now.”

Intel’s 4004, originally developed for use in calculators, is generally recognised as the first microprocessor to enjoy large-scale commercial success - but the CADC has it beaten by two years, albeit having been manufactured and sold at a much smaller scale. Developed by Garret AiResearch engineer Ray Holt, the computer calculated airspeed including Mach number, altitude, and controlled the aircraft’s iconic variable-sweep wings.

“The CADC was [the] first microprocessor,” Adam argues. “Designed 1968-1970, two years before Intel’s 4004. Classified for 28 years, military secrecy prevented [its] public recognition until 1998. [It is] still flying today: the F-14 flew operationally until 2006 (US Navy).”

Adam’s recreation, written in VHDL, implements the PMU multiplier, PDU divider, SLF arithmetic and logic unit, RAS register file, SL routing logic, and microcode control unit, and includes VHDL testbenches with automatic verification for each module. Adam has also released detailed design documents, which complement Ray Holt’s original notes. There are also instructions for running the system in simulation or implementing it on a Aduivo Tile Spartan-7 FPGA.

The source code and documentation are available [on GitHub](https://github.com/ATaylorCEngFIET/f14_CADC/tree/main), but are source-available rather than free and open: “this recreation is provided for educational and historical preservation purposes,” Adam notes.

<img src="/blog/2026-08-11-ecl99/serv.jpg" style="max-width:100%" />

## Olof Kindgren Announces SERV 1.4.0

FOSSI foundation director Olof Kindgren has announced the launch of SERV 1.4.0, the latest version of the award-winning ultra-compact bit-serial RISC-V CPU.

“The 4-bit version, called QERV (Q for Quad), is now fully integrated in the code base,” Olof says of the new release. "This means you can change between SERV and QERV mode by just changing a parameter. Very convenient to test different trade-offs between size and speed. What about HERV, the 8-bit mode then? It’s pretty much there already, but I decided to wait until the next release before integrating it, to give it a bit more testing and hopefully apply a few more optimisations before then.

"While the days of large improvements to SERV are probably behind us, it turns out there were still some smaller optimisations to be made. Branches, slt operations, and shifts are now one cycle faster. And that’s not all. One FF was removed! Not impressed? Well, I had to look at the SERV history and came to the conclusion that this is the first FF that has been optimised away in more than three years! So actually, it’s a pretty big deal. There was also another optimization around how shift amount is handled that doesn’t save any resources but should likely slightly lower the energy consumption. How much? No clue.

“Another feature,” Olof continues, “which will only be relevant for simulations, is a brand new debugging module. Not a debugger like the ones you typically use over JTAG. No, this is purely a module that creates some signals that can be handy when looking at simulation waveforms, like register values and what kind of instruction that is currently executed. You would perhaps expect these kind of things to already exist in SERV, but due to the extremely condensed code base, it has always been pretty awkward to get this kind of information directly from the RTL.”

Other improvements in the new release include a shift to the Zephyr 4.0 real-time operating system for Servant, SERV’s reference platform design, and the correction of two issues discovered when updating to the latest version of the RISC-V compliance suite. The next release, meanwhile, is likely to bring eight-bit support via HERV - which will increase size by 50 per cent as a trade-off for a fivefold performance boost - plus external interrupts, RV32/EC, and optimisations for the speed of some two-stage operations.

More information is available [in Olof’s blog post](https://blog.award-winning.me/2026/06/serv-140.html); SERV’s source code is available [on GitHub](https://github.com/olofk/serv) under the permissive ISC licence.

<img src="/blog/2026-08-11-ecl99/azure.jpg" style="max-width:100%" />

## Michael Jaggers’ Azurite Offers an Open Power ISA Core

Michael Jaggers has announced his latest project, an implementation of the Power ISA in Bluespec SystemVerilog - released under a permissive licence.

“I’m excited to release Azurite,” Michael writes in his announcement, "an early-stage PowerISA processor core written in Bluespec SystemVerilog. Azurite currently includes a pipelined CPU core, configurable big- and little-endian operation, optional L1 instruction and data caches, AXI4 interfaces, and a verification environment built around cocotb, Verilator, and QEMU-based RTL comparison.

“Azurite is named for the vivid blue copper mineral found in Arizona’s copper country. The name ties the project to the repo owner’s home state, nods to Bluespec through its deep blue color, and points toward copper itself: the metal of conductors, traces, and electrical power. Like the mineral, the core is meant to reward close inspection: compact, structured, and transparent enough that behaviour can be traced from ISA intent through RTL and verification.”

Built atop the PowerPC architecture, the Power ISA is maintained by the OpenPOWER Foundation which took the project over from the since-shuttered [Power.org](http://Power.org) industry group, retaining IBM in a leadership role. It’s fully open and royalty free, giving Michael the freedom required to build his own implementation.

“The project is still in active bring-up,” Michael admits, “but I’m sharing it now to make the development process open and invite feedback, experimentation, and contributions from the hardware-design community.”

Azurite’s source code is available [on GitHub](https://github.com/mgjaggers/Azurite) under the permissive Apache 2.0 licence.

<img src="/blog/2026-08-11-ecl99/vortex.jpg" style="max-width:100%" />

## The Open Vortex GPU Hits a 3.0 Release Milestone

The free and open Vortex graphics processing unit (GPU) project, built atop the RISC-V architecture, has announced its 3.0 release - bringing with it a fixed-function graphics stack, structure sparsity for tensor cores, data transfer acceleration, and more.

“Vortex is a full-stack open-source RISC-V GPGPU [General-Purpose GPU],” the project’s maintainers explain. "Vortex supports multiple backend drivers, including our C++ simulator (simx), an RTL simulator, and physical Xilinx and Altera FPGAs - all controlled by a single driver script. The chosen driver determines the corresponding code invoked to run Vortex.

"The 3.0 release introduces a fixed-function graphics stack (rasteriser, texture units, and output mergers), tensor core structured sparsity (2:4), warpgroup-level matrix multiplication (WGMMA), global-to-local data transfer acceleration (DXA), a new hardware kernel scheduler (KMU) and Command Processor (CP) architecture, a new asynchronous runtime API (vortex2.h), asynchronous barriers with arrive/wait/event semantics, compressed instruction set (RVC) support, hardware atomics, an MMU/SV32 virtual memory stack, a Mesa/lavapipe Vulkan backend (vortexpipe), HIP via chipStar, gem5 integration, a SimX v3 TLM architecture with fixed-size handshake channels, productized Synopsys and Yosys ASIC synthesis flows, and a refreshed toolchain (LLVM 20, POCL 7.0).

“TCU tfr arithmetic backend [is a] a new in-house, fully-synthesizable fused dot-product running integer and floating-point through one shared 4-cycle pipeline; gated by VX_CFG_TCU_TYPE_TFR. [It] adds FP8 (e4m3), BF8 (e5m2), and TF32 on top of the v2.x set (fp32/fp16/bf16/i32/i8/u8/i4/u4). Each is gated by its own VX_CFG_TCU_{FP8,BF16,TF32}_ENABLE; format dispatch is unified across all four FEDP backends.”

The new release is published [on GitHub](https://github.com/vortexgpgpu/vortex/releases/tag/v3.0), where the source code - which is written, in part at least, by a large language model - is available under a claimed Apache 2.0 licence.

<img src="/blog/2026-08-11-ecl99/xezim.jpg" style="max-width:100%" />

## Xezim Promises an “AI-Native” SystemVerilog Simulator

Project founder and lead developer Bondan Rufen has written to alert us to Xezim, an “AI-native” SystemVerilog simulator written in Rust and released under a potentially-unenforceable permissive licence.

“xezim is an extensible, AI-native SystemVerilog simulator written in Rust,” Bondan explains, "built so new language features and analyses can be added one verified step at a time, with AI agents as first-class contributors to the codebase. This project explores whether modern tools and AI can dramatically reduce the complexity of building core EDA infrastructure such as simulators.

“Traditional EDA tools require very large engineering teams and many years of development. This project explores a key question: can a small team - or even a single engineer with AI assistance - build core EDA tools such as a SystemVerilog simulator? The simulator is being developed incrementally, starting from simple combinational logic and gradually adding more SystemVerilog features.”

Formerly known as sisSIM, xezim is being written with heavy use of Anthropic’s Claude large language model - trading off ethical, environmental, and output quality concerns against a desire to see if usable EDA tools can be produced by a small low-budget team. As a result, it may be difficult to enforce its permissive licence: US case law states that the output of generative AI systems is not copyrightable, and LLMs have been known to spit out copies of training data verbatim - including substantial fragments of existing source code published under incompatible or even all-rights-reserved licences.

For those who want to check the project out regardless, the source code is available [on GitHub](https://github.com/aionhw/xezim) under, as far as possible, the Apache 2.0 licence.

<img src="/blog/2026-08-11-ecl99/ocx.jpg" style="max-width:100%" />

## OpenLabX Launches OpenCircuitX, a Free VHDL/Verilog EDA Tool

OpenLabX founder Ahmad Kataranjee has announced the first public release of OpenCircuitX, a permissively-licensed electronic design automation suite for VHDL and Verilog FPGA projects.

“OpenCircuitX is a free, open-source EDA platform for VHDL and Verilog, the hardware description languages (HDL) used to design digital logic,” Ahmad explains. "It is developed by OpenLabX and unifies an IDE-quality HDL editor, a visual circuit canvas, an RTL schematic viewer, a waveform viewer, and a full FPGA toolchain in one window, for hardware engineers, students, and FPGA hobbyists alike.

“OpenCircuitX is built to grow from digital-only into a full EDA platform,” the developer continues, while admitting that at launch only the digital design domain is available with analog and mixed-signal domains planned to be added in later updates.

Ahmad’s creation builds on existing open-source projects including the GHDL VHDL simulator, the Icarus and Verilator Verilog simulators, the Yosys open synthesis suite, nextpnr place and route, and openFPGALoader for board programming.

“OpenCircuitX targets FPGA design ([Lattice Semiconductor] iCE40, ECP5),” Ahmad adds, “not ASIC tapeout. That’s not a limitation to apologize for, it’s the space where open-source EDA already works.”

The project’s source code is available [on GitHub](https://github.com/openlab-x/OpenCircuitX) under the permissive MIT licence.

<img src="/blog/2026-08-11-ecl99/rawast.jpg" style="max-width:100%" />

## Rawast Promises a Structure-First Approach to Parsing

Serge Rabyking is working on a new bidirectional parser for structured text and binary, promising a “structure-first” approach which will avoid the pitfalls he says other projects have hit head-on.

“Most parsers do too much,” Serge claims. "They build a semantic model of the file when all you need is its structure - scopes, lists, fields. The meaning belongs to the application reading the parsed data, not to the parser itself. But the lex+yacc tradition forces both: tokenise first, then reconstruct everything with a state machine. Covering a full format that way is enormous work - and almost never finished.

"rawast formalises the structure-first approach as a universal bidirectional grammar-driven engine for structured text and binary formats. Every EDA tool today reimplements its own readers for LEF, DEF, GDSII, Liberty, and every other format the field uses - every one re-parsing the same files. rawast inverts that: one engine, grammars as data files, and a binary container that distributes parsed data so downstream consumers never re-parse text at all.

“EDA is the first proving ground because the files are large, the formats are many, and every tool currently reimplements its own reader and writer,” Serge notes. “The PoC [Proof of Concept] parses 100% of a 3,132-file production corpus across four formats (GDSII/LEF/DEF/Tcl). The output is queryable without a format-specific API.”

Source code is available under the permissive MIT license [on GitHub](https://github.com/edacommons/rawast).

<img src="/blog/2026-08-11-ecl99/ttdemo.jpg" style="max-width:100%" />

## Tiny Tapeout Demoscene Competition 2 Closes with 41 Entries

Matt Venn has announced the closure of the second Tiny Tapeout Demoscene Competition, which challenges new and experienced designers to build 16-bit-microcomputer demoscene-inspired effects in-silicon - to be produced on actual chips.

“The Tiny Tapeout 2nd Demoscene Competition closed with 41 entries,” Matt says of the contest, “with 26 from newcomers. Demos can be played on the simulator from the Tiny Tapeout page. Thanks to Precision Innovation for sponsoring and making it free. Judges Sprite, Will Flux, and Jeri Ellsworth will receive silicon at the end of the year for judging.”

The entries, which can be played in simulation while the multi-project chip goes through fabrication, include a playable maze by Ckristian Duran, a wave-lattice effect by Kilian, a 2021: A Space Odyssey-inspired demo dubbed 2026: An ASIC Odyssey by Mike Bell, CycloneRunner by Tomvdsch, Tiny Space Invaders by Kyu Neushwastein, an implementation of Frogger by Jack Thoene, Goose Game from Krish Patel and Sunnie Kupar, and an implementation of Conway’s Game of Life by Hoang Dang and Adam Spyridakis - all taking up just a single tile on the multi-project chip.

Larger projects include a prototype version of the classic mainframe game Spacewar! by Nicklaus Thompson, a version of arcade game Missile Command by Diego Satizabal, and a physics demo which draws a Galton peg board and drops soft balls of simulated paint by Ken Pettit.

All projects can be viewed - with links to their permissively-licensed source code and an in-browser simulation - [on the Tiny Tapeout website](https://tinytapeout.com/competitions/demoscene-ttsky26a-entries/). Judging will take place when silicon has been produced, on the Sky26A process, most likely some time this November.

<img src="/blog/2026-08-11-ecl99/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Tymoteusz Blazejczyk has announced a new plugin for pytest to discover and run all defined simulation targets in FuseSoC core files: pytest-fusesoc.](https://pypi.org/project/pytest-fusesoc/)
-   [Paper: Croc - Training the Next Generation Chip Designers on Domain-Specific End-to-End Open Source Silicon.](https://arxiv.org/abs/2606.25673)
-   [Armaan Gomes and colleagues designed a RISC-V CPU from scratch - then ported Doom to it.](https://armaangomes.com/blogs/doom/)
-   [OpenTitan "Earl Grey 2" open hardware root-of-trust to support CHERI and PQC.](https://www.globenewswire.com/news-release/2026/07/14/3326597/0/en/opentitan-earl-grey-2-to-support-cheri-and-pqc.html)
-   [DEF CON 34's badge is powered by Andrew "bunnie" Huang's "mostly-open" Baochip-x1.](https://www.wired.com/story/defcon-34-badge-baochip-andrew-bunnie-huang/)
-   [Tiny Tapeout hands out "custom silicon conference swag" at Hackaday Europe 2026.](https://www.linkedin.com/posts/tinytapeout_tinytapeout-conference-asic-activity-7463569775521099776-RsO3/)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
