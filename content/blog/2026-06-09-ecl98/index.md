---
layout: post
title: "El Correo Libre Issue 98"
description: El Correo Libre Newsletter, Issue 98
author: Gareth Halfacree
date: 2026-06-09
---

<img src="/blog/2026-06-09-ecl98/ode.jpg" style="max-width:100%" />

## ODE4EC Has Begun

  
This month sees the kick-off of the Open Design Environment for European Chips, or ODE4EC - a three-year initiative designed to build and sustain a sovereign chip design environment focused on open source and open hardware, supported by the FOSSi Foundation.

“To increase Europe’s impact and share on the global semiconductor markets and Europe’s sovereignty, more chips need to be designed in Europe. A major challenge to achieve this goal is the lack of a solid talent pipeline and significant barriers for newcomers such as SMEs and research across disciplines,” the ODE4EC organisers explain.

"Europe cannot rely on closed, proprietary tools and supply chains to build sovereign semiconductor capability. ODE4EC’s vision is a chip design landscape where open source is a solid base of chip ambitions: open EDA tools, open design IP, and open process design kits together remove the friction that today keeps talented engineers, researchers, and SMEs from designing chips. When designing a chip is as accessible as writing software, Europe gains a self-reinforcing cycle: more designers, more innovation, more chips.

“Open source chip design is not a single project but an ecosystem. ODE4EC brings together industry, academia, and research organizations that share a commitment to openness, and creates the conditions for them to collaborate effectively. Rather than building in isolation, ODE4EC acts as a connective layer: aligning efforts, closing gaps, and amplifying what the community is already building. The result is an ecosystem that is more than the sum of its parts — one that is resilient, interoperable, and positioned to grow.”

The project is led by Frank Gürkaynak of ETH Zurich, Luca Benini of University Bologna, and Stefan Wallentowitz of the HM University of Applied Sciences Munich and the FOSSi Foundation, alongside individual project leaders Rene Scholz of IHP, Christian Pilato of Politecnico Milano, and Luis Miguel Pinho of INESC TEC. Three key projects have launched: ODE4EC-AMS, led by Rene, focuses on open-source EDA for analog and mixed-signal designs; ODE4EC-DIG, led by Christian, focuses on open-source EDA for digital designs; and ODE4EC-PIV, led by Luis, focuses on open-source tools for productivity, flow integration, and chip design verification.

