---
layout: post
title: "El Correo Libre Issue 94"
description: El Correo Libre Newsletter, Issue 94
author: Gareth Halfacree
date: 2026-02-21
---

<img src="/blog/2026-02-21-ecl94/matt.jpg" style="max-width:100%" />

## FOSSi Foundation's Matt Venn Wins European Open Source Award

FOSSi Foundation director and founder of the Zero to ASIC Course and Tiny Tapeout Matt Venn walked away with a Special Recognition award for Skills and Education at this year’s European Open Source Awards.

“European digital advancement will not be possible without the uptake and upskilling the next generation of open source contributors,” the awarding judges explained of their decision, “and that’s why the Special Recognition for their contribution to Skills and Education [award] is given to the pioneers of educational projects or initiatives advancing open source skills, education, knowledge.”

Matt is, of course, the founder of the Zero to ASIC Course, which aims to teach those with no experience of chip design at all to make their own application-specific integrated circuit. This was followed by the hugely successful Tiny Tapeout, which uses a multi-project chip approach mixed with open process design kits (PDKs) to allow people to design small open-source ASICs, up to the complexity of a simple RISC-V microprocessor, and have them produced in-silicon at a very low cost.

“If you had a random maker who woke up and said ‘I want to make a blinking LED with a microcontroller,’ you could just buy an Arduino board and copy and paste a five-line Arduino script from the internet, paste that into the IDE press, the button, and the LED would start flashing,” Matt explained of the idea behind Tiny Tapeout in an earlier interview.

“You can pretty much do that now for a custom chip. With Tiny Tapeout, you can go to Wokwi, which is this in-browser circuit designer simulation tool. You can connect up an AND gate between two inputs and one output, and then you can go to our GitHub template system, run the ASIC tools as part of an automatic action, and then submit it to the next Tiny Tapeout run. Six months later you’ll receive a board with a chip on it, where if you press two buttons that the output light turns on.”

