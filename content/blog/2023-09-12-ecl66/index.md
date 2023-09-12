---
layout: post
title: "El Correo Libre Issue 66"
description: El Correo Libre Newsletter, Issue 65
author: Gareth Halfacree
date: 2023-09-12
---

<img src="pragmaticsemi.jpg" style="max-width:100%" />

## Pragmatic Semi Plans Out OpenLane Compatibility, "Democratising IC Design"


Pragmatic Semiconductor, best known for its work in making flexible yet fully-functional microprocessors, has announced that it is working towards the goal of "democratising IC design" - and is working towards making its platform compatible with the OpenLane automated design flow.

"We're working to make our technology platform compatible with OpenLane," the company explains in its announcement. "Our PDK [Process Design Kit] is already compatible with commercial electronic design automation (EDA) software tools, which are worth their weight in gold for advanced semiconductor design, but - cost-wise - can be a significant barrier to entry for low-complexity use cases. By supporting open-source design flows, we can allow access to more people.

"We've also just announced our collaboration with Europractice, which aims to bridge the gap between academia and industry by providing affordable access to semiconductor fabrication through its multi-project wafer services targeting start-ups and academic spin-offs. We also have an ambition to work with the UK semiconductor community to connect multiple open-access fabs, within industry and academia, that can reinvigorate the UK semiconductor sector and develop new skills across the whole value chain."

The company explains that its efforts are inspired by "pioneering initiatives" in the field of free and open-source silicon, from the RISC-V instruction set architecture (ISA) to the OpenMPW (Multi-Project Wafer) initiative to provide free production runs for projects operating under free and open-source licenses. The company also name-drops Matt Venn's Tiny Tapeout, "which makes chip design as easy as arranging logic gates on a web page."

