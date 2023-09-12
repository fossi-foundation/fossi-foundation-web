---
layout: post
title: "El Correo Libre Issue 65"
description: El Correo Libre Newsletter, Issue 65
author: Gareth Halfacree
date: 2023-08-08
---

<img src="gsoc.jpg" style="max-width:100%" />

## Welcome the Google Summer of Code Class of 2023

The FOSSi Foundation is happy to introduce our Google Summer of Code Class of 2023 projects. This year we are grateful that we have been granted six slots by Google to support projects and students. We are thankful for all mentors who volunteered to supervise students, and we’re looking forward to a great summer working together on Free and Open Source Silicon projects.

These projects are our “GSoC Class of 2023.” Please give our students a warm welcome!

### TinyParrot: A minimal BlackParrot RISC-V Multicore variant (Abdul Muheet Ghani)

_Mentored by Dan Petrisko and Stefan Wallentowitz_

The objective of this project is to reduce the size of BlackParrot, a validated open-source, Linux-capable, cache-coherent, RV64GC multicore, and make it even smaller. The project will explore various optimization techniques, such as parameterizing out support for the RISC-V MFD extensions or remapping FPGA primitives using the portability layer in BaseJump STL. Addressing Size Limitations to Make BlackParrot Multicore Accessible: The problem being solved in this project is to reduce the size of the BlackParrot multicore design to make it even smaller, so that it can fit into affordable educational FPGA boards, such as the Z2, using the ZynqParrot infrastructure. This would make it more accessible for students and researchers who may not have access to expensive hardware, while still providing a validated and efficient multicore design for educational and research purposes.

An Approach to Address BlackParrot Multicore Size Limitations: The plan to solve the problem of size limitation of BlackParrot multicore is to parameterize the RISC-V MFD extension from it. By removing support for this extension, the design can become smaller and more streamlined, which will make it easier to fit into affordable educational FPGA boards while still maintaining its core functionalities. This approach is one of the various optimization techniques that will be explored in the project to reduce the size of the multicore design. Deliverables: The deliverables for this project include parameterizing the M, D, and F extensions of RISC-V in the BlackParrot multicore design. After parameterization, the design will be implemented and run on an FPGA using the ZynqParrot infrastructure. The FPGA build report will be compared before and after parameterization to evaluate the effectiveness of the optimization technique in reducing the size of the design.

### Circuit Visualization with Makerchip Platform (Chaitravi Chalke)

_Mentored by Steve Hoover and Bala Dhinesh_

The Makerchip platform has added custom visualization support for circuit simulations, allowing for improved insights into microarchitectural behavior and circuit debugging. This project seeks to extend the capabilities of the platform by implementing customized circuit visualization for various circuits, including SweRV, SERV, BaseJump STL, and fundamental circuits for educational purposes. Additionally, the project will incorporate neural networks and gamified circuit design visualization to further enhance the user experience. This feature will provide a clearer understanding of how each step of the code is functioning, leading to improved insights and faster debugging. By enabling users to visualize and analyze circuits in a more efficient and engaging manner, this project aims to improve the overall functionality and usability of the Makerchip platform.

### Parameterized device layouts for GF180MCU (Qurrat ul ain Alam)

_Mentored by Tim Edwards and Stefan Wallentowitz_

Throughout this project, I hope to gain a firmer understanding of TCL scripting and the backend working of parameterized devices and hopefully make some new ones too these devices are used many times while using magic to makes our work easier. This project will help me in a deeper understanding of how each command in the command line works in magic and how we can make some changes in its scripts to make it to improve user inference. In terms of the project, the goal is to work in scripts to draw devices like LDNMOS, LDPMOS, bipolar transistors, photodiodes, Avalanche Diode, etc as well as fixing a few devices that are known to draw incorrectly for some parameter values.

### Improving SDF support in Icarus Verilog (Leo Moser)

_Mentored by Tim Edwards, Mohamed Shalan, and Cary R_

When you design a digital circuit, you want to make sure that all timings are correct, even post-layout. Therefore, the gate level netlist is annotated with delays extracted from the layout. The file format that contains these delay and timing information is called Standard Delay Format (SDF). Icarus Verilogs’ SDF implementation has shortcomings in the following categories:

1.  Wire / Interconnect delays
2.  Conditional path delays
3.  Timing checks

Work needs to be done on these categories, all while supporting related bugs as we more completely test gate level simulations. With the work proposed here, I would like to improve Icarus’ SDF support to simulate SDF back-annotated timing simulations for the open SKY130 PDK. The deliverables for this project are:

