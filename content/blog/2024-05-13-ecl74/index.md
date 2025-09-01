---
layout: post
title: "El Correo Libre Issue 74"
description: El Correo Libre Newsletter, Issue 74
author: Gareth Halfacree
date: 2024-05-13
---

<img src="/blog/2024-05-13-ecl74/latchup24vids.jpg" style="max-width:100%" />

## Latch-Up 2024 Comes to a Close, Videos Available Now

  
[Latch-Up 2024](https://fossi-foundation.org/latch-up/2024), held from the 19th to the 21st of April, has come to a close, and we'd like to thank everyone who made the event possible - from sponsors and speakers to attendees. A true testament to the health and breadth of the free and open source silicon ecosystem, Latch-Up 2024 was a great success, and plans are already underway for the next event in the series.  
  
For those who couldn't attend, selected videos are available on the FOSSi Foundation YouTube channel now. These include: FOSSi Foundation director Olof Kindgren [discussing the CoreScore benchmark](https://www.youtube.com/watch?v=deo5kFew5tM), which aims to see just how many award-winning bit-serial SERV cores you can cram onto a single FPGA; KenoFischer on [using CedarEDA in your open source silicon projects](https://www.youtube.com/watch?v=AooVpEzHMnY); Jean-Pierre Thubault on [the ChipWhisperer FPGA-based research tool](https://www.youtube.com/watch?v=3VydT4X_61k); and two presentations from Frans Skarman, one [on the Spade hardware design language](https://www.youtube.com/watch?v=_EdOHbY2dlg) and the other [on the extensible Surfer waveform viewer](https://www.youtube.com/watch?v=QWxat_8_By0).  
  
Other videos available from the event include: Matt Ballance presenting [on the PyHDL-IF Python/HDL cross-calling interface](https://www.youtube.com/watch?v=-odFakR7h3g); Olof Kindgren again [on the Edalize project](https://www.youtube.com/watch?v=yDADgbRiuws); Hugo McNally [on the Sonata development platform](https://www.youtube.com/watch?v=DoWeV0j2wmg) for embedded CHERI applications; Luca Bertaccini [on the path from an open-source instruction set architecture](https://www.youtube.com/watch?v=eBNhohjxt9w) to open-source hardware to open-source silicon; and [using tclint to clean up EDA flows](https://www.youtube.com/watch?v=4Pw6zpdp3SA) with Noah Moroze.  
  
All the above videos, and more besides, are available [on the FOSSi Foundation YouTube channel](https://www.youtube.com/@FOSSiFoundation/videos) now - and we hope to see you at the next Latch-Up conference for more!  
  

<img src="/blog/2024-05-13-ecl74/fossz80.jpg" style="max-width:100%" />

## Zilog Discontinues the Z80, But Enthusiasts Give it New Life as an Open Silicon Project

  
Chip design house Zilog has announced that it is discontinuing the Z80 as a standalone CPU product, nearly 50 years after the design launched - but the core will live on as an unofficial open silicon project, with the first physical chip to be produced as part of the next Tiny Tapeout run.  
  
"Our Wafer Foundry Manufacturer will be discontinuing support for the Z80 product and other product lines," Zilog parent company Littelfuse wrote to customers ahead of a last-time-buy date of the 14th of June 2024 affecting both the Z80 - a design which was launched in 1976 as the company's first product and has been in continuous production ever since - and the upgraded Z180 CPU lines.  
  
Renaldas Zioma, however, isn't taking the discontinuation lying down. "It is a time for open-source and hardware preservation community to step in with a Free and Open Source Silicon (FOSS) replacement for [the] Zilog Z80," he writes on the news. "GOAL: To develop a drop-in Z80 replacement in 8-bit home computers such as ZX Spectrum."  
  
Renaldas' project builds on earlier efforts to create a compatible Z80 clone which can be implemented on FPGAs, but goes a step further by planning an actual production run - starting with a proof-of-concept on the Tiny Tapeout 7 shuttle, due for production in June. This will see the Z80 core placed on a multi-project chip alongside other Tiny Tapeout projects - and, if all goes well, will pave the way for a dedicated production run and an adapter board to allow the chip to be fitted in place of an original DIP-packaged Z80 in a range of vintage machines.  
  
More information on the project is available [on Renaldas' GitHub repository](https://github.com/rejunity/z80-open-silicon), with additional detail [on the Tiny Tapeout website](https://app.tinytapeout.com/projects/668).

<img src="/blog/2024-05-13-ecl74/tt06.jpg" style="max-width:100%" />

## Matt Venn Celebrates Tiny Tapeout's "Best Shuttle Ever"

  
Matt Venn has released statistics for the recently-closed Tiny Tapeout 6, which he says is the project's "best shuttle ever" - with hopes that the upcoming Tiny Tapeout 7 will take the crown.  
  
Launched as an effort to democratise not just chip design but chip production, Tiny Tapeout builds on existing free and open source silicon software and process design kits to allow participants to place small designs on a shared shuttle which is then submitted for production as a multi-project chip - before being mounted on a PCB and sent to designers for testing and experimentation.  
  
In Tiny Tapeout 6, Matt reveals, that submitted projects used a total of 267,000 standard cells and nine metres of wiring - with the largest single project, a NIST random number generator test core, taking up 19.265 cells on its own. The highest utilisation of a given was 93 per cent, though many were under 50 per cent, and the most popular language was Verilog at 147 submitted designs with the beginner-friendly Wokwi following at 41, SystemVerilog at 11, and a mixture among the rest - with, Matt says, quite a few made with Chisel.  
  
One major feature of the Tiny Tapeout project is that participants are required to document their designs, which is then compiled into a datasheet for the multi-project chip that results. This time around, Matt says, the datasheet includes 560 pages of documentation - covering projects which took a whopping 17 hours to build in the automated toolchain.  
  
Full details on Tiny Tapeout 6 are available [on the project website](https://tinytapeout.com/runs/tt06/); Tiny Tapeout 7 closes in a little over two weeks at the time of writing.

<img src="/blog/2024-05-13-ecl74/riscv.jpg" style="max-width:100%" />

## The RISC-V Soft CPU SIG Introduces Composable Extensions, Invites Participation

  
Jan Gray of the RISC-V Soft CPU Special Interest Group (SIG) has published a summary of its work on composable extensions - and has called for RISC-V International members to participate in further work on the project.  
  
"Composable extensions are a new, optional, backwards compatible, managed _subcategory_ of custom extensions," Jan explains. "Each composable extension (CX) is a named, immutable ISA contract specifying new instructions, state, and behaviour. A CX Unit (CXU) is a modular hardware core that implements one or more CXs. CX software first _selects_ the hart's current CX prior to issuing CX instructions.  
  
"The CX Task Group proposes to specify ISA extension(s) plus interop interface standards (CX API, CX ABI, and CX Unit logic interface (CXU-LI)) that enable practical reuse, within a system, of multiple, independently authored composable custom extensions (CXs), CX libraries, and CX unit modules, remaining backwards compatible with existing custom extensions. These proposed standards will be proven in a series of Composition Plug-Fests demonstrating interoperation of various RISC-V CPUs × CXs × CXUs × CX libraries × apps x OSs × platforms."  
  
The composable extensions proposal aims to address an issue with fragmentation, in which multiple developers can each work on their own extensions to the RISC-V architecture resulting in "custom opcode collisions" - where two or more entities choose matching opcodes for different extensions.  
  
Jan is currently working on transitioning the project from the RISC-V Soft CPU SIG to a dedicated task group, where he will serve as acting vice-chair with Darius Rad as acting chair. The pair have asked for participation from RISC-V International members: "We will require your expertise in architecture, hardware, software, tools, verification, security, and other areas."  
  
More information is available in Jan's post [to the RISC-V ISA Dev mailing list](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/tbyhdM7iyp0).

<img src="/blog/2024-05-13-ecl74/mantawebterminal.jpg" style="max-width:100%" />

## Yosys Shines a Spotlight on Fischer Moseley's Manta FPGA Debugging Tool

  
The latest Community Spotlight from Yosys takes a look at Manta, a tool designed to ease debugging and rapid prototyping in FPGA-based projects - splitting tasks into modular and configurable "cores" which can be applied to a device on test.  
  
"When we were preparing to teach the FPGA design class at MIT, we noticed that Arm platforms were gaining popularity with students, primarily in the form of Apple Silicon," Manta creator Fischer Moseley explains. "This was a problem for our EDA tool (Vivado) which, despite our best tricks, was only usable on x86 platforms. To solve this, we developed a tool that ran Vivado remotely, allowing students to build their bitstreams without having the tools installed on their machine. This worked splendidly.  
  
"However, this meant that we couldn’t use Vivado’s built-in debugging tools such as the Integrated Logic Analyser (ILA) or Virtual IO (VIO), as these tools require Vivado’s Hardware Manager to be running on the machine connected to the FPGA. This was a bit of a problem, as students would often connect their FPGAs to external devices for their final projects, and it was nearly impossible to guarantee that those were behaving exactly as they were modelled in simulation. Manta was written to solve this problem. It provides the same functionality that the ILA and VIO cores provide (and more!) without requiring a specific architecture or OS."  
  
Fischer highlights two key features of Manta as being the most exciting: the ability to capture logic analyser data as a waveform file or as a Verilog module, the latter of which can be loaded into a simulation testbench to generate an exact duplicate of the original waveform; and an upcoming web terminal function, which uses the Web Serial API to run Manta in-browser. "Everything here is run locally in your browser," Fischer says, "no installation required! Nothing is sent to an external server either."  
  
The full write-up is available [on the Yosys blog](https://blog.yosyshq.com/p/community-spotlight-manta/), while Manta is published [on GitHub](https://github.com/fischermoseley/manta) under the reciprocal GNU General Public Licence 3.

<img src="/blog/2024-05-13-ecl74/tongcamera.jpg" style="max-width:100%" />

## Zachary Tong Experiments with DIY Semiconductors to Build a Camera Sensor

  
Zachary Tong, of the YouTube channel Breaking Taps, has been experimenting with hands-on chip making - by designing and building a working, albeit low-resolution, camera sensor.  
  
"This little wafer contains photosensitive pixels made with a semiconductor that is fabricated from copper," Zachary explains in his video detailing the project, "and I'm not going to lie: this wafer has totally kicked my butt. Results have been at times exciting […] and at times pretty discouraging. More than a few times I've accidentally blown up what I was testing.  
  
"While silicon is obviously the most popular semiconductor, it's not the one one - there are dozens of different semiconducting materials out there being studied for a whole variety of reasons. But the one I'm most interested in is copper oxide, the oxidised state of plain old copper. Copper oxide is a p-type semiconductor with a direct band gap of 1.2 electron-volts - we don't need to get into exactly what that means, but what you should know is that it's sensitive to visible light."  
  
Being sensitive to visible light, of course, means that the material can be used to create photosensitive devices - and, if patterned into a grid, these devices can be used in a camera sensor. Actually doing so, however, is far from easy for anyone not employed by a major semiconductor fab, requiring the growth of silicon dioxide on a silicon substrate, depositing a thin layer of titanium and then copper atop with a magnetron, oxidizing the copper into copper-2-oxide or cupric oxide by heating it to 700°C, and then etching the result using electron beam lithography.  
  
Zachary's full video on the project is available on the Breaking Taps YouTube channel. "I can't electronic my way out of a breadboard," he notes, "so apologies for any basic EE mistakes! I just want to build the devices, not actually use them in circuits or whatever."

<img src="/blog/2024-05-13-ecl74/chatfuzz.jpg" style="max-width:100%" />

## Researchers Turn to ChatGPT for Better Hardware Fuzzing

  
Researchers from the Technical University of Darmstadt and Texas A&M University have published a paper detailing a new approach to hardware fuzzing, designed to find security flaws in processors and other devices, which aims to use large language models (LLMs) for better inputs: ChatFuzz.  
  
"Modern computing systems heavily rely on hardware as the root of trust. However, their increasing complexity has given rise to security-critical vulnerabilities that cross-layer attacks can exploit," the team explains. "Traditional hardware vulnerability detection methods, such as random regression and formal verification, have limitations. Random regression, while scalable, is slow in exploring hardware, and formal verification techniques are often concerned with manual effort and state explosions.  
  
"Hardware fuzzing has emerged as an effective approach to exploring and detecting security vulnerabilities in large-scale designs like modern processors. They outperform traditional methods regarding coverage, scalability, and efficiency. However, state-of-the-art fuzzers struggle to achieve comprehensive coverage of intricate hardware designs within a practical timeframe, often falling short of a 70 per cent coverage threshold. We propose a novel ML-based hardware fuzzer, ChatFuzz, to address this challenge. Our approach leverages LLMs like ChatGPT to understand processor language, focusing on machine codes and generating assembly code sequences."  
  
Tested against the free and open source RocketCore and BOOM RISC-V processor cores, ChatFuzz was able to hit 75 per cent coverage in under an hour - compared, the researchers claim, to a rival state-of-the-art fuzzer which took 30 hours to reach the same coverage. In practical terms, the fuzzer also discovered 6,000 "discrepancies" in the RocketCore's golden model, which boiled down to "two new bugs in the RocketCore and discrepancies from the RISC-V ISA simulator."  
  
A preprint detailing the project is available [on Cornell's arXiv server](https://arxiv.org/abs/2404.06856).

<img src="/blog/2024-05-13-ecl74/mpsocspeed.jpg" style="max-width:100%" />

## Co-design Delivers a Near-50 Per Cent Speed Boost for Heterogeneous SoCs

  
Researchers Luca Colagrande and Luca Benini from ETH Zurich have highlighted major benefits from co-designing the hardware and offload routines when working on heterogeneous multi-processor system-on-chip (MPSoC) projects - with a near-50 per cent boost in offload speed demonstrated.  
  
"Heterogeneous multi-core architectures combine a few 'host' cores, optimised for single-thread performance, with many small energy-efficient 'accelerator' cores for data-parallel processing, on a single chip," the pair explain. "Offloading a computation to the many-core acceleration fabric introduces a communication and synchronisation cost which reduces the speed-up attainable on the accelerator, particularly for small and fine-grained parallel tasks.  
  
"We demonstrate that by co-designing the hardware and offload routines, we can increase the speed-up of an offloaded DAXPY kernel by as much as 47.9 per cent. Furthermore, we show that it is possible to accurately model the runtime of an offloaded application, accounting for the offload overheads, with as low as 1 per cent MAPE [Mean Absolute Percentage Error] error, enabling optimal offload decisions under offload execution time constraints."  
  
The proposed approach was proven using the Manticore MPSoC, chosen "as it combines the benefits of recent architecture trends with a fully open-source hardware design" - tested in cycle-accurate RTL simulations using QuestaSim 2022.3.  
  
The full paper is available as a preprint [on Cornell's arXiv server](https://arxiv.org/abs/2404.01908).

<img src="/blog/2024-05-13-ecl74/smuprof.jpg" style="max-width:100%" />

## Game-Based Semiconductor Curriculum Aims to "Bridge Knowledge Gaps"

  
Educators at the Southern Methodist University, the University of Maine, Fairfield UNiversity, and Texan gaming company Stemuli have received funding to develop a "game-based" curriculum to teach semiconductor concepts at a high-school level.  
  
"High schoolers are among the most frequent users of electronic devices that require semiconductor chips, but how these devices are designed and manufactured is not commonly taught in schools," says SMU professor Lin Lipsmeyer. "We will use this grant to address knowledge gaps and workforce needs equitably and incorporate an AI educator program to provide additional assistance and insights to students."  
  
The Innovative Technology Experiences for Students and Teachers (ITEST) grant, issued by the US National Science Foundation (NSF), will see the partners receive $1.3 million to fund the programme over a four-year period. This will include will include the development of an educational game designed to "bridge knowledge gaps" in semiconductor technology alongside workshops, summer camps, and industry field trips.  
  
"These efforts aim to help high school students develop skills and career interests in semiconductor fields," SMU says of the programme's goals. "The semiconductor curriculum will be designed and improved iteratively based on student’s feedback."  
  
A launch date for the curriculum has not yet been disclosed.


**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
