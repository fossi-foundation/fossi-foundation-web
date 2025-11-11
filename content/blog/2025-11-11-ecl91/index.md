---
layout: post
title: "El Correo Libre Issue 91"
description: El Correo Libre Newsletter, Issue 91
author: Gareth Halfacree
date: 2025-11-11
---

<img src="/blog/2025-11-11-ecl91/aifoundry.jpg" style="max-width:100%" />

## Ainekko Launches AI Foundry for Open-Source Artificial Intelligence

  
Open artificial intelligence startup Ainekko has announced the AI Foundry, an initiative which aims to deliver a platform for community-driven open-source AI hardware and software development.

“Just as Linux opened up operating systems and Kubernetes made cloud infrastructure composable,” claims Ainekko co-foudner Tanya Dadasheva of the company’s vision for the AI Foundry, “Ainekko brings that same spirit of openness to AI hardware and tooling to extend open-source principles all the way down to silicon.”

“Ainekko is committed to building not just a product, but a movement,” adds fellow co-founder Roman Shaposhnik of the company’s latest move. “We’re inviting developers, researchers, and partners to join us in shaping the future of AI infrastructure, openly and together.”

The initiative, which seeks to help address the growing energy needs of high-performance data centres built for the artificial intelligence boom by offering energy-efficient hardware underpinning a software-defined ecosystem, builds on existing technologies: the underlying hardware is based on the RISC-V Minion core from Esperanto Technologies.

“The highly energy-efficient and programmable RISC-V Minion cores, with their attached accelerators, configurable on-die SRAM and NEMI (Next-Generation Esperanto Mesh Interface), along with the low-power techniques that got developed at Esperanto by my team were truly unique and revolutionary in terms of generality and scalability of the system, and helped pack so much compute power into such a small power budget,” claims former Esperanto Technologies chief architect and fellow Jayesh Iyer. “With AI Foundry, Ainekko brings this validated, highly programmable, scalable and energy-efficient many-core RISC-V architecture to the open-source community and is a significant step forward for open silicon.”

“AI infrastructure demands end-to-end thinking and an open architecture mindset. Ainekko has both,” says Almaz capital founding partner Alexander Galitsky, who is an angel investor in the startup. “I’ve known the founders for many years and supported their journey from day one. Their decision to open up the entire stack shows the kind of ambition and execution discipline it takes to reshape an industry. The future will belong to open, composable systems, and Ainekko is leading that shift.”