Pragmatic Semi has not provided a date for full OpenLane compatibility, but more information is available [on the company blog](https://www.pragmaticsemi.com/newsroom/blogs/democratising-ic-design); OpenLane itself is available under the permissive Apache 2.0 license [on the project's GitHub repository](https://github.com/The-OpenROAD-Project/OpenLane).

<img src="edx-riscv.jpg" style="max-width:100%" />

## The Linux Foundation Launches an "Industrial RISC-V" Architecture Course


The Linux Foundation, in partnership with edX, has launched a free computer architecture course based around an "industrial RISC-V core" - RVfpga - though which it aims to give computer science students, electrical and computer engineers, and "other technical students and professionals" a hands-on introduction to the instruction set architecture.

"RISC-V is making fast inroads worldwide," says the Linux Foundation's Clyde Seepersad of the organisation's decision to launch the course. "Learning how to use RISC-V to improve security, power consumption and performance of processors will enable people to help shape the future of computer architecture and ensure long-term career growth."

The course is designed to provide hands-on experience with the RISC-V architecture, including the development and compilation of C and RISC-V assembly code targeting the RVfpga system-on-chip. Students will also be taught how to configure the microarchitecture of the SweRV EH1 processor core in the RVfpga SoC and test its performance.

The course material builds on the VeeRwolf reference platform for the EH1, released as a technology-agnostic design with target-specific wrappers to improve portability. In the case of the Linux Foundation's course, there's only one target in mind: the Digilent Nexys A7, though simulators are provided as an option for those who are unwilling to shell out on hardware.

Interested parties can read more and sign up for the course [on the edX website](https://www.edx.org/learn/computer-programming/the-linux-foundation-computer-architecture-with-an-industrial-risc-v-core); the course itself is free, though a paid-for "verified track" adds graded assignment and exams which culminate in a certificate upon completion.

<img src="jiri-cpu.jpg" style="max-width:100%" />

## Jiri Stepanovsky's Homebrew 16-bit CPU is Built from Just Eight Chips


Student engineer Jiri Stepanovsky has built a Turing-complete breadboard processor from transistor-transistor logic (TTL) chips - having set himself the challenge to use as few components as possible, resulting in an eight-chip single-breadboard 16-bit serial CPU.

"Building a homebrew CPU from scratch takes a large number of logic chips," Jiri explains. "It is understandable, that implementing registers, program counter, ALU [Arithmetic and Logic Unit], and other components of the CPU in TTL or CMOS logic does require a substantial amount of chips. But how many exactly?

"I've tried to optimise my homebrew CPU for the lowest amount of logic chips possible and answer a question: how few ICs are required for a Turing-complete CPU without a CPU?"

The answer, for Jiri's project at least, appears to be eight. which proved enough to put together a system with 128kB of static RAM (SRAM), 768kB of flash - themselves taking up two of the eight chips - and an operating speed of up to 10MHz.

"It contains only a 1-bit ALU," Jiri admits, "but the majority of its 52 instructions operate on 16-bit values (serially). At its maximum speed, it executes roughly 12k instructions per second (0.012MIPS) and, among other things, is capable of streaming a video on [a] PCD8544 based (Nokia 5110) LCD at ~10 FPS."

Jiri's full write-up is available [on his website](https://www.jiristepanovsky.cz/project.php?p=23cpu), with a supporting video [on YouTube](https://youtu.be/3uzoFJyYQ5E).

<img src="fsic-2023.jpg" style="max-width:100%" />

## Free Silicon Conference (FSiC) 2023 Videos Now Available on PeerTube


The Free Silicon Foundation, organisers of the Free Silicon Conference (FSiC) 2023 which took place in July at the Sorbonne in Paris and which focused on free and open-source computer aided design for analogue and digital integrated circuits, have uploaded videos recorded at the event.

"The goal of FSiC is to make the technology accessible to small businesses, startups, universities and schools. Students, makers and professional should have direct access to education, without barriers, paywalls and legal burdens," the event's organisers explain. "What's the value of multi-billion public investments if there aren't designers, engineers and other experts who can operate the industry and who master the tools to innovate?

"We all took apart watches and radios when we were kids, hence we learned how they work. It is time to look inside chips and their tool-chains so that we can study, improve, repair and trust them. The conference motto is therefore: Education, sustainability and innovation by openness and collaboration!"

The videos recorded at the event include a talk on the road to fully-open-hardware mobile computer by MNT Research founder Lukas Hartmann, an introduction to the GoIT project by Rihards Novickis, teaching chip design with open-source tools by Martin Schoebert, a proof-of-concept for scalable analogue blocks using the PDKMaster framework by Staf Verhaegen, and a look at Tiny Tapeout by Matt Venn.

All the videos are available now [on the FSi PeerTube instance](https://peertube.f-si.org/video-channels/fsic2023/videos?sort=-publishedAt).

<img src="doom.jpg" style="max-width:100%" />

## Semidynamics Releases a Doom Port with RISC-V Vector Extensions Support


Semidynamics Technology Services has become the latest to port Id Software's classic 1993 first-person shooter Doom to a new platform, though its work comes with a twist: support for the ratified version of the RISC-V Vector Extensions to boost performance.

Developed for demonstration at the RISC-V summits in Europe and China this year, Semidynamics' Doom port is based on the popular fbDOOM - itself created from the Doom engine source code Id Software released in 1997 after moving on to newer Quake-based engines for its games.

Unlike the stock fbDOOM engine, though, Semidynamics' version offers support for the RISC-V Vector Extensions - optional add-ons to the core instruction set which are designed to improve the performance of certain workloads.

"[The] optimized routines are: R_DrawColumn [and] R_DrawSpan," the company writes of its work. "General optimisations in different routines in: i_video_fbdev.c. Vectorization have been thought for a machine with VLEN=512 and DLEN=512. For other architectures, you might need to change the vrgather instructions with vector load indexed instructions."

The source code for the project is available under an open-source licence [on Semidynamics' GitHub repository](https://github.com/semidynamics/fbDOOM-RISCV).

<img src="nukedmd.jpg" style="max-width:100%" />

## Nuked-MD-FPGA is a Cycle-Accurate Sega Mega Drive Core Built from Die Shots


Pseudonymous retro gaming enthusiast "nukeykt" has released Nuked-MD-FPGA, a Verilog implementation of a Sega Mega Drive/Genesis games console core - built by analysing die shots of decapped chips.

"[The] Sega Mega Drive chipset consist of 6 integrated circuits + RAM chips." nukeykt explains. "Motorola 68000 (Main CPU); Zilog Z80 (Sound CPU); Yamaha YM7101 (VDP); Yamaha YM2612/YM3438 (FM); Yamaha YM6045 (Arbiter); Yamaha YM6046 (IO); TMSS (later revisions)."

Aiming for cycle-accurate emulation, nukeykt and colleagues set about analysing die photos of decapsulated original hardware in order to put together a soft-core equivalent dubbed Nuked-MD. Nuked-MD-FPGA is the next step of that project, taking the C-language emulator and porting it to Verilog which can be synthesised and loaded onto an FPGA.

"Nuked-MD-FPGA currently targets NMOS 68k, NMOS Z80 and FC1004," nukeykt explains. "No real Mega Drive used such combination, but Model 1 VA7 would be closest (CMOS 68k, NMOS Z80 and FC1004). Other variants possibly will be emulated in the future."

At the time of writing, the project had completed Verilog versions of the FM and sound chip and had working versions of the CPU, VDP, arbiter, IO chip, TMSS, combined FC1004 chip, and VRAM which "need more testing & bugfixing."

The project's Verilog source code is available on GitHub under the reciprocal GNU General Public Licence 3.

<img src="switzerland.jpg" style="max-width:100%" />

## Thomas Macaulay Outlines how RISC-V Can Usurp Arm as the "Switzerland" of Silicon


Thomas Macaulay, writing for The Next Web, has written a piece covering recent moves which could see RISC-V "usurp Arm as the Switzerland of computer chips" - referring to the company's reputation as remaining vendor-neutral as it seeks to sell its proprietary IP to chip makers worldwide.

"In the divided world of semiconductors, Arm is frequently compared to Switzerland," Thomas claims. "The UK-based business is built on a foundation of neutrality. But the independence that underpins Arm has become contentious. Meanwhile, a budding contender has emerged with a promise of true impartiality: the RISC-V Foundation."

Thomas points to concerns raised when it looked like Nvidia may be about to purchase Arm from current owner SoftBank, with the potential of taking the company's proprietary IP in-house and casing to licence it to its own rivals, as evidence of this - and sees RISC-V positioned as a potentially safer alternative.

The formation of a still-unnamed new company comprised of Bosch, Infineon, Nordic Semi, NXP, and Qualcomm, as reported in the last El Correo Libre newsletter, is also used as evidence that RISC-V is making real inroads into Arm's traditional strongholds - though with the risk that the company, like Arm, could one day be acquired wholesale; this, at least, would not affect the free and open RISC-V ISA itself.

Thomas' full article is available [on The Next Web](https://thenextweb.com/news/risc-v-chips-versus-arm) now.

<img src="ttspade.jpg" style="max-width:100%" />

## Spade Developer Frans Skarman Adds a Tiny Tapeout Workflow to the Language

Developer Frans Skarman, creator of the Space hardware description language (HDL), has added support for Matt Venn's Tiny Tapeout to the language, courtesy of a Swim plugin.

"I finally have an idea for something to make for Matt Venn's Tiny Tapeout," Frans writes of the project. "Therefore I spent some time setting up a Tiny Tapeout workflow for Spade. [It] supports both GitHub Actions and local builds with just three commands to set up everything."

Frans developed Spade, in partnership with Oscar Gustafsson, as an HDL inspired by modern software languages, aiming for something which would be easier to use and which avoids errors all too easily made in other languages. Its build tool, Swim, generates a Verilog output - and can now be used for Tiny Tapeout projects.

"[I'm] taking the time/space tradeoff to its ultimate conclusion, i.e. a time-multiplexed nand-gate," Frans writes of the Tiny Tapeout project for which the plugin was written. "Mostly because my advisor likes to bring it up as a silly example. I think I'm also going to try to write a Yosys backend for this thing. Should be fairly simple but still an interesting problem."

More information on the project is available [in Frans' Mastodon posts](https://mastodon.social/@thezoq2/111000923039384681), while the plugin itself is [on GitLab](https://gitlab.com/TheZoq2/swim-tinytapeout) under an unspecified open-source licence; the Spade programming language is detailed [on its official website](https://spade-lang.org/).

<img src="qemu.jpg" style="max-width:100%" />

## QEMU 8.1 Brings New Features for RISC-V, OpenRISC, and POWER


The latest release of the QEMU emulator, version 8.1, brings with it a wealth of new features for emulating RISC-V targets - as well as a handful for OpenRISC and the POWER architecture used in OpenPOWER, too.

"This release contains 2900+ commits from 250 authors," the QEMU maintainers write of the latest version. "Thank you to everybody who contributed to this release, whether that was by writing code, reporting bugs, improving documentation, testing, or providing the project with CI [Continuous Integration] resources. We couldn’t do these without you!"

Among the new additions for the RISC-V architecture include support for subsets of the code size reduction extension, the Zfa extension for additional floating-point instructions, BFloat16 (BF16), and disassembly support for the Zcm* and Z*inx extensions. Advanced Encryption Standard (AES) instructions can also now use pass-through acceleration on the host processor, and vector registers have been added to the logs.

In addition to the RISC-V changes, QEMU 8.1 added support for accessing the FPCSR special-purpose register in user mode and configuring the floating-point unit (FPU) to detect tininess before rounding for OpenRISC emulation, and added a range of improvements and fixes to POWER emulation - promoted, in subset, as an open architecture by the OpenPOWER Foundation.

QEMU 8.1 is available to download [from the project website](https://www.qemu.org/download/#source) now, with source code available [on GitLab](https://gitlab.com/qemu-project/qemu) under the reciprocal GNU General Public Licence 2.

<img src="china-statue.jpg" style="max-width:100%" />

## Chinese Chip Companies Form a Patent Alliance to Promote RISC-V Self-Sufficiency


Nine Chinese chipmakers, including Alibaba's T-Head, have announced a defensive patent alliance as the country focuses on RISC-V to forward its efforts towards technology self-sufficiency, local media has reported.

"At a RISC-V industry forum held in Shanghai’s Lingang New Area on Monday, nine chip companies - including Alibaba Group Holding’s chip unit T-Head and Shanghai-listed VeriSilicon Holdings - agreed to form the alliance that includes a condition for members to not sue each other over patent infringement," the South China Morning Post reports.

"Members of the alliance will share patents with each other and license them to third parties in the name of the alliance, according to Dai Weimin, chairman of VeriSilicon and head of the China RISC-V Industry Alliance, formed in 2018. The new alliance aims to contribute to a “healthy” open-source chip ecosystem and promote the rapid development of RISC-V technologies."

The list of companies includes Alibaba's T-Head chip arm, which recently released several RISC-V designs under a free and open licence, VeriSilicon, Nuclei System Technology, and StarFive, whose system-on-chips (SoCs) use proprietary RISC-V cores from SiFive but which have been proving popular for single-board computers and embedded systems worldwide.

More information is available [in the South China Morning Post article](https://www.scmp.com/tech/tech-trends/article/3232686/chinas-top-chip-designers-form-risc-v-patent-alliance-promote-semiconductor-self-sufficiency).

<img src="ecl-logo-small.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [RISC-V Svadu extension, for hardware updating of PTE A/D bits, enters public review (closes 27th September 2023.)](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/xJjSW_XoNB8)
-   [India goes all-in with RISC-V, with Minister of State Shri Rajeev Chandrasekhar saying the nation's government is "fully committed' to making it "the Indian ISA."](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1946194)
-   [RISC-V International announces the Board of Directors Elected Officers: Lu Dai, Dave Patterson, Gary Martz, Ted Speers.](https://riscv.org/blog/2023/08/introducing-the-risc-v-board-of-directors-elected-officers/)
-   [Mike Eftimakis, Semiconductor Engineering: "RISC-V Customization Gets a Standing Ovation."](https://semiengineering.com/risc-v-customization-gets-a-standing-ovation/)
-   [T-Head launches third XuanTie RISC-V Contest on Innovation of Applications, proposal submission closes on 15 September 2023.](https://xrvm.com/activities/occ-xuantieCompetition?spm=xrvm.27140568.0.0.78f17c685XZgJA)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
