---
layout: post
title: "El Correo Libre Issue 58"
description: El Correo Libre Newsletter, Issue 58
author: Gareth Halfacree
date: 2023-01-10
---

<img src="latchup.jpg" style="max-width:100%" />

## Preparations Begin for Latch-Up 2023

The FOSSi Foundation is very pleased to announce that Latch-Up will go ahead in 2023! This marks a triumphant return to in-person conferences, with Latch-Up being the Stateside franchise of our ever-popular FOSSi Foundation conference series, which we've put on since 2011.

This instalment of Latch-Up will be held in sunny Santa Barbara, California from Friday, March 31st, to Sunday, April 2nd, 2023.

Our previous conference in Portland was an incredible few days of meeting collaborators new and old, sharing our engineering tales at a lectern or over drinks, and enjoying valuable face-to-face time in a beautiful setting. We anticipate Santa Barbara will be no different! Among the highlights were the folks who were brand-new to our community who came along and blew our socks off with their projects and passion for Open Source Silicon.

Our suspicions that there existed a talented and passionate community of FOSSi folks Stateside was proven correct last time out in Portland. It was a privilege to be able to put on an event in the US (until then were held annually in Europe) and to broaden our horizons and networks by meeting folks who simply lived too far away to cross the Atlantic and partake in pierogi (ORConf Gdansk), pretzels (ORConf Munich), pints (ORConf Cambridge), pinot noir (ORCONF Bordeaux), or...protons (ORCONF CERN, Switzerland). In 2019, among the Oregon pine trees, we were wowed by 3 days of presentations from folks ranging from high-school students to industry up-and-comers to industry veterans.

And it's with no small amount of anticipation that we look forward to Santa Barbara, to hear in-person the advances which have been made in the FOSSi field since last time out.

