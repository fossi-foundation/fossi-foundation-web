---
layout: post
title: "El Correo Libre Issue 51"
description: El Correo Libre Newsletter, Issue 51
author: Gareth Halfacree
date: 2022-06-14
---

<img src="google-open-silicon.jpg" style="max-width:100%" />

## Google Launches Resource Portal for Building Open Silicon

Google, as part of its partnership with Efabless and Skywater Technologies on the Open MPW program which allows free and open source silicon projects to submit chip designs for physical fabrication at no cost, has launched a new resource portal aimed at getting people started designing their own chips.

"Since November 2020, when Skywater Technologies announced their partnership with Google to open source their Process Design Kit for the SKY130 process node, the Hardware Toolchains team here at Google has been on a journey to make building open silicon accessible to all developers," says Google's Johan Euphrosine.

"Together we've built a community of more than 3,000 members, where hardware designers and software developers alike, can all contribute in their own way to advance the state of the art of open silicon design."

The initial Open MPW shuttle was over-subscribed, with 45 designs submitted - the majority of which came from contributors who had never produced physical silicon before. It's these that Google is hoping to attract with its new portal, a landing page which offers easy access to resources surrounding the Open MPW program and free and open source silicon in general.

The launch rides on a wave of massive interest, with the latest shuttle - MPW-5, built as with its predecessors on Skywater's SKY130 process node and with Google picking up the bill for fabrication - have attracted a massive 78 projects.

Google's [free and open source silicon developer portal](https://developers.google.com/silicon) is live now, and while submissions for MPW-6 have just closed it's a great time to prepare for the opening of MPW-7.

<img src="enjoy-digital-virtex.jpg" style="max-width:100%" />

## CoreScore Benchmark Sees New Record with 10,000 RISC-V Cores on One FPGA


The CoreScore benchmark, which sees just how many functional SERV RISC-V cores it's possible to pack onto a single FPGA, has a new leader - and at almost double the previous record, with 10,000 cores on a single chip.

