---
layout: post
title: "El Correo Libre Issue 93"
description: El Correo Libre Newsletter, Issue 93
author: Gareth Halfacree
date: 2026-01-13
---

<img src="/blog/2026-01-13-ecl93/sydney.jpg" style="max-width:100%" />

## Planning for Latch-Up 2026 Underway, and G'Day to Down Underflow!

The FOSSi Foundation is storming into 2026 with planning underway for not one but two major events designed to celebrate the free and open source silicon ecosystem around the world: Down Underflow, our first Australian conference, and Latch-Up 2026.

“Down Underflow! This is what we’ve branded our Antipodean franchise of open source silicon community conferences, following in the footsteps its North American-centric Latch-Up and European-based ORConf bretheren,” write FOSSi Foundation director Julius Baxter in [the official event announcement](https://fossi-foundation.org/blog/2026-01-12-down-underflow-2026-first-update) for Foundation’s first Sydney-based event.

“It’ll be in a similar fashion, although a little smaller for the inaugural affair, held during a weekend and free to attend, full of the latest and greatest open source silicon news and reviews and networking. The latter being a major focus of the event, providing a place and time interested folks can gather to spend as much time talking in the hallways as listening to presentations and usually well into the night.”

The first speakers for Down Underflow 2026, scheduled for the 28th of February and the 1st of March, have already been [confirmed](https://fossi-foundation.org/downunderflow/2026#talks), with Tim Ansell to offer an update on wafer.space, Samuel Tensingh on the use of the OpenROAD RTL-to-GDS flow in an Australian ASIC training course, Matt Young on the Slingshot and Slander tools for SystemVerilog, and our own Julius Baxter talking about both the Cocotb project and ways open-source tooling, IP, and workflows have dramatically lowered by barrier to entry for custom semiconductor design and manufacture.

Presentation slots are still available, with interested parties invited to submit when registering to attend - with tickets available for free, with donations gratefully welcome from those who can afford it, on the [official event page](https://fossi-foundation.org/downunderflow/2026#). Sponsorship packages are also available for those who want to join event host Morse Micro and Gold SPonsor NSW Semiconductor Sector Service Bureau (S3B) in supporting the event.

For those in or closer to North America, Latch-Up 2026 will be taking place on the 1st to the 3rd of May - in Canada, at the University of Waterloo, for the first time. “We decided that Latch-Up should be representing (at least) all of North America,” explains FOSSi Foundation’s Tim Edwards of the move [in his announcement post](https://fossi-foundation.org/blog/2026-01-10-announcing-latchup-2026). "The University of Waterloo is well known for its fine engineering school. As in the past, Latch-Up will be the familiar setup in the spirit of previous Latch-Up events (North America) and ORConf (Europe).

“Latch-Up brings together the open-source digital design community in North America for an event in the mould of ORConf - the FOSSi Foundation’s annual European community conference. Like ORConf, Latch-Up is free to attend and consists of a relaxed format of presentations and discussions throughout a weekend, with plenty of time for networking. Latch-Up will consist of two full days of talks in a single-track forum followed by a shorter day of small-group discussions. As in the last several events, there will be a round of ‘lightning talks’ as part of the dinner social event.’”

As with Down Underflow, Latch-Up is free to attend following registration [on the official site](https://fossi-foundation.org/blog/2026-01-10-announcing-latchup-2026#), with a pay-what-you-can option for those who would like to support the event - and submissions for full or shorter lightning talks are open now. Likewise, sponsorship slots are open - as is a call for volunteers to help during the event itself.

More information on Latch-Up 2026 is available [on the event website](https://fossi-foundation.org/blog/2026-01-10-announcing-latchup-2026), and [likewise for Down Underflow](https://fossi-foundation.org/downunderflow/2026#). Hopefully we’ll see some of you at one or both, and give 2026 the start it deserves!


<img src="/blog/2026-01-13-ecl93/demo.jpg" style="max-width:100%" />

## “No CPU, No Memory, Just 4k Gates”

Andy Sloane has written up a pair of entries into the Tiny Tapeout 8 demoscene competition, which challenged entrants to build classic computer-style demos in just a tile or two on the project’s eighth production run.

“In addition to the VGA donut, I submitted two other entries in the Tiny Tapeout 8 demo competition, where you submit a ‘tiny’ ASIC design (room for about 4,000 logic gates) that outputs two-bit RGB to a VGA port and one-bit audio to a speaker,” Andy explains. "One was a an old school C64/Amiga intro type of thing, and the other was a nyan cat.

"The intro features a background starfield, a panning 3D chequerboard with colourful tiles, and wavy scrolling text which casts a shadow onto the chequerboard. I was inspired by lft’s first AVR demo Craft to add a little cyan oscilloscope to the side of the screen as well. This design ended up using 3,374 total cells and filling just about every square nanometre.

"A couple days before the Tiny Tapeout 8 deadline, Uri [Shaked] threw down a challenge in the Discord to make a Nyan Cat, and so I decided to take everything I learned from making the TT08 intro and the donut and put together a design using ripped art and music. I’d reuse some code, avoid previous mistakes, use 640x480 VGA, audio synced to video (31.5kHz sample rate, 60Hz tempo ticks), simpler dithering. Ideally, get it all to fit in one tile.

“Well, it turns out the design I came up with worked and all the cells fit into one tile - but it was too crowded like that for detailed routing3 to succeed,” Andy admits. “Without any workable ideas to cut down on space and without much time left before the deadline, I just grew the design to two tiles and added a ‘deal with it’ sunglasses Easter egg to consume some tiny portion of the expanded space.”

The “donut” Andy talks about was his first demoscene-like Tiny Tapeout submission, which we covered [back in ECL Issue 83](https://fossi-foundation.org/blog/2025-02-11-ecl83): an animated ray-traced doughnut on a chequerboard, created in honour of a 2006 obfuscated C program rendering to text. The intro and Nyan cat write-ups are available [on Andy’s website](https://www.a1k0n.net/2025/12/19/tiny-tapeout-demo.html).


<img src="/blog/2026-01-13-ecl93/ttcob.jpg" style="max-width:100%" />

## Tiny Tapeout’s Matt Venn Looks Back at 2025

Matt Venn has written a retrospective looking at the state of open silicon in 2025 - a year which saw both Tiny Tapeout and Zero to ASIC Course threatened by the closure of former manufacturing partner Efabless.

“For the first time, open silicon wasn’t just a niche experiment in 2025 - it was a real ecosystem spanning three fabs and thousands of designs. And then one company collapsed and hundreds of chips effectively disappeared overnight,” Matt writes. "Efabless going out of business at the end of February hit the community like a hammer. They weren’t just an MPW provider - they offered hundreds of packaged parts with no NDAs, great pricing, and a level of openness that was rare in silicon. Losing them left hundreds of designs, including 500 Tiny Tapeout projects from TT08 and TT09, seemingly stuck in fabrication limbo.

“The vacuum left by Efabless didn’t last long. Within months, new fabs and MPW options appeared - Tim Ansell launched wafer.space, Jeff and Mohammed (ex-Efabless) started [ChipFoundry.io](http://ChipFoundry.io), and Cadence kicked off a SKY130 shuttle. At the same time, community infrastructure strengthened: OpenLane became LibreLane under FOSSi stewardship, and [fossi-chat.org](http://fossi-chat.org) replaced the old Slack. Thanks to a combination of foresight and luck, Tiny Tapeout had already started working with IHP as part of the SwissChips initiative, so we were able to combine most of the lost designs onto the absolutely packed TTIHP25a. With the existential crisis out of the way, 2025 quietly turned into a very productive year.”

Other events highlighted by Matt include the approval of €40m in funding for free and open source silicon efforts, Tiny Tapeout hitting over a thousand designs across 12 chips and three different fabs, the first chip-on-board packaging experiments, and the first Tiny Tapeout chip to reach orbit as part of the HUNITY PocketQube satellite platform from Hungary’s BME University.

As for the future? “2026 is going to bring more accessibility, better tools, more first-time designers,” Matt predicts in the piece, available in full [on the Zero to ASIC Course website](https://zerotoasiccourse.com/post/year_update_2025/), “and lots of surprises from the community.”


<img src="/blog/2026-01-13-ecl93/gatematepc.jpg" style="max-width:100%" />

## The GateMate PC is an IBM-Like RISC-V Machine

Yuri Zaporozhets has taken inspiration from the classic IBM Personal Computer to design an open-hardware machine tailored to run on the open-hardware Olimex GateMateA1-EVB development board for Cologne Chip’s GateMate A1 FPGA: the GateMate Personal Computer.

“GateMate Personal Computer [is] a personal computer inspired by the IBM PC, built on the Olimex GateMateA1-EVB FPGA board,” Yuri explains of the project, which swaps the Intel chip of IBM’s original for a modern 32-bit RISC-V soft-core. "Text-mode interface, RISC-V CPU, custom BIOS, and a DOS-like operating system. Remember the joy of the early PC era? A machine you could understand from top to bottom. Programs that talked directly to hardware through well-documented interrupts. A blinking cursor waiting for your command.

"This project recreates that experience with modern tools: RISC-V soft-core instead of 8088/8086; FPGA fabric instead of discrete chips; ECALL services instead of INT 21h; serial file server instead of floppy drives; same spirit: transparent, hackable, yours.

The project, which is partially created using the output of a large language model (LLM), currently has a working video controller offering 80x30 text mode with a 2,048-glyph USC-2 character encoding, 16-bit attributes with 12-bit RGB foreground and background colours, a PS/2 keyboard interface, and what Yuri says “is believed to be the first working QSPI PSRAM controller for the Olimex GateMateA1-EVB board.” The CPU, meanwhile, is a NEORV32 implemented the RV32IM subset of the RISC-V instruction set and running at 25.175MHz.

More information on the project is available [in a demo YouTube video](https://www.youtube.com/watch?v=3tYfpRKl5EM) and [on the GateMate Personal Computer GitLab repository](https://gitlab.com/gatemate/pc) where the code is made available under the permissive MIT licence.


<img src="/blog/2026-01-13-ecl93/tinybasic.jpg" style="max-width:100%" />

## This CPU is Custom-Made for TinyBasic

Developer Zoltan Pekic has released source code for a CPU dedicated to a single programming language: Itty Bitty Computers’ TinyBasic, released back in 1976 and enjoying its 50th anniversary this year.

“Can BASIC be directly interpreted and executed by hardware? One of the recurring ideas in computing is one of ‘intermediate language’ that provides abstraction over myriad differences between execution platforms. Pascal P-code, Microsoft IL (now known as CIL), Java VM bytecodes are some examples,” Zoltan explains by way of background to the project.

"50 years ago, this concept was used to implement a minimal, portable BASIC ‘dialect.’ [The] whole interpreter fit in 346 bytes of TBIL (TinyBasic Intermediate Language) code! A VM (‘virtual machine,’ another recurring concept) could then be written for popular microprocessors of the era, and for the first (and maybe last?) time same BASIC code could be executed on vastly different computers.

"Homebrew CPUs are fun and fascinating - in implementations they span everything from relays to state of the art FPGAs, and in complexity and architecture they go from simplest one instruction machines to complex pipelined, superscalar processors. Where they often fail is going beyond demonstrating functionality. Writing any software for unique CPU requires much more time and different skills than designing and implementing an original CPU. This seems obvious, but I re-learned the lesson on my own project too. As a result, few end up with even working monitor/assembler, not to mention some higher level programming language.

“What if we would reverse the order? Start with well known and accessible piece of software like BASIC and build the CPU around it? The intermediary steps could then be used to replicate and make custom CPUs run some simple variant of BASIC. In this project I designed and implemented a custom micro-coded CPU that executes TBIL, within a[n] ‘SBC’ which also contains RAM, ROM, VGA, and serial I/O.”

The full project write-up is available [on Hackaday.io](https://hackaday.io/project/204482-cpu-running-basic), with a demo video [on YouTube](https://www.youtube.com/watch?v=vVSzaxeds5I); source code is available [on GitHub](https://github.com/zpekic/Sys_MicroBasic/tree/main) under the permissive MIT licence.


<img src="/blog/2026-01-13-ecl93/microwatt.jpg" style="max-width:100%" />

## OpenPOWER Foundation Announces Microwatt Design Challenge Winners

The OpenPOWER Foundation, working in partnership with ChipFoundry, has announced the winners of its Microwatt Design Challenge, part of the Microwatt Momentum Hackathon launched to encourage investigation in and adoption of the free and open-source OpenPOWER Microwatt core with fully-open tooling - and they’ll now be made into physical chips.

“The outstanding design submissions serve as validation for the comprehensive, high-performance open source toolchain available for the OpenPOWER ISA and Microwatt Core,” say James Kulina, executive director of the OpenPOWER Foundation, of the entrants. “Together with ChipFoundry, we established an open design flow designed to accelerate community innovation and facilitate the delivery of novel, impactful open designs. We warmly welcome the three winning submissions into the OpenPOWER ecosystem.”

“The Microwatt Design Challenge embodies our core mission: to make cutting-edge innovation in silicon accessible to everyone with a great idea,” adds Jeff DiCorpo, chief executive officer of ChipFoundry. “We are thrilled to partner with the OpenPOWER Foundation to not only host this event but to commit to fabricating these three winning designs. Delivering packaged parts and evaluation boards to the winners validates the power of the open source flow and underscores our dedication to accelerating the next generation of open hardware developers.”

The three winners are: Democritus University of Thrace researcher Eleftherios Batzolis for the [MicroWatt-LX SoC Generator](https://github.com/Lefteris-B/microwatt_design_challenge), an extensible open-source framework for building systems-on-chips based on a Microwatt core and LiteX ecosystem; a team from the National Institute of Technology Karnataka for a [Minimal Hardware-Debugger with Microwatt](https://github.com/blue67chillout/Microwatt-Based-MInimalx-Debugger.git); and a team at VIPS-TC for [FPGA Fabric Integration with Microwatt](https://github.com/s-m33r/chipfoundry_fpga_test), which integrates an FPGA fabric generated using the OpenFPGA framework with Microwatt.

More information on the contest and its winners is available [on the ChipFoundry website](https://chipfoundry.io/challenges/microwatt).


<img src="/blog/2026-01-13-ecl93/qemu.jpg" style="max-width:100%" />

## QEMU 10.2.0 Brings Performance Gains, RISC-V Fixes

The latest release of the QEMU hardware emulation project, QEMU 10.2.0, is out now, and brings with it the promise of performance improvements through a switch to io_uring in the program’s main loop - plus fixes and improvements for RISC-V emulation.

“We’d like to announce the availability of the QEMU 10.2.0 release. This release contains 2300+ commits from 188 authors,” the QEMU team wrote in the project’s latest release announcement. "Highlights include: 9pfs shared filesystem support for FreeBSD hosts; live update support via new ‘cpr-exec’ migration mode, allowing reduced resource usage when updating VMs, and potential for re-using existing state/connections throughout update; performance improvements via switching to io_uring for QEMU’s main loop; lots of fixes/improvements for user-mode emulation; ARM: support for CPU features FEAT_SCTLR2, FEAT_TCR2, FEAT_CSSC, FEAT_LSE128, FEAT_ATS1A, FEAT_RME_GPC2, FEAT_AIE, FEAT_MEC, and FEAT_GCS; ARM: support for new ‘amd-versal2-virt’ board model, and improvements to existing ‘AST2600’/’AST2700’/’AST1030’ and ‘xlnx-zynqmp’ boards;

“HPPA: Emulation support for an HP 715/64 workstation; HPPA: Emulation support for NCR 53c710 SCSI controller and HP LASI multi-I/O chip (developed by Google Summer of Code contributor Soumyajyotii Ssarkar); PowerPC: Support for PowerNV11 and PPE42 CPU/machines; PowerPC: FADUMP support for pSeries; RISC-V: Numerous emulation fixes/improvements for various components; s390x: virtio-pci performance improvements via irqfd; and lots more.”

A full list of changes is available [in the project’s changelog](https://wiki.qemu.org/ChangeLog/10.2); the latest release is available [on the QEMU website](https://www.qemu.org/download/#source), with the latest source code available [on GitHub](https://gitlab.com/qemu-project/qemu) under the reciprocal GNU General Public Licence 2.


<img src="/blog/2026-01-13-ecl93/bdd.jpg" style="max-width:100%" />

## Researchers Propose LLM-Based “Behaviour Driven Development”

Researchers at the University of Bremen have proposed an extension to the concept of behaviour driven development (BDD) in order to extend its common use from software development to the hardware realm - by getting large language models (LLMs) involved.

“Test and verification are essential activities in hardware and system design, but their complexity grows significantly with increasing system sizes. While Behavior Driven Development (BDD) has proven effective in software engineering, it is not yet well established in hardware design, and its practical use remains limited,” the researchers write in the abstract to their paper.

"One contributing factor is the manual effort required to derive precise behavioral scenarios from textual specifications. Recent advances in Large Language Models (LLMs) offer new opportunities to automate this step. In this paper, we investigate the use of LLM-based techniques to support BDD in the context of hardware design.

“In this work, we have demonstrated that LLMs can effectively support BDD in hardware design,” the researchers claim. “Starting from a purely textual specification, the LLM was able to generate both a synthesizable Verilog implementation and a comprehensive set of BDD scenarios, enabling a seamless flow from specification to simulation. The case study on a 16-bit ALU illustrates the practicality of this approach and highlights the potential to significantly reduce manual effort while improving consistency across design and verification artifacts. These results indicate that LLM-assisted BDD can serve as a promising foundation for more automated and specification-driven hardware development workflows.”

A preprint of the team’s work, presented as a keynote at the 2nd International Symposium on Artificial Intelligence and Internet of Things (AIIoT-25) in late December 2025, is available [on Cornell’s arXiv server](https://arxiv.org/abs/2512.17814).


<img src="/blog/2026-01-13-ecl93/padlock.jpg" style="max-width:100%" />

## CHERIoT Now Supports Post-Quantum Cryptography

CHERIoT’s David Chisnall has been hard at work on the Internet of Things-focused offshoot to the Capability Hardware Enhanced RISC Instructions (CHERI), adding in support for post-quantum cryptography functions.

“When you tell everyone you’re building a secure platform, the first thing that they ask about is encryption. And, in 2025, the hot topic in encryption is algorithms that are safe from hypothetical quantum computers that, unlike real ones, can factorise numbers bigger than 31,” David explains. "These algorithms are referred to as post-quantum cryptography (PQC).

"Since NIST standardised a few such algorithms, there’s been a lot more interest in seeing them in production, so I spent some time getting the implementations from the Linux Foundation’s PQ Code Package to run on CHERIoT. A lot of companies are building hardware to accelerate these operations, so it seemed useful to have a performance baseline on the CHERIoT Ibex, as well as something that can be used in future CHERIoT-based products.

"The ML-KEM encrypt (generate shared secret and encrypted version) and decrypt (recover shared secret from encrypted version) each use around 18KiB of stack and run in around two million cycles. CHERIoT Ibex should scale up to 200-300MHz (though may be clocked lower for power reasons in some deployments), but even at 100MHz that’s 50 encryption or decryption operations per second. Remember that this is an operation that typically happens when you establish a connection, then you use a stream cypher such as AES with the exchanged key.

“The ML-DSA operations are slower and use a lot more stack space (almost 60KiB for signing!). But, even there, the performance is reasonable, under 4M cycles. This means that you can do 20 signature-verification operations per second at 100MHz. Even using ML-KEM for key exchange and ML-DSA for certificate validation in a TLS flow is unlikely to add more than a few tens of milliseconds to the handshake time, which is perfectly acceptable for the common use case for embedded devices.”

David’s full write-up is available [on the CHERIoT blog](https://cheriot.org/pqc/2025/12/12/pqc-on-cheriot.html).



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
