---
layout: post
title: "El Correo Libre Issue 55"
description: El Correo Libre Newsletter, Issue 55
author: Gareth Halfacree
date: 2022-10-11
---


<img src="uvm-spark-joy.jpg" style="max-width:100%" />

## It's Time to Thank UVM - and Say Goodbye

Universal Verification Methodology (UVM) has been a massive success. There's no doubt about that. For the first time it showed the chip industry the benefits of having a common framework. You can hire directly for UVM skills. Vendors provide UVM models for interfacing their IP. There are tools for generating UVM registers and other boilerplate code. There is training available and forums for asking UVM-related questions.

It has become so ubiquitous so that many people in the industry seem to believe it has some magical properties and that it's the only way to verify chips. But, frankly speaking, it's not really that good of a framework. It's clunky and suffer from a lot of legacy. Many companies I'm talking with don't actually use it as is but have written some custom framework on top, and you can find plenty of tools to generate UVM, which in the end means we end up with a boatload of incompatible framework generators instead. But the biggest issue is that it's written in SystemVerilog.

Will this turn in to one of those language wars again? Maybe, but we can't ignore the fact that there are probably 1,000 Javascript, Python, or Java developers for each Verilog coder. (System)Verilog (or VHDL for that matter) barely scrapes the bottom of the top 50 most popular language lists. "Nonsense!", I hear my fellow chip design engineers mumble, "Everyone knows Verilog". Well, there's a word for that. Survivor bias. Everyone in the semiconductor industry knows Verilog because those who couldn't stand the language just went elsewhere. And this is a huge problem for the industry. On top of an ageing demographic we have issues keeping the youngsters interested when there's other fancier languages and environments out there.

To sum things up, UVM has been a massive success and has seen industry-wide adoption over the past ten years. But the most important thing UVM did was probably to show the industry the benefit of having a common framework, not being the best framework in itself. My prediction is that UVM will see a slow (everything in EDA is slow) decline in the coming years and it will be relevant for long time, but gradually be replaced by frameworks written in more common languages and that it's a good bet to get to know cocotb specifically a little better. So I think it's time to consider whether UVM sparks joy. Otherwise, it's time to thank it and say goodbye.

