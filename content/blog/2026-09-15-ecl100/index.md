---
layout: post
title: "El Correo Libre Issue 100"
description: El Correo Libre Newsletter, Issue 100
author: Gareth Halfacree
date: 2026-09-15
---

<img src="/blog/2026-09-15-ecl100/fusesoc.jpg" style="max-width:100%" />

## The Award-Winning FuseSoC Turns 15

Award-winning package manager and build tool collection FuseSoC has turned 15, after project founder Olof Kindgren saw a need for a less-intrusive, more modular approach to handling larger hardware description language projects like systems-on-chips (SoCs).

“It’s hard to believe that it’s 15 years today that I began developing FuseSoC and sent out the mail that started it all,” Olof wrote on [Mastodon](https://mastodon.social/@olofk/117191671629141321) by way of celebration — complete with a copy of the email which may bear certain superficial similarities to the one which launched a well-known open-source project in the software world.

“Hello everybody out there using TCL and Makefiles,” the email begins. "I’m doing a (free) package manager (just a hobby, won’t be big and professional) for FPGA (ASIC) development. This has been brewing since April, and is starting to get ready. I’d like any feedback on things people like/dislike with makefiles as my package manager doesn’t resemble it at all (due to good reasons.)

"I’ve currently ported SERV (1.0.1) and VeeRwolf (0.8), and things seem to work. This implies I’ll get something practical within a few months, and I’d like to know what features most people would want. Any suggestions are welcome, but I won’t promise I’ll implement them.

“PS,” the email continues. “Yes, it’s free of any TCL code, and it has multiple EDA tool support. It is portable and will probably support all EDA tools, even those I don’t have. :-(”

In the years since the project’s [initial git commit](https://github.com/olofk/fusesoc/commit/8b9b0b9a1d03d4fbf5b9afc5a308fa7de0302548), FuseSoC has grown into the award-winning project we know and love today, gaining a wealth of features along the way including - but not limited to - EDAM filters, a conflict handler for virtual cores, support for the Edalize flow API and the GHDL simulator as well as Vivado Logicore and ISE CoreGen cores, support for mixed-language projects, and has been used in a wealth of projects by free and open silicon experts and newcomers alike around the world.

As always, the latest source code is available [on the FuseSoC GitHub repository](https://github.com/olofk/fusesoc) under the permissive BSD 2-Clause licence.


<img src="/blog/2026-09-15-ecl100/i3c.jpg" style="max-width:100%" />

## CHIPS Alliance Adds Host Support to its I3C Core

The CHIPS Alliance has announced a new version of its open-source I3C core, which expands the project beyond Target mode with support for Host Controller mode - without changing the terms of its licence.

“The I3C protocol is the backwards-compatible successor to I2C,” the CHIPS Alliance explains. "It incorporates its key capabilities, maintains the usage of only two wires, yet in many cases provides significant improvements over I2C. Based on the MIPI I3C, CHIPS Alliance, part of Linux Foundation, introduced an open source I3C Core. The Core is already used in the likewise CHIPS-hosted Caliptra Root-of-Trust project and the SoC reference design Guineveer based on the VeeR EL2 RISC-V core.

"Initially, the I3C Core only supported Target mode. To further improve its functionality, CHIPS Alliance member Antmicro has now implemented a set of features for Host Controller support. A Target device can follow orders from the Controller and request data; the Controller, on the other hand, has a broader range of capabilities: starting the communication process with Targets, assigning Dynamic Addresses, sending commands, reading and writing data, and managing bus ownership.

"The I3C Controller is designed for compliance with I3C HCI v.1.2 and I3C Basic v.1.1.1; additionally, it is backwards compatible with I2C, allowing it to function with Legacy I2C systems. It includes error handling, and support for Common Command Codes (CCC), which are required for bus management, configuration and initialisation.

“The Host Controller allows for configuration of timing registers through Control and Status Registers (CSRs). The timing registers enable configuring the Core to conform to specified bus timings in a wide range of system clock frequencies,” the Alliance continues. “The Core’s Controller features also include previously mentioned IBI, dynamic switching between push-pull and open drain mode, and Dynamic Address Assignment using ENTDAA CCC.”

A full list of the features implemented are available [in the core’s documentation](https://chipsalliance.github.io/i3c-core/controller_overview.html); the core itself is available [on GitHub](https://github.com/chipsalliance/i3c-core) under the same permissive Apache 2.0 licence as earlier versions.


<img src="/blog/2026-09-15-ecl100/peppermint.jpg" style="max-width:100%" />

## lowRISC Prepares OpenTitan Peppermint for Area-Constrained Projects

lowRISC has announced a new project, Peppermint, which aims to take the OpenTitan open hardware root-of-trust project and optimise it for use in area-constrained systems-on-chips.

“Cybersecurity is a huge concern that affects everyone, cutting across country and organisational boundaries," says lowRISC chief executive Javier Orensanz Martinez in support of the new project. “Open silicon is quickly becoming the security foundation for the semiconductor industry. With the release of Peppermint, OpenTitan is demonstrating its versatility to deliver a hardware security solution for multiple types of devices and use cases.”

“Security and privacy are foundational at Sesame. We’re asking people to wear our intelligent eyewear all day, and that only works if they trust it,” adds Ryan Brown, head of hardware at project partner Sesame AI. “Building in the open, with lowRISC and the OpenTitan community, means people can validate our approach for themselves.”

The Peppermint variant of OpenTitan is, its creators say, designed with space-constrained chips in mind including those used in wearables and the Internet of Things (IoT). It handles secure boot and firmware updates along with cryptographic operations required by the host processor with a low power draw - and includes post-quantum cryptography (PQC) designed to be compliant with CNSA 2.0.

Peppermint is currently going through the design and development stage, lowRISC has confirmed, with software and hardware verification planned for completion in the first half of 2027. Source code did not appear to have been made public at the time of writing.


<img src="/blog/2026-09-15-ecl100/openroad.jpg" style="max-width:100%" />

## Google Joins the OpenROAD Initiative

Google has announced that it has joined the OpenROAD Initiative, a non-profit set up to govern and steward the OpenROAD Project ecosystem in autonomous digital chip design, as a principal member.

“The OpenROAD Initiative is built on the vision of making chip design open and accessible to all - building a collaborative ecosystem driven by transparency and shared innovation,” says OpenROAD Initiative board member Andrew Kahng in support of Google’s new membership. “Google’s deep commitment to open source software and hardware makes them an ideal partner. By joining at our highest membership tier, Google is helping to ensure that the open source EDA ecosystem has the stable, long-term governance and financial foundation required to grow.”

“Cutting-edge silicon research requires robust, inspectable, and reproducible toolchains,” adds Google’s director of silicon infrastructure, tools, and methodology Drew Wingard. “OpenROAD has already made an incredible impact across academia and the broader industry, enabling many successful tapeouts. Google is proud to support the OpenROAD Initiative’s mission to scale this open infrastructure for the next generation of developers."

The move sees Google’s Aaron Cunningham appointed to the OpenROAD Initiative’s governing board, to represent the company’s interests; Google has indicated a desire to aid the ORI with its neutral stewardship of the OpenROAD Project while growing the ecosystem around open and reproducible silicon research, expanding open-source chip design curricula, and enhancing the project’s continuous integration and deployment (CI/CD) pipelines and process design kit (PDK) enablement.

More information on the OpenROAD Project is available [on the official website](https://openroad.org/).


<img src="/blog/2026-09-15-ecl100/python.jpg" style="max-width:100%" />

## CPython Gains RISC-V Support

Python core team member Stan Ulbrych has announced that CPython, the reference implementation of the Python programming language, has officially adopted RISC-V as a Tier 3 supported platform.

“Over the last few months, I’ve been working on improving CPython’s support for the RISC-V architecture, and I’m thrilled to announce that RISC-V is now officially supported by CPython as a tier 3 platform,” Stan announced late last month. "RISC-V is an open instruction set architecture (ISA). Importantly, unlike proprietary instruction sets (such as x86 and ARM), it is developed as an open standard and can be implemented by anyone. Its ecosystem has grown considerably in recent years and is projected to quadruple by 2032. With that growth, it’s increasingly important that Python works reliably on these platforms.

"This would not have been possible without community contributions. RISC-V support in CPython has developed over time with people testing on real hardware, fixing architecture-specific issues, improving build support, reporting bugs, and reviewing patches. That work is what has brought the platform to the point where it could be added to PEP 11.

"A particularly important part of this has been having reliable, ongoing testing on real RISC-V hardware. I’d like to thank the RISE Project for their support. RISE has kindly provided several RISC-V machines for CPython, giving us buildbots for testing as well as debugging architecture-specific issues. I’d especially like to thank Ludovic Henry from the RISE Project, Furkan Onder, and Emma Smith, along with the many others who have contributed. Additionally, I’m personally grateful for the Sovereign Tech Agency, which through their amazing fellowship supported my work on this.

“While tier 3 support is an important milestone,” Stan adds, “there’s plenty more to do. We are currently investigating how to improve our testing further by bringing RISC-V directly into CPython’s CI, again kindly supported by RISE with their RISE RISC-V Runners initiative. This should give contributors faster feedback than the buildbots (which usually run after a patch is merged) and would allow us to catch RISC-V-specific problems earlier. In the long term, I’d also love to work towards promoting RISC-V to tier 2 support.”

More information is available [on the Python blog](https://blog.python.org/2026/08/riscv-now-officially-supported/); the CPython source code is available [on GitHub](https://github.com/python/cpython) under the Python Software Foundation Licence Version 2.


<img src="/blog/2026-09-15-ecl100/waferspace.jpg" style="max-width:100%" />

## wafer.space’s Second Run Enters Production

Low-volume silicon manufacturing initiative wafer.space has announced that its second shuttle has entered production, while inviting those with designs they’d like to see realised as physical chips to take part in the upcoming third production run.

“wafer.space Run 2 is now officially in production,” Leo Moser announced [on Mastodon](https://fosstodon.org/@mole99/117008272076715147). "In short, wafer.space offers low-volume silicon manufacturing of 1,000 custom silicon chips for the open-source [GlobalFoundries] GF180MCU process. Like last time, this shuttle features some incredible designs.

“The shuttle includes various RISC-V SoCs, a ‘3D’ ray caster, a 100Mbps 4-port Ethernet switch and beacon, a dual Core BIO [Bao Input/Output] from Baochip, three different Tiny Tapeout chips, and much more! There are also a number of designs that use the new community-created standard cell library, which is both faster and uses less power: a Linux-capable RISC-V SoC with MMU and FABulous FPGA. Finally, there are new SRAM macros and inductors for validation and characterization, to be used in future runs.”

wafer.space is similar to Tiny Tapeout in providing a path to small-volume production runs of silicon chip designs. Unlike Tiny Tapeout, though, it doesn’t require that the designs be open silicon and provides each user with chips holding only their design - using a multi-project wafer approach to reduce per-chip costs, rather than going to the extent of multi-project chips in which all chips contain copies of all designs send in that production run.

A full list of public designs included in the second production run is available [on GitHub](https://www.crowdsupply.com/wafer-space/gf180mcu-run-3); those interested in taking part in the third run can find out how [on Crowd Supply](https://www.crowdsupply.com/wafer-space/gf180mcu-run-3), which includes options for full-size-, half-width, half-height, and new quarter-sized chips starting at $2,000 for 1,000 bare dice.


<img src="/blog/2026-09-15-ecl100/sifive.jpg" style="max-width:100%" />

## SiFive Releases an Open RISC-V Vector Kernel Library, SKL

SiFive has announced the opening of SKL, the SiFive Kernel Library - a collection of optimised computational kernels targeting the RISC-V Vector extensions (and, of course, SiFive’s own matrix engine IP.)

We’re thrilled to announce the launch of the SiFive Kernel Library or SKL (pronounced ‘skill’), an open-source collection of highly-optimised computational routines for the RISC-V Vector ISA (RVV) and its various extensions, including SiFive’s matrix engines," says SiFive principal software engineer Eric Love. "The kernels in SKL are low-level building blocks for high performance applications running on RISC-V hardware from SiFive and other vendors.

"As self contained source files distributed under an MIT licence, these performance primitives are expressly designed for integration into other projects and frameworks, both open-source and proprietary. We’ve already come to rely on SKL internally to showcase the peak performance of SiFive’s Intelligence series of processors to customers under NDA, and now we are excited to share it with the broader community of RVV developers.

"The continued ascent of RISC-V as a superior alternative to other architectures will require a software base that can reliably extract the highest degree of performance from the diverse array of hardware offerings across different sectors. By establishing SKL as a central collection of critical algorithms in computationally-intensive domains such as AI and machine learning, we aim to ensure that popular applications will never lack optimised code for RVV platforms.

“This initial offering primarily emphasises SiFive’s flagship IP,” Eric admits, “but the intention is that SKL will now be able to grow to play a pivotal role for all performant RISC-V systems in the ecosystem today and in the future.”

The SiFive Kernel Library is available [on GitHub](https://github.com/sifiveinc/skl) now, under the permissive MIT licence.


<img src="/blog/2026-09-15-ecl100/miniisp.jpg" style="max-width:100%" />

## AMD Releases Open Image Signal Processor Core

AMD has released a permissively-licensed image signal processor, Mini-ISP, targeting minimal resource usage while delivering a usable output - and primarily written with the company’s own Zynq UltraScale+ FPGA parts in mind.

“Mini-ISP is a small open-source Image Signal Processor (ISP), completely implemented in programmable logic (PL),” AMD’s Timor Knudsen says of the project. "It is developed in Verilog RTL and optimised for AMD FPGA. It provides extremely high performance in terms of throughput and latency at an absolute minimum of required PL resources. The ISP ensures an acceptable image quality for a majority of applications. Mini-ISP comes with a Python framework for algorithm prototyping, simulation, and test benches.

"The Mini-ISP philosophy is summarised as follows. Minimal resources: always use the absolute minimum number of resources. Maximal performance: provide the maximum possible performance in terms of pixel per second and latency. Correct results: ensure that the output is correct in any scenario. Acceptable image quality: image quality must be acceptable for most applications and subjectively pleasant to the human eye. Open-source: all code and test cases are publicly available under a permissive licence.

"Mini-ISP makes some design choices to meet its design goals. Not every image processing algorithm is well-suited for a resource-efficient streaming hardware implementation. Given a choice, an algorithm with lower complexity, and potentially lower image quality, is selected for use in Mini-ISP. Some image processing algorithms require a significant image context to work on - which is very expensive to implement in FPGA. Examples are most denoising algorithms and most local tone mapping operators. Denoising and local tone mapping algorithms that are well-suited for FPGA implementation typically have very poor image quality performance. In these cases, no algorithm is implemented at all.

“Another block that is typically implemented in an ISP is sharpening (or de-convolution),” Timor continues. “In most cases, sharpening does only reverse some of the unintended effects that were introduced during low-quality denoising. Since denoising is not implemented in Mini-ISP, sharpening is not required, either.”

Mini-ISP is available [on GitHub](https://github.com/amd/mini-isp) under the permissive MIT licence; additional information is available [on Hackster.io](https://www.hackster.io/news/amd-s-permissive-license-mini-isp-is-a-tiny-image-signal-processor-for-ultrascale-and-newer-fpgas-216466f8390f) and [Notebookcheck](https://www.notebookcheck.net/AMD-quietly-open-sources-costly-image-processor-for-FPGAs.1386506.0.html).


<img src="/blog/2026-09-15-ecl100/qemu.jpg" style="max-width:100%" />

## QEMU 11.1 Brings RISC-V Big-Endian Emulation

The latest version of the QEMU open-source machine emulation and virtualisation platform brings with it new features for those emulating RISC-V platforms - including the ability to target big-endian platforms.

“QEMU is a generic and open source machine emulator and virtualiser,” its maintainers explain for those new to the project. “When used as a machine emulator, QEMU can run OSes and programs made for one machine (e.g. an ARM board) on a different machine (e.g. your own PC). By using dynamic translation, it achieves very good performance.”

QEMU has become a go-to solution for those developing software for RISC-V targets, allowing them the ability to test their creations without needing access to physical hardware boasting all the latest extensions. On that front QEMU 11.1 brings support for the Zvfbfa and draft Zbr extensions, as well as a range of bug fixes including, but not limited to, improvements in the IOMMU, RV32 henvcfg/stateen CSR handling, the Zjpm implementation, and more.

The release also introduces the emulator’s first support for big-endian, rather than little-endian, targets. While not yet implemented in any shipping hardware, at least one firm - [Codethink](https://www.codethink.co.uk/articles/risc-v-big-endian-support-runtime-testing/) - has expressed interest in “bringing big-endian support to traditionally little-endian processors” since the RISC-V Privileged ISA Specification was ratified with the ability to switch the platform’s core data endian at runtime.

A full changelog is available [on the QEMU website](https://wiki.qemu.org/ChangeLog/11.1), while source code is published [to GitHub](https://github.com/qemu/qemu) under the GNU General Public Licence 2 and compatible licences.


<img src="/blog/2026-09-15-ecl100/3d.jpg" style="max-width:100%" />

## Researchers Release Benchmarks for 3D-IC Designs

Researchers from the University of California Los Angeles’ department of electrical and computer engineering have released an open-source benchmark suite targeting three-dimensional integrated circuit designs.

“The physical design community has benefited from standardised, publicly available benchmark suites, which have enabled reproducible evaluation and driven significant advances in 2D place-and-route algorithms over the past three decades,” the researchers explain. "However, the emergence of 3D heterogeneous integration technologies, including through-silicon vias (TSVs), hybrid bonding, and chiplet-based architectures, has introduced new physical design challenges that are not captured by existing planar benchmarks.

"Although several 3D-IC design examples have been reported, publicly accessible and scalable benchmark suites that enable reproducible evaluation across different 3D physical design problems remain limited. We present an open-source suite of 3D-IC benchmark testcases derived from representative chiplet-based case studies in CATCH, an open-source framework for estimating the cost of heterogeneous integration architectures.

“The proposed benchmark suite,” the team continues, “provides reusable virtual chiplet models covering compute, memory, I/O, analog, and substrate components. Each testcase captures essential physical design characteristics of 3D systems, including heterogeneous die integration, inter-die connectivity, and technology-dependent design constraints. By publicly releasing these benchmarks, we aim to establish a common evaluation platform and accelerate community-wide research progress in 3D heterogeneous integration.”

The team’s paper is available as an open-access preprint [on arXiv](https://arxiv.org/abs/2608.25155); the benchmarks have been published [to Dryad](https://datadryad.org/dataset/doi:10.5061/dryad.76hdr7tb6) under an unspecified citation-required open-source licence.


<img src="/blog/2026-09-15-ecl100/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Dr. Manolis Marazakis offers an update on the RISER RISC-V microserver platform project.](https://riscv.org/blog/integration-challenges-in-risc-v-system-prototyping-the-riser-microserver-platform/)
-   [Extreme Kits offers a 4017 MOSFET chip with a difference: it's built from 210 discrete surface-mount transistors.](https://extkits.co.uk/product/discrete-4017/)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
