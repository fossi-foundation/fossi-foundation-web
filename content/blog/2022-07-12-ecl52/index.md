---
layout: post
title: "El Correo Libre Issue 52"
description: El Correo Libre Newsletter, Issue 52
author: Gareth Halfacree
date: 2022-07-12
---

<img src="/blog/2022-07-12-ecl52/johann-openlane.jpg" style="max-width:100%" />

## Google's Johan Euphrosine Puts "Silicon Notebooks" in the Cloud

Google developer programmes engineer Johan Euphrosine and colleagues have been working on making silicon design tools more accessible, by putting them in the cloud as Jupyter notebooks accessible on Google Colab.

"I come from a software background," Johan explained in a recent interview [on the Zero to ASIC Course YouTube channel](https://www.youtube.com/watch?v=yCyOVq5ZHYg), "so I'm totally new to this tooling. What kind of shocked me at the beginning is the friction that you have when you want to set up the tool[chain]. There is a lot of things that you need to even compile from source and there is something with that package, a container some other thing that you need to install on on your host - I kind of get got cut off at the beginning by just trying to get started and just like facing a mountainous tool to install

"That was the first thing that we started working on, is making sure that we can have some package for those tools and making sure that we can build them in advance and people can can install them on the machine and run them right away without having to worry about where to get the source from, which version you should compile, and so."

But making the tools easier to install locally was only the first step: The next was to put them in the cloud, making it so anyone can get started with silicon development without having to install anything locally at all - using Jupyter notebooks.

"The idea of the notebook," Johann explains, "is that it gives you an environment where you can run code inside a managed environment, and you can specify the code that you want to run, you can add some documentation, Markdown, before or after the code that you want to run, and you can see the output of the command that you are running. The nice thing is that all those data, so the documentation, the command that you need to run, and the output gets serialised inside the network themselves so it gives you like a very nice container to share a computation and the result of it with a colleague or a friend or someone that works on your project."

Johann's work has resulted in a pair of notebooks [shared on GitHub](https://github.com/chipsalliance/silicon-notebooks) under the permissive Apache 2.0 licence: a digital inverter using OpenLane and an analogue inverter using MAGIC. More information is available [in Johann's interview](https://www.youtube.com/watch?v=yCyOVq5ZHYg).

<img src="/blog/2022-07-12-ecl52/guarav-camera.jpg" style="max-width:100%" />

## Gaurav Singh's Modular USB 3.0 Camera Packs an FPGA, Interchangeable Lenses


Embedded engineer Gaurav Singh has released a modular sandwich-style design for an industrial-grade modular USB 3.0 camera, boasting interchangeable lenses and sensors - and an FPGA board which glues everything together.

"[This is] yet another part in the DIY camera projects which [I] have been doing since quite some time," Guarav explains. "[This] next successful implementation of making [a] C-mount, high lens mount, USB C camera. This implementation will have absolute modular boards, having [a] dedicated sensor board which can be changed if needed."

The camera itself, which boasts a 3D-printed housing, is made up of three boards. The first offers a USB Type-C interface, while the last holds the sensor. The middle board, meanwhile, features a Lattice Semi Crosslink NX LIFCL-40 and 32MB of RAM which handles communication between the other two boards and on-board processing.

"There's not much image processing going on on the camera [sensor] die itself," Guarav explains of the Sony IMX219 chosen for the prototype - leaving the FPGA to handle the task of converting the raw Bayer data to YUV, gain adjustment, and white-balance correction.

Full details are available [in Guarav's build log](https://www.circuitvalley.com/2022/06/pensource-usb-c-industrial-camera-c-mount-fpga-imx-mipi-usb-3-crosslinknx.html), with the project source code and design files [published to GitHub](https://github.com/circuitvalley/USB_C_Industrial_Camera_FPGA_USB3) under the permissive Creative Commons Attribution 4.0 International licence.

<img src="/blog/2022-07-12-ecl52/chips4makers-bandgap.jpg" style="max-width:100%" />

## Chips4Makers Publishers its First Mixed-Signal Project Results


Staf Verhaegen has written up the results of the first Chips4Makers project based on work carried out on an analogue/mixed-signal library for scalable analogue generators.

"As an open source proponent I [...] longed for a world where analogue blocks would be developed with an open source mindset," Staf explains of the project's origins. "Recently the idea of (open source) scripted analogue generators has seen renewed interest due to the Sky130 open source PDK and the Google sponsored MPW runs.

"These developments are in their early development phase and it is good that different approaches are investigated so a good open source analogue development methodology can grow out of these developments; including cross-pollination between the projects."

The Chips4Makers project, meanwhile, builds on the PDK Master and NLNet Analogue/Mixed-Signal Library efforts. "For the development of the PDKMaster based analogue block generators four test structures were selected," Staf writes. "A voltage reference; a PLL (phase-locked-loop); a lower precision, lower speed ADC (analogue-to-digital converter); [and] a lower precision, lower speed DAC (digital-to-analogue converter)."

Progress reports for all sections are available now [on the Chips4Makers blog](https://chips4makers.io/blog/first-analogmixed-signal-project-results.html).

<img src="/blog/2022-07-12-ecl52/riscv.jpg" style="max-width:100%" />

## RISC-V International Ratifies its First Specifications of 2022


RISC-V International has announced its first formal specification ratifications of 2022, including an efficient trace specification, a supervisor binary interface (SBI) specification, and a multiply-only extension.

"The RISC-V culture of contribution and collaboration continues to produce impressive and strategic results," says RISC-V International chief executive Calista Redmond of the newly ratified specifications. "RISC-V members are leaders in the era of open compute, proving that collaboration accelerates innovation through shared investment while growing global opportunity."

The new specifications include: E-Trace for RISC-V, an efficient approach to processor tracing with a specification detailing the signals between the RISC-V core and encoder or ingress port and featuring a compressed branch trace algorithm and compatible packet format; the RISC-V SBI, which offers the ability to port supervisor-mode software across all RISC-V implementations; the porting of existing Universal Extensible Firmware Interface (UEFI) standards to RISC-V; and Zmmul, a multiply-only instruction extension.

"For many microcontroller applications, division operations are too infrequent to justify the cost of divider hardware," says Mark Himelstein, RISC-V International chief technical officer, of the latter. "The RISC-V Zmmul extension will benefit simple FPGA soft cores in particular."

The new specifications are available now [on the RISC-V Non-ISA Specifications](https://github.com/riscv-non-isa) and [RISC-V ISA Specifications GitHub repositories](https://github.com/riscv).

<img src="/blog/2022-07-12-ecl52/renode113.jpg" style="max-width:100%" />

## Antmicro Launches Renode 1.13, Promises Improved Pre-Silicon Development


Antmicro has officially launched the latest version of its Renode development framework, version 1.13, promising a range of improvements for machine learning projects and pre-silicon development.

"For a while now Renode has been seeing adoption not only in IoT [Internet of Things] and product development, but increasingly in new silicon development and architectural prototyping, especially with RISC-V," claims Antmicro of its software. "This is often related to emerging machine learning use cases, enabled by Renode’ excellent (and quickly improving) rapid prototyping and co-development capabilities, so important in the fast-changing world of ML.

"The 1.13 release includes massive improvements in RISC-V support, as well as enhanced performance and inspectability. We’ve been continuously expanding features offered by our simulation framework, enabling more unique use cases and even going one step further by creating the Zephyr Dashboard, exemplifying Renode capabilities for massive automated testing."

Those improvements include support for the RISC-V Vector Extensions 1.0, as ratified, along with Custom Function Unit (CFU) support - both of which, Antmicro points out, are ideal for boosting machine learning workloads. Other additions include support for the StarFive JH7100 RISC-V system-on-chip, new OpenTitan peripherals, and implementation of the Virtio virtual block device model for host file access.

Full details are available in Antmicro's announcement; Renode itself is available [on the project's GitHub repository](https://github.com/renode/renode/) under the permissive MIT licence.

<img src="/blog/2022-07-12-ecl52/cellift.jpg" style="max-width:100%" />

## CellIFT Offers Dynamic Information Flow Tracking for Hardware Design


A trio of researchers from ETH Zurich and Intel - Falvien Solt, Ben Gras, and Kaveh Razavi - have published a paper detailing CellIFT, an approach for leveraging cells for scalable and precise dynamic information flow tracking in register transfer level (RTL) works.

"CellIFT [is] a new design point in the space of dynamic IFT [Information Flow Tracking] for hardware," the researchers explain in their paper's abstract. "CellIFT leverages the logical macrocell abstraction (e.g., an adder) to achieve scalability, precision and completeness when instrumenting a given Register Transfer Level (RTL) hardware design.

"Cell-level dynamic IFT does not suffer from the scalability problems that are inherent to lower levels of abstraction such as gates, yet it achieves completeness given the limited number of cell types. We show the versatility of CellIFT by instrumenting five distinct RISC-V designs, one of which is a complete SoC. The only existing complete solution already fails to instrument two of these designs."

In micro- and standard benchmark tests on those five RISC-V designs - Ibex, Ariane, Rocket, BOOM, and the PULPissimo system-on-chip - CellIFT appears to deliver significant gains - offering a performance between 21x and 61x faster than its state-of-the-art competition, the researchers claim.

The CellIFT paper is available [from ETH Zurich's Computer Security Group](https://comsec.ethz.ch/research/microarch/cellift/) as a PDF download; the source code [has been published to GitHub](https://github.com/comsec-group/cellift-meta) under the reciprocal GNU General Public Licence 3.

<img src="/blog/2022-07-12-ecl52/marz-msi.jpg" style="max-width:100%" />

## Stephen Marz Tests Out The RISC-V Advanced Interrupt Architecture's MSIs


Developer Stephen Marz is experimenting with message signalled interrupts (MSIs) to RISC-V, offering the ability to deliver interrupts without needing a dedicated interrupt request (IRQ) pin in the design, as a proof-of-concept experiment within the new RISC-V Advanced Interrupt Architecture (AIA).

"One of the most prevalent uses for MSIs is the PCI bus, and the PCI specification defines the MSI and MSI-X standards," Stephen explains. "The potential benefits may include: (1) reduced number of direct wires from the device to the CPU or interrupt controller, (2) improve signalling performance–mainly by forcing in-band signals by design, and (3) improving guest/host signalling for virtualized environments.

"[My MSI] code is written for RV32I in Rust. I originally wrote it for RV64GC, but everything else I wrote is also for RV64GC, so I figured I should branch out and broaden my horizons," Stephen continues. "[It] uses [AIA] version 0.3.0-draft.31, tagged on 13-Jun-2022."

Stephen's full write-up is available on his blog, while the Rust source code - which requires a version of QEMU recent enough to include the MSI controller in the virt machine - has been published to GitHub under an unspecified open-source licence.

<img src="/blog/2022-07-12-ecl52/leamoon-redstone.jpg" style="max-width:100%" />

## Students Build an MNIST Recognition Neural Network - in Minecraft


A team of students led by Xuezhao "Leamoon" Wu has built a stochastic neural network designed to take on the MNIST digit recognition challenge - implementing it in Minecraft using redstone blocks.

"We built the world first redstonic convolutional neural network, the task being the recognition of 15×15 hand-written digits," the team writes. "[Using] LeNet-5 as its architecture, the network can achieve an accuracy up to 80 per cent.

"We used an unconventional computational method, stochastic computing, to realise the network, making it much simpler in design and layout compared to the traditional full-precision computing. The recognition time is 5 minutes per figure theoretically.

"However," the team notes, "limited by the computational capacity of Minecraft, the real running time exceeds 20 minutes. Nevertheless, it is a breakthrough in redstonic digital circuits, and it may inspire real-world physical neural networks."

The team's source code [has been published to GitHub](https://github.com/leamoon/StochasticNet) under the permissive MIT license, while a video of the network in action [is available on Bilibili](https://www.bilibili.com/video/BV1yv4y1u7ZX/?spm_id_from=333.788.recommend_more_video.6&vd_source=923ade385facaf796f5897884fb921eb).

<img src="/blog/2022-07-12-ecl52/serv-colour.jpg" style="max-width:100%" />

## Abdul Wadood Offers a "Final Report" into Adding Compressed Instructions to SERV


Abdul Wadood has written up a report detailing his work on adding support for compressed instructions to the award-winning compact bit-serial SERV RISC-V core, under the LFX Mentorship programme under FOSSi Foundation director Olof Kindgren.

"I’m thankful to RISC-V International for providing me with this opportunity, my parents for all the prayers, my faculty members for investing in me, and my friends for always believing in me," Abdul writes of his experience in the programme.

"The best part of this programme is to get to work under the mentorship of Olof Kindgren, who is by all means the most valid source of inspiration for me. I really enjoyed the whole learning experience and working with him broadens my horizon. He is a mentor in its true sense."

Abdul's work during the mentorship saw the addition of RISC-V compressed instructions support to SERV, updates to allow the core to pass privilege compliance tests, additional hardware support, and will conclude with updated documentation.

Abdul's full write-up, including technical details of the work and the benefit compressed instructions brings to the SERV core, [is available on Medium](https://medium.com/@abdulwadoodd/risc-v-compressed-instructions-for-serv-6065f55158b4) now.

<img src="/blog/2022-07-12-ecl52/litex-c906.jpg" style="max-width:100%" />

## LiteX Gains Support for Alibaba T-Head's OpenC906 Core


Enjoy Digital has announced work by pseudonymous developer "Icenowy" to add support for the Alibaba T-Head OpenC906 RISC-V core to the LiteX system-on-chip (SoC) builder framework project.

"Thanks to Icenowy, LiteX now has T-head-Semi/OpenC906 CPU support," Enjoy Digital announced via [Twitter](https://twitter.com/enjoy_digital/status/1537079336104345600). "([It] seems to be the open version of the CPU used in [the] Allwinner D1). Here tested on the LiteX-Acorn-Baseboard (XC7A200T) and the freshly assembled LiteX-Box-FK33 (VU33P)."

T-Head, the semiconductor division of Alibaba, released the OpenC906 core in November last year as the open-source version of its commercial XuanTie C906 RISC-V core - along with the OpenE902 and OpenE906 simplified cores and the more complex OpenC910.

"By opening up the IP cores of our in-house IoT processors as well as related software stacks and development tools," president of Alibaba Cloud and head of the Alibaba DAMO Academy Jeff Zhang announced at the time, "we aim to assist global developers to build their own RISC-V-based chips in a much more cost-effective way,"

The OpenC906 is available in LiteX now using the CPU type "openc906"; LiteX itself [is available on GitHub](https://github.com/enjoy-digital/litex) under a custom free software licence.

<img src="/blog/2022-07-12-ecl52/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [Olof Kindgren announces GateMate toolchain support in Edalize, courtesy of Gwenhael Goavec.](https://twitter.com/OlofKindgren/status/1544608647912759298)
-   [Alibaba boasts of the XuanTie C906 core topping the MLPerf Tiny v0.7 benchmark table.](https://riscv.org/blog/2022/06/xuantie-c906-tops-mlperf-tiny-v0-7-benchmark-mengchang-alibaba-cloud/)
-   [OpenHW Group unveils CORE-V MCU DevKit single-board computer, designed for experimentation with the CV32E40P processor core.](https://www.openhwgroup.org/core-v-devkits/)
-   [Joseph Zuchman, Paolo Mantovani, Davide Giri, Luca P. Carloni: Enabling Heterogenous, Multicore SoC Research with RISC-V and ESP.](https://arxiv.org/abs/2206.01901)
-   [Mazin Mohammed releases RISC-V Computer 2.0 (RVCOM 2.0), an "enhanced yet simplified" version of the original RISC-V Computer built in Logisim.](https://github.com/MazinCE/RVCOM2.0)

<img src="/blog/2022-07-12-ecl52/ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