More information is available [on the ODE4EC website](https://ode4ec.eu/).

<img src="/blog/2026-06-09-ecl98/heichips.jpg" style="max-width:100%" />

## HeiChips Summer School is Back for 2026

  
Leo Moser has reached out with welcome news: the HeiChips Summer School, which introduces students to free and open-source silicon design, is back for another year - and funding has been secured to complete a physical tapeout with IHP.

“Hosted by ZITI, Heidelberg University, [HeiChips Summer School] focuses on free and open-source chip design,” Leo explains. "Last year’s HeiChips was a great success! As a result, we taped out a chip with a small FPGA connected to all the designs created during the final two-day hackathon.

"This year, " Leo adds, “we also have funding to tape out a chip using the IHP SG13CMOS5L process. There will be another hackathon, and we plan to improve the chip by adding power gating to all the user projects.”

The week-long HeiChips Summer School, which is free to attend with voluntary contributions invited from industry participants, grew from the FPGA-Ignite Summer School series, and in its first year saw a tape-out on the IHP 130nm BiCMOS open-source process design kit. Last year’s schedule is detailed on the [official website](https://heichips.github.io/Heichips2025/index.html), including links to slide decks and video where available; source code is available [on GitHub](https://github.com/FPGA-Research/heichips25-tapeout) under the permissive MIT license.

HeiChips Summer School 2026 is open for registration until the 25th of July, and will be held at the European Institute for Neuromorphic Computing (EINC) in Heidelberg on the 3rd to the 7th of August; interested parties can find out more and register on the [official website](https://heichips.github.io/).

<img src="/blog/2026-06-09-ecl98/z386.jpg" style="max-width:100%" />

## z386 is an Open-Source Intel i386 Clone - Which Runs Doom

  
Pseudonymous developer “nand2mario” has released z386, a functional open-source clone of Intel’s classic i386/80386 processor - its capabilities proven by, what else, running id Software’s classic 1993 first-person shooter Doom.

“z386 is a 386-class CPU built around the original Intel microcode, in the same spirit as z8086,” nand2mario says of the project. "The core is not an instruction-by-instruction emulator in RTL [Register Transfer Level]. The goal is to recreate enough of the original machine that the recovered 386 control ROM can drive it. Today z386 boots [Microsoft MS-]DOS 6 and DOS 7, runs protected-mode programs like DOS/4GW and DOS/32A, and plays games like [id Software’s] Doom and [Sensible Software’s] Cannon Fodder.

"There is a reasonable argument that the 386 is Intel’s most important CPU. Not the cleanest, not the fastest for its time, and not the most elegant. But it got the hardware-software contract mostly right: a 32-bit x86 with protected mode, paging, and good backward compatibility. Another perspective makes a similar case: what we now call x86 really starts to look like itself with the 80386.

“z386 is part CPU implementation, part archaeology, and part logic puzzle,” its author continues, standing on the shoulders of existing efforts to reverse-engineer Intel processors and disassemble their microcode. “Every time a BIOS, memory manager, or DOS extender gets a little further, it is evidence that another part of the design has been reconstructed.”

A detailed write-up of the project is available [on nand2mario’s blog](https://nand2mario.github.io/posts/2026/z386/); source code for z386 is available [on GitHub](https://github.com/nand2mario/z386) under an unspecified open-source licence, with a core designed for use with the MiSTer FPGA multi-emulation platform available [in a separate repository](https://github.com/nand2mario/z386_MiSTer).

<img src="/blog/2026-06-09-ecl98/redwood.jpg" style="max-width:100%" />

## Redwood EDA’s Makerchip ASIC Design Showdown Returns

  
Steve Hoover has written in to let us know that Redwood EDA is bringing back its Makerchip ASIC Design Showdown for a second year, running throughout the summer and offering a new challenge: Eleven Towers.

“[The] second annual Makerchip ASIC Design Showdown is bringing semiconductor design out of the exclusive realm of big corporations and into the hands of hobbyists, students, and aspiring chip designers worldwide,” Steve says of the competition. "Running throughout the summer of 2026, the competition challenges participants to design hardware circuits that compete head-to-head on a virtual board game - all using free, browser-based tools that eliminate the traditional barriers to ASIC design.

“In this year’s challenge, Eleven Towers, teams must devise winning strategies to know when to push their luck and when to bank their progress, competing to be the first to claim three of eleven towers. The twist: all of this strategic thinking must be codified in Verilog or TL-Verilog. It’s a unique blend of gaming, digital design, the AI frontier, and good fun your mama wouldn’t understand.”

The goal of the competition is to design a chip capable of completing the construction of three towers from a total of 11 on the game board, inspire by the Parker Brothers board game Can’t Stop. Each chip will be competing against up to four other chips from other competitors, with free entry for those looking to win pure kudos - or paid entries, starting at $40 per team for those registering before the 1st of July or $60 after, having a chance of winning a cash prize.

More information is available [on the competition site](https://www.redwoodeda.com/showdown-info), with sources available [on GitHub](https://github.com/rweda/showdown-2026-eleven-towers); competitors have until the 27th of July to submit their designs, with judging due on the 1st and the 3rd of August for free and paid entrants respectively.

<img src="/blog/2026-06-09-ecl98/hsco.jpg" style="max-width:100%" />

## HSCO-Bench is Co-Design Benchmark for SoCs

  
Researchers from Columbia University, working with IBM Research, have released HSCO-Bench, an agentic end-to-end hardware-software co-design benchmark targeting the use of large language models (LLMs) in the design of systems-on-chips (SoCs).

“Large language models (LLMs) are adopted for software and hardware design, yet these domains are still evaluated separately. Software benchmarks typically assume fixed hardware targets, while hardware benchmarks focus on component-level optimization without considering the full hardware-software stack,” the researchers explain. "Consequently, no existing benchmark evaluates whether an LLM agent can perform end-to-end, system-level hardware-software co-design. Such a process requires: 1) analyzing applications to identify kernels requiring acceleration, 2) designing and integrating heterogeneous accelerators into a System-on-Chip (SoC) under resource constraints, and 3) mapping kernels onto the generated accelerators.

"We present HSCO-Bench, an end-to-end hardware-software co-design benchmark for accelerator-rich heterogeneous SoC generation. Built upon an open-source SoC platform with a curated repository structure, HSCO-Bench evaluates the ability of LLMs to jointly optimise software and hardware stacks, producing SoC prototypes deployed on the AMD Virtex-7 FPGA VC707 Evaluation Kit.

"Experimental results show that end-to-end integration remains challenging for current models. Among the five frontier models evaluated, only two of them could successfully generate valid SoC prototypes. Yet, even in these successful instances, the generated designs are far from optimal. While we observe a promising peak speedup of 16.22X, the maximum additional resource utilization reaches only 23.67%.

“This highlights,” the team concludes, “that while state-of-the-art models demonstrate an emerging capability for hardware acceleration, they still heavily under-utilise the available hardware capacity, leaving room for future optimization. To the best of our knowledge, HSCO-Bench is the first benchmark targeting this complete co-design flow, enabling LLMs to jointly reason about and modify both the software and hardware stacks of heterogeneous SoCs.”

The researchers’ work is available as a preprint [on arXiv](https://arxiv.org/abs/2605.19399), with source code available [on GitHub](https://github.com/B07901087/hsco_bench) under the Creative Commons Attribution 4.0 International License.

<img src="/blog/2026-06-09-ecl98/calc.jpg" style="max-width:100%" />

## Goran Devic’s Calculator is Built From Scratch

  
Maker Goran Devic has a ocket calculator with a difference: it’s been designed from the ground-up, inspired by classic Hewlett-Packard binary-coded decimal (BCD) calculators - and running atop an Altera Cyclone II FGPA.

“This is a scientific BCD calculator that uses binary-coded decimals, the same internal number format HP used in its scientific calculators going back to the 1970s,” Goran explains of the project. "It represents every decimal digit as a 4-bit nibble, which means perfect decimal accuracy, no floating-point conversion errors, and an architecture that is genuinely shaped by the problem it solves.

"To make that work cleanly, we also design a custom CPU that thinks in nibbles too. It runs on an Altera Cyclone II FPGA, synthesized with Quartus, simulated with Verilator and ModelSim, and debugged through a Qt-based desktop prototype that also compiles to WebAssembly if you want to run it in a browser. Several tools, several moving parts - all built in stages and tested at each one.

“The joy here is not in the finished device, though that does appear at the end. It is in each layer becoming real: the moment algorithms verified in C++ begin running on a processor you designed yourself, and the result is correct to 14 decimal digits. If you have ever wondered what actually happens inside that little machine when you press a key, this series is written for you. Hope you find something of value here.”

To gift others that joy, Goran has released a ten-chapter write-up which walks through the core design of the calculator, the hardware, the design of the custom processor which powers it, microcode creation, and moving away from a development board onto a real calculator board.

The full write-up is available [on Goran’s website](https://baltazarstudios.com/calculator/), with source code available [on GitHub](https://github.com/gdevic/FPGA-Calculator) under the reciprocal Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International licence. A WebAssembly emulator is also available for live use in-browser, [with](https://baltazarstudios.com/files/calculator-d/Calculator.html) or [without debugger](https://baltazarstudios.com/files/calculator/Calculator.html).

<img src="/blog/2026-06-09-ecl98/benchies.jpg" style="max-width:100%" />

## New “Microbenchmarks” Highlight RISC-V Compiler Performance Gaps

  
Researchers have released a series of assembly microbenchmarks targeting the RISC-V Vector Extension (RVV) 1.0, as-ratified - finding big differences in the performance available from GCC and LLVM compilers for machine learning proxy workloads.

“The RISC-V Vector Extension (RVV) is a cornerstone for supporting compute throughout in scientific and machine learning workloads,” the researchers, from the KTH Royal Institute of Technology, Lawrence Livermore National Laboratory, and the Barcelona Supercomputing Centre, explains. "Yet compiler support and performance monitoring on real RVV 1.0 hardware are still evolving.

"In this work, we design a suite of assembly microbenchmarks to calibrate performance counters on the BananaPi-F3 RVV hardware. Using the benchmarks, we find that predication overhead and stride load pose performance bottlenecks that current compiler cost models do not yet fully capture. Evaluating GCC 15 and Clang 21 across six scientific and ML applications, GCC 15 produces more stable and efficient code generation, outperforming Clang 21 in four of six benchmarks.

“Clang 21 achieves superior performance only in SGEMM and DGEMM, attributable to more aggressive instruction reduction as confirmed by our validated perf counters. Default LMUL selection proves near-optimal in most cases, though GCC 15 shows greater potential for performance gains through larger LMUL tuning than Clang 21. Finally, we contribute an RVV backend for Google’s Qsim quantum circuit simulator implemented using RVV intrinsics, where GCC 15 again outperforms LLVM 21 on this complex, real-world workload.”

A preprint of the paper, which is to be published in the proceedings of the 32nd European Conference on Parallel and Distributed Processing (Euro-Par 2026), is available [on arXiv](https://arxiv.org/abs/2605.10860). The benchmarks, meanwhile, are available [on GitHub](https://github.com/KTH-ScaLab/rvv-evaluation) under the reciprocal GNU General Public Licence 3.

<img src="/blog/2026-06-09-ecl98/latch.jpg" style="max-width:100%" />

## CHIPS Alliance Publishes a Latch-Up 2026 Retrospective

  
Sponsor and attendee the CHIPS Alliance has published its retrospective of Latch-Up 2026, the latest in the FOSSi Foundation event series held early last month - highlighting the presentations most closely aligned with its own initiatives.

“CHIPS Alliance was proud to sponsor Latch-Up 2026, held May 1-3, 2026, in Waterloo, Ontario, Canada,” the organisation says. "Organised by the FOSSi Foundation, Latch-Up is a weekend of presentations and networking dedicated to free and open source silicon. Designed for the open source digital design community, the event brings together engineers, developers, and contributors to share technical work and connect across the ecosystem. It is the North American counterpart of the European open silicon conference with a 14-year history, ORCONF, also organized by FOSSi, which CHIPS will be joining and sponsoring later this year.

This year’s program included several sessions closely aligned with CHIPS Alliance initiatives, covering SystemVerilog tooling, Verilator development, and open process design kits. Karol Gugala of Antmicro presented on behalf of CHIPS Alliance, outlining the organization’s work to host and develop open source standards, IP, verification IP, interconnects, and tools for open source silicon development. A major focus of the presentation was the SV Tools project, which recently underwent a restructuring and now includes four projects: sv-tests, Verible, Synlig, and RISCV-DV. Karol explained that the project is focused on tooling around SystemVerilog and design tools.

"Krzysztof Bieganski of Antmicro presented recent progress in Verilator related to UVM support, four-state logic, and related verification capabilities. Krzysztof reported that UVM 2020 can now be compiled with Verilator and said the team is focused on resolving remaining runtime issues in real design verification codebases, including RISCV-DV.

"Frank Vater of IHP - Leibniz Institute for High Performance Microelectronics presented an update on the institute’s open source process design kit and open-silicon multi-project wafer program. Frank explained that IHP has offered MPW shuttle services since 2021 and announced its SG13G2 technology as an open source PDK in 2022. The talk reviewed both analog and digital design flows, including KLayout-based layout, ngspice simulation, OpenROAD flow scripts, and a digital standard cell library with 84 cells and I/O cells.

“The sessions at Latch-Up 2026 highlighted complementary efforts across the open source silicon ecosystem,” the CHIPS Alliance concludes, “improving SystemVerilog tooling, expanding open verification capabilities - both of which are being pursued under the auspices of the newly re-formed SV Tools project, and increasing access to process technologies and manufactured silicon - which is aligned with the ongoing efforts of CHIPS Alliance around a PDK-focused project.”

The full retrospective is available [on the CHIPS Alliance website](https://www.chipsalliance.org/news/latch-up2026/), with more information available on the [event webpage](https://fossi-foundation.org/latch-up/2026); recordings of all sessions are available to watch now [on YouTube](https://www.youtube.com/playlist?list=PLUg3wIOWD8yol2eb-LIcKZ08tbynkAJOV).

<img src="/blog/2026-06-09-ecl98/coreet.jpg" style="max-width:100%" />

## OpenHW Foundation Snaps Up Ainekko’s CORE-ET Silicon Platform

  
Ainekko, a startup focusing on open software-defined infrastructure for machine learning and artificial intelligence workloads, has had its CORE-ET Silicon Platform (CORE-ETSP) adopted as an official project under the auspice of the OpenHW Foundation.

“AI infrastructure is going through the same transition we saw with operating systems and cloud platforms,” claims Ainekko co-founder and chief technical officer Roman Shaposhnik. “Closed systems slow innovation. Open platforms accelerate it. By bringing the CORE-ET Silicon Platform into the Eclipse Foundation’s OpenHW ecosystem, we’re creating a neutral foundation where developers, companies, and researchers can collaborate on the next generation of AI silicon for the edge.”

“Open collaboration is essential to advancing the next generation of semiconductor innovation,” adds OpenHW Foundation head Florian Wolhrab. “The CORE-ET Silicon Platform brings together open hardware design, development tools, and AI inference capabilities in a way that aligns closely with the OpenHW Foundation’s mission to enable open, high-quality processor and system IP for the global community. As the whole design is being taped out on a 16nm node, it is transforming into real silicon quickly.”

The CORE-ETSP is comprised of a 64-bit many-core RISC-V processor with vector and SIMD extensions together with a scalable network-on-chip (NOC) with magnetoresistive-RAM (MRAM) memory. It’s targeting implementation in silicon, though also includes an architecture emulator for rapid development - and includes interfaces suitable for use as either an accelerator added on to an existing host system or a fully standalone embedded platform.

As an OpenHW Foundation project, CORE-ETSP will be released under the permissive Solderpad Hardware Licence v2.1; Ainekko co-founder and chief executive officer Tanya Dadasheva will be presenting on the platform at the RISC-V Summit Europe in Bologna this week. More information is available [on the Ainekko website](https://nekko.ai/), with an initial release of the CORE-ETSP source available [on GitHub](https://github.com/openhwgroup/core-et/tree/main) under the permissive Apache 2.0 licence.

<img src="/blog/2026-06-09-ecl98/vivado.jpg" style="max-width:100%" />

## AMD Pulls, Then Restores, “Free” Vivado for Linux

  
AMD riled up the FPGA community late last month with a decision which served primarily to demonstrate the difference between free-as-in-speech and free-as-in-beer: putting the Linux version of its Vivado FPGA software behind a minimum-$1,200 a year paywall.

“This makes no sense to me,” Will Green wrote [on Mastodon](https://mastodon.social/@WillFlux/116611945218460589) after spotting the change, which made the free-tier version of Vivado available exclusively on Microsoft Windows and asked a minimum $1,200 a year licensing fee from those looking to use it on Linux. "This will make it harder for people to learn and get into FPGA.

“All recent dev teams I’ve worked with in hardware and software have been Linux/Mac. AMD should be releasing a free version of Vivado for Linux and macOS. Imagine if AMD charged $1000+ to compile software on Linux. The only people hurt are hobbyists and the future of FPGA outside big enterprises.”

Will was far from the only person to complain about the change, and AMD - thankfully - listened. “We’ve heard the feedback from the FPGA and Linux developer community regarding upcoming Vivado licensing changes, particularly concerns around Linux support,” a company spokesperson wrote in the [official support forum](https://adaptivesupport.amd.com/s/question/0D5Pd00001aT5IcKAK/adding-linux-support-back-for-the-basic-free-version-of-vivado?language=en_US). “Supporting developers across diverse workflows and environments remains important to AMD. To address this feedback, we will continue Linux support in Vivado Basic with the upcoming Vivado 2026.1 release. We appreciate the community’s candid feedback and ongoing engagement as we continue improving the developer experience.”

Increasing restrictions on the capabilities of the free-tier Vivado, coupled with the realisation that AMD could change its mind again at any moment, serve as a warning and a lesson: there is a big difference between free and open EDA and “free” EDA.

<img src="/blog/2026-06-09-ecl98/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [RISC-V International is looking to shake up its board, with chief executive Andrea Gallo calling for "thoughtful and strategic nominees."](https://riscv.org/blog/2026-elections/)
-   [The RISC-V Ratified Specifications Library aims to deliver a single source "for all RISC-V specifications."](https://riscv.org/blog/ratified-specifications-library/)
-   Will Green announces [graphics refactor](https://mastodon.social/@WillFlux/116545601310851015), [other improvements](https://mastodon.social/@WillFlux/116663114631361994) to the [Isle FPGA Computer project](https://projectf.io/isle/fpga-computer.html).


**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