"Vivado placing & routing 10,000 RISC-V cores on Xilinx's largest FPGA ([Virtex UltraScale+] VU19P)," Enjoy Digital explains on [Twitter](https://twitter.com/enjoy_digital/status/1530085417608957952) of the technology driving the record-breaking entry to CoreScore. "Give it enough RAM (64GB) and time (~48H) and it will do it! Impressive piece of software and new top CoreScore."

CoreScore is designed to benchmark both FPGAs and synthesis toolchains by measuring the number of SERV cores, ultra-compact bit-serial RISC-V cores designed to take up as little room as possible while still remaining functional, it's possible to place. As FPGAs get bigger, the number increases - as it does when place and routing tools become more efficient.

The former record-holder was the Virtex UltraScale+ VCU128, onto which 6,000 cores had been placed; the new record - which has not yet been added to [the world rankings](https://corescore.store/), hits nearly double that at 10,000 functional cores.

Those eager to try CoreScore for themselves can find it [on Olof Kindgren's GitHub repository](https://github.com/olofk/corescore), while the award-winning SERV core [has its own repository too](https://github.com/olofk/serv).

<img src="opentitan.jpg" style="max-width:100%" />

## LowRISC Acquires NewAE to Add Functionality to its OpenTitan Platform


Open silicon specialist lowRISC has announced the acquisition of NewAE Technology, in order to add the company's silicon security analysis tools to its OpenTitan open root of trust platform.

"NewAE’s groundbreaking and accessible tools have the potential to be central to security testing of embedded silicon throughout the ecosystem," says Gavin Ferris, lowRISC chief executive, of the organisation's acquisition. "With its open-design approach to hardware and its commitment to transparency and security, NewAE strategically complements our own open source silicon design focus, helping create transparent silicon worthy of being trusted.

"We look forward to continuing to support and expand upon NewAE’s current product offerings, bolstering evaluation of OpenTitan’s own security, and ensuring that open source hardware can be hardened against the most serious attacks."

"LowRISC’s acquisition of NewAE brings together two philosophically-aligned organizations committed to secure, open source silicon development and adoption, bringing transparency to what has traditionally been a very locked-down ecosystem,” adds Dominic Rizzo, director of the OpenTitan project. "NewAE’s offerings will fundamentally change the nature of OpenTitan silicon development by enabling engineers and designers in our community to be more aware of side-channel and fault-injection attacks, allowing us all to build more secure systems."

More information on the OpenTitan project, which offers a free and open reference design for silicon root of trust chips, is available [on the official website](https://opentitan.org/).

<img src="lljs-video-series.jpg" style="max-width:100%" />

## Low Level JavaScript's Francis Stokes Publishes 12-Part RISC-V Video Series


Developer Francis Stokes, of educational YouTube channel Low Level JavaScript, has completed and published a 12-part video series delving into the building of a register-transfer level (RTL) RISC-V CPU simulator - ahead of a planned port to an FPGA.

"This has been a pretty long running project," Francis explains, "and one that is still very much in progress. I've personally learned in the process, and I'm really excited to take everything that has been built in the simulator up until this point and start porting it to FPGA code."

The twelve-part series, representing over 20 hours of video, covers a range of topics including: the RV32I instruction set; pipeline architecture; general-purpose register and flip-flop simulation; instruction decoding; the building of an arithmetic and logic unit (ALU); simulation of memory access; bootstrapping an environment for running programs; control and status registers; interrupts and exceptions; and, in Francis' own words, "a lot more [that] I'm likely forgetting."

The videos build from one first published in October 2021, in which Francis launched a project to build "the world's first CPU in TypeScript." The full series is available now, for free, [on the Low Level JavaScript YouTube channel](https://www.youtube.com/watch?v=ER7h4ZTe19A&list=PLP29wDx6QmW4sXTvFYgbHrLygqH8_oNEH&index=2).

"I know that the audio is a little rough in the first couple of videos," Francis admits. "That improves significantly a few episodes later when I finally get myself a decent mic."

<img src="hero.jpg" style="max-width:100%" />

## HEROv2 is a Full-Stack Open Research Platform for Heterogeneous Computing


HEROv2, developed by Andreas Kurth, Björn Forsberg, and Luca Benini has been unveiled as a fully-open research platform targeting heterogenous computing projects - and building, unsurprisingly, on the earlier HERO.

"HEROv2 [is] an FPGA-based research platform that enables accurate and fast exploration of heterogeneous computers consisting of accelerators based on clusters of 32-bit RISC-V cores and an application-class 64-bit ARMv8 or RV64 host processor," the researchers write of the project. "HEROv2 allows to seamlessly share data between 64-bit hosts and 32-bit accelerators and comes with a fully open-source on-chip network, a unified heterogeneous programming interface, and a mixed-data-model, mixed-ISA heterogeneous compiler based on LLVM."

In the paper accompanying the launch, the team demonstrates four key case studies - from the application level through toolchain and system architecture down to accelerator microarchitecture at the bottom - and evaluates HEROv2's suitability for each.

The results are impressive: One key takeaway is tiling loops and inference of data transfers to and from the accelerators, which when enabled in the compiler as a plugin called AutoDMA provides a 4.4x speed-up - and which is, the researchers say, only around 15 per cent slower than a handwritten implementation while using nearly a third of the code "in most cases."

A preprint of the paper detailing HEROv2 is available [on Cornell's arXiv server](https://arxiv.org/abs/2201.03861); the source code for HEROv2 is available [on the PULP Platform GitHub repository](https://github.com/pulp-platform/hero) under a mixture of free and open-source licences.

<img src="riscvwasm.jpg" style="max-width:100%" />

## Web-Based Tool Puts a Kite RISC-V Simulator In Your Browser


Pseudonymous developer "9oelM" has released a RISC-V simulator which puts William J. Song's five-stage pipelined model in your web browser through the power of WebAssembly (Wasm).

"Yet another RISC-V Simulator on the web, for fun," 9oelM says of the project. "Based on Kite, [the] RISC-V architecture simulator I used for my computer architecture class (EEE3530) at Yonsei University. Turned it into WebAssembly to use it on web. Again, it's just for fun.... and probably education."

9oelM's variant isn't a direct port of Kite, however, owing to the need to tweak the original to work within the confines of a web browser. 9oelM's variant no longer accepts files as an input, build flags are no longer used but equivalents can be supplied via JavaScript, and there's a change to error handling so JavaScript can catch the error and display it to the user.

The source code for the project is available [on 9oelM's GitHub repository](https://github.com/9oelM/risc-v-web-simulator) under the permissive MIT licence, while a deployed version can be used directly in-browser [on riscv.vercel.app](https://riscv.vercel.app/).

<img src="wch-debug.jpg" style="max-width:100%" />

## WCH Releases an Open-Source USB-JTAG/SPI Solution Under Apache 2.0


Embedded electronics specialist WCH has released a permissively-licensed open-source single-chip solution for high-speed USB 2.0 JTAG debugging and SPI communications.

"[Our] USB-JTAG/SPI open source solution is available now," WCH technical director Patrick Yang, who is also president of the RISC-V MCU Research Institute, announced on [Twitter](https://twitter.com/Patrick_RISCV/status/1526173961998172162) of the release. "Now you can use the [...] source code + WCH RISC-V MCU to design your own USB-JTAG/SPI/FIFO... Bridge chip. Try them out!"

The release is designed for use on the CH32V305 or V307 development board, using OpenOCD and Cygwin on Windows for compilation. Patrick has measured the performance of the implementation at 3.33MB/s, and has provided Windows drivers for the USB side.

At the time of writing, the software side was exclusively compatible with Microsoft Windows - offering JTAG and SPI debugging tools alongside OpenOCD support. As the source code has been released, however, community-driven ports to other operating systems may follow.

The project's source code is available [on the OpenWCH GitHub repository](https://github.com/openwch/usb-jtag-spi) now under the permissive Apache 2.0 licence.

<img src="i2cgithub.jpg" style="max-width:100%" />

## Olof Kindgren Modernises a Wishbone-Compatible I2C Controller, Releases IP-XACT to Verilog Converter


FOSSi Foundation director Olof Kindgren has announced two new releases for the community: An updated Wishbone-compatible I2C controller, the first major release for the project since 2016, and a version of ipyxact which offers IP-XACT to Verilog conversion.

"[I] just made the first release since 2016 of the venerable Wishbone I2C controller," Olof announced on Twitter. "Only minor RTL changes, but modernized it with current best practices by adding FuseSoC support which in turn enabled easy CI actions for linting and simulation. A CI action for building GDS with OpenLANE hopefully comes soon too after I figured out why OpenLANE seems to hang during routing."

The core of the project is well-established, having been first published on OpenCores over two decades ago. "It has been around far longer than I have," Olof jokes. "I have mostly been maintaining and slightly improving for the past ten years or so. I prefer to work with these older cores since they are silicon proven, have good docs, testbenches and drivers for most operating systems."

The new release of ipyxact, Olof's Python-based IP-XACT parser, also represents a milestone. "This [release] is significant because it includes an IP-XACT to Verilog converter which I think is one of the essential tools that has been missing from the ecosystem," he explains. "Still work to do, but it works for the cases I'm using it for."

The updated Wishbone-compatible I2C controller core is available [on the FreeCores GitHub repository](https://github.com/freecores/i2c); ipyxact 0.3.1 is available [on Olof's GitHub repository](https://github.com/olofk/ipyxact).

<img src="erik-cheat-sheet.jpg" style="max-width:100%" />

## Erik Engheim's RISC-V Cheat Sheet is a Handy ISA Reference


Self-described "geek dad" Erik Engheim has published a cheat-sheet for the RISC-V instruction set architecture - or, at least, a useful subset thereof - designed as a handy quick-reference for new developers.

"A number of people have tried to make sheets giving an overview of the RISC-V instruction-set, so here is my variant," Erik writes of the project. "I have tried to find a balance between being useful and easy to read. That means some things I have excluded from this overview."

The resulting cut-down instruction set reference fits on a single page, and offers arithmetic operations, logical operations, load/store operations, and branching. A section of pseudocode instructions aims to simplify explaining the use of selected instructions, while final references at the bottom show the 32-bit instruction format, register file, and register aliases.

A full write-up of the project, including justification for certain exclusions, is available [on Erik's Medium blog](https://itnext.io/risc-v-instruction-set-cheatsheet-70961b4bbe8) - along with free PDF downloads of the cheat-sheet itself and a comparison between RISC-V and AVR instructions.

<img src="ismael-board.jpg" style="max-width:100%" />

## Student Ismael Garcia Offers an Insight into Taping-Out a RISC-V OOO Processor


Ismael Garcia, currently completing an undergraduate degree in electronic engineering at Stanford University, and has written up an insight into the taping-out of a - sadly ultimately non-functional - RISC-V out-of-order processor.

"I would like to reflect on the process of taping out a RISC-V Out of Order Processor and share the takeaways from the chip's end in failure," Ismael writes. "Our team's goal in the making of this chip was to explore and implement different types of caches. We decided to implement a set of victim caches which decreases the number of conflict misses.

"Once we verified the architecture and coded the Verilog, we went through the process of physical design. It was one of the most daunting assignment I've ever completed in my undergraduate career. And after a lot of stressful nights, we finally had a DRC-error free GDS file."

Unfortunately, passing the design rules check wasn't a guarantee of function. "We waited a year to finally receive our chip," Ismael explains, "and during bring-up we discovered that we had accidentally hardwired the data and clock wires of the SPI flash we intended to use to send instructions to our core. After a whole year of work, our chip was doomed by two lines of code.

"We didn't catch this because of insufficient verification. While the outcome may have been disappointing, I am proud of the work my team and I did. I am taking this as a teachable moment and using this to become a better hardware engineer in the future."

More details, including images of the design and the flaw, are available [in Ismael's Twitter thread](https://twitter.com/ismaelg54536684/status/1532839933638893568).

<img src="newsinbrief.jpg" style="max-width:100%" />
## FOSSi News In Brief

-   [The University of Engineering and Technology (UET), Lahore, releases the UETRV_ESoC, a RISC-V embedded system-on-chip.](https://github.com/ee-uet/UETRV_ESoC) ([News coverage](https://academiamag.com/first-microprocessor-system-of-uet/), [video demo](https://www.youtube.com/watch?v=nsFyD8QpKSA).)
-   [Intel and the Barcelona Supercomputing Centre (BSC) partner for zettascale RISC-V hardware experimentation.](https://www.bsc.es/news/bsc-news/bsc-and-intel-announce-joint-laboratory-the-development-future-zettascale-supercomputers)
-   [Pascal Pieper, Vladimir Herdt, Rolf Drechsler: "Advanced Environment Modelling and Interaction in an Open Source RISC-V Virtual Prototype."](https://dl.acm.org/doi/10.1145/3526241.3530374)
-   [Che Pan, South China Morning Post: "Tech war: China bets on open-source RISC-V for chip design to minimise potential damage from 'being cut off' by US sanctions."](https://www.scmp.com/tech/big-tech/article/3178109/tech-war-china-bets-open-source-risc-v-chip-design-minimise-potential)
-   [Brian Bailey, Semiconductor Engineering: "How to Optimise a Processor."](https://semiengineering.com/how-to-optimize-a-processor/)

<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to** [**ecl@librecores.org**](mailto:ecl@librecores.org)**.**

**Subscribe to** [**get El Correo Libre direct to your inbox**](http://eepurl.com/dnL4v1)**.**