Now, if the industry could just agree on a [common format for describing IP cores](https://github.com/olofk/fusesoc) and [interfacing EDA tools](https://github.com/olofk/edalize). Oh well. That's another battle for another day.

_-Olof Kindgren, Director, FOSSi Foundation_

**_A longer and more detailed version of this editorial is available on Olof's blog, [Tales from Beyond the Register Map](https://olofkindgren.blogspot.com/2022/10/its-time-to-to-thank-uvm-and-say-goodbye.html)._**

<img src="maverick.jpg" style="max-width:100%" />

## RadioStack's Maverick-603 Packs an OpenMPW Chip on an FT8 SDR


New Hampshire-based RadioStack has announced an upcoming software-defined radio (SDR) board with a difference: its FT8 receiver is open silicon, designed for the Efabless platform and produced under the Google-funded OpenMPW programme at a SkyWater fab.

"Maverick-603 is the first affordable FT8 receiver board built around an RF receiver chip that was designed using fully open source tools and fabrication. It is capable of acquiring FT8 signals between 7 MHz and 70 MHz. With this frequency range, you will be able to receive signals from around the world with high accuracy. The use of our Low Noise Amplifier (LNA) will also give the chip the ability to amplify very low-strength signals, which is necessary for an effective FT8 receiver." the company explains of its launch product.

"It is difficult for open source practices to thrive in the chip-design industry, but Maverick-603 demonstrates that open source chip design can produce products that equal or surpass their closed-source counterparts. With this project, we aim to gather interest and support, both for amateur radio and for open source chip design."

In addition to the custom-built open-silicon FT8 chip, designed for a digital-mode amateur radio protocol tailored for low signal strength and long-range operation, the board uses an off-the-shelf Microchip ATmega1608 microcontroller connecting to the FT8 part over an SPI bus.

The chip's design [has been published on GitHub](https://github.com/Radio-Stack/caravel_ft8_receiver) under the permissive Apache 2.0 licence; additional information is available [on the project's Efabless page](https://platform.efabless.com/projects/956). RadioStack plans to sell a number of pre-assembled boards commercially through [the Crowd Supply crowdfunding platform](https://www.crowdsupply.com/radiostack/maverick-603) in the near future.

<img src="naxriscv-debian.jpg" style="max-width:100%" />

## Enjoy Digital Demos Debian on Papon Charles' NaxRiscv Open-Source SoC


Enjoy Digital has demonstrated a 64-bit Debian installation running on Papon Charles' NaxRiscv open-source RISC-V system-on-chip (SoC) design, hosted on a Digilent Genesys 2 FPGA development board.

"RISC-V 64-bit Debian on Genesys 2 with fully open-source SoC: @dolu1990 [Papon Charles'] NaxRiscv 64-bit CPU integrated with LiteX (LiteDRAM DDR3 + LiteSDCard + 1Gbps LiteEth + Framebuffer + base peripherals). What a relief to just be able 'apt install' packages..."

Papon's NaxRiscv is an RV32/RV64IMAFDCSU superscalar design with out-of-order execution and register renaming, designed for portability but primarily targeting FPGAs with distributed RAM. "There wasn’t many OoO [Out of Order] open-source softcore[s] out there in the wild," Papon explains of his design. "The bet was that it was possible to do better in some metrics, and hopefully being good enough to justify in some project the replacement of single issue/in order core softcore by providing better performances (at the cost of area)."

Enjoy Digital's demo follows the porting of NaxRiscv to the LiteX system-on-chip platform, and provides a fully-functional Debian environment complete with graphical desktop - capable, even, of running games including the Chocolate Doom port of Id Software's Doom and transportation sim OpenTTD simultaneously.

Enjoy Digital's post is available, with screenshots, [on Twitter](https://twitter.com/enjoy_digital/status/1569313567458967553); instructions on generating and loading a bitstream and loading the Debian image onto an SD Card are available [in the NaxRiscv documentation](https://spinalhdl.github.io/NaxRiscv-Rtd/main/NaxRiscv/hardware/index.html#).

<img src="circuitnet.jpg" style="max-width:100%" />

## CircuitNet is an Open-Source Dataset for EDA Machine Learning Work


Researchers at Peking University and Wuhan University have released CircuitNet, a dataset targeting machine learning applications in electronic design automation - and have done so under a permissive licence.

"CircuitNet is an open-source dataset dedicated to machine learning (ML) applications in electronic design automation (EDA)," the team explains of its work. "We have collected more than 10k samples from versatile runs of commercial design tools based on open-source RISC-V designs with various features for multiple ML for EDA applications.

"We separate the features and store them in different directories to enable custom applications. Thus they need to be preprocessed and combined in certain arrangement for training. Our scripts can preprocess and combine different features for training and testing. But we also encourage to implement different preprocessing methods and use different combinations of features."

The team has confirmed it plans to extend the dataset to "include diverse and large-scale designs for versatile ML applications in EDA" in the future, while asking for feedback on the project as it stands to direct future development.

A brief paper introducing the dataset and its tools was published in the journal [_Science China Information Sciences_](https://www.sciengine.com/SCIS/doi/10.1007/s11432-022-3571-8), with full documentation available [on the project's website](https://circuitnet.github.io/); the dataset and source code itself, meanwhile, [have been published to GitHub](https://github.com/circuitnet/CircuitNet) under the permissive BSD 3-Clause licence.

<img src="nextpnr.jpg" style="max-width:100%" />

## Nextpnr 0.4 Brings Higher Utilisation View to ECP5, Adds PsuedoCell API


The next-generation portable FPGA place-and-route tool nextpnr has hit its version 0.4 release, bringing improvements including a split-slice view for Lattice ECP5 targets allowing for higher utilisations, an initial PsuedoCell application programming interface (API) for region ports, and a range of tweaks and bugfixes.

The nextpnr 0.4 release switches Lattice ECP5 devices to a split-slice view designed to allow higher utilisations by separating LUT and FF bels. The PsuedoCell API, meanwhile, is designed to offer what the project's maintainers describe as "something that looks like a cell (starts/ends routing with pins on nets, has timing data) but isn't mapped to a fixed bel in the architecture [and] instead can have pin mappings defined at runtime.

"The PseudoCell allows this," the team explains, "by providing an alternate, virtual-function based API for such cells. When a cell has ''pseudo_cell' used, instead of calling functions such as getBelPinWire, getBelLocation, or getCellDelay in the Arch API, such data is provided by the cell itself, fully flexible at runtime regardless of arch, via methods on the PseudoCell implementation."

Other changes in the new release include improvements to the Gowin architecture, support for Python 3.11, bug fixes for iCE40, ECP5, and Nexus devices, the addition of the viaduct architecture for FABulous embedded FPGA (eFPGA) fabrics, and various cleanups and refactors.

The latest release is available [on the nextpnr GitHub repository](https://github.com/YosysHQ/nextpnr/releases/tag/nextpnr-0.4), alongside full source code under the permissive ISC licence.

<img src="riscvlim.jpg" style="max-width:100%" />

## RISC-Vlim Offers a RISC-V Framework for Logic-in-Memory Architectures


Researchers from the _Politecnico di Torino_, University of Tor Vergata, and the University of Twente have published a paper detailing RISC-Vlim, a RISC-V-based framework designed for logic-in-memory (LIM) architectures.

"Most modern CPU architectures are based on the von Neumann principle, where memory and processing units are separate entities," the team explains. "Although processing unit performance has improved over the years, memory capacity has not followed the same trend, creating a performance gap between them.

"This problem is known as the 'memory wall' and severely limits the performance of a microprocessor. One of the most promising solutions is the 'logic-in-memory' approach. It consists of merging memory and logic units, enabling data to be processed directly inside the memory itself."

RISC-Vlim is designed to offer one approach to resolving the problem, offering a framework including new LIM-specific RISC-V ISA extensions and a modified compiler. RISC-Vlim is based on a standard memory interface so users can insert different logic-in-memory architectures inside a RISC-V processor - based, the team explains, on traditional CMOS or "emerging technologies."

"We demonstrate the effectiveness of the framework using a CMOS volatile memory and a memory based on a new emerging technology, racetrack logic," the team continues. "The results demonstrate an improvement in algorithm execution speed and a reduction in energy consumption."

The team's work has been published [in the journal _Electronics_](https://www.mdpi.com/2079-9292/11/19/2990/htm) under open-access terms; the source code for the project, which uses an extended RI5CY core from the PULP Platform, is available [on GitHub](https://github.com/vlsi-nanocomputing/risc-v-lim-architecture) under the permissive SolderPad Hardware Licence.

<img src="sphery.jpg" style="max-width:100%" />

## PipelineC-Graphics Project Releases "The First Raytraced Game That Is Not Software"


Victor Suarez Rovere and Julian Kemmerer, developers of the PipelineC-Graphics project, have shown off what they describe as "the first raytraced game that is not software" - instead running in hardware in a circuit "that doesn't have any CPU."

"We present here a workflow to achieve complex data processing using just digital circuits expressed in a known language that’s a subset of C/C++," the pair explain. "We show as an example of a complex design, a real-time raytraced game. The game’s pixel rendering and animation logic is based on floating point and vector math operations. All of the game code is expressed using a clean syntax that translates directly to a digital circuit.

"The current target of this design is a FPGA board with Full HD digital video output, and the workflow also allows running the game in realtime on a regular PC using the unmodified source. This allows for much faster development-test iterations than with traditional hardware design tools. For the same workload, the computing efficiency resulted in more than 50x better than using a modern CPU, in a chip an order of magnitude smaller."

A [video demonstrating the fully-functional interactive game](https://www.youtube.com/watch?v=hn3sr3VMJQU), dubbed Sphery vs. Shapes, has been published on YouTube to accompany [a PDF write-up](https://github.com/JulianKemmerer/PipelineC-Graphics/blob/main/doc/Sphery-vs-Shapes.pdf) of the project; the source code is available on the PipelineC-Graphics project's [GitHub repository](https://github.com/JulianKemmerer/PipelineC-Graphics) under the reciprocal GNU General Public Licence 3.

<img src="hammer.jpg" style="max-width:100%" />

## Rivos Releases Hammer, a Library for Lock-Stepped Spike Operation


Rivos has released an open-source library designed to instantiate RISC-V instruction set architecture simulator Spike and allow for lock-step operation, as a tool for co-simulation verification.

"Rivos is releasing the source for hammer - a library that instantiates Spike and can be used to run Spike in lock-step and allows Spike state to be read and written," Rivos software engineer Jerin Joy announced to the RISC-V SW Dev mailing list. "This is useful to run Spike in co-simulation with another model for verification."

In addition to instantiating Spike, hammer provides C++ and Python interfaces for interaction. Tests for both are included with the project's source code, doubling as hands-on examples of hammer's operation.

"Hammer requires a few changes to Spike to run," Jerin explains. "The repo contains a patch that has to be applied to Spike to build for hammer. Hammer is in active development and we plan to push out updates regularly. We're happy to accept PRs for fixes and enhancements."

More details are available [in Jerin's announcement](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/HP0cj7dNXv0); the source code for hammer is available [on GitHub](https://github.com/rivosinc/hammer) under the permissive Apache 2.0 licence.

<img src="newstackbuildmpus.jpg" style="max-width:100%" />

## The New Stack's Miao Luo Declares it "Time for Businesses to Build Their Own" Chips


Miao Luo, writing for The New Stack, has stated that it's time for businesses to move away from proprietary parts and begin building their own microprocessors - calling for closer collaboration between software developers and hardware designers.

"Breaking down silos and enabling developer and designer collaboration is an effective way to alleviate the semiconductor shortage, save businesses money, and deliver an overall better experience for manufacturers and consumers," Miao claims in the piece.

"Two teams that have historically had a siloed approach to their work are developers and designers. They both typically use different sets of tools, leading design iterations to become interruptions. By unifying these teams and thinking of development and design as a combined 'DevDes' function - in the same way we think about software development with DevOps - silos are broken down, workloads are lightened and delivery is simplified."

"In streamlining the product development process," Miao concludes, "businesses place less pressure on developers and designers as individuals. Making use of cross-platform frameworks to promote DevDes collaboration, promotes a fresh way of working that is long overdue in the industry."

The full piece is available [on The New Stack](https://thenewstack.io/it-is-time-for-businesses-to-build-their-own-microprocessors/) now.

<img src="starfivevisionfive.jpg" style="max-width:100%" />

## RISC-V International Expands its Developer Boards Programme


RISC-V International has announced the expansion of its developer boards programme, which provides RISC-V-based hardware to software and hardware developers free-of-charge to encourage ecosystem expansion and development.

"Since kicking off the RISC-V Developer Boards program, we’ve given away 163 boards," the organisation says. "Those boards were split between academic projects, individual projects, and operating system communities. Thank you to the members who participated in the initial program: Allwinner Technology, Antmicro, Alibaba Cloud, BeagleBoard, Microsemi, RIOS, SiFive, and StarFive."

RISC-V International is now seeking additional participation in the programme, offering access to boards including the StarFive VisionFive and a commercially-targeted RISC-V laptop dubbed the Roma and due to launch before the end of the year in limited quantities.

"We encourage RISC-V enthusiasts of all stripes to participate, whether you’re an early adopter, new engineer, senior architect, student, or professor," the organisation says. "Dev boards are a great way for hardware and software developers, open source maintainers, and many other folks to innovate with RISC-V. We especially encourage those who want advanced access to hardware, prior to software availability, to participate."

Full details on how to participate in the programme are available [on the RISC-V website](https://riscv.org/risc-v-developer-boards/details/), along with a link to the form to apply for a board; half of the boards available will be provided to academia, the organisation says.

<img src="cherilinux.jpg" style="max-width:100%" />

## Memory-Safe CHERI RISC-V Project Gets a Linux Port, Courtesy Huawei Technologies


The University of Cambridge's Capability Hardware Enhanced RISC Instructions (CHERI) project, which extends instruction set architectures to offer hardware assisted memory safety, has now received a Linux port - after its original developers focused on FreeBSD.

"For a few years now, our team in Huawei Technologies, Helsinki System Security laboratory have been following the open-source CHERI work from Cambridge University with great interest," Huawei's staffers explain, "as this re-birth of a hardware capability system has the promise to revolutionise how the mobile industry deals with memory protection in consumer devices, beyond what can be achieved with technologies like Arm Pointer Authentication or Memory Tagging - features that already have appeared in contemporary processors.

"Of special interest to our team has been the consideration of achieved security benefit vs. performance degradation in the software stack. To analyse this is practice, we have ported a few of the OS kernels and base systems today used in products to the CHERI platform, more specifically the RISC-V one for now, with the intent to collect first-hand evidence of what level of compiler or software optimization still needs to take place to help make CHERI technology mainstream, and at the same time set up a reference platform to eventually demonstrate this opportunity."

Along with a whitepaper detailing the work, Huawei's team has released a port of Linux 5.15 to the RISC-V variant of the CHERI architecture along with what it admits is a "minimal runtime" - stating it runs in "fully-capability mode" on CHERI RISC-V but that "we do not yet claim it is full-featured or even properly analysed for optimal capability application" and instead is to serve as "a starting point for future research."

The project's source code, under a range of open-source licences, is available alongside instructions on building CHERI Linux [in the project's GitHub repositories](https://github.com/cheri-linux); the CHERI source code and earlier FreeBSD port are likewise available [in that project's GitHub repositories](https://github.com/CTSRD-CHERI). The CHERI Linux whitepaper [is downloadable as a PDF](https://github.com/cheri-linux/.github/files/9504062/cherilinux0609.pdf).

![](https://gallery.mailchimp.com/5d525b453672149a60c198960/images/07859ccf-a70a-4249-8888-c0047c501a21.jpg)

## FOSSi News In Brief

-   [Ztachip is a RISC-V accelerator for computer vision and artificial intelligence at he edge on low-end FPGAs and small ASICs (MIT licence.)](https://github.com/ztachip/ztachip)
-   [CAES is developing a "the first user-selectable CPU for space," based on the LEON5 SPARC V8 and NOEL-V RISC-V RC64 processor cores.](https://caes.com/press-release/caes-wins-contracts-development-next-generation-octa-core-user-selectable-cpu-space)
-   [Desi Banatao, IEEE Computer Society, outlines the "top three reasons to adopt RISC-V."](https://www.computer.org/publications/tech-news/trends/reasons-to-adopt-risc-v)
-   [Olof Kindgren shows off the Subservient system-on-chip, "based on the award-winning SERV [and] built with OpenROAD, OpenLANE, and GlobalFoundries' open-source 180nm PDK using FuseSoC and Edalize."](https://twitter.com/OlofKindgren/status/1571622177442512897)
-   [PULP Platform publishes die shot and details of Idefix, a 22FDX test-chip "for future massive MIMO [Multiple-Input Multiple-Output] usage."](https://twitter.com/pulp_platform/status/1576879217543090177)
-   [Acceleration Robotics, PlanV collaborate on an open-source microcontroller built specifically for ROS 2-based robotics workloads.](https://news.accelerationrobotics.com/acceleration-robotics-planv-robotics-mcu-ros2-riscv/)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
