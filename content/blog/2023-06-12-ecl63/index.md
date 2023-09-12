---
layout: post
title: "El Correo Libre Issue 63"
description: El Correo Libre Newsletter, Issue 63
author: Gareth Halfacree
date: 2023-06-12
---

<img src="cocotb-mascot.jpg" style="max-width:100%" />

## Ten Years of Making Verification Fun Again

Hardware verification can be as rewarding as a treasure hunt. Or as tedious as doing your tax returns. With [cocotb](https://www.cocotb.org/), the Python-based verification framework, engineers can enjoy more of the treasure hunt experience. And today this experience is turning 10!

cocotb had [its first public commit](https://github.com/cocotb/cocotb/commit/ff5ef727530ba350183a6f8feaa9f7db5b2de57e) on June 12, 2013. If you look back at cocotb at that time you'll immediately notice one thing: the syntax hasn't changed much. Coroutines and triggers were pretty much the same as they are in “modern” cocotb. That's the first take-away after ten years: cocotb got the syntax right pretty much from the start.

So what happened since then? First of all, of course, the syntax expanded and modernized, e.g. to make use of Python 3 features such as the async and await keywords. But most importantly, cocotb matured. Users love cocotb because it “gets out of the way”: it just works, no matter what simulator, operating system or Python version you use. Getting there was and is hard work.

Some challenges were technical. Let's take one example: cocotb is a rather unconventional Python package with binary components running embedded inside a simulator. Initially, these binary components were compiled on the fly when running the simulation, which required every user to have a working C++ compiler setup. Easy enough! Unless you're on Windows, or in one of those wonderful corporate EDA environments that only vaguely resemble an off-the-shelf Linux distribution. For those users, their cocotb journey ended before they were even able to run a first testbench. In the 1.2 release in 2019 we moved to compiling cocotb once when installing cocotb. And in 2022 the 1.7 release removed the need for a C++ compiler completely by distributing pre-compiled binaries (Python wheels) to users on all major platforms (a total of 250 binaries, of which only one or two are ultimately used!).

Other challenges were less technical: cocotb works with all major simulators, open source ones as well as proprietary ones. Testing cocotb against these simulators used to require a lot of distributed, manual effort before every release – one major reason why releases happened very infrequently in the early years of cocotb. Today, we are happy to have Aldec Riviera-PRO and Siemens Questa running in continuous integration alongside many open source simulators to ensure that every single commit in cocotb is integration-tested. That's possible thanks to a great partnership we have built up to Aldec and Siemens, which provide us not only with simulator licenses, but also with support and a communication channel to ensure cocotb and their simulators work together smoothly, now and going forward.

A key enabler for these partnerships and the long-term success of cocotb was the FOSSi Foundation. The foundation is the legal home of the cocotb project, and provides administrative and financial support for it.

For the last ten years cocotb has continuously evolved to make verification fun (again). Cocotb takes on the often tedious task of abstracting away differences between simulators and operating system environments to enable its users to focus on the fun part: the testing itself. This effort has paid off: cocotb is thriving and enjoyed by more and more developers around the world, to the point of being used synonymous with “Python for hardware verification.”

Ten years of cocotb are ten years of work by dedicated volunteers writing code and documentation, answering user questions, educating others and spreading the word. Let us all celebrate this work today! [Join the cocotb chat](https://app.gitter.im/#/room/#cocotb_Lobby:gitter.im) to say Thank You, or surprise one of the cocotb contributors with a drink next time you see them!

Of course, no celebration is complete without gifts, which we'll slowly unwrap during the course of this week [on the cocotb blog](https://www.cocotb.org/blog) and [on the @cocotbnews Twitter account](https://twitter.com/cocotbnews): expect a new cocotb release, insights into our user base with the results of the cocotb user survey 2023, and the announcement of a dedicated cocotb workshop co-located with ORConf on September 17, 2023 in Munich, Germany. If you haven't done so you can already register for this event at [ORConf.org](https://orconf.org/), submit a talk, or consider sponsoring this event.

_-Philipp Wagner, Director, FOSSi Foundation_

<img src="box64-vf2.jpg" style="max-width:100%" />

## Box64 Dynarec on RISC-V "Quite Complete," Games and Other Software Now Usable


Developer and project maintainer Sebastien Chevalier has announced major progress in the effort to port box64 and its dynamic recompiler (Dynarec) to the RISC-V architecture, allowing software written for x86-64/AMD64 systems to run on RISC-V hardware without modification.

"The current development cycle of box64 (v0.3.1) has, amongst its objectives, to add Dynarec support for the RISC-V architecture," Sebastien explains. "Using VisionFive 2 as my dev board (thanks StarFive!), I added some infrastructure and split some of the ARM64 Dynarec to create a common ground, and started added some opcode to the newly created Dynarec.

"I have then be quickly helped by two external contributors on GitHub: ksco and xctan, who since then have pushed hundreds of opcode and helped debugging and fine-tuned the RISC-V Dynarec!

"At this point," Sebastien continues, "the Dynarec is already quite complete (not as much as the ARM64 one, but largely usable), and things are now mostly running on it. The end result is games are now playable on the VF2."

The release of a functional box64 port for RISC-V is a major boon for the architecture, helping to solve the chicken-and-egg problem facing any new platform by providing broad software compatibility without the need to nag developers for a native release - albeit at a performance penalty.

"The RISC-V architecture focuses on reducing as much as possible the physical CPU complexity, at the expense of the software side," Sebastien concludes. "Box64 generated code can get complex. Still, x86_64 programs can be now run on RISC-V with reasonable speed. Now the focus for Box64/RISC-V will be stability and bug fixing, until the next release."

Sebastien's full write-up is available [on the box86 blog](https://box86.org/2023/05/box64-and-risc-v/).

<img src="haystack.jpg" style="max-width:100%" />

## Researchers Develop a Way to Find A Malicious "Needle" in a Silicon Haystack


Researchers from the University of Texas at Dallas, working with Qualcomm, have come up with an automated approach to compare the physical output of a foundry with the original chip design - as a means of finding hardware Trojans which may have been inserted at the fabrication stage.

"Due to the emergence of outsourced fabrication, an untrusted [semiconductor] foundry is considered the most potent adversary in introducing a [Hardware Trojan]," the research team explains of the issue its work tries to solve.

"This can be attributed to the asymmetric business model between the design house and the foundry; the design house is completely oblivious to the fabrication process, whereas the design IP is transparent to the foundry, thereby having full control over the layout."

The solution: a graph neural network (GNN) which can take high-resolution die imagery and compare it to the originally-submitted chip design. In testing on AES and RS232 designs which had been deliberately modified, the system successfully detected all nine "Trojan" changes — turning them into a visualisation which makes the problem immediately apparent.

The team's work is available as a preprint [on the IACR Cryptology ePrint Archive server](https://eprint.iacr.org/2023/610).

<img src="padlock-keyboard.jpg" style="max-width:100%" />

## QEMU Gains RISC-V Cryptographic Vector Extension Support, Thanks to Codethink


Developers at Codethink have made it easier for others to experiment with the RISC-V _vcrypto_ vector instruction extension, by adding support into the QEMU emulator - meaning no hardware is required.

"Codethink has been working with the RISC-V CPU architecture for several years. We've done some internal projects around hardware design, toolchain support and porting a desktop environment," Codethink's team explains. "We also do commercial work in this area, and a project team recently added support to QEMU for an extension to the RISC-V instruction set that provides Vector Cryptography.

"Our task, sponsored by SiFive, was to add full support into QEMU for RISC-V's vector cryptography, _vcrypto_, extension set. This extension set provides instructions for implementing various cryptographic programs, including AES, SHA-2 and the ShangMi suites. Adding support to QEMU is one of the required steps for getting the extension ratified."

The team's work, sponsored by SiFive, required each _vcrypto_ instruction to be decoded, checked for validity, and then translated into the instruction set of the host for QEMU to execute on the underlying hardware. A test suite ensured the implementation performed correctly.

"The upstreaming process has been a cycle of submitting email patch submissions and implementing feedback. This began with an RFC before posting formal submissions, of which currently [the 4th revision is being prepared](https://lists.nongnu.org/archive/html/qemu-devel/2023-04/msg05580.html)," the team writes. "The _vcrypto_ spec has ostensibly been frozen so hopefully future changes to the patchset will be minimal!"

The full write-up is available [on the Codethink website](https://www.codethink.co.uk/articles/2023/vcrypto_qemu/).

<img src="bastian-board.jpg" style="max-width:100%" />

## Bastian Löher Peers at Bruno Levi's FPGA Tutorial "Through Amaranth Glasses"


Physicist and engineer Bastian Löher has written up his recent work with hands-on field-programmable gate array projects, taking Bruno Levi's popular tutorial on the subject and adapting it for use with the Amaranth hardware description language (HDL).

"How does one get started with programming FPGAs (field-programmable gate arrays)? Where does one even begin," Bastian writes by way of introduction. "For me, it all started with a new project that involved creating a device capable of measuring arrival time and length of logic signals with sub-nanosecond precision.

"The idea was to create a low-cost spectrometer for measuring high-intensity gamma radiation and replacing the commonly used ADC (analogue-to-digital converter) circuit with a TDC (time-to-digital converter) implemented in an FPGA. So, instead of measuring the amplitude of the signal, only the time the signal spends above a certain threshold (time-over-threshold) is measured. This design reduces the system complexity but requires custom logic."

To get to grips with the technology required, Bastian turned to [Bruno Levi's Blinker to RISC-V tutorial](https://github.com/BrunoLevy/learn-fpga/blob/master/FemtoRV/TUTORIALS/FROM_BLINKER_TO_RISCV/README.md) - but with a twist. "I had enough experience with Amaranth to tackle the tutorial as a practice exercise," he explains. "Instead of using Verilog, I followed Bruno’s tutorial in Amaranth HDL, using the open-source F4PGA (formerly Symbiflow) toolchain and an FPGA board that was not supported in the tutorial (Digilent CMOD A7 with Xilinx Artix 7)."

While the process was not always easy going, it was undeniably educational - and is detailed in full [on the Yosys blog](https://blog.yosyshq.com/p/blinker-to-risc-v/).

<img src="linux-riscvfun.jpg" style="max-width:100%" />

## Linux Foundation, RISC-V International Launch the RISC-V Fundamentals Course


The Linux Foundation and RISC-V International have announced a partnership on LFD210, the RISC-V Fundamentals course - designed, they say, for computer engineers and programmers looking to "accelerate their tech career" by way of introduction to the popular free and open-source instruction set architecture.

“Taking RISC-V Fundamentals will enable professionals to become active members of the RISC-V community, significantly strengthening their career potential," claims the Linux Foundation's Clyde Seepersad of the organisation's new course.

"By mastering the RISC-V ISA, students will acquire the skills and knowledge needed to succeed in this exciting and rapidly growing field."

The course, which includes an estimated 12-16 hours of material, is designed to cover the instruction set itself, including the format of its instructions, RISC-V's modular nature and extensibility, privilege levels and the RISC-V memory model, and writing in both assembly and high-level languages.

Those enrolling in the course are recommended to have at least "basic experience" in computer architecture concepts, assembly, C, and operating system concepts including paging, multithreading, synchronisation, and cache coherence, its organisers say.

More information is available [on the Linux Foundation website](https://training.linuxfoundation.org/training/riscv-fundamentals-lfd210/), where the course can be booked for $99 - or $299 to include testing via the RISC-V Foundational Associate (RVFA) exam at the end.

<img src="chipchat.jpg" style="max-width:100%" />

## Efabless Announces the Winners of its AI Open-Source Silicon Challenge


Efabless has announced the winning projects in its unusual open-source silicon competition, which sought contributions designed by artificially intelligent means - including the popular ChatGPT large language model, fed sufficiently detailed prompts.

"[Entrants will] use generative AI (e.g. [OpenAI] ChatGPT, [Google] Bard or similar) to generate a complete Verilog model for a digital design," Efabless explained of the project at its unveiling. "The design must be implemented using chipIgnite that includes an SoC template (Caravel) providing rapid chip-level integration and an open-source RTL-to-GDS digital design flow (OpenLane)."

Judged by a panel including tinyML Foundation chair Evgeni Gousev, RapidSilicon president and chief executive Naveed Sherwani, and the former chief technology officer of Cypress Semiconductor J. Augusto de Oliveira, the projects required a complete RTL model and verification testbenches - with winners promised free fabrication of their AI-aided designs.

The three winners of the competition are, in reverse order: Asma Mohsin and Muhammad Ali Farooq's Model Predictive Control (MPC) design, created using OpenAI's ChatGPT-4 large language model; Xinze Wang, Guohua Yin, and Yifei Zhu's Cyberrio RISC-V CPU also created with ChatGPT-4; and Hammond Pearce's QTCore-C1 programmable input/output (PIO) coprocessor, created using a method revealed earlier this month by Hammond and colleagues at NYU Tandon and dubbed [Chip-Chat](https://arxiv.org/abs/2305.13243v1).

More information is available [on the Efabless website](https://efabless.com/ai-generated-design-contest).

<img src="rise.jpg" style="max-width:100%" />

## Linux Foundation Europe Launches RISE, the RISC-V Software Ecosystem Project


The Linux Foundation Europe has announced the launch of an effort to broaden the software ecosystem behind the free and open-source RISC-V instruction set architecture: the RISC-V Software Ecosystem Project, or RISE.

"It’s an exciting time to be part of the RISC-V community, with continued popularity of the platform as well as strong progress across a variety of new use cases. However, this momentum must be supported by performant, secure, reliable and commercial-ready software," claims Amber Huffman, chair of the RISE Project. "The RISE Project brings together leaders with a shared sense of urgency to accelerate the RISC-V software ecosystem readiness in collaboration with RISC-V International."

"As a global community, we have made tremendous progress in RISC-V adoption. We are grateful to the thousands of engineers making upstream contributions and to the organisations coming together now to invest in tools and libraries in support of the RISC-V software ecosystem," adds RISC-V International chief executive Calista Redmond. "Accelerating adoption is our shared mission. The collective investment of our community and in the RISE Project will build on that momentum."

The project is hosted by the Linux Foundation Europe in partnership with RISC-V International, and includes among its founding board members from Andes, Google, Intel, Imagination Technologies, MediaTek, Nvidia, Qualcomm Technologies, Red Hat, Rivos, Samsung, SiFive, Alibaba's T-Head, and Ventana.

The project will contribute financial support and engineering talent to "address specific software deliverables," its organisers have said, to be prioritised by members of the RISE Technical Steering Committee, initially targeting software for application-class processors.

More information is available [on the RISE Project website](https://riseproject.dev/).

<img src="pulp-neo.jpg" style="max-width:100%" />

## The PULP Platform Unveils its First Linux-Capable Open Chip: Neo


The Parallel Ultra-Low Power (PULP) Platform project has formally unveiled its first Linux-capable fully open-source chip, Neo, a RISC-V device designed as a silicon demonstrator for the Cheshire platform.

"Neo is our first Linux-capable chip," PULP's Luca Benini explains of the part, which has been fabricated on Taiwan Semiconductor's 65nm CMOS technology node, "with full open-source IPs, including memory controller!"

"Cheshire [is] a lightweight and modular 64-bit Linux-capable host platform designed for the seamless plug-in of domain-specific accelerators," the PULP team explains of the technology inside Neo. "It features a unique low-pin-count DRAM interface, a last-level cache configurable as scratchpad memory, and a DMA engine enabling efficient data movement to or from accelerators or DRAM. It also provides numerous optional IO peripherals including UART, SPI, I2C, VGA, and GPIOs.

"Cheshire's synthesisable RTL description, comprising all of its peripherals and its fully digital DRAM interface, is available free and open-source. We implemented and fabricated Cheshire as a silicon demonstrator called Neo in TSMC's 65nm CMOS technology. At 1.2V, Neo achieves clock frequencies of up to 325MHz while not exceeding 300mW in total power on data-intensive computational workloads."

A preprint of the team's paper on Cheshire and Neo is available [on Cornell University's arXiv server](https://arxiv.org/abs/2305.04760).

<img src="harald-mixed.jpg" style="max-width:100%" />

## Matt Venn Highlights an Unusual Analogue Tiny Tapeout Design Submission


Matt Venn, creator of the Zero to ASIC course and the Tiny Tapeout project, has published a dive into an unusual design submitted for production: an analogue chip which uses digital standard cells.

"For digital design on an ASIC you'll probably be writing in a hardware description language, it gets synthesised into a bunch of logic, and then mapped into a bunch of standard cells," Matt explains. "For analogue you're more likely to be drawing out all the circuit shapes with a program like KLayout or Magic. But did you know you can also do analogue [design] with standard cells? Me neither!"

Matt's epiphany came about when Harald Pretl submitted a temperature sensor to the third iteration of the Tiny Tapeout project, creating a mixed-signal chip using Verilog and only the digital standard cells available in the Skywater SKY130 library.

"By creatively twisting the use of a tristate-inverter (EINVP) a voltage DAC [Digital to Analogue Converter] is built. This voltage-mode DAC is used in another twisted arrangement of an EINVP to bias an NMOS into sub-threshold operation to discharge a pre-charged capacitor (the input capacitor of an inverter)," Harald explains.

"Since the subthreshold current of a MOSFET is a strong function of temperature, the resulting delay time is also a strong function of temperature, thus a digital temperature sensor is built. The temperature-dependent digital signal is output at the LED display, showing tens (dot off) and ones (dot on)."

Matt has [published a video](https://www.youtube.com/watch?v=skC292_dALM) which offers a deep dive into the design, while Harald has written it up [on the Tiny Tapeout website](https://tinytapeout.com/runs/tt03/047/).

<img src="kenning.jpg" style="max-width:100%" />

## Antmicro Offers a Look at RISC-V AI Solution Co-Development with Renode and Kenning


Antmicro has published a look at co-developing RISC-V artificial intelligence (AI) solutions, using the recently-added support for vector instruction extensions in Renode and the Kenning bare-metal runtime.

"Thanks to their increasing computational capabilities and the open ISA's ability to tailor silicon to specific use cases with vector and custom extensions," Antmicro writes of its work, "RISC-V based microcontroller devices are an especially interesting target for machine learning workflows in low-power applications.

"Antmicro's work with a variety of ML-focused silicon development cases such as Google’s AmbiML project, has allowed us to extend our open source simulation framework, Renode with support for the RISC-V V spec and flexible interfaces for adding custom extensions, as well as features for gathering extensive information on the execution of ML workloads. Integration with Kenning - focusing on ML benchmarking and optimisation - is a logical next step."

Antmicro's write-up focuses on the use of its Kenning machine learning framework, which has recently been extended to include bare-metal runtimes for non-Linux targets and Renode integration, alongside Google's IREE framework.

"With Kenning," the company explains, "you can use IREE along with other optimization and compilation frameworks to build, test, and optimize your AI models and workflows on different platforms, including bare-metal, and use the traceable, easy-to-analyse reports generated by the system to iteratively improve model runtimes and performance on your target hardware."

The full write-up is available [on the Antmicro blog](https://antmicro.com/blog/2023/05/kenning-bare-metal-iree-runtime-renode/).

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [Paper preprint: Chip-Chat - Challenges and Opportunities in Conversational Hardware Design, Blocklove et al.](https://arxiv.org/abs/2305.13243v1)
-   [...and Matt Venn interviews Hammond Pearce and Jason Blocklove on the topic, too.](https://www.youtube.com/watch?v=6vC3t_soJok)
-   [VRoom! high-end RISC-V project begins work on vector extension support, "trying to figure out how to fit it into our existing design."](https://moonbaseotago.github.io/2023/06/05/early-vectors.html)
-   [Horizon Europe launches SYCLOPS, a project to demonstrate "ground-breaking advances in scalability [...] via fully-open AI acceleration" with RISC-V and CYCL.](https://www.syclops.org/)
-   [Paper: EigenEdge - Real-Time Software Execution at the Edge with RISC-V and Hardware Accelerators, Chiu et al.](https://dl.acm.org/doi/abs/10.1145/3576914.3587510)
-   [India's Financial Express reports on the government's opening of proposals for local semiconductor fabs, as it pushes for technological independence.](https://www.financialexpress.com/industry/government-invites-fresh-applications-for-setting-up-semiconductor-display-fabs-under-modified-scheme-from-june-1/3109006/)
-   [The UK government unveils its own plans on the same front, promising £1 billion over 20 years for the nation's semiconductor sector.](https://www.gov.uk/government/news/new-1-billion-strategy-for-uks-semiconductor-sector)
-   [RISC-V software developers are debating whether the Linux kernel should enable the vector extension by default or not.](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/9CI304vHtMo/m/b9LDXaQ_BgAJ)
-   [SiFive donates WorldGuard, a system-level security memory model, to RISC-V International.](https://www.sifive.com/press/sifive-gives-worldguard-to-risc-v-international-to)
-   [The South China Morning Post reports local semiconductor developers "aim to adopt [the] open-source RISC-V chip architecture" in order to fast-track projects and reduce costs.](https://www.scmp.com/tech/tech-trends/article/3221027/chinas-semiconductor-developers-eye-shift-risc-v-architecture-amid-growing-chip-demand-cars-data)



<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