So get ready - head over to [http://latchup.io](http://latchup.io) where you can register and submit presentation proposals.

### Sponsorship Opportunities


The FOSSi Foundation is a volunteer-lead organization and funds all of its events through sponsorship by companies and donations from members.

Do you use FOSSi technologies in your day job and wonder how to give back but aren't quite up for submitting pull requests? Are you impressed by the incredible efforts by those involved in developing this technology and want to celebrate that? Why not consider sponsoring a conference like Latch-Up which provides opportunities for developers and users alike to meet and share their enthusiasm for this field.

Sponsorship packages are available to spread the word that you or your company are FOSSi backers

Corporate sponsors can show their brand gets FOSSi technology and wants to support it and the community by helping to make events like Latch-Up possible. Please get in touch if you'd like to learn more about these sponsorship packages here: [latch-up@fossi-foundation.org](mailto:latch-up@fossi-foundation.org)

If you're looking to sponsor the event individually, we have Professional Tickets available when you register: [https://www.fossi-foundation.org/latchup/](https://www.fossi-foundation.org/latchup/)

Again, we look forward to our next instalment of Latch-Up and hope to see plenty of you there!

_-Julius Baxter, Director, FOSSi Foundation_

<img src="rp2040.jpg" style="max-width:100%" />

## FakePGA Runs Verilog on a Raspberry Pi RP2040 Microcontroller - Slowly


Electronics engineering student Vlad Tomoiagă has released a tool which turns a Raspberry Pi Pico or other RP2040-based microcontroller development board into a "fake FPGA" - offering a low-cost bridge between pure simulation and working with hardware for simpler project.

"This project aims to simulate Verilog HDL designs on a Raspberry Pi Pico (or any other RP2040-based board)," Tomoiagă writes of the project, dubbed "FakePGA." "It achieves this by using Verilator to compile the RTL into a cycle-accurate C++ model of your design which can then be executed on the microcontroller. This allows you to access the signals of the simulated design through the GPIO pins of the board, which gives a more hands-on experience than simulating on a computer."

The idea behind the project is to provide something halfway between a pure simulation running on a desktop or laptop computer and a true FPGA, using extremely low-cost hardware: the Raspberry Pi Pico costs just $4/£3.60. Unlike a pure simulation, FakePGA allows the Verilog to interact with real external hardware - though it comes at the cost of speed.

"[FakePGA is] many orders of magnitude slower than a real FPGA," Vlad admits of his project - with the absolute peak performance maxing out at a 5kHz clock speed and then dropping as the complexity of the Verilog project rises. "In terms of user experience," Vlad explains, "it feels like using a slower FPGA (at least for simpler designs), hence the name of the project: FakePGA."

The project's source code is available [on GitHub](https://github.com/tvlad1234/FakePGA) under the reciprocal GNU General Public Licence 3.

<img src="iskra-fpga.jpg" style="max-width:100%" />

## Former Yugoslavia's Iskra EMZ1001A Enjoys a "Virtual Resurrection"


The Iskra EMZ1001A, believed to be the first and only microprocessor both built and designed in former Yugoslavia, is back - in FPGA form, courtesy of a project by Zoltan Pekic to bring the 1970s-era device to a broader audience.

"[The] Iskra EMZ1001A was the only microcontroller/microprocessor designed and produced in ex-Yugoslavia," Zoltan explains. "There are rumours [the] CDP1802 was produced in Ei Nis, but I could not confirm. [The EMZ1001A] was a collaborative design with AMI, and in [the] rest of the world the chip was known as AMI S2000. However, EMZ1001A was not a copy but truly a result of joint design and chips were actually made in Iskra's factory in Slovenia."

Finding a physical version of the EMZ1001A five decades after its launch, and thirty years after the breakup of Yugoslavia, is somewhere between extremely challenging and nigh-on impossible - which is why Zoltan has created a soft-core implementation which can be loaded onto an FPGA instead.

"In order to thoroughly test the EMZ1001A implementation, and to make a fun, demo-able system that is 'doing something,' [I built] a small 'computer' [...] on the FPGA board, with various components supporting the microcontroller operation," Zoltan writes. "Basic features [include] execution of two pre-loaded programs ('Hello World' from internal memory and 'Fibonacci' from external); output on [a] four-digit seven-segment LED; output of eight-bit ASCII; 640x480 VGA which contains [a] 32x32 text screen (for 'teletype' output) and [a] 16x16 window to display debug info."

More details on the project are available [on Zoltan's Hackaday.io page](https://hackaday.io/project/188614-iskra-emz1001a-a-virtual-resurrection), with the source code published [to GitHub](https://github.com/zpekic/sys_emz1001) under the permissive Creative Commons Zero v1.0 Universal licence. A demo video is also available [on YouTube](https://www.youtube.com/watch?v=Bn3rqHyoyjo).

<img src="edalize.jpg" style="max-width:100%" />

## Edalize 0.4.1 Brings Slang, Questa Formal, and F4PGA Support - Plus "Polish and Fixes"


Edalize, the Python library for electronic design automation (EDA) tool interfacing, has enjoyed a new release - and Edalize 0.4.1 brings with it support for three new EDA tools, along with a number of other enhancements.

"In addition to polish and fixes," project author, maintainer, and FOSSi Foundation director Olof Kindgren explains of the latest Edalize release, "we now support Slang, Questa Formal, and F4PGA, meaning we now target almost 40 EDA tools with a common EDAM (EDA Metadata)."

Other changes in the new release include support for FPGA families with spaces in their names, OpenLane support for SystemVerilog, Verilator fixes, support for launchers in VCS and Vivado, and support for multiple top levels in Icarus.

The new release is available [on GitHub](https://github.com/olofk/edalize/releases/latest), along with the project's full source code under the permissive BSD two-clause licence.

<img src="chipflow2.jpg" style="max-width:100%" />

## ChipFlow Launches First Open Source Silicon Platform Tutorial


ChipFlow, founded with the goal of using the free and open source silicon movement to help companies "traditionally locked out of the ASIC business" build their own custom silicon, has released its first tutorial to guide users through the use of its platform.

"This gives an overview of how chip design looks with the ChipFlow platform. This tutorial assumes you are running on macOS 11 or later or Ubuntu 22.04 or later," the company explains of its initial documentation. "To test designs on an FPGA, you will need a ULX3S. Other development boards will be supported in the future."

The tutorial walks the user through setting up their local development environment through Poetry and Docker, installing openFPGAloader, and cloning an example repository for a system-on-chip design in Amaranth HDL before testing it in simulation and, if available, on hardware.

The reader is then given the job of making a modification to the design: adding button peripherals, which are then tested in both simulation and on the ULX3S board if available.

The tutorial does not, however, go into the next step: turning an HDL project into physical silicon. "For this first Alpha, we aren’t quite ready to start accepting designs on our API," the company explains. "This is coming very soon though!"

The full tutorial is available [on the ChipFlow website](https://docs.chipflow.io/en/latest/tutorial-intro-chipflow-platform.html) now.

<img src="baier-ddr3.jpg" style="max-width:100%" />

## Hans Baier Demos Kintex High-Performance Bank DDR3 on an Open Toolchain


Self-described "computer and electronics nerd" Hans Baier has shown off the result of more than six months' work: The ability to use the nextpnr-xilinx toolchain to run DDR3 on the high-performance banks of a Xilinx Kintex FPGA.

"DDR3 works on the Kintex high performance banks with the nexpnr-xilinx open source toolchain," Hans writes. "More than half a year of effort! Many thanks to Tomasz Michalak from the F4PGA project, who helped to figure out the final bit! And to Florent at Enjoy Digital for the great LiteX SoC.

"Also many thanks to Kazumoto Kojima for a significant contributon to this effort, [and to] Myrtle Shah for writing nextpnr-xilinx. It would have been significantly harder to get started with VPR."

Writing of the work required, Hans explains that "the LiteDRAM BIOS helped me so much to pin down what the issue was, by inserting some debug printf's. Actually the mem_read/mem_write already gave it away, but the SDRAM debug functions in the BIOS were very helpful for me to understand what was happening."

More information is available [in Hans' Twitter thread](https://twitter.com/hansfbaier/status/1603000220651909120).

<img src="tinyfpgabx.jpg" style="max-width:100%" />

## The TinyFPGA BX is Heading Back Into Production


Luke Valenty has announced that the TinyFPGA BX is ending its long-running absence, with enough components secured to build more than enough of the low-cost development boards to fulfil all existing orders and build up a healthy stock besides.

"TinyFPGA experienced a variety of roadblocks, including supplier and manufacturer changes, global components shortages, extremely long lead times for FPGAs, and price increases that have further delayed production," Luke writes by way of explanation for the board's unavailability in recent years.

"All of these factors combined to made it difficult to provide accurate, transparent information, but we still should have kept you up to date on the issues we were facing. We’re truly sorry for not communicating sooner about these delays, or being transparent about the issues we were having."

Now, though, the required components have been secured - and the TinyFPGA BX is heading for a 2,500-unit production run in the coming weeks. Those who have back-orders waiting for fulfilment will see them shipped at the original price promised, but Luke has confirmed a price increase to $49 for new orders.

More information is available [on the TinyFPGA BX Crowd Supply page](https://www.crowdsupply.com/tinyfpga/tinyfpga-ax-bx/updates/production-of-a-new-batch-starting-soon).

<img src="serv.jpg" style="max-width:100%" />

## SERV 1.2.1 Offers RISCOF Compliance Framework Support, an ICE-V Wireless Port


The latest release of SERV, the award-winning ultra-compact bit-serial RISC-V CPU, brings with it a bug fix, a port to the ICE-V Wireless development board, and support for a new compliance framework.

"Thanks to Abdul Wadood for adding support for the new RISCOF compliance framework," project author, maintainer, and FOSSi Foundation director Olof Kindgren writes of the new release, in which he admits the contributions are all from third parties, "gojimmypi for the ICE-V Wireless port, and Eric Brombaugh for fixing a PLL locking bug."

The RISCOF compliance framework was launched with a view to providing an easy and standardised means of testing a RISC-V target against a "golden reference" RISC-V model using a range of architecture assembly tests. The port to the ICE-V Wireless board, meanwhile, means SERV can be easily loaded onto Qwerty Embedded Design's sub-$100 Lattice iCE40-based development board.

The latest SERV release is available [on the project's GitHub repository](https://github.com/olofk/serv/releases/latest), along with all source code under the permissive ISC licence.

<img src="tinytapeout2.jpg" style="max-width:100%" />

## The Full Run-Down of Tiny Tapeout 02 Projects is Now Live


Matthew Venn has published the full list of projects which are heading into production as physical silicon chips under the Tiny Tapeout programme's second cohort - complete with a rendering showing off their locations and layout.

Launched as an off-shoot from Matthew's From Zero to ASIC course, Tiny Tapeout aims to offer a more gentle introduction to chip design and submission for physical production than the OpenMPW programme run by Google and Efabless in partnership with SkyWater and GlobalFoundries.

"Tiny Tapeout is an educational project that makes it easier and cheaper than ever to get your digital designs manufactured on a real chip," Matthew explains. "We ran Tiny Tapeout 1 in August and received 150 submissions in just a couple of weeks."

Following the closure of Tiny Tapeout 2, Matthew has published a full project list on the site - including a tiny hardware implementation of the ROT13 Caesar cipher, a synth, a driver for an LCD nametag, four- and eight-bit CPUs, a Baudot converter, and a version of Olof Kindgren's award-winning RISC-V SERV core contributed by Greg Davill.

The full list of the 165 projects chosen for inclusion in the second Tiny Tapeout production run is available [on the project website](https://tinytapeout.com/runs/tt02/).

<img src="europeanflag.jpg" style="max-width:100%" />

## European Union Announces a €270M Fund for RISC-V-Based Silicon Projects


The European Union has issued a call for proposals backed by €270M (around £238M/$290M) in funding, as part of its efforts to reduce its reliance on foreign nations for key technology - and it's looking for the proposals to be built around the free and open RISC-V architecture.

"This is exciting because it’s serious money," Barcelona Supercomputing Centre director John Davis explained in a presentation at the RISC-V Summit late last month, as quoted by [HPC Wire](https://www.hpcwire.com/2022/12/16/europe-to-dish-out-e270-million-to-build-risc-v-hardware-and-software/). "There is going to be €270 million associated with this project."

The call for proposals comes under the European High Performance Computing Joint Undertaking (EuroHPC JU), and targets processor devices with a performance good enough for supercomputing use.

"The aim," the call for proposals explains, "is to establish a partnership between the EuroHPC JU and a consortium of industry, research organisations, and institutions in HPC to the development of innovative HPC hardware and software technology based on the open RISC-V ecosystem."

The call opens on the 26th of January 2023 and runs through to the 4th of April the same year; more information is available [on the EuroHPC JU website](https://eurohpc-ju.europa.eu/framework-partnership-agreement-fpa-developing-large-scale-european-initiative-high-performance_en).

<img src="android.jpg" style="max-width:100%" />

## Google Announces Official RISC-V Support in the Android Open Source Project (AOSP)


Google director of engineering Lars Bergstrom has announced that his company is making RISC-V an officially-supported architecture for the Android Open Source Project (AOSP), atop which the company's commercial Android products are built.

"We think that RISC-V is ready to be supported as one of the architectures within the Android open source platform," Lars told attendees at the RISC-V Summit last month. "We're expecting to have full high-fidelity emulator support very, very early, at the start of [2023]. And we'll have Android runtime support for all of the Java workloads during Q1, so starting with the interpreter and building up through our just-in-time compiler

"It's important for us that RISC-V be seen as a tier-one platform by the rest of the [Android] ecosystem, both on the tooling side and on the open source software side, so that we know that the projects will not just run once for one demo but that every day these projects are working for RISC-V."

This isn't Google's first dalliance with free and open-source silicon. A few years ago the company partnered with lowRISC to create an open-source hardware root-of-trust system dubbed OpenTitan, while more recently it has been funding the OpenMPW programme which sees open source silicon projects able to submit their designs for production on physical silicon chips through Efabless and partner foundries.

Lars' full presentation has been uploaded [to the RISC-V International YouTube channel](https://www.youtube.com/watch?v=70O_RmTWP58).

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [David Patterson, EE Times: "Examining the Top Five Fallacies About RISC-V."](https://www.eetimes.com/examining-the-top-five-fallacies-about-risc-v/)
-   [Olof Kindgren releases a prototype tool for ingesting an instruction trace and an ELF and spitting out profiling information, tentatively dubbed "trays."](https://twitter.com/OlofKindgren/status/1607506465610137602)
-   [Barcelona Supercomputing Centre releases new SELENE components: SafeTI, SafeSU, SafeDE, SafeDM, and SafeSoftDR.](https://bsccaos.github.io/)
-   [Paper: Multi-Agent Reinforcement Learning for Microprocessor Design Exploration by Srivatsan Krishnan et al.](https://arxiv.org/abs/2211.16385)
-   [RISC-V International publishes the RISC-V Summit North America 2022 videos.](https://www.youtube.com/playlist?list=PL85jopFZCnbPPRyjl_qMQ50DPq_iQKhFg) [(Member's day videos here.)](https://www.youtube.com/playlist?list=PL85jopFZCnbPM9tJq_H8VkQ0PAdw4e6Uw)
-   [Olof Kindgren proposes a "Zrfinram" RISC-V extension "for the smallest of cores in the most deeply embedded systems."](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/W8SYMSB1OrQ)
-   [RISC-V International boasts of "significant growth and technical progress," with "billions of RISC-V cores" shipped into the market.](https://riscv.org/announcements/2022/12/risc-v-sees-significant-growth-and-technical-progress-in-2022-with-billions-of-risc-v-cores-in-market/)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