More information is available on the [AI Foundry website](https://aifoundry.org/), including links to the sources of its constituent projects under the permissive Apache Licence Version 2.0.

<img src="/blog/2025-11-11-ecl91/gitlab.jpg" style="max-width:100%" />

## GitLab Adds Support for RISC-V Runners

Software developers looking to support devices based on the RISC-V architectures can now do so as part of a continuous integration/continuous deployment (CI/CD) pipeline - thanks to the addition of RISC-V runners on GitLab.

“GitLab, a popular open source end-to-end software development platform, hosts well-known projects such as Wireshark, KiCad, QEMU, and wget,” explains the Jiachen Project of the move. "Its community open source version supports well-known open source projects such as GNOME, KDE, Debian, Arch, and Kali Linux. Today, RISC-V runner support was added to its official repository. The native RISC-V runner means faster running speed and more realistic test environment, which is a breakthrough in common code hosting platforms/

“For projects hosted by GitLab, there will be no need to compile the RISC-V runner yourself in the future. CI/CD can directly use the official RISC-V runner binary for building without special configuration, which further facilitates project management and reduces the mental burden of developers in developing/configuring pipelines (workflows).”

The move comes nearly a year after support was first proposed in a patch set submitted by Meng Zhuo, an engineer at the Chinese Academy of Sciences’ Institute of Software. The Jiachen Project has stated that GitLab is expected to provide an official RISC-V runtime environment in the future — and warns that Microsoft’s GitHub platform risks falling behind, as it has yet to add official RISC-V runner support.

More information is available on the [Jiachen Project blog](https://rv2036.org/blogs/en/gitlab-runner-supports-riscv-20251021.html).

<img src="/blog/2025-11-11-ecl91/coral.jpg" style="max-width:100%" />

## Google Open-Sources the Coral NPU “Full Stack”

Google has announced that it is open-sourcing the “full-stack platform” behind its Coral family of neural processing unit (NPU) accelerators for on-device machine learning and artificial intelligence workloads - making it available under a permissive licence.

“Today we introduce Coral NPU, a full-stack platform that builds on our original work from Coral to provide hardware designers and ML developers with the tools needed to build the next generation of private, efficient edge AI devices,” says Google Research engineering director Billy Rutledge of the move. "Co-designed in partnership with Google Research and Google DeepMind, Coral NPU is an AI-first hardware architecture built to enable the next generation of ultra-low-power, always-on edge AI.

"It offers a unified developer experience, making it easier to deploy applications like ambient sensing. It’s specifically designed to enable all-day AI on wearable devices while minimising battery usage and being configurable for higher performance use cases. We’ve released our documentation and tools so that developers and designers can start building today.

“The Coral NPU architecture directly addresses [inefficiencies and fragmentation] by reversing traditional chip design,” Rutledge continues. "It prioritises the ML matrix engine over scalar compute, optimising architecture for AI from silicon up and creating a platform purpose-built for more efficient, on-device inference. As a complete, reference neural processing unit (NPU) architecture, Coral NPU provides the building blocks for the next generation of energy-efficient, ML-optimized systems on chip (SoCs).

“The architecture is based on a set of RISC-V ISA compliant architectural IP blocks and is designed for minimal power consumption, making it ideal for always-on ambient sensing. The base design delivers performance in the 512 giga-operations per second (GOPS) range while consuming just a few milliwatts, thus enabling powerful on-device AI for edge devices, hearables, AR glasses, and smartwatches.”

More information is available on the [Google Coral website](https://developers.google.com/coral); the platform is being made available under the permissive Apache 2.0 licence.

<img src="/blog/2025-11-11-ecl91/cheriot.jpg" style="max-width:100%" />

## CHERIoT Hits its 1.0 Release Milestone

The CHERIoT project, which aims to bring the Capability Hardware Enhanced RISC Instructions [CHERI] safety system to the Internet of Things, has announced its biggest milestone yet: the release of the 1.0 specification.

“For those reading about CHERIoT for the first time, it is a hardware-software co-design project that aims to produce secure microcontroller-class systems for connected devices. We start with a foundational guarantee of memory safety (the hardware will trap on buffer overflows or use after free errors, even in assembly code) and build rich (and usable) compartmentalisation abstractions on top,” explains CHERIoT’s David Chisnall of the project.

"This specification defines the ISA, the CHERIoT language extensions, compilation model, relocations, and so on. The last change that we made to the ISA was in December 2024, so we are confident that this is a stable release that we can support in hardware for a long time. This specification was implemented by the 1.0 release of CHERIoT Ibex and by CHERIoT Kudu (which has not yet had an official release). These two implementations demonstrate that the ISA scales from three-stage single-issue pipelines to six-stage dual-issue pipelines, roughly the same range of microarchitectures supported by Arm’s M profile.

“We at SCI have the first of our ICENI chips, which use the CHERIoT Ibex core, on the way back from the fab now and will be scaling up to mass production in the new year. I am not allowed to speak for other folks building CHERIoT silicon, but I expect 2026 to be an exciting year for the CHERIoT project! This is a release that, both through the open-source CHERIoT Platform project and through partner companies that aim to ship CHERIoT products, we will be supporting for years to come.”

The formal finalisation of the v1.0 specification doesn’t mean work is complete, though: David has hinted at plans for a 1.x release schedule for minor updates to assembler mnemonics and other non-ISA-breaking changes, plus a 2.0 release which will be source-compatible with RISC-V International’s standardised CHERI currently known as “Y”.

The CHERI Alliance, meanwhile, has announced that it has begun to distribute Arm Morello development boards for those looking to experiment with CHERI technology. Those interested in receiving a board can apply to the programme through the [CHERI Alliance website](https://cheri-alliance.org/cheri-alliance-to-distribute-arm-morello-boards-the-journey-beyond-dsbd-continues/).

More information on CHERIoT is available [on the project blog](https://cheriot.org/sail/specification/release/2025/11/03/cheriot-1.0.html); the specification is available [on GitHub](https://github.com/CHERIoT-Platform/cheriot-sail/releases/tag/v1.0) under the permissive BSD two-clause licence.

<img src="/blog/2025-11-11-ecl91/cpphdl.jpg" style="max-width:100%" />

## Mike Reznikov Unveils C++HDL, a C++ Hardware Description Language

Developer Mike Reznikov has launched an open-source project which allows C++ developers to easily move from software to hardware development — by turning C++ into a hardware description language (HDL).

“If you are in ASIC/FPGA Digital development, SystemVerilog RTL coder or a C++ developer who is interested in hardware design, please take a look at C++HDL tool, which is intended to provide direct mapping of C++ to SystemVerilog,” Mike writes of his “pet project,” C++HDL. "[The] tool implements [a] C++ RTL modelling workflow, allowing extremely fast  
(compilation up to 1000x in comparison to Verilator and up to 100x faster execution time) for large RTL models, keeping 100% same clock-to-clock digital behavior.

“After I successfully used this technology in quite large projects, now I’m drawing up a neat examples and tests, which take much time, so currently just a few examples are available. (But even they required attention to make C++HDL vs Verilator testing work automatically). I’ll appreciate any feedback and hope to add more complex examples very soon.”

Queried as to the difference between C++HDL and the existing SystemC, Mike says that his creation should be considerably more performant. “SystemC is a relatively slow (due to lots of synchronization) modelling tool, which is trying to simulate all parallel activities, waits, delays, signals, streams, etc in a very complex cooperative multitasking stack,” he explains. “C++HDL is a programming tool, which only runs Verilog-style functions, extremely fast.”

More information is available [in Mike’s LinkedIn post](https://www.linkedin.com/posts/mike-reznikov_asic-digital-ic-ugcPost-7392302195343437824-3uhl/), while C++HDL itself is available [on GitHub](https://github.com/mirekez/cpphdl) under the permissive Apache Licence 2.0.

<img src="/blog/2025-11-11-ecl91/eesizer.jpg" style="max-width:100%" />

## EEsizer Uses Agentic LLM for Circuit Sizing

Researchers at the University of Edinburgh’s Institute for Integrated Micro and Nano Systems have designed an “agentic artificial intelligence” based on large-language model (LLM) token-completion technology which, they say, can speed sizing optimisations in analog and mixed-circuit design.

“The design of Analog and Mixed-Signal (AMS) integrated circuits (ICs) often involves significant manual effort, especially during the transistor sizing process. While Machine Learning techniques in Electronic Design Automation (EDA) have shown promise in reducing complexity and minimizing human intervention, they still face challenges such as numerous iterations and a lack of knowledge about AMS circuit design,” the researchers, Chang Liu and DAnial Chitnis write of their work.

"Recently, Large Language Models (LLMs) have demonstrated significant potential across various fields, showing a certain level of knowledge in circuit design and indicating their potential to automate the transistor sizing process. In this work, we propose EEsizer, an LLM-based AI agent that integrates large language models with circuit simulators and custom data analysis functions, enabling fully automated, closed-loop transistor sizing without relying on external knowledge. By employing prompt engineering and Chain-of-Thought reasoning, the agent iteratively explores design directions, evaluates performance, and refines solutions with minimal human intervention.

“We first benchmarked 8 LLMs on six basic circuits and selected three high-performing models to optimize a 20-transistor CMOS operational amplifier,” the pair continue, “targeting multiple performance metrics, including rail-to-rail operation from 180nm to 90nm technology nodes. Notably, OpenAI o3 successfully achieved the user-intended target at 90nm across three different test groups, with a maximum of 20 iterations, demonstrating adaptability and robustness at advanced nodes. To assess design robustness, we manually designed a bias circuit and performed a variation analysis using Gaussian-distributed variations on transistor dimensions and threshold voltages.”

The work is detailed in a preprint available [on Cornell’s arXiv server](https://arxiv.org/abs/2509.25510); the source code has been published [on GitHub](https://github.com/eelab-dev/EEsizer) under the permissive MIT licence.

<img src="/blog/2025-11-11-ecl91/riscv.jpg" style="max-width:100%" />

## RISC-V Moves Towards International Standardisation Under ISO/IEC

RISC-V International’s chief executive officer Andrea Gallo has announced that the organisation is seeking international standardisation for the RISC-V ISA, and has already been granted recognition as a formal publicly available specification submitter by the ISO/IEC Joint Technology Committee.

“RISC-V is an industry standard, like USB or Wi-Fi. The specifications are publicly available under the Creative Commons licence and every engineer, wherever they are in the world, can use them to design their products locally, while engaging with the global RISC-V ecosystem,” Andrea explains.

"This standard is defined by RISC-V International and its members. Decisions are voted upon collectively, ensuring every member is heard. It’s a model that has worked for us for many years, ensuring any updates to the RISC-V ISA happen transparently, without breaking existing designs, and always in service of the broader ecosystem.

“The RISC-V ISA is already an industry standard and the next step is impartial recognition from a trusted international organisation. Today, I’m excited to announce that we have taken that first step. RISC-V International has been approved as a recognised PAS (that’s publicly available specification) Submitter by the ISO/IEC Joint Technical Committee (JTC 1). This means we’re able to submit draft international papers, starting with the The RISC-V Instruction Set Manual, for consideration as true, international standards.”

“International standards have a special status,” claims ISO/IEC JTC 1 chair Phil Wennblom of the value in RISC-V International’s move. "Even though RISC-V is already globally recognised, once something becomes an ISO/IEC standard, it’s even more widely accepted. Countries around the world place strong emphasis on international standards as the basis for their national standards. It’s a significant tailwind when it comes to market access.”

“It’s worth noting that no ISA has previously attained the status of an international standard, underscoring the uniqueness of RISC-V as an open and collaborative technology,” Andrea adds. “Fifteen years on, the RISC-V ISA has expanded dramatically, adding dozens of extensions to its core design. That evolution is far from over. RISC-V is committed to continue collaborating with JTC 1 to bring future extensions into the ISO/IEC process.”

More information is available [on the RISC-V International blog](https://riscv.org/blog/risc-v-jtc1-pas-submitter/).

<img src="/blog/2025-11-11-ecl91/peertube.jpg" style="max-width:100%" />

## Free Silicon Conference 2025 (FSiC2025) Videos Now Available

Videos of presentations from the Free Silicon Conference 2025 (FSiC2025) have now been uploaded to PeerTube, the federated video sharing platform.

Videos available now include Zachary Kohnen’s talk on a [Manchester decoder submitted as a Tiny Tapeout project](https://peertube6.f-si.org/w/nxpSoEMwNQ6MwAt6Z65Aeo), Dzmitry Pustakhod on [photonic process design kits using openEPDA](https://peertube6.f-si.org/w/2AJKPmLEP8XhUQuSsVtHSF), Norbert Herfurth on [industrial-grade designs using open-source EDA](https://peertube6.f-si.org/w/cuAcu81ukn8XCHXrU1DM6t), Gerhard Kahmen on [open-source design tools for sovereign chip development](https://peertube6.f-si.org/w/ghms7t8toxG9UPo8ryNXaa), Jasper Homann on [functional verification of a RISC-V processor](https://peertube6.f-si.org/w/6zW4K87FvgrwPBhXVQrnAz), Zihao Yu and Xiaoke Su on the [One Student One Chip initiative](https://peertube6.f-si.org/w/7MLJLgYbvF1rrwgYZjxEXs), Leo Moser and Mohamed Gaber on [the future of LibreLane](https://peertube6.f-si.org/w/2x2KmmSuANP7eLzWHMAFmd), Felix Salfelder on [support for Verilog-AMS in Gnucap](https://peertube6.f-si.org/w/1omRsB36sNRSxfqwbFGc9M), and Leo Moser again on [the Greyhound RISC-V eFPGA system-on-chip](https://peertube6.f-si.org/w/1FpEYtLLRYDpinypSRFsri).

Other highlights include Oscar Gustafsson’s talk on [the B-ASIC framework for simulation and implementation of static digital signal processing algorithms](https://peertube6.f-si.org/w/3NLiXjeNPuYtsRK2LvjVGX), Andreas Krall on [OpenVADL, an open-source implementation of the Vienna Architecture Description Language](https://peertube6.f-si.org/w/8wkK9KotofbZ6vQVHCfUme), Marcel Walter on [machine learning-driven logic synthesis with aigverse](https://peertube6.f-si.org/w/qSVzALavfsD3W1XcT8zdgE), Edward Bingham on [the potential for asynchronous circuits to bridge the hardware/software divide](https://peertube6.f-si.org/w/3vdrJqLsdDBehQNDF3auqX), and Matthias Jung on [using DRAMSys for dynamic RAM simulation](https://peertube6.f-si.org/w/7psUrwjPXo3CatJdAM84Pg).

The full playlist is available [on the Free Silicon Foundation’s PeerTube instance](https://peertube6.f-si.org/c/fsic2025/videos?s=1) now.

<img src="/blog/2025-11-11-ecl91/easyriscv.jpg" style="max-width:100%" />

## Easy RISC-V Offers an Interactive Introduction to Assembly

Pseudonymous embedded developer “dramforever” has published a public-domain interactive tutorial aimed at guiding developers through learning RISC-V assembly: Easy RISC-V.

“Inspired by Easy 6502 by Nick Morgan, this is a quick-ish introductory tutorial to RISC-V assembly programming,” dramforever writes of the project. "This tutorial is intended for those with a basic familiarity with low level computer science concepts, but unfamiliar with RISC-V. If you’re curious about RISC-V, I hope this will be a good start to your journey to learning about it.

"Some highlights of RISC-V include:

"Clean design: Although loosely based on many previous designs, RISC-V is at its core a new and clean design. It does away with integer status flags like ‘carry’ or ‘overflow,’ and does not have MIPS’s branch delay slots. RISC-V is designed primarily as a target for compilers, but writing RISC-V assembly by hand is still quite pleasant.

"Open standard: RISC-V specifications are developed publicly and anyone can use them without copyright or patent licensing issues. Many researchers and companies around the world have made their own RISC-V processor cores and chips based on these specifications.

“Community support: If you want to make your own processors, rather than paying a hefty licence fee to Arm, or designing your own architecture, you can just use RISC-V. Using RISC-V instead of a custom architecture allows you to make use of the existing and growing software ecosystem instead of having to maintain your own.”

The tutorial covers the RV32I-Zicsr instruction set, plus “a tiny subset” of the privileged architecture. “You’ll probably never find a ‘real’ chip with such bare bones instruction support,” dramforever admits. “Most of them will have more extensions for other features like floating point or compressed instructions. However, I would still consider what we have here a ‘complete’ instruction set. For example, Rust has Tier 2 support for the target riscv32i-unknown-none-elf which works completely fine with only the instructions we’ll cover here.”

The full tutorial is available [on the project website](https://dramforever.github.io/easyriscv/); the source code has been published under a public-domain licence [on GitHub](https://github.com/dramforever/easyriscv).

<img src="/blog/2025-11-11-ecl91/newsinbrief.jpg" style="max-width:100%" />

## News In Brief

-   [LibreLane is now available as an automatically-built AppImage, as of LibreLane 2.4.5.](https://github.com/librelane/librelane)
-   [RISC-V International boasts of 25% market penetration for RISC-V, projects more than 20 billion units shipped by 2031.](https://www.linkedin.com/posts/risc-v-international_riscvsummit-riscv-semiconductors-activity-7381728671771926528-Pkl1/)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
