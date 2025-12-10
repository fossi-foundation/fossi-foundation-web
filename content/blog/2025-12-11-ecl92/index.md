---
layout: post
title: "El Correo Libre Issue 92"
description: El Correo Libre Newsletter, Issue 92
author: Gareth Halfacree
date: 2025-12-11
---

<img src="/blog/2025-12-11-ecl92/advent.jpg" style="max-width:100%" />

## Challenge Yourself with Advent of FPGA

Reader and Jane Street FPGA engineer Anish Singhani has written in to let us know of a new twist on the Advent of Code educational programming initiative, which takes the same challenges and asks participants to solve them using synthesisable hardware: Advent of FPGA.

“We’re running an ‘Advent of FPGA’ contest, where we’re challenging the community to take puzzles from the yearly Advent of Code 2025 event and solve them entirely in synthesisable hardware,” Anish tells us of the project. "We’re especially excited about seeing people show off the unique features of their favorite HDL languages (and hoping to get some more people trying Hardcaml as well).

“The challenge is running until January 16th 2026, with prizes including UltraScale+ FPGA boards, merch, and a mention in our follow-up blog. We’ve already been seeing some very cool work including: [Max Korbel’s implementations in ROHD](https://github.com/mkorbel1/aoc2025); [Frans Skarman’s solutions in Spade HDL](https://www.linkedin.com/posts/frans-skarman-20b781171_rohd-activity-7401280363198713856-t-Pf); [Marcus Cemes’s side-by-side comparison of FPGA solutions (in Veryl) and software solutions in Rust](https://github.com/MarcusCemes/advent-of-code-2025); [my own attempts, in Hardcaml](https://github.com/asinghani/advent-of-hardcaml-2025).”

Advent of Code was launched in 2015 by Eric Wastl, and provides daily programming challenges for participants to solve in the language of their choice. Advent of FPGA takes these same challenges and applies them to the creation of application-specific hardware, again in the language of the participant’s choice - with participants asked to pick one or more puzzles of their choice and to release the open-source code, a test bench, and documentation for entry into the contest.

More information on the challenge is available [on the Jane Street blog](https://blog.janestreet.com/advent-of-fpga-challenge-2025/); solutions must be submitted by the 16th of January for a chance at winning prizes.

<img src="/blog/2025-12-11-ecl92/lowrisc.jpg" style="max-width:100%" />

## lowRISC & Co. Launch the COSMIC Project

lowRISC and partner Capabilities Limited have jointly announced the launch of the CHERI for Operational Safety in Memory-Isolated Cores (COSMIC) project, which aims to deliver a commercial-quality open-source secure enclave system for system-on-chip designs.

"Two members of the CHERI Alliance, lowRISC and Capabilities Limited working in partnership with the UK Department for Science, Innovation, and Technology (DSIT) and InnovateUK, have announced a three-year project to take the hardware-enforced memory-safety technology and apply it to a “commercial-quality” open source secure enclave system for application-class systems-on-chips (SoCs): COSMIC.

“At lowRISC, we believe strongly in our mission to make commercial open-source silicon real, and in security by openness, not obscurity,” says lowRISC chief executive officer Javier Orensanz Martinez of the COSMIC project. “It is fantastic that not only is this supported by commercial partners such as Google and Rivos, but also by funds from the UK government.”

“The CHERI Alliance is thrilled to see two of its founding members unveil a new product leveraging CHERI security technology,” adds Alliance founding director Mike Eftimakis of the project’s announcement. “As cyber threats skyrocket and regulations tighten at an unprecedented pace, manufacturers must embed rock-solid security in their products, now. COSMIC provides a solid base for this.”

The three-year project, backed by the UK Department for Science, Innovation and Technology (DSIT) and InnovateUK, will build open the earlier OpenTitan project by adding Capabilities Limited’s CVA6-CHERI application processor - in turn based on the OpenHW Foundation’s CVA6 core. The aim: a commercial-quality secure enclave for system-on-chip designs, built to run entirely independently.

The project is expected to run through to March 2028, with the first stage to include the release of an initial reference design under an open-source license; more information is available [on the COSMIC project website](https://cosmic-project.lowrisc.org/).

<img src="/blog/2025-12-11-ecl92/fusesoc.jpg" style="max-width:100%" />

## FuseSoC Gets SPDX Support

Award-winning FOSSi Foundation director and FuseSoC creator Olof Kindgren has announced a new feature for the package manager and build abstraction tool: support for the System Package Data Exchange (SPDX) standard for software bills of materials (SBOMs).

“Open source software is key to modern software creation. With its increasing importance, the need grows to track open source parts and their versions in a project. This is needed both to ensure that the components comply with their licenses and that they don’t contain any known security issues,” Olof explains.

"The two leading SBOM standards are SPDX and CycloneDX, both having tools for automating the process of creating, visualising or validating SBOM documents. Many software frameworks such as Yocto or Zephyr already contains built-in SPDX support, but up until now, there has been no such thing for chip design.

“FuseSoC, being the world’s most widely used package manager for IP cores, is in the perfect position to remedy this. With thousands of FuseSoC-compatible packages, it provides a solid foundation for product development. Built-in SPDX support will now also make it easier to ensure license compliance and perform vulnerability scanning for FPGA-based products.”

The SPDX support comes in the form of a filter which can be enabled like any other, either at the command line or through its registration in core file targets or configuration files. Olof has also announced support for the PURL standard for package URLs, allowing SPDX nodes to uniquely refer to particular IP cores.

More information is available [on Olof’s blog](https://blog.award-winning.me/2025/11/fusesoc-gains-spdx-support.html), while the latest FuseSoC verson can be found [on GitHub](https://github.com/olofk/fusesoc) under the permissive BSD two-clause licence.

<img src="/blog/2025-12-11-ecl92/icext.jpg" style="max-width:100%" />

## IceXT Puts Most of an IBM PC-XT on an FPGA

Software engineer and vintage computing enthusiast Aidan Dodds has shrunk IBM’s classic Personal Computer XT down to a bare minimum of parts - replacing most chips bar the CPU with a low-cost FPGA.

“Recently I undertook a hobby project to recreate an IBM XT Personal Computer from the 1980s using a mix of authentic parts and modern technology,” Aidan explains of the project. "I had a clear goal in mind: I wanted to be able to play the EGA version of Monkey Island 1 on it, with no features missing. This means I need mouse support, hard drive with write access for saving the game, and Adlib audio, my preferred version of the game’s musical score.

“I started off by designing the hardware of the system, which would then serve as my development board while I worked on the software/gateware. The following features were added: DIP-40 socket for an low power NEC V20 CPU [Intel 8088 compatible]; 1MB SRAM chip for the system memory; A [MuseLab] iCESugar-Pro FPGA board with a Lattice LFE5U-25F; dual PS/2 connectors for keyboard and mouse; micro-SD Card socket to act as a Fixed Disk; an authentic [Yamaha] YM3014B digital-to-analogue converter for audio; a piezo speaker that can be driven by the programmable-interval-timer for system bleeps; lastly, a reset switch and some status LEDs.”

The IBM PC/XT launched in March 1983 as the follow-up to IBM’s original Personal Computer, built around the same Intel 8088 processor but offering increased memory, more expansion slots, and a disc controller and 10MB hard drive as standard on most models. The bulky desktop looks little like Aidan’s creation, which is a compact PCB sat within an acrylic housing - yet his FPGA-driven version boasts surprisingly broad compatibility, despite using a modern low-power compatible in place of an original Intel processor.

A detailed write-up is available [on Aidan’s blog](https://bit-hack.net/2025/11/10/fpga-based-ibm-pc-xt/), with a video of the system in action [on YouTube](https://www.youtube.com/watch?v=EmwGfURk4s8); full source code has been published [on GitHub](https://github.com/bit-hack/iceXt) under the reciprocal Creative Commons Attribution-ShareAlike 4.0 licence.

<img src="/blog/2025-12-11-ecl92/tinytapeout.jpg" style="max-width:100%" />

## Tiny Tapeout Sky 25B Taped-Out, While TT06 Reaches Space

Matt Venn has announced the successful tape-out of Tiny Tapeout’s Sky 25B shuttle, which boasts an impressive 98.8 per cent utilisation with a total of 300 projects included on each chip - while the earlier Tiny Tapeout 6 shuttle has taken a trip to the stars, or at least a stable orbit around the Earth.

Launched by Tiny Tapeout, Matt’s project to use open process design kits and multi-project chip layouts to provide open silicon projects with physical chips at an extremely low cost, opened in September this year and closed in November. It’s notable for having used SkyWater’s 130nm open-source PDK, and was submitted to the ChipFoundry CI2511 shuttle with a view to having its 300 projects produced for delivery in May next year.

Chips from the earlier Tiny Tapeout 6 production run, meanwhile, have already been delivered - and some are flying above our heads right now. “Hundreds of open source chip designs on TT06 were launched to low earth orbit on the 28th November,” Matt explains.

"Our [TT06](https://tinytapeout.com/chips/tt06/) chip was put onto a special board and joined another 4 projects on the HUNITY pocketqube format satellite. TT06 contributors [committed their experiments](https://github.com/psychogenic/spasic_experiment_testing/tree/main/spasic/experiment) before the launch, as it’s not confirmed that we’d be able to load a software update while in orbit.

“HUNITY joined lots of other satellites on the SpaceX Transporter 15. After a few delays, it was finally launched at 19:00 CET on November 28th. After a successful separation an hour later, data started being received and has started showing up on [SatNOGS](https://db.satnogs.org/satellite/LLEW-4775-7241-6889-7282).”

A video discussing the project is available [on YouTube](https://www.youtube.com/watch?v=SRuBDMZZiI0), while you can browse the Tiny Tapeout Sky 25B shuttle [on the Tiny Tapeout website](https://tinytapeout.com/chips/ttsky25b/).

<img src="/blog/2025-12-11-ecl92/minivac.jpg" style="max-width:100%" />

## Claude Shannon’s Minivac 601 Lives Again - In-Browser

Vintage computing enthusiast Greg Sadetsky has brought back a true classic of computing history, building an in-browser simulator for Claude Shannon’s educational Minivac 601 relay-based computer - and yes, you can enable sound to hear the relays click through their calculations.

“Before microchips existed, computers were built with mechanical relays,” Greg writes of the hardware he aimed to simulate. “This is a working simulation of the Minivac 601, an educational computer designed by Claude Shannon. You can watch it think slowly enough to see every step.”

The original Minivac 601 was launched by the Scientific Development Corporation in 1961 as an educational machine designed to perform basic calculations and run simple programs up to a game of Tic-Tac-Toe. Designed by Claude Shannon, a pioneer of information theory and the man responsible for the popularisation of Boolean algebra for computation, it was based on double-pole double-throw electrical relays which served as logic switches and memory - clacking away as they computed.

Greg’s recreation is built atop Willy McAllister’s circuit-sandbox, meaning there are no physical relays required - though it includes the option to toggle simulated sound for those who would otherwise miss the clacking of a running program. “This site is a work in progress,” he says of the project. “For now, [you can] peruse the original Minivac manuals (don’t forget to check the erratas) and play around with the simulator. Drag wires, connect components, make a short circuit! (It’s safe.)”

The simulator is available to run in-browser [on Greg’s website](https://minivac.greg.technology/), with full source code available [on GitHub](https://github.com/gregsadetsky/minivac) under an unspecified licence.

<img src="/blog/2025-12-11-ecl92/chiplet.jpg" style="max-width:100%" />

## Researchers Plot a Course to Open-Source HPC, AI Chiplets

Researchers from the Integrated Systems Laboratory at ETH Zurich and the Department of Electrical, Electronic, and Information Engineering at the University of Bologna have published a paper detailing a roadmap towards open-source chiplets for high-performance computing (HPC) and artificial intelligence (AI) - building atop the RISC-V instruction set architecture.

“We present a roadmap for open-source chiplet-based RISC-V systems targeting high-performance computing and artificial intelligence, aiming to close the performance gap to proprietary designs,” the team explains. "Starting with Occamy, the first open, silicon-proven dual-chiplet RISC-V manycore in 12nm FinFET, we scale to Ramora, a mesh-NoC-based dual-chiplet system, and to Ogopogo, a 7nm quad-chiplet concept architecture achieving state-of-the-art compute density. Finally, we explore possible avenues to extend openness beyond logic-core RTL into simulation, EDA, PDKs, and off-die PHYs.

"The idea of an open, composable chiplet ecosystem naturally aligns with the goals and principles of open-source hardware, which has made significant progress in recent years. Like open-source IPs, open-source chiplets could become important building blocks in future 2.5D systems, providing many of the same benefits including high design transparency, low integration cost, and low barriers to design collaboration. The main drawback of current open-source designs is their limited performance: there is a significant performance gap between state-of-the-art (SoA) and open-source systems demonstrated in silicon, which grows larger as the degree of openness increases.

“In this paper, we present our evolving roadmap on open-source 2.5D RISC-V manycores targeting HPC and AI workloads, addressing the need for high-performance open-source chiplet designs. We discuss our past, present, and future efforts on scaling the performance of open-source chiplet designs while prioritizing high compute utilization, energy efficiency, and compute density.”

A preprint of the paper, which has been submitted to the 2026 IEEE CICC for possible publication, is available [on Cornell’s arXiv server](https://arxiv.org/abs/2511.15564).

<img src="/blog/2025-12-11-ecl92/riscv.jpg" style="max-width:100%" />

## Sven Boertjens Proposes a New RISC-V Baseline Profile

Sven Boertjens has highlighted a perceived need for a “consumer-class baseline profile” sitting between the current RV64GC and RVA23 RISC-V profiles, leading a considerable discussion on the proposal’s pros and cons on the RISC-V ISA Dev mailing list./

“Currently, the RVA standards, RVA23 being the latest, are the only real standards for general-purpose processors,” Sven writes of his proposal. "A profile more expansive than RV64GC is necessary for this class, as it’s too barebones to run modern operating systems and user applications. Allowing CPU vendors to implement any extensions they feel are necessary for consumers would lead to fragmentation in the software space, which is a valid concern.

"But a standard profile that’s too inclusive could also be troublesome, that is also a concern of mine. And the RVA23 profile is very, very inclusive. A baseline profile is also the industry standard. Major ISAs like x86 and ARM both stabilised towards realistic baselines, not extensive standards, because too much freedom or rigidity both proved themselves troublesome. Thus, I believe RISC-V is in need of a baseline profile.

“A baseline is meant to be the minimum instructions, or extensions in this case, that hardware must support. For the consumer class, this should contain the essentials for OSes and applications to function properly. An OS needs to be able to run in supervisor mode, and applications sometimes require FP for example. A baseline should not require convenience extensions, though it can absolutely recommend certain extensions. In this case, it’s about modern minimums, not something completely bare, meaning things like bitmanip and other commonly used features are included as well.”

The full proposal, and the entire comment thread, can be read on the [RISC-V ISA Dev mailing list](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/AULdl3YvASY/m/xQ4xxKmSCQAJ).

<img src="/blog/2025-12-11-ecl92/agent.jpg" style="max-width:100%" />

## Mubarek Mohammed Proposes “Architect in the Loop” Agentic Verification

Western Washington University researcher Mubarek Mohammed has proposed that large language models (LLMS) and more specialised machine learning models could help to automate and speed the development and vertification of hardware - but proposes an “architect in the loop” approach to prevent them going off-script.

“The ever increasing complexity of the hardware design process demands improved hardware design and verification methodologies. With the advent of generative AI various attempts have been made to automate parts of the design and verification process,” Mubarek explains. "Large language models (LLMs) as well as specialised models generate HDL and testbenches for small components, having a few leaf level components. However, there are only a few attempts to automate the entire processor design process.

"Hardware design demands hierarchical and modular design processes. We propose agentic automated processor design and verification with engineers in the loop. The agent with optional specification tries to break down the design into sub-components, generate HDL and cocotb tests, and verifies the components involving engineer guidance, especially during debugging and synthesis.

"We designed various digital systems using this approach. However, we selected two simple processors for demonstration purposes in this work. The first one is a LEGv8-like simple processor verified, synthesised, and programmed for the DE-10 Lite FPGA. The second one is a RISC-V-like 32-bit processor designed and verified in similar manner and synthesised. However, it is not programmed into the DE-10 Lite. This process is accomplished usually using around a million inference tokens per processor, using a combination of reasoning (e.g Gemini-Pro) and non-reasoning models (eg. GPT-5-mini) based on the complexity of the task.

“This indicates that hardware design and verification experimentation can be done cost effectively without using any specialized hardware. The approach is scalable, we even attempted system-on-chip, which we want to experiment in our future work.”

A preprint of Mubarek’s paper is available [on Cornell’s arXiv server](https://arxiv.org/abs/2512.00016), but does not discuss the “hallucination” problem inherent in large language model technology. The HDL code and coctb testbenches created for the paper are available [on GitHub](https://arxiv.org/abs/2512.00016) under an unspecified licence.



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