More information on Tiny Tapeout is available [on the official website](https://tinytapeout.com/).

<img src="/blog/2026-02-21-ecl94/waferspace.jpg" style="max-width:100%" />

## wafer.space Launches its First Shuttle

Leo Moser has been in touch to tell us to crack open the champagne: wafer.space has launched its first shuttle, on the GlobalFoundries GF180MCU process node.

“wafer.space is an MPW [Multi-Project Wafer] shuttle service by Tim Ansell for the GF180MCU process,” Leo explains of the recently-launched initiative. "The open-source ‘gf180mcu’ PDK [Process Design Kit] can be used with this process. My work on the shuttle involved: creating the LibreLane chip template, creating the submission precheck, updating the PDK, and stitching the reticle.

"We have seen some incredible designs on this shuttle, from a Linux-capable RISC-V SoC, a 23-core RISC-V SoC [System-on-Chip] based on [Olof Kindgren’s] SERV, and a RISC-V game console - we can see a common theme here - to projects such as a [Zilog] Z80 replica, a SoC with a DFT [Design For Test] scan chain, not to mention an eight-core chess move generator. Yes, there’s even my own chip on this shuttle: a small FPGA based on the FABulous framework! We also have some well-known initiatives on the shuttle, such as Tiny Tapeout and MOSbius.

“The technical work behind the scenes was challenging but rewarding,” Leo says, “including creating the project template based on LibreLane, improving the PDK, creating the precheck and stitching the reticle. This would not have been possible without the FOSSi community! I’m looking forward to the chips being returned from the foundry, and to shuttle run two!”

A list of all publicly-available projects - wafer.space differing from Tiny Tapeout in building each project into individual application-specific chips rather than multi-project chips including copies of all projects, and in allowing submitters to choose for their projects to remain private - is available [on GitHub](https://github.com/wafer-space/ws-run1); more information on wafer.space itself is available [on the official website](https://wafer.space/).

<img src="/blog/2026-02-21-ecl94/tinytapeout.jpg" style="max-width:100%" />

## First Data Received from Tiny Tapeout’s Space Mission

Matt Venn is celebrating a major milestone for the Tiny Tapeout project: the first successful receipt of data from a chip that was launched into space.

“Here’s some data from Uri Shaked’s ring oscillator, currently 500km above the Earth,” Matt shared of the achievement. “Frequency changes based on temperature, so why is the temperature oscillating every ~3 minutes? Because the HUNITY satellite is currently slowly spinning! Huge thanks to Tibor Herman, Pat Deegan, KSC, Alba Orbital and all our contributors for helping us reach this incredible milestone in open source silicon!”

The chip in question was launched into orbit as part of the HUNITY PocketQube satellite platform from Hungary’s BME University, carrying with it a copy of all projects submitted as part of that production run as a multi-project integrated circuit. Unlike most chips that make their way into space, the Tiny Tapeout IC is not radiation-hardened nor shielded in any way - meaning much of the experimentation will be in seeing how it copes with the harsh environment of space.

“There’s an RP2 temp test on there that I ran for a while,” says Pat Deegan of the data currently being received. “I have to double check that I’m parsing/using the data right, because it seems a little less extreme than it should (we are exposed to vacuum out there, just chips naked in space), but the shape of the curve does make sense.”

More information is available in [Matt’s LinkedIn post](https://www.linkedin.com/posts/matt-venn_opensource-silicon-semiconductor-activity-7415825514352844800-AUaK), with Pat’s temperature graph available in the comments.

<img src="/blog/2026-02-21-ecl94/demoscene.jpg" style="max-width:100%" />

## Tiny Tapeout 8 Demoscene Compo Winners Announced

In what has been a busy few weeks for Matt Venn, the winners of the Tiny Tapeout 8 Demoscene Contest - which challenged contributors to reimagine eight- and 16-bit demoscene software in silicon and submit their designs for manufacturing - have been announced.

The first-place winner in the Newcomer category was James Ross with Glyph Mode, a Matrix-inspired animation; this was followed by Andy Sloane’s VGA Donut we looked at in an earlier El Correo Libre and Konrad Beckmann & Linus Mårtensson’s Flame Demo in joint second place; and finally Andy Sloane’s Demo by a1k0n, Christian Fibich’s cfib Demoscene Entry, and Jaeden Amero’s Patater Demo Kit Waggling Rainbow on a Chip in joint third place.

In the Sound category, which as the name suggests required the use of audio rather than just graphics, Andy Sloane walked away with first place for his VGA Nyan Cat demo; this was followed by, again, his Demo by a1kon alongside bytex64’s Munch, Mike Bell’s TT08 Pachelbel’s Canon Demo, and Toivo Henningsson’s Sequential Shadows Deluxe in joint second place; finally Renaldas “ReJ” Zioma, Erik “eriQue” Hemming, & Matthias Kampa took third place with VGA Drop.

For the Single Tile limited-footprint category, Sylvain Lefebvre took first place with Why Not?; Munch by bytex64 and Glyph Mode by James Ross took joint second place; and Peter Nørlund’s take on Nyan Cat in silico shared third place with SagarDevAcahr’s DemoSiine. The Graphics category was won by Sylvain Lefebvre with Warp; Andy Sloane’s Demo by a1k0n and Toivo Henningsson’s Sequential Shadows Deluxe took joint second; and Andy Sloane’s VGA Donut shared third place with Renaldas “ReJ” Zioma, Erik “eriQue” Hemming, & Matthias Kampa’s VGA Drop.

The Size category was won by Sylvain Lefebvre’s Why Not?; Konrad Beckmann & Linus Mårtensson’s Flame Demo, Peter Nørlund’s Nyan, and Edwin Török’s Rounding Error shared joint second place. In the Mixed Signal category, Antone “algofoogle” Maurovic’s TT08 VGA FUN! won first place, while Andy Sloane’s VGA Donut walked away with another first-place award in the Most Useful category; second place was shared by Anton Maurovic and James Ross with TT08 VGA FUN! and nVious Graphics respectively; third place went to Sylvain Lefebvre’s Warp.

The full list of winners is available [on the Tiny Tapeout website](https://tinytapeout.com/competitions/demoscene-tt08-winners/) with links to each project’s source code; a live-stream of the announcement is available to replay [on YouTube](https://youtu.be/il_qKTiyKLY).

<img src="/blog/2026-02-21-ecl94/warp.jpg" style="max-width:100%" />

## Sylvain Lefebvre Details the Warp Demo Design

Multi-award-winning Sylvain Lefebvre has released a detailed write-up walking through the design of Warp, the demo responsible for two of his four awards in the recent Tiny Tapeout 8 Demoscene Competition.

“There’s no CPU, no memory, just a custom-designed chip racing the beam, producing pixels as they are needed for the VGA beam,” Sylvain explains of the design, which took first place in the Graphics category and third place in the Most Useful category. "The entire logic fits in 161x225 microns (130nm fab).

"The chip is entirely described in my HDL [Hardware Description Language], Silice. The core effect is a classical tunnel effect; however this is normally done with a ‘huge’ pre-computed table having one entry per-pixel. So I thought it’d be challenging and fun to do it while racing the beam. Also, I really like this effect.

"There are several tricks at play: a shallow CORDIC pipeline to compute an atan and length, and a few pre-computed 1/x distances to interpolate between - these form keypoint rings along the tunnel. All the effects are then obtained by combining multiple layers in various ways (like a ‘tunnel effect processor’ which registers can be configured for various effects, ala register combiners). I also made a music track, for the first time, trying to match the style of the graphics.

“The design reached a very high density, 95.62% utilisation,” Sylvain notes. “This may be due to the pipelined nature of its core computations? In any case it’s pretty cool as it means it uses almost every bit of available space!”

THe full write-up is available [on GitHub](https://github.com/sylefeb/tt08-compo-entry/blob/main/docs/info.md) along with the source code of the project under the permissive Apache 2.0 licence; a video of the demo running in simulation is available [on YouTube](https://www.youtube.com/watch?v=ELOYGwZgHnw).

<img src="/blog/2026-02-21-ecl94/spade.jpg" style="max-width:100%" />

## Spade Gets a “Proper Journal Paper”

Spade HDL developer Frans Skarman has announced the acceptance of a “proper journal paper” on the project, for publication in the journal _ACM Transactions on Reconfigurable Technology and Systems_.

“It is a pretty complete description of the current state of the language,” Frans writes of the paper, which was written with colleagues Gustav Sörnäs and Oscar Gustafsson, “but I’m honestly more excited about the way we managed to argue for having a new HDL at Spade’s abstraction level, roughly RTL but with zero cost abstractions on top.”

“The need for custom hardware to meet compute demands is ever increasing. However, the hardware description languages that these accelerators are primarily built with were designed in the 1980s which means that they are missing out on over 35 years of development in programming language design,” the trio writes in the paper’s abstract. "In this paper, we present Spade - a new hardware description language that takes inspiration from modern software language design and aims to be more productive than traditional HDLs without sacrificing performance.

"This is achieved through a mix of building abstractions for common hardware constructs such as pipelines, and outright borrowing ideas from software, such as a type system that comes close in power to that of Rust or Haskell.

“Compared to contemporary hardware description languages such as Chisel, which are embedded in a host language, Spade is a standalone language with a type system that is available in hardware, not just at elaboration-time,” the three authors continue. “Its abstractions also build on top of the RTL abstraction instead of replacing it as is done in languages like BlueSpec and in high-level synthesis.”

The full paper is available [from the ACM Digital Library](https://dl.acm.org/doi/10.1145/3793550) under open-access terms.

<img src="/blog/2026-02-21-ecl94/chipbench.jpg" style="max-width:100%" />

## ChipBench Puts LLMS to the Test

Researchers from the University of California San Diego and Columbia University have released a benchmark designed to measure the performance of large language models (LLMs) for assisted chip design tasks: ChipBench.

“While Large Language Models (LLMs) show significant potential in hardware engineering, current benchmarks suffer from saturation and limited task diversity, failing to reflect LLMs’ performance in real industrial workflows,” the researchers claim in the abstract to their paper on the topic. "To address this gap, we propose a comprehensive benchmark for AI-aided chip design that rigorously evaluates LLMs across three critical tasks: Verilog generation, debugging, and reference model generation.

"Our benchmark features 44 realistic modules with complex hierarchical structures, 89 systematic debugging cases, and 132 reference model samples across Python, SystemC, and CXXRTL. Evaluation results reveal substantial performance gaps, with state-of-the-art Claude-4.5-opus achieving only 30.74% on Verilog generation and 13.33% on Python reference model generation, demonstrating significant challenges compared to existing saturated benchmarks where SOTA models achieve over 95% pass rates.

“Additionally, to help enhance LLM reference model generation,” the researchers continue, “we provide an automated toolbox for high-quality training data generation, facilitating future research in this underexplored domain.”

A preprint detailing ChipBench is available [on Cornell’s arXiv server](https://arxiv.org/abs/2601.21448) under open-access terms; the benchmark itself is available [on GitHub](https://github.com/zhongkaiyu/ChipBench) under the permissive MIT licence.

<img src="/blog/2026-02-21-ecl94/ibex.jpg" style="max-width:100%" />

## lowRISC Announces an Open-Source Ibex Correctness Proof

lowRISC has announced that it has successfully reproduced a proof of correctness for its Ibex RISC-V implementaton - dropping the need to use a commercial model checker in favour of a fully open toolchain.

“In recent years, lowRISC has developed a formal proof of correctness for Ibex, in which equivalence of Ibex against the RISC-V specification is proved, with up to some caveats. This proof previously had been run exclusively with a commercial model checker, but has now been entirely reproduced with a fully open source toolchain, using a combination of Slang, Yosys and rIC3,” the company says. "The open source proof now runs in Continuous Integration (CI) for Ibex, with all properties converging in under 45 minutes on a good machine, far faster than initially anticipated.

"The proof establishes that the Ibex RTL and the Sail RISC-V specification will produce the same sequence of memory operations in the same order forever, provided equivalent inputs. This transitively implies that any security property of RISC-V itself is implicitly proved of Ibex. There are naturally some caveats for this proof, most notably surrounding instruction fetch, unspecified behaviours, and the precise configuration of Ibex used in the proof, though they are relatively minor.

“By reproducing this correctness proof with entirely free and open source tools, anyone, even those without access to commercial tools, may verify our claims straightforwardly,” the team notes. “This pipeline is a complete, coherent flow for efficiently running large formal setups with exclusively open source software, especially those with assume-guarantee setups such as that in our Ibex verification. We hope that this work will help further the use of formal in open source hardware, and that it will help provide confidence in the correctness and security of Ibex.”

More information is available [on the lowRISC blog](https://lowrisc.org/news/open-source-correctness-proof-for-ibex/), while the toolchain is available [in the Ibex GitHub repository](https://github.com/lowRISC/ibex/tree/master/dv/formal) under the permissive Apache 2.0 licence.

<img src="/blog/2026-02-21-ecl94/fosdem.jpg" style="max-width:100%" />

## FOSDEM '26 Videos Now Available

Videos from the Free and Open Source Software Developers’ Europe Meeting 2026 (FOSDEM '26) are now available, including those from the RISC-V track.

“FOSDEM is a free event for software developers to meet, share ideas, and collaborate,” organiser Björn Töpel wrote in the original call for partipants late last year. "Every year, thousands of developers of free and open source software from all over the world gather at the event in Brussels.

“Any topics related to RISC-V are welcome,” Björn continued of the RISC-V track, which has now become a regular attraction of the convention, “but typically encompasses the RISC-V ISA, open source RISC-V hardware (e.g. cores, SoCs, accelerators), and open source RISC-V software (e.g. OS ports, emulators, toolchains).”

Presentations given during the one-day RISC-V “Devroom” event were: RISC-V Vector Optimisations in FFmpeg by Rémi Denis-Courmont; RISC-V had 40 Years of History to Learn From: What it Gets Right, and What It Gets Hilariously Wrong by FelixCLC; State of the Arch: Fedora on RISC-V by Kashyap Chamarthy and David Abdurachmanov; The ET Minion RISC-V ISA by Gianluca Guida; Writing a Network-Capable Boot ROM for RISC-V Prototyping Bring-Up by Nick Kossifidis and Anthony Chazapis; Upstream Embedded Linux on RISC-V SBCs: The Past, Present, and Future by Marcel Ziswiler; RISC-V Hardware is Here: What About Software? by Afonso Oliveira; Kubernetes on RISC-V: An Open Hardware Odyssey by Fabian Thomas and Lukas Gerlach; Can’t Fork a Semiconductor? Hold My Beer: Introducing the Unified RISC-V IP Access Platform by Cario Caplan and Charley Mann; and Mainline Support for OrangePi RISC-V Boards by Michael Opdenacker.

The presentations are available to watch now [on the FOSDEM website](https://fosdem.org/2026/schedule/track/risc-v/); other tracks, covering topics from AI to virtualisation, are [also available](https://fosdem.org/2026/schedule/tracks/).

<img src="/blog/2026-02-21-ecl94/cheri.jpg" style="max-width:100%" />

## CHERI Alliance Announces an Open-Source Reference QEMU

The CHERI Alliance has announced the release of a reference implementation of the QEMU emulator for experimenting with the Capability Hardware Enhanced RISC Instructions with support for both Arm and RISC-V architectures.

“We are excited to announce that the CHERI Alliance hosts a reference QEMU implementation that supports multiple modern CHERI platforms based on Arm and RISC-V,” the Alliance writes in its announcement. "These include the Arm Morello platform, the CHERI RISC-V standard draft 0.9.3, and the University of Cambridge RISC-V ISA v9.

"The CHERI Alliance reference implementation is an important milestone for future development and integration of CHERI support in QEMU. Downstream users can now rely on a common implementation and a central repository for tracking issues and submitting CHERI-related patches. This effort is also contributing to the expansion of the CHERI Alliance CI infrastructure, with the goal to both provide stable QEMU images to test third-party software and validate QEMU itself.

“The QEMU Working Group has set out three major goals for 2026,” the Alliance adds. “Integrate CHERI patches on more modern QEMU versions, continue work to support the latest and upcoming iterations of the CHERI RISC-V standard, and improve the QEMU CI infrastructure.”

More information is available [on the CHERI Alliance blog](https://cheri-alliance.org/towards-a-reference-qemu-for-cheri-platform-emulation/), while the reference implementation is available [on GitHub](https://github.com/CHERI-Alliance/qemu) under a mixture of the GNU General Public Licence 2 and compatible licences.

<img src="/blog/2026-02-21-ecl94/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Semiconductor Engineering releases the eBook _Chiplet Fundamentals for Engineers_ as a free download.](https://semiengineering.com/chiplet-fundamentals-for-engineers-ebook/)
-   [Researchers present COVERT, a "novel golden-free trust verification framework" for commercial off-the-shelf processors.](https://arxiv.org/abs/2601.11939)
-   [An open-hardware motherboard for Intel i486 and compatible processors.](https://maniek86.xyz/projects/m8sbc_486.php)
-   [Public review of the RISC-V Server Platform Specification is now open, runs through to the 7th of March 2026.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/kN-GsXwsDJA/m/HhRO9eCcAQAJ)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
