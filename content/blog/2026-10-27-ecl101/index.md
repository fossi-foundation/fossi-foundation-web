---
layout: post
title: "El Correo Libre Issue 101"
description: El Correo Libre Newsletter, Issue 101
author: Gareth Halfacree
date: 2026-10-27
---

<img src="/blog/2026-10-27-ecl101/orconf.jpg" style="max-width:100%" />

## Relive ORConf 2026 with the Full Video Set

  
ORConf might be over for another year, but if you want to relive it - or you were unable to attend in-person - then we’re pleased to announce that videos of the presentations are now available to view [on the FOSSi Foundation YouTube channel](https://www.youtube.com/watch?v=fWVDwg7z9FA&list=PLVcdQ-u2rHHs).

The biggest ORConf ever, boasting nearly 200 registered attendees and more than 60 presentations, ORconf 2026 saw discussions on topics ranging from open-source radiation hardening for silicon intended for space applications to event-based many-core system simulation, automated Python-driven verification tasks, custom instruction set development, open-source equivalence checking, grammar-driven parsing of electronic design automation file formats, bug-hunting in complex RISC-V extensions, and open-source graphics processors.

While the videos can get you up-to-speed on all these topics and more, covering projects including but by no means limited to coconext, Veer, Verilator, Surfer, FuseSoC, Spade, GVSoC, Slang, Zamlet, Tydi, Chisel, Dyno-SV, kepler-format, naja-schematic, RVVTS, ODE4EC-AMS, DI-OCDCpro, OpenROAD, Tiny Tapeout, Arrakeen, wafer.space, FABulous, DigitalJS, Coreblocks, gdscheck, B-ASIC, SpiceBind, RIVET, ShapeIC, Borg, Spire, NotSoTiny RTL Benchmark, it does sadly exclude the social events and out-of-band discussions which take place in-person - and if you want to make sure you don’t miss out in 2027, keep an eye [on the ORConf website](https://fossi-foundation.org/orconf) to find out when next year’s even bigger and better ORConf is announced.

While you’re waiting, you can see all the videos from ORConf 2026 [in this YouTube playlist](https://www.youtube.com/watch?v=fWVDwg7z9FA&list=PLVcdQ-u2rHHs).

<img src="/blog/2026-10-27-ecl101/zsst.jpg" style="max-width:100%" />

## Putting the Pinnacle of '90s Gaming on an FPGA

  
Pseudonymous developer “nand2mario,” best known for the z386 and z486 open-source clones of Intel’s i386 and i486 processors respectively, has extended the latter project by adding an open reimplementation of the iconic 3dfx Voodoo graphics card - turning compatible FPGAs into a top-end '90s gaming PC.

“I’ve spent the last month adding features and improving performance in z486_MiSTer, mostly working through games from the first half of the 1990s. Looking a few years ahead brought me to another change I wanted to explore: the arrival of 3D graphics cards,” nand2mario explains. "The first one that left a strong impression on me was the Voodoo. The game was Need for Speed II SE. Smooth textures, fog, and the speed of the whole thing made it feel like a new generation of PC gaming. Could I recreate that on an FPGA now that the z486 CPU exists?

"The result of this detour is zSST, a SystemVerilog implementation of the 3dfx Voodoo Graphics, or SST-1. Combined with my z486 CPU and the surrounding PC hardware, it forms z486 XL: a DOS PC with Voodoo graphics running in the programmable logic of a Xilinx KV260 board. Tomb Raider now runs with its original 3dfx renderer.

"zSST implements most of the central Voodoo features: prepared triangles, texture filtering and mipmapping, depth and alpha tests, fog, blending, dithering, framebuffer access, and buffer swaps. It supports both the fixed-point and floating-point setup interfaces. Hardware game testing is still concentrated on Tomb Raider; broader compatibility and later Voodoo generations are work for another day.

“The CPU and renderer run at 100MHz on the KV260,” nand2mario notes. “That board has enough logic, DSP blocks, on-chip memory, and DDR bandwidth for the combined design. The DE10-Nano does not have room for this graphics addition. The KV260 uses its onboard DDR; there is no external SDRAM module to add.”

The full write-up is available [on nand2mario’s blog](https://nand2mario.github.io/posts/2026/zsst-voodoo/); the source code for zSST is available [on GitHub](https://github.com/nand2mario/zSST) under the permissive Apache 2.0 licence.

<img src="/blog/2026-10-27-ecl101/taps.jpg" style="max-width:100%" />

## Zachary “Breaking Taps” Tong Makes a Processor

  
YouTuber Zachary Tong, better known as “Breaking Taps,” is introducing the concept of design-to-chip free and open-source silicon to his audience - by designing a CPU of his own and seeing it produced as a physical chip.

“There are millions, probably even billions, of chips in the world at this point, but this one, this is special - because I designed it,” Zachary explains in the introduction to his latest video. "This is BreakingTTAPs, a custom microprocessor that I designed and set to a real semiconductor foundry to be manufactured.

"I had sold off my chop, I had driven literally across the country and resettled on the West Coast, and I was looking for some projects to work on. And, for whatever reason, I decided that designing and taping-out a chip seemed like an easy and fun thing to do.

“I went digging through old processor ideas and settled on something called ‘transport triggered architecture,’ or ‘TTA.’ Say we want to add two numbers together. In a normal processor, you’d simply execute the ADD instruction and tell it to add Register 1 to Register 2 and place the result in Register 3. Pretty straightforward. In contrast, TTA is all about data movement. You move data into the ports of functional units and operations happen as a side-effect of that data moving around.”

BreakingTTAPs was written in the Spade HDL, Zachary says. “I was very new to both Spade and chip design at the time,” he admits, “so there are definitely rough edges!” Manufacturing took place on GlobalFoundries’ 180nm node via wafer.space, with Zachary spending the time between submission and manufacturing working on an integrated development environment to make using the processor easier.

The project is documented in full [on the Breaking Taps YouTube channel](https://www.youtube.com/watch?v=q6ytRHaTEXI), with Spade source code available [on GitHub](https://github.com/polyfractal/BreakingTTAPs-Spade) under the strongly reciprocal variant of the CERN Open Hardware Licence 2; a version transpiled into Verilog for submission to wafer.space [is also available](https://github.com/polyfractal/BreakingTTAPs).

<img src="/blog/2026-10-27-ecl101/tholin.jpg" style="max-width:100%" />

## Tholin’s Standard Cell Library Boosts GF180MCU Performance

  
Avalon Semiconductor’s mononymous Tholin has released a standard cell library targeting projects building on GlobalFoundries’ 180nm open process design kit (PDK) - dropping support for 5V logic in order to boost performance.

“The PDK provided by Global Foundries (known affectionately as the gf180mcu_fd_sc_mcu7t5v0, or as GF180MCU) provides a large collection of [standard] cells, along with useful timing and process information,” wafer.space’s Kristaps Jurkans explains. "For many, this would be enough - a simple, straight forward translation of a design into silicon using something provided by the creators of the process themselves. Except… there’s a small snag: it’s slow.

“Their open source PDK targets 5V, and therefore the standard cells are made with transistors that are thick enough to handle this. Whilst they still can be run at 3.3V, you still suffer a performance penalty due to their size. This trade-off means you cannot squeeze as much performance out of your circuit as you might want to, thanks to higher current requirements and threshold voltages required for thicker transistors. So, what can you do if you’re after performance?”

The answer, of course, is to build your own standard cell library - which is what Tholin has done, over the course of 13 months of development. While not offering complete coverage, the cells it contains show major performance gains over GlobalFoundries’ equivalents: a GloFo inverter running at 3.3V shows a library-calculated 247.6ps delay, compared to Tholin’s 3.3V-specific version at just 89.1ps.

“There is an absolute minimum number of cells you need to create before LibreLane accepts it at all: NAND, NOT, DFF, buffer, filler, tap, tie, diode,” Tholin, who only began working on chip design projects after signing up to Tiny Tapeout’s second production run, explains. "Once you have those, you can just add more logic cells as you see fit, in whatever order you want. I took a RISC-approach, synthesising a RISC-V core with the fab SCL and checking which cells end up being used the most, recreating those first.

“As silly as it sounds, I use circuitjs for schematic capture and then go straight to layout. There is a lot of intuition, such as having memorised the relevant DRC minima until I got a ‘feel’ for them. All cells must have the same height and a width that is a multiple of some unit width, and you have to be vigilant of potential DRC errors against adjacent cells, but its pretty free-form otherwise.”

Kristaps’ write-up of the project is available in full [in a wafer.space Crowd Supply campaign update](https://www.crowdsupply.com/wafer-space/gf180mcu-run-3/updates/a-need-for-speed-tholins-own-standard-cell-library); the library itself is available [on GitHub](https://github.com/AvalonSemiconductors/gf180mcu_as_sc_mcu7t3v3) under the permissive Apache 2.0 licence.

<img src="/blog/2026-10-27-ecl101/seeds.jpg" style="max-width:100%" />

## PasRISCV is an Object Pascal RISC-V RVA23 Emulator - For Spaceships

  
Indie games studio Against All Odds has released an RVA23-compliant emulator for the free and open-source RISC-V instruction set architecture, with a couple of twists: the first being that it’s written in Object Pascal, and the second that it’s designed to host spaceships’ Linux-capable computers in the sci-fi sandbox game SEEDS.

“Our game SEEDS includes a fully emulated Linux system, which runs our in-game tools for the player. For example, if they are accessing the planetary overview and stats through the program selector on the computer in the homebase, these apps are native Linux programs,” the company explains of the project. "Even if you’re playing the game on a Windows machine, these ELF binaries are executed on this emulated RISC-V 64-bit system running the Alpine Linux distribution.

"Our emulator […] is powered by our in-house PasRISCV project, which is programmed in Object Pascal and accessible to everyone as free open-source software (FOSS). On the technical side, the system provides SMP/MultiHART, RV64GC, and RVA23 support, including the Hypervisor and Vector extensions, together with additional scalar and vector cryptography extensions.

“For graphics, our virtual game screens currently access their displayed pixels using the emulator framebuffer device. More specifically, we use SimpleFB backed by a custom MMIO display buffer. The emulator of course also supports audio. We emulate retro sound cards, such as the CMI8738 and FM801, with PCM, OPL2, and OPL3 available on both. Intel HDA and VirtIO sound are supported as well. OPL and OPN are closely related Yamaha FM synthesis families that influenced the sound of the mid and late 80s and early 90s of various consoles and PCs.”

More information is available on the [Against All Odds blog](https://againstallodds.games/blog/2026/10/03/our-risc-v-emulator-pasriscv/), while the emulator’s source code is available [on GitHub](https://github.com/BeRo1985/pasriscv) under the permissive Zlib licence.

<img src="/blog/2026-10-27-ecl101/jane.jpg" style="max-width:100%" />

## Visualising the Solution to an ASIC Puzzle

  
PhD candidate Kjartan van Driel has solved a recently-published Jane Street puzzle involving the reverse-engineering of a ASIC - and has created a detailed write-up with interactive visualisations for those who want to follow along.

“Jane Street recently released a puzzle where the goal is to reverse engineer an ASIC chip, figure out what it does, and submit a solution,” Kjartan explains. "I irged my friend Leander [Post] to join me and see if we could figure it out. Along the way, it dawned on me that the road to the solution could be illustrated in particularly pretty terms, so here is my attempt at that.

“This writeup follows our solution, for those who couldn’t quite fit the challenge into their schedule. We first examine the GDS format, then recover a circuit we can simulate, and finally work out what it accepts.”

While Kjartan’s site walks through the solution - taking the GDS file for the puzzle chip itself along with a VCD file containing example inputs with corresponding outputs. Scrolling down the page, though, causes two- and three-dimensional visualisations of the chip, the files, and individual components down to the layer-level to be displayed to the right of the text - rendered live in-browser.

While those who may still want to try the challenge themselves should be warned of spoilers, up to and included the answer to the puzzle depending on how far down you scroll, for everyone else the write-up is available [on Kjartan’s blog](https://kjartanvandriel.github.io/asic/).

<img src="/blog/2026-10-27-ecl101/colibri.jpg" style="max-width:100%" />

## CERN Releases a VHDL Common Library

  
CERN has officially released colibri, an open-source common library targeting those writing gateware for FPGAs in VHDL, with more than 100 RTL components at the time of writing.

“Four years ago, a group of developers at CERN started to investigate how gateware portability between projects could be improved,” CERN’s Alberto Perro explains. "At the time, CERN gateware designers were mostly using homebrew tools, adding unnecessary maintenance overhead and slowing design and debug processes. Moreover, an additional level of complexity is caused by the use of FPGAs from different vendors, mainly due to the variety of projects developed.

"In recent years, numerous open-source tools have emerged in the context of FPGA gateware development. The CERN EP department saw this as an opportunity to consolidate efforts and standardise FPGA designs across the organisation. This led to the development of the colibri library.

"colibri is based on three leading principles: open source, vendor-independence, and verification. The first principle is straightforward: the wider firmware development community shall be able to use and contribute to colibri. For this reason, we chose the CERN Open Hardware Licence - Weakly Reciprocal 2.0.

“Vendor independence enables users to evaluate their designs on different platforms simultaneously, without lock-in to a specific environment, even when dealing with mixed hardware and software tools. The third principle is verification: colibri implements both self-checking testbenches and formal verification, the latter being relatively new in the FPGA world. The goal of verification is to provide a robust library that can be trusted.”

While colibri was first released for internal use at CERN four years ago, the organisation has now made it publicly available [on GitLab](https://gitlab.com/colibri-cern/colibri) under the weakly reciprocal version of the CERN Open Hardware License 2.

<img src="/blog/2026-10-27-ecl101/uberddr4.jpg" style="max-width:100%" />

## UberDDR3 Gets a Successor: Meet UberDDR4

  
Angelo Jacobo has announced the release of UberDDR4, a free and open-source memory controller which serves as a successor to UberDDR3.

“Back in 2023 I released UberDDR3, my open-source DDR3 controller,” Angelo explains. "Three years later, the successor is now here: UberDDR4, the open-source DDR4 controller. Three years ago, the first UberDDR3 release could light up an LED. Now UberDDR4 boots Linux at DDR4-2400.

"A DDR4 controller and PHY, checked from lint all the way to Micron’s own model, then thrown at real hardware and a real workload so I can say it works without crossing my fingers. Took me two months of native PHY debugging and $100 of lunch money to get here, but hey - it works.

"The Controller-PHY interface is compliant to DFI v3.1 spec. It connects a Wishbone B4 pipelined master to DDR4 memory and handles initialisation, command timing, bank scheduling, refresh and PHY calibration.

“The controller runs at 1:4 ratio,” Angelo adds. “At DDR4-2400, the memory clock is 1.2GHz and the controller clock is 300MHz (thus 1:4 ratio). Each Wishbone transfer carries one complete BL8 burst: a one-lane x16 memory has a 128-bit Wishbone word and a physical 1-lane x32 memory uses a 256-bit word.”

Angelo’s write-up of the project [is available on his blog](https://www.openiphub.com/post/uberddr4-the-open-source-ddr4-controller), while the UberDDR4 source code is available [on GitHub](https://github.com/AngeloJacobo/UberDDR4) under the reciprocal GNU General Public Licence 3.

<img src="/blog/2026-10-27-ecl101/tube.jpg" style="max-width:100%" />

## The Tube Computer is a “Modern” 8-Bit System - Built in Vacuum Tubes

  
Mononymous maker Mike has become the latest to build an eight-bit microcomputer from scratch - but has eschewed the usual integrated circuit approach and even the idea of using discrete logic chips, instead opting to make it from individual vacuum tubes.

“The Tube Computer has a modern eight-bit architecture. It is designed to run a simple airship flight sim, flying around Brighton for the grandchildren, or a 64 bit Fibonacci sequence for the grown ups,” Mike explains of the wall-mounted beast, which he describes as "almost safe to touch.

"Building tube computers has become an addiction, this is my third! The first ran on 28th May 2021 whist perched on our dining room table, chairs and surrounding floor space. A fairly harmless addiction, I suppose!

"After switch on you have to wait a while for the vacuum tubes to warm up. If you look from the side you see them start to show a red glow. After about a minute The Tube Computer has a pleasant homely aroma from the hundreds of double triodes, all quietly burning off their dust.

“The IBM700 series was the most successful 1950s computer system. A very sophisticated design, it combined more than 1,700 tubes with 4,600 germanium diodes on hundreds of plug-in modules. Able to handle 36 bit words using 18 bit instructions, it could be rented for $12,000 a month. The Tube Computer is slightly cheaper,” Mike says, “and is constructed from recycled 6N3P tubes and IN33A germanium diodes both introduced in the 1950s, combined with new resistors and capacitors on plug-in modules.”

The full project write-up is available [on Mike’s dedicated website](https://www.thetubecomputer.com/).

<img src="/blog/2026-10-27-ecl101/isle.jpg" style="max-width:100%" />

## Will Green Details Isle’s Graphics Devices

  
Will Green, the creator of the work-in-progress educational FPGA-powered Isle Computer, has detailed two components which have added programmable graphics to the platform: Display and Earthrise.

“These graphic devices make the graphics CPU programmable for the first time. We can draw shapes, scroll the display, and set transparency,” Will explains. "Isle devices provide an interface between our RISC-V CPU and the rest of the hardware, such as graphics, storage, and audio. Devices are mapped into the CPU’s address space, so you can access them using normal memory operations, such as loads and stores.

"The Earthrise device encapsulates the Earthrise module and erlist, a memory holding Earthrise drawing instructions. The CPU writes drawing instructions to erlist and controls Earthrise through its hwreg.

"The display device brings together text and bitmap rendering with CPU control via hwreg. The display device output includes display sync, colour, and screen coordinates, ready for digital display or simulation. The display device is mostly display glue logic that use to live in the root module.

“The trickiest part of the the display device is handling hwreg, because the CPU writes them in the sys clock domain, but the display hardware operates in the pix clock domain. The device handles this by holding the sys hwreg constant for a period and then reads them into the pix clock domain while they’re stable.”

The full write-up, including code examples, is available [on the Project F website](https://projectf.io/isle/graphics-devices.html), though Will advises it is currently to be considered draft status and is subject to change.

<img src="/blog/2026-10-27-ecl101/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Canonical asks what’s next after RVA23 in a look at the evolution of the RISC-V ISA.](https://ubuntu.com//blog/evolution-of-the-risc-v-isa-what-next-after-rva23)
-   [CHERI Alliance’s Benjamin Fletcher announces the CHERI Tag Bit Transport Overlay Standard v0.9.](https://cheri-alliance.org/cheri-tag-bit-transport-overlay-standard-version-0-9-released/)
-   […while Jennifer Jackson announces CHERI-Zephyr v0.4.0.](https://cheri-alliance.org/cheri-zephyr-v0-4-0-release/)
-   [David Chisnall details how CHERIoT provides strong, usable isolation without an MMU.](https://queue.acm.org/doi/10.1145/3831361)


**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
