---
layout: post
title: "El Correo Libre Issue 71"
description: El Correo Libre Newsletter, Issue 71
author: Gareth Halfacree
date: 2024-02-13
---




<img src="/blog/2024-02-13-ecl71/latchup.jpg" style="max-width:100%" />

## Latch-Up 2024 Gets its First Batch of Speakers

  
The FOSSi Foundation is thrilled to be able to confirm the first batch of speakers for Latch-Up 2024, a conference dedicated to free and open-source silicon being held in Boston, Massachusetts, this April.  
  
The talks confirmed in the first batch are:  
  
**Beyond EDA lies Edalize**  
_Olof Kindgren_  
A look at Edalize, a Python-based spin-off from the award-winning FuseSoC project which delivers a means of interfacing with electronic design automation (EDA) tools. "This presentation will look at the latest and upcoming changes to Edalize that intends to make it easier to integrate in existing build setups and more flexible to support more complex workflows," Olof explains.  
  
**MRPHS: Enabling Transaction-level Deductive Formal Verification Through PDVL**  
_Tobias Strauch_  
An overview of open-source Deductive Formal Verification (DFV) projects and Strauch's own language for the task, the Programming Design and Verification Language (PVDL), which he hopes will "revolutionise design verification [by] transforming your design and verification goals into Gallina code that can be used for assertions and theorem proving."  
  
_**Spade: An HDL Inspired By Modern Software Languages**  
Frans Skarman_  
A look at Spade, a Hardware Description Language (HDL) which aims to bring ideas and innovations found in the world of software programming across to hardware projects. "I will demonstrate how some stand-out features such as native constructs for pipelining, the rich rust-inspired type system, and ports modelled using affine types can be used to increase developer productivity," Frans promises.  
  
**CACE Study: Open Source Analogue and Mixed-Signal Design Flow**  
_Tim Edwards_  
A presentation on the CACE system, originally developed for the Efabless platform, which promises to provide a standard way to simulate circuits over all process, voltage, and temperature corners and collate the results into a datasheet. "The CACE system addresses the need for a system around the specification of circuit performance," Tim says.  
  
**Switchboard: Calling All Hardware Models**  
_Steven Herbst_  
A talk on Switchboard, a high-performance yet easy-to-use tool developed by Zero ASIC to simulate a mixture of digital hardware models represented as RTL simulations, RTL implementations on FPGA,s C++, or Python. "Switchboard powers the multi-chiplet cloud FPGA emulation system on Zero ASIC's website," Steven says, "where it is fast enough to boot Linux and run ML models on emulated hardware in near realtime."  
  
**From an Open-Source ISA to Open-Source HW to Open-Source Silicon**  
_Luca Bertaccini_  
Luca's presentation will look at the PULP Platform, covering its beginnings in an open-source instruction set architecture through to open-source hardware IPs and the use of open-source electronic design automation (EDA) tools. "In addition," Luca adds, "we will cover the benefits we experienced thanks to this open-source model, the challenges we overcame in the past years, and the ones we are currently facing."  
  
**A History of TL-Verilog Google Summer of Code Projects under FOSSi Foundation**  
_Steve Hoover_  
Steve will deliver a look at how the TL-Verilog project has developed under the Google Summer of Code (GSoC) programme, which pairs student developers with mentors in order to both education and advance open-source projects. "Student contributions in GSoC have been instrumental in advancing the ecosystem for TL-Verilog," Steve says, "the accessibility of hardware design, and the quality of semiconductor education."  
  
**HDLAgent, Enhancing Hardware Language in the age of LLMs**  
_Jose Renau_  
A talk on how Large Language Models (LLMs), like OpenAI's ChatGPT and Google's Gemini, are impacting the programming landscape - even to the point of allowing complete beginners to generate functional code. "This work explores the challenges and implications of integrating LLMs with Hardware Description Languages (HDLs)," Jose says.  
  