1.  Implementing the SDF `INTERCONNECT` feature
2.  Writing tests for the regression suite
3.  Example of a SDF back-annotated timing simulation using the SKY130 PDK

Weekly posts can be found on his [blog](https://mole99.uber.space/).

### Enhancing OpenPiton+Ariane SoC With an Open-Source Advanced Interrupt Architecture (Kinza Qamar Zaman)

_Mentored by Jonathan Balkind and Sandro Pinto_

The Platform Level Interrupt Controller (PLIC) is the de facto interrupt controller in RISC-V systems. However, the specification has intrinsic limitations regarding scalability and feature richness, e.g., it lacks support for Message Signal Interrupts (MSI) and virtualization. The RISC-V Advanced Interrupt Architecture (AIA) is the new reference specification for interrupt handling. RISC-V International has just ratified the AIA specification. This project aims to integrate an (in-house) open-source AIA IP into the OpenPiton+Ariane platform and conduct an in-depth evaluation of the performance and suitability for general-purpose, multithreaded, manycore processors.

### Enhancing OpenPiton+Ariane With a High-Performance Data Cache (Noelia Oliete Escuín)

_Mentored by César Fuguet and Jonathan Balkind_

As the demand for High-Performance Computing (HPC) continues to grow, there is a need for open-source solutions that can deliver the performance required by modern applications. Different open-source architecture frameworks have been developed by the community, like OpenPiton, however, all of them present performance limitations that impact their ability to execute computationally-intensive tasks. OpenPiton is an open-source framework for designing many-core processors. Although OpenPiton was originally developed for SPARC v9 architectures, currently it is also compatible with different core architectures (RISC-V 32-bit, RISC-V 64-bit, x86, and SPARCv9).

In this project, we will focus on improving the performance of the integration of CVA6/Ariane into OpenPiton (OpenPiton+Ariane). The architecture of OpenPiton consists of one chipset and one or more tiles. The chipset houses modules used to communicate the tiles with the peripherals, such as the UART. The tile is used to build the mesh for many-core designs. In these designs, the tiles are interconnected by three NoC routers to generate the mesh. Each tile comprises the three NoC routers, the Ariane core, and the cache hierarchy, which consists of Ariane’s private L1 data and instruction caches, a private L1.5 cache and a shared distributed L2 cache.

Despite the fact that OpenPiton offers many advantages, it presents performance limitations that restrict its adoption in the HPC field. In this project, we will improve the performance of OpenPiton by replacing the L1 data cache of Ariane with the High-Performance, Multi-Requester, Out-of-Order, L1 data cache (HPDcache). In addition, other features such as the amount of L1.5 cache miss status holding registers (MSHRs) or the L1.5 cache associativity can also be improved in order to approach OpenPiton even closer to the HPC field.

_-Jonathan Balkind, Director, FOSSi Foundation_

<img src="serv-colour.jpg" style="max-width:100%" />

## SERV, the Award-Winning Bit-Serial RISC-V Core, Gets a Four-Bit Sibling: QERV


FOSSi Foundation director and creator of the award-winning SERV ultra-compact bit-serial RISC-V core Olof Kindgren has announced a new design, QERV - a four-bit variant less than 50 per cent larger yet which offers nearly four times the performance.

"A colleague of mine has started working on QERV, the 4-bit SERV," Olof announced of the work. "Preliminary results show a 50 per cent LUT [Look-Up Table] increase and a 20 per cent FF [Flip-Flop] increase for almost a 4x speed increase. Very, very promising. Stay tuned.

"Just got QERV passing riscv-formal, the RISC-V regression test suite and running the Dining Philosophers Zephyr demo which means it's pretty close to full functionality now," Olof added in the project's latest update. "4x faster and only 20-40 per cent larger than SERV depending on the target."

SERV is generally recognised as the world's smallest RISC-V CPU core, and forms the heart of the Servant and Subservient system-on-chip (SoC) designs. It also serves as the basis for the CoreScore benchmark, which ranks FPGA and their toolchains by how many functional SERV cores it's possible to cram into a single FPGA.

More information on SERV is available [on GitHub](https://github.com/olofk/serv); at the time of writing, QERV had not yet been published.

<img src="corevmcu.jpg" style="max-width:100%" />

## OpenHW Group Launches the CORE-V DevKit, With a Free and Open Microcontroller


The OpenHW Group has launched a crowdfunding campaign for the CORE-V, a microcontroller development board designed to showcase its CORE-V microcontroller unit and its free and open-source CV32E40P processor core.

"The CORE-V MCU DevKit is a turnkey, open-source development and prototyping platform for the CORE-V MCU System on Chip," the organisation writes of its launch. "The CORE-V MCU DevKit enables makers of IoT and embedded systems to evaluate the performance of the CORE-V MCU, to interconnect with Wi-Fi and the IoT cloud, and to develop and test software using the CORE-V SDK.

"At the heart of the DevKit is the CORE-V MCU, an ASIC developed by the OpenHW community and fabricated in Global Foundry’s 22FDX process. The CORE-V MCU provides an evaluation and development platform for OpenHW’s fully-verified CV32E40PV1.0 embedded-class processor core. The CORE-V-MCU integrates the processor core with a set of on-chip peripherals, memory, and Quicklogic’s embedded FPGA (eFPGA) technology."

Almost, but not quite, the entire CORE-V microcontroller is made available under the permissive Solderpad 2.1 licence, the Group has confirmed, missing only the Quicklogic eFPGA. The C32E40P core, meanwhile, is released under the same licence.

The OpenHW Group [has partnered with GroupGets](https://groupgets.com/campaigns/1040) to arrange production and sell-through of the Amazon-designed CORE-V MCU DevKit, with orders open now at $199 on a 14-day lead time.

<img src="efablessaichallenge.jpg" style="max-width:100%" />

## Efabless Opens its Second AI-Generated Open-Source Silicon Design Challenge


Efabless has announced the opening of a second AI-Generated Open-Source Silicon Design Challenge, which aims to prove the potential for the use of generative machine learning (ML) models, including large language models (LLMs) like ChatGPT, in silicon design.

"Use generative AI (e.g. ChatGPT, Bard or similar) to generate a complete Verilog model for a digital design," the company explains of the competition's guidelines. "The design must be implemented using chipIgnite that includes an SoC template (Caravel) providing rapid chip-level integration and an open-source RTL-to-GDS digital design flow (OpenLane).

"A successful project must provide all prompts used to generate a complete RTL model for the design. In addition, verification testbenches that demonstrate the design meets the intended functionality must be provided and maybe created conventionally."

Those selected as a winner of the challenge will receive free fabrication into physical silicon chips, with those who do not make the cut but whose designs met the submission guidelines will receive a development board with a randomly-selected winning chip installed.

Those interested in participating can find the full instructions [on the Efabless website](https://efabless.com/ai-generated-design-contest-2); entries close on the 7th of September 2023.

<img src="riscv.jpg" style="max-width:100%" />

## RISC-V Smcntrpmf Performance-Analysis Extension Enters Public Review


RISC-V International has announced the opening of a public review period for the Smcntrpmf extension, designed to make it easier to analyse the performance of a RISC-V system at a very low level.

"The cycle and instret counters serve to support user mode self-profiling usages, wherein a user can read the counter(s) twice and compute the delta(s) to evaluate user software performance and behaviour," explains Beeman Strong, chair of the RISC-V Performance Analysis Special Interest Group (SIG). "Currently, these counters are not filtered by privilege mode, and thus they continue to increment while traps (e.g., page faults or interrupts) to more privileged code are handled.

"This causes two problems: it introduces unpredictable noise to the counter values observed by the user; it leaks information about privileged software execution to user mode. This proposal [for the Smcntrpmf extension] remedies these issues by introducing privilege mode filtering for the cycle and instret counters."

The public review period is open now, and closes on the 31st of August 2023. Those interested in commenting on the proposal can do so [on the extension's GitHub repository](https://github.com/riscv/riscv-smcntrpmf).

<img src="binnq-riscv.jpg" style="max-width:100%" />

## Industry Giants Join Forces to "Drive RISC-V Ecosystem and Hardware Development"


Some of the biggest names in embedded electronics have announced a joint venture to found an as-yet unnamed company, based in Germany, which will serve to push RISC-V forward in the automotive sector - to be followed by mobile and the Internet of Things (IoT), if all goes well.

The partnership sees Bosch, Infineon, Nordic Semiconductor, NXP Semiconductors, and Qualcomm Technologies joining forces to form a wholly-new joint venture focused exclusively on RISC-V products - which will include the production of reference designs for automotive applications, the companies have confirmed.

"As vehicles become software-defined and dependability requirements increase due to electrification and connectivity, for example, as well as through trends like autonomous driving, there is a general need for standardisation and ecosystem compatibility across the industry, with CPUs being a key IP," explains Infineon's Peter Schiefer of the company's initial focus.

"We are proud to support the establishment of trusted RISC-V based automotive products with this initiative. The knowledge and expertise of leading market players will unleash the full potential of RISC-V in the automotive sector."

The presence of Nordic, NXP, and Qualcomm in the venture is of particular interest: the three companies have long concentrated on products built around proprietary cores from Arm, making the shift to focus on RISC-V an interesting one.

At the time of writing, no timescale had been provided for the company's opening.

<img src="archgym.jpg" style="max-width:100%" />

## "An Open-Source Gymnasium" for AI-Assisted Architecture Design


Google's research arm has announced the release of "an open-source gymnasium" designed to promote the use of machine learning and artificial intelligence (ML and AI) systems in computer architecture design: ArchGym.

"Enabled by ArchGym, our results indicate that with a sufficiently large number of samples, any of a diverse collection of ML algorithms are capable of finding the optimal set of architecture design parameters for each target problem; no one solution is necessarily better than another," researchers Amir Yazdanbakhsh and Vijay Janapa Reddi write of the platform's potential.

"These results further indicate that selecting the optimal hyperparameters for a given ML algorithm is essential for finding the optimal architecture design, but choosing them is non-trivial. ArchGym addresses these challenges by providing a unified framework for evaluating different ML-based search algorithms fairly."

The ArchGym platform is split into two components: the environment and the agent. The environment seeks to encapsulate the architecture cost model, including latency, throughput, area, and energy usage, into a computational cost for a given workload; the agent encapsulates the machine learning algorithm, including hyperparameters and a guiding policy.

"We invite the computer architecture community as well as the ML community to actively participate in the development of ArchGym," the researchers conclude. "We believe that the creation of a gymnasium-type environment for computer architecture research would be a significant step forward in the field and provide a platform for researchers to use ML to accelerate research and lead to new and innovative designs. "

ArchGym is available [on GitHub](https://github.com/srivatsankrishnan/oss-arch-gym) under the permissive Apache 2.0 license.

<img src="a5k.jpg" style="max-width:100%" />

## Sylvain Lefebvre's a5k is a Core Designed for One Task: Running Another World


Sylvain Lefebvre, creator of the Silice language for FPGA algorithm development, has designed another application-specific FPGA core - reimplementing the game engine for Éric Chahi's 1991 cinematic platformer Another World.

"This game is not only a graphical and gameplay masterpiece, it is also a technical marvel," Sylvain writes, in reference to the game released in the US as Out of This World. "The entire game runs on a beautifully designed Virtual Machine (VM) that calls only a blitter and rasterizer to produce the graphics in four framebuffers!

"The VM is quite minimalistic, and both the blitter and rasterizer are good candidates for hardware designs. Therefore it was very tempting to create a hardware implementation of the entire framework : no standard CPU, a truly native hardware version of the Another World VM, blitter and rasterizer. While I'll keep referring to the "VM" in the following, keep it mind it will become an actual custom processor, implementing on an FPGA all of Another World opcodes in hardware. This is not a 6502, not a Z80, not a 68000: this is an Out-Of-This-World-chip!"

The a5k design isn't the first Sylvain has created to showcase the capabilities of Silice while paying homage to classic games: he has released similar cores for Id Software's Wolfenstein 3D, Doom, and Quake, as well as a terrain renderer inspired by Novologic's Comanche and others.

The project is documented in full, with source code under the permissive MIT license, on Sylvain's GitHub repository; the game source port is made available under the reciprocal GNU General Public License (GPL). "The game data is copyrighted," Sylvain notes, "so please go buy the game if you don't own multiple copies already. It's well worth it!"

<img src="debian.jpg" style="max-width:100%" />

## Debian Linux Announces the Adoption of 64-bit RISC-V as an Official Architecture


The longstanding Debian Linux distribution has announced that 64-bit RISC-V is now an officially supported target architecture for the operating system - though that work is ongoing building a compatible software archive.

"riscv64 is now an official Debian architecture," Debian's Aurelien Jarno announced to the Debian RISC-V mailing list late last month. "However before you rush to update your sources.list file, I want to warn you that the archive is currently almost empty, and that only the sid and experimental suites are available. The procedure is to rebootstrap the port within the official archive, which means we won't import the full debian-ports archive.

"Therefore our next step is to build a minimal set of ~90 source packages using the debian-ports archive and then import them into the official archive. These packages will be signed with a special GPG key using debian-riscv@lists.debian.org as the email address, enabling easy tracking. This process has already started, hence the few ACCEPTED mails on the mailing list. It will probably take a few days especially given that sid is constantly evolving."

The announcement is available in full [on the Debian mailing list archive server](https://lists.debian.org/debian-riscv/2023/07/msg00053.html).

<img src="car.jpg" style="max-width:100%" />

## Researchers Offer an Open Multi-OS Platform for RISC-V in Automotive ECUs


A team of researchers from ETH Zurich and the Huawei Research Centre have published a paper detailing work towards a multi-operating-system architecture based on open-source software and the free and open-source RISC-V instruction set for use in vehicle engine control units (ECUs).

" The complexity of automotive systems is increasing quickly due to the integration of novel functionalities such as assisted or autonomous driving," the researchers explain. "However, increasing complexity poses considerable challenges to the automotive supply chain since the continuous addition of new hardware and network cabling is not considered tenable. The availability of modern heterogeneous multi-processor chips represents a unique opportunity to reduce vehicle costs by integrating multiple functionalities into fewer Electronic Control Units (ECUs). In addition, the recent improvements in open-hardware technology allow to further reduce costs by avoiding lock-in solutions.

"This paper presents a mixed-criticality multi-OS architecture for automotive ECUs based on open hardware and open-source technologies. Safety-critical functionalities are executed by an AUTOSAR OS running on a RISC-V processor, while the Linux OS executes more advanced functionalities on a multi-core ARM CPU.

"Besides presenting the implemented stack and the communication infrastructure," the researchers note, "this paper provides a quantitative gap analysis between an HW/SW optimized version of the RISC-V processor and a COTS Arm Cortex-R in terms of real-time features, confirming that RISC-V is a valuable candidate for running AUTOSAR Classic stacks of next-generation automotive MCUs."

The paper, which pre-dates the announcement detailed earlier in this newsletter of the formation of an industry group also promoting RISC-V adoption in the automotive sector, is available under open-access terms [on the Cornell arXiv preprint server](https://arxiv.org/abs/2307.04148).

<img src="riscvsummiteurope-panel.jpg" style="max-width:100%" />

## RISC-V Summit Europe Panel Discusses Growing Adoption in the Region


RISC-V International has published a recording of a panel discussion at the RISC-V Summit Europe earlier this year, in which the topic was the continued growth of RISC-V adoption in the region - with panellists calling it "a really easy policy choice" for underpinning efforts to decrease nations' reliance on foreign technology providers.

"The panellists discussed the flurry of RISC-V activity in Europe and underscored how RISC-V is critical for Europe’s future," RISC-V International's Kezia Leung writes in a summary of the discussion. "Luis-Carlos Busquets-Perez, Administrator at the EU Commission, explained that open standards like RISC-V have 'a very important economic impact in the European economy.'

"The discussion also focused on the important role of collaboration in the RISC-V ecosystem. RISC-V International’s CEO Calista Redmond had the panellists share their thoughts on how academia, businesses, and policymakers can work together to maximize the potential of RISC-V without hindering one another. NXP’s Director of Strategic Partnerships Patrick Pype had three recommendations: 'Communicate. Communicate. Communicate.' He touched on how it’s 'very important to keep talking to find synergies' and collaborate 'to define common areas of interest and common programs.'"

The panel also discussed the role of education in promoting adoption and further development of RISC-V, with Barcelona Supercomputer Centre director and research lead John D. Davis describing it as "an enabling technology" which will allow researchers to "communicate to industry new novel ideas and proofs of concepts from hardware all the way up to the applications on the top" - going so far as to envision a future where RISC-V processors could be assembled by children like Lego.

Kezia's summary is available [on the RISC-V International blog](https://riscv.org/blog/2023/07/the-growing-momentum-of-risc-v-in-europe/), with the full panel discussion available [on YouTube](https://www.youtube.com/watch?v=7cLaO-MFY2s).

<img src="newsinbrief.jpg" style="max-width:100%" />
## FOSSi News In Brief

-   [Olof Kindgren has been working on audio playback from Verilator, using GTKWave in interactive mode. "Still a bit slow," he says, "but it works."](https://twitter.com/OlofKindgren/status/1679845668679036928) [(GitHub)](https://github.com/olofk/keball)
-   [Anton Shilov, EE Times: "The Golden Age of Custom Silicon Draws Near."](https://www.eetimes.com/the-golden-age-of-custom-silicon-draws-near/)
-   [Indian Minister for Electronics and IT Rajevv Chandrasekhar confirms approval of seven startups for national chip design.](https://in.investing.com/news/7-indian-startups-approved-for-chip-designing-rajeev-chandrasekhar-3745611)



<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