**Caster: An Open-source E-Ink Controller**  
_Wenting Zhang_  
Wenting's presentation is on an open-source controller designed to connect to a range of E Ink and other electrophoretic displays and deliver a low-latency experience with a range of features including flexible update control and multiple dithering options. "A reference implementation of an E Ink monitor using the Caster on an FPGA is also provided," Wenting notes, "with fully open-source RTL, PCB and enclosure design."  
  
**Multiarch in Situ: Running Multiple Architectures Simultaneously**  
_Kurt Keville_  
Finally, for the first batch, Kurt's talk will walk through the growth of heterogeneous architectures in severs and more - and how their growth has allowed system mangers to maximise both speed and power efficiency in a single system through process migration. "Our work," Kurt says, "extends this analysis to other products from different vendors and designs."  
  
More talks will be announced soon, and if you've got a topic to get off your chest it's not too late: you can submit a talk right through the registration period, for everything from a three-minute lightning session to a half-hour presentation with Q&A at the end.  
  
For information on submitting a talk proposal, registering to attend - free of charge, though with a "professional ticket" available for those representing companies and who want to contribute to the cost of running the event - and the latest on the programme, see [the Latch-Up 2024 page on the FOSSi Foundation website](https://fossi-foundation.org/latch-up/2024).  
  
Latch-Up 2024 will be held from the 19th to the 21st of April, and we hope to see you there!

<img src="/blog/2024-02-13-ecl71/kohnmandlebrot.jpg" style="max-width:100%" />

## Mike Kohn Developers a Custom RISC-V Extension - For The Mandelbrot Set

  
Mike Kohn has made a RISC-V core with a difference: it includes a custom and highly-domain-specific instruction which accelerates the visualisation of the Mandelbrot Set.  
  
"[This is a] Mandelbrot generator that uses a special 'mandel' instruction that only exists in this implementation of RISC-V," Mike explains of the project. "This shows why RISC-V and FPGAs can be important. RISC-V is completely open source and anyone can obtain the PDF with the description of the instructions and implement anything they need. With other CPUs, a licence would be need to be paid, but here RISC-V is free and open.  
  
"The project started as a fork of the first CPU core I worked on, an Intel 8008. I again used all the open source IceStorm tools to develop the code. This project implements a minimal RISC-V core in an iceFUN FPGA board. While having a licence-free instruction set is nice, it also opens up the possibility to implement custom instructions."  
  
Mike's customised core runs at 6MHz, with a 12MHz peripherals module - "when I get time," he writes, "I'm going to see if it runs at the full 12MHz" - and to demonstrate the potential behind an extensible instruction set he has offered a [benchmark video](https://youtu.be/aHBo1FH55ZM), in which the accelerated mode "smokes" the software-only mode.  
  
Mike's full write-up is available [on his website](https://www.mikekohn.net/micro/riscv_fpga.php), with the source code available [on GitHub](https://github.com/mikeakohn/riscv_fpga) under the permissive MIT licence.

<img src="/blog/2024-02-13-ecl71/gatemate.jpg" style="max-width:100%" />

## Cologne Chip Releases an Open-Source GateMate A1 Integrated Logic Analyser

  
Cologne Chip is delivering on its promise to offer a fully open-source toolchain for its GateMate A1 FPGA family, releasing an integrated logic analyser (ILA) under the reciprocal GNU General Public Licence 3.  
  
"With the ILA," Cologne Chip writes, "you can perform in-system debugging of your designs on the GateMate FPGA during runtime. It allows you to capture and analyse all signals of your design as a waveform directly within the FPGA, while it is configured with your design. This means, for example, that you can monitor complex data flows in real-time and troubleshoot errors efficiently without disrupting the normal operation of your system."  
  
The ILA allows the analysis of "over 1,000 bits from all signals" of the device under test, with a "simple, interactive, self-explanatory shell" for configuration. Signals captured can be analysed as waveform representations, "similar to simulations," the company says, and captures can extend to available RAM to provide maximum capture time.  
  
The release comes as the first third-party development boards built around the GateMate A1, which uses the company's "Cologne Programmable Element (CPE)" architecture to offer increased flexibility, begin to hit the market - including an open hardware design from Olimex we covered in last month's issue.  
  
The GateMate FPGA ILA is available now [on the Cologne Chip GitHub repository](https://github.com/colognechip/gatemate_ila).

<img src="/blog/2024-02-13-ecl71/olofpay.jpg" style="max-width:100%" />

## Olof Kindgren Suggests A Way to Get More Value from Open Source Projects: Pay

  
FOSSi Foundation director Olof Kindgren has written a piece on getting the most value from open source projects, and at its heart is one very simple tip: pay for it.  
  
"Now I can hear annoyed mumbling from some of you (*mumble* *mumble* paying?!? *mumble* *open source* *mumble* *mumble* should be free! *mumble* *mumble*) and I also think there's a lot of you who think this is pretty obvious," Olof writes.  
  
"The reason why I'm being very explicit about this is not that I'm angry or disappointed with someone or desperate for money, but over the years I have come to understand that a surprisingly large amount of people and companies just never have thought about this possibility. So I think it's good to make a very simple distinction here. The code is free. My time certainly is not.  
  
"Now don't get me wrong. I'm not threatening to kill an open source project every hour until I get a million in unmarked bills and a fuelled airplane waiting for me. In fact, I will work on these projects regardless, because I want them to be useful for myself and others, and I really appreciate all bug reports and questions being sent, but if the choice is between getting paid to work on some feature or do it on my spare time, then it's a pretty easy choice to be made. And this is happening already today. I have happy customers who are paying me and my colleagues to work on some of these projects."  
  
Olof's advice doesn't come out of nowhere: he cites [a study published in 2021](https://digital-strategy.ec.europa.eu/en/library/study-about-impact-open-source-software-and-hardware-technological-independence-competitiveness-and) which found the benefit-to-cost ratio of investing in open source was over 4:1 - and offers real-world experience on how enlisting those behind open source projects for paid work happens, including whether it would include the result being integrated back into the open source project itself.  
  
The full article is available on Olof's blog, [Tales from Beyond the Register Map](https://blog.award-winning.me/2024/01/how-to-get-more-value-from-open-source.html).

<img src="/blog/2024-02-13-ecl71/moosiclocking.jpg" style="max-width:100%" />

## Gabriel Gouvine Demonstrates Logic Locking in Yosys via Moosic

  
Gabriel Gouvine has written a guest post for the Yosys blog which takes a look at logic locking with the Moosic plugin, taking as its real-world example a design built as part of Matt Venn's [Tiny Tapeout course](https://tinytapeout.com/).  
  
"When creating a design, most of us are not in possession of the lithography and manufacturing tools necessary to actually create the chip: we send our design to a foundry and they make the chip for us," Gabriel explains. "This requires a great deal of trust in the toolchain and the foundry: a malicious actor could introduce backdoors, or just steal the design to reuse it themselves. For security-conscious designers, countermeasures are necessary."  
  
The particular countermeasure which forms the focus of Gabriel's post is logic locking, by which the design is rendered unusable through the integration of gates not present in the original design - the output of which needs to be accommodated for with a "key" which reverses the lock.  
  
Gabriel's demonstration uses the Moosic plugin for Yosys, which provides logic-locking capabilities. "It acts as a countermeasure rather than a cryptographic security," Gabriel admits. "Much like software countermeasures it will not stop a determined attacker with unlimited resources, but it’s one more thing that an attacker will have to break."  
  
The full write-up is available [on the Yosys blog](https://blog.yosyshq.com/p/logic-locking-with-moosic/), while the Moosic source code [is on GitHub](https://github.com/Coloquinte/moosic-yosys-plugin) under the GNU General Public Licence 2. The Moosic-locked counter itself will be produced in hardware as part of Tiny Tapeout 6, Gabriel has confirmed.

<img src="/blog/2024-02-13-ecl71/projectfriscvassembler.jpg" style="max-width:100%" />

## Will Green's Guide Series Gets You Up and Running with RISC-V Assembly

  
If you like working close to the metal, Will Green's latest educational guide series will be of interest - introducing, as it does, RISC-V assembly coding.  
  
"In the last few years, we’ve seen an explosion of RISC-V CPU designs, especially on FPGA. Thankfully, RISC-V is ideal for assembly programming with its compact, easy-to-learn instruction set," Will writes. "This mini-series will help you learn and understand 32-bit RISC-V instructions (RV32) and the RISC-V ABI [Application Binary Interface]."  
  
Will has split the series into three pieces, with - at the time of writing - a fourth entry planned. The first covers arithmetic operations, taking a look at the li, lui, add, addi, mv, nop, sub, and neg instructions, as well as sign extension and pseudoinstructions. The second digs into the and, andi, or, ori, xor, xori,and not logical instructions. The last looks at shift instructions, covering sll, alli, srl, srli, sra, and srai.  
  
The fourth entry, meanwhile, will take a look at load and store instructions - though, at the time of writing, has not yet been published.  
  
Interested parties can read the guide in full [on the Project F website](https://projectf.io/posts/riscv-arithmetic/).

<img src="/blog/2024-02-13-ecl71/vennnewyear.jpg" style="max-width:100%" />

## Matt Venn Celebrates the Highlights of 2023, and Sets Goals for the Year to Come

  
Matt Venn, of [the Zero to ASIC Course](https://zerotoasiccourse.com/), has spoken of his 2023 highlights from the world of free and open-source silicon - and set out some goals to achieve in 2024, too.  
  
"We’ve had announcements of new open source PDKs [Process Design Kits] and shuttle opportunities from IHP, Pragmatic and the ICPS minimal fab," Matt says of the year just passed, while lamenting the loss of the Google-sponsored shuttle fabrication programme. "We also saw huge investments in the semiconductor industry with the EU and US chips act, putting $100B funding on the table.  
  
"More great news was that the issues we saw with MPW [Multi-Project Wafer] 1 to 5 were finally put to rest by MPW6, with a re-engineered Caravel by Efabless. The open source tools have continued to improve, with hundreds of contributions from the community. We've also seen the continued growth of RISC-V with eight RISC-V CPUs taped out on Tiny Tapeout alone!"  
  
Matt's not only looking backward, however, but also forward. "We'll continue to see the tools improve and new shuttles supporting the open PDKs," he predicts. "We're seeing a continued take up of open source tools in academia and I hope to see that extend to younger students as well.  
  
"As for my goals, even though I failed to get 1000 new people involved last year, this year I’m aiming for 2000! It’s going to be tough to reach, but if we fill every Tiny Tapeout shuttle, it’s possible."  
  
Venn's full post is available [on the Zero to ASIC Course website](https://zerotoasiccourse.com/post/year_update_2023/), and as a video [on YouTube](https://www.youtube.com/watch?v=RBdZX3fBYTM).

<img src="/blog/2024-02-13-ecl71/ttlogo.jpg" style="max-width:100%" />

## Tiny Tapeout 6 Submissions Open with New Mixed-Signal and Analogue Support

  
Matt Venn has also announced the opening of submissions for Tiny Tapeout 6, the latest in the low-cost course which teaches you how to design your own application-specific integrated circuit - complete with having it built, as part of a Multi-Project Wafer (MPW), at the end.  
  
"Tiny Tapeout 6 builds on TT05," Matt explains, "with the same space, IOs [Inputs/Outputs] and speed, but now adds power gating for all designs, mixed signal support, and analogue pins."  
  
The course provides lessons on digital - and, now, analogue - design, made to be accessible even to those with no chip design experience. Paying users can then have their design built into a physical chip which contains each of the projects submitted during that run - selectable using jumpers.  
  
Projects from Tiny Tapeout 5 include Brandon Cruz' SAP-1 Computer, a spiking LSTM network chip from Sky Gunasekaran, an event denoising circuit by Emily Lee, a character selector by Dakota W. Winslow, a Game of Life implementation from Eric Moderbacher, and an example of a hardware Trojan by Jeremy Hong.  
  
Those interested in submitting a design have around two months to do so, with full details available [on the Tiny Tapeout website](https://tinytapeout.com/).

<img src="/blog/2024-02-13-ecl71/renodebitmanip.jpg" style="max-width:100%" />

## Renode Gains RISC-V Bitmanip Extension Support

  
Antmicro has announced the addition of RISC-V bit manipulation (bitmanip) extensions to its open-source Renode simulation framework, offering a guide to enabling the feature and verifying implementations using the Zephyr real-time operating system (RTOS).  
  
"Further expanding the coverage of RISC‑V platforms in Renode, we’re introducing RISC‑V bitmanip extensions support to facilitate code size reduction, performance improvement, and energy consumption reduction via fewer and more specialized instructions," Antmicro explains.  
  
"In the original RISC‑V Privileged Architecture specification, ISA-defined extensions were identified by a single letter (A-Z) and Renode followed this notation in platform descriptions. With the new additions to the RISC‑V ecosystem this turned out to be quite limiting, so a new, more descriptive notation was introduced by the RISC‑V International.  
  
"The rv64imac-style notation was extended to allow 'Z'-style extensions, and the change is now mirrored in Renode, e.g. now you can use cpuType: 'rv64imac_zba_zbc_zifencei'. This new development allows for a more strict definition of selected RISC‑V features. As part of this work, we have also extracted the Zicsr and Zifencei extensions, as enabled separately from the base instruction set.  
  
We're also working on adding bitmanip to the RISC‑V Torture test generator," Antmicro adds, "to provide more tests for our support of this extension."  
  
The full write-up is available [on the Renode blog](https://renode.io/news/expanding-risc-v-support-in-renode-with-bit-manipulation-extensions/).

<img src="/blog/2024-02-13-ecl71/ledtobelieve.jpg" style="max-width:100%" />

## Project LED to Believe Breaks Through the 100 FPGA Board Milestone

  
FOSSi Foundation director Olof Kindgren has announced a major milestone for the LED to Believe project: it's now available for more than 100 FPGA boards.  
  
"This project aims to provide LED blinking examples for all the FPGA dev boards in the world," Kindgren wrote of LED to Believe, a lofty target which it is now closer to achieving, when the project first launched. "The goal is to provide a quick way to test your new FPGA board and get acquainted with using FuseSoC in your design flow."  
  
The most recently-added boards include the Terasic DE10-Lite, the ICE-V Wireless, the Intel MAX10 10M50 Evaluation Kit, the Microchip PolarFire Splash Kit, the Opal Kelly XEM8320, the Avnet ZUBoard, the Digilent Cora Z7-06S and Arty A7 100T, and no fewer than nine Machdyne boards - including the Brot, Eis, and Kolibri.  
  
"Let's celebrate Project LED to Believe reaching 100 FPGA boards by giving it a logo," Olof wrote on Twitter when the milestone was reached late last month. "If someone slightly less incompetent than me wants to provide a better one, please be my guest."  
  
The full list of boards is available [on the LED to Believe GitHub repository](https://github.com/fusesoc/blinky), along with the source code under the permissive MIT licence.

<img src="/blog/2024-02-13-ecl71/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News in Brief

-   [Ved Shanbhogue announces the RISC-V Byte and Halfword Atomic Memory Operations (Zabha) Fast Track Extension review period, closing on the 6th of March.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/ox9J4s7_IzM?pli=1)
-   [Tim Newsome announces the RISC-V External Debug Extension (Sdext) and Hardware Trigger Extension (Sdtrig) review periods, closing on the 17th of February.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/nHtcINoumsg/m/Iq3v74ftAAAJ)
-   [And Beeman Strong announces the Supervisor Counter Delegation (Smcdeleg/Ssccfg) review period, also closing on the 17th of February.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/TJcwOuF97mY)
-   [Eduardo Baptista for Reuters: "China bets on open-source chips as US export controls mount."](https://www.reuters.com/technology/china-bets-open-source-chips-us-export-controls-mount-2024-02-05/)


**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
