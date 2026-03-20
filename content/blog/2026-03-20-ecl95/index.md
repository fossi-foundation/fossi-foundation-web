---
layout: post
title: "El Correo Libre Issue 95"
description: El Correo Libre Newsletter, Issue 95
author: Gareth Halfacree
date: 2026-03-20
---

<img src="/blog/2026-03-20-ecl95/latchup.jpg" style="max-width:100%" />

## First Speakers Confirmed for Latch-Up 2026

We’re happy to announce the first set of speakers for this year’s [Latch-Up conference](https://fossi-foundation.org/latch-up/2026) in Waterloo, Canada from May 1-3. One thing is clear: it’s going to be a great conference! We already have talks on open source ASIC tapeouts, FPGAs, education around free and open source silicon, any much more.

The Latch-Up conference is a weekend of presentations and networking dedicated to free and open source silicon. It’s an event for the open source digital design community, much like its European sister conference ORConf, run by the FOSSi Foundation.

In the first batch of confirmed speakers are:

### Strengthening Engineering Curriculum and Opportunities for Undergraduate Students through FOSSi

_Vraj Prajapati_

Vraj will be presenting on the University of Toronto ASIC Team’s initiative to democratise silicon engineering by leveraging the Free and Open Source Silicon (FOSSi) ecosystem, using open-source tools to enable undergraduates to go through the complete application-specific integrated circuit (ASIC) design cycle including physical manufacturing through services like Tiny Tapeout. The presentation will detail the team’s extracurricular impact - including the university’s first IC Design Hackathon - and its strategic partnership with the ECE faculty to rewrite and modernise core course laboratories.

### Mr. Scrub: An Open-Source, Internal Scrubber for UltraScale FPGAs

_Graeme Smecher_

Graeme’s presentation will focus on Mr. Scrub, an open-source internal scrubber for AMD’s UltraScale FPGAs. Included will be documentation on the algorithms used for SECDED error-correction of the device’s configuration frames, along with a look at validation of the scrubber using fault injection.

### Bluespec FSM: The Hidden Gem

_Michael Jaggers_

Michael’s talk takes a look at the Bluespec finite state machine (FSM). The talk will, he says, show “a few concrete examples where modern syntax and tooling still lead back to the classic FSM pattern, and why that pattern becomes brittle at scale” before taking a look at “the hidden gem” of Bluespec. “With guarded atomic actions and sequencing as first-class concepts,” Michael says, “Bluespec changes the shape of FSM code, making control intent clearer and large stateful behavior more maintainable.”

### GDSFactory: Open-Source EDA for Photonics, Quantum, MEMS, and RF Chip Design

_Joaquin Matres_

Joaquin will be discussing GDSFactory, an open-source Python-based analog electronic design automation package designed to bridge the gap between open EDA tools for digital electronics and the needs of advanced analog chip designs including photonic, quantum, micro-electro-mechanical system (MEMS), and radio-frequency (RF) parts.

### Instruction Cache Optimization in VexRiscv RISC-V Processors (lightning talk)

_Wadood Wasay_

Wahood’s presentation will focus on a quantitative analysis of instruction cache optimisation within the VexRiscv core, evaluating performance impacts across multiple cache configurations in resource-constrained environments - with benchmarking of both FPGA and ASIC-targeted workflows demonstrating measurable improvements in performance-per-resource metrics. “These findings,” Wahood promises, “provide practical guidance for designers leveraging VexRiscv in customized RISC-V implementations.”

### Unifying FuseSoC and SiliconCompiler

_Duncan Parke_

Duncan’s focus is on how interoperability can be improved between differing Python-based build systems like FuseSoC and SiliconCompiler, in order to avoid replacing proprietary vendor tool lock-in with an open equivalent. “By lowering switching costs,” Duncan proposes of a supporting library available alongside the talk, “we aim to increase IP reuse, reduce engineering duplication, and allow teams to choose the right tool for each stage of the design process.”

### First Post-Efabless Silicon: Chipalooza, Tiny Tapeout, and Panamax

_Tim Edwards_

Tim will be showing off five chip designs submitted for production on a Cadence Sky130 shuttle, a combination of digital and analogue projects new and old - and designed to see how small-scale production using open process design kits has changed since Efabless shut down in February last year. “I will present on challenges of the tapeout,” Tim promises, “as well as test results from the manufactured parts.”

### From Tapeouts to Products: Why Open-Source Silicon Must Solve Real Problems to Survive

_Mohamed Kassem_

Mohamed’s presentation will look at the true inflection point for free and open-source silicon: the shift from research into production hardware, “the same transition Linux made when it started running production servers.” The tools, his talk will argue, are already in place for adoption at scale: “The open-source stack is ready for this - open PDKs, automated RTL-to-GDSII, a proven SoC harness, and shared-wafer shuttles that make silicon accessible,” he says. "The tools are no longer the barrier. The next step is ours to take."​​​​​​​​​​​​​​​​

### Chipathon: Democratizing IC Design - A Global Open-Source Silicon Challenge for Education, Innovation, and Reproducibility

_Mehdi Saligane_

The last of the speakers confirmed in the first batch, Mehdi’s presentation will take a look at the Chipathon - a global open-source integrated circuit design challenge organised under the IEEE Solid-State Circuits Society (SSCS) Platform for IC Design Outreach (PICO) initiative. “The program aims to democratise chip design by providing students, educators, and researchers with a structured pathway to design, verify, and potentially fabricate integrated circuits,” Mehdi explains, “using open-source tools and publicly accessible process design kits.”

There’s still time to register for Latch-Up, but hurry, the rooms are filling up quickly! While you register, you can also submit a talk through the registration interface. Full talks are about ten minutes, so you don’t need to have worked on a topic for many years to submit a talk! Previous conferences showed it again and again: everyone has something cool to tell!

To give you all a bit more time, we extended the talk submission deadline to Sunday, April 5, 2026! The conference itself will run over three days, Friday, May 1 to Sunday, May 3, 2026. We plan to start on Friday morning at 9am and end the conference on Sunday afternoon. When planning travel, we suggest you arrive Thursday evening or first thing Friday, and plan to leave Sunday afternoon or evening.

More information is available [on the Latch-Up event page](https://fossi-foundation.org/latch-up/2026). We hope to see you there!

_-Philip Wagner, Director, FOSSi Foundation_

<img src="/blog/2026-03-20-ecl95/baochip.jpg" style="max-width:100%" />

## Baochip Offers a “Mostly Open” Microcontroller with IRIS-Compatible Packaging

Noted maker Andrew “bunnie” Huang has opened a crowfunding campaign for the Dabao, a development board built around the Boaochip-1x - a “mostly open” microcontroller built around a Vexriscv RISC-V core and with a package which can be rendered translucent with strong infrared light for in-situ inspection.

“Baochip-1x raises the bar on inspectable hardware, bringing you a system-on-chip (SoC) that you can check from the silicon all the way to the software,” bunnie says of the microcontroller. “Not only is the entire bootloader open-source and NDA [Non-Disclosure Agreement]-free, most of the design source for the compute logic is open and NDA-free. To top it off, the chip comes in a package specifically designed to facilitate Infra-Red, In-situ (IRIS) inspection — a non-destructive way to look at the silicon and confirm you’ve got the right chip based on the pattern of transistors printed on the silicon itself.”

The chip in question is based on an open-source Vexriscv RISC-V CPU core running at up to 350MHz and includes 2MB of static RAM (SRAM) plus an additional 256kB for input/output, 4MB of non-volatile resistive RAM (RRAM), and a quad-core input/output accelerator based on the also-open PicoRV32 core and running at up to 700MHz. The chip is packaged in a back-side silicon format, the surface of which allows strong infrared light through - meaning the physical structures can be inspected with a cheap camera and an infrared torch, a process bunnie invented and terms IRIS.

The Dabao board is being funded via [Crowd Supply](https://www.crowdsupply.com/baochip/dabao), at $9.50 per board excluding shipping; sources for the Baochip-1x are available on [GitHub](https://github.com/baochip/baochip-1x) under the weakly-reciprocal version of the CERN Open Hardware Licence 2.0. Additional information is available on the [Baochip website](https://baochip.com/).

<img src="/blog/2026-03-20-ecl95/chips.jpg" style="max-width:100%" />

## CHIPS Alliance Outlines its “Vision and Priorities” for 2026

The CHIPS Alliance, an organisation dedicated to the development and hosting of open-source hardware and interconnect IP alongside open-source development tools, has announced its roadmap for 2026 - beginning with the retirement of general manager Rob Mains, to be replaced by a new community-driven leadership model.

“As we approach 2026, the CHIPS Alliance is evolving,” says incoming governing board chair Matthew Cockrell. "Over the past few years, we have grown from a collection of ambitious projects into a central hub for open-source silicon innovation. Our vision for 2026 is centered on sustainability, technical rigor, and established trust. We are transitioning from an incubation phase to a mature, community-driven ecosystem focused on high-quality, verifiable IP and robust tooling for design and validation enablement.

"or 2026, the organisation will operate without a General Manager, relying instead on a highly engaged Governing Board and Technical Advisory Council (TAC), supported by the Linux Foundation Project Management team. Our 2026 technical strategy is centered on community stewardship and strategic incubation. We are overseeing a diverse portfolio that includes established, industry-adopted projects like Caliptra, alongside emerging workgroups such as SV Tools. Additionally, we are exploring innovative frontiers in AI-driven chip development and the Coral NPU. Our objective is to serve as the industry’s central hub for high-quality, verifiable open-source silicon IP, tooling, and specifications.

“The strength of CHIPS Alliance lies in its members,” Matthew says, while also warning that the new roadmap combined with planning for as-yet unannounced “future leadership transitions” means a 25 percent hike in membership dues compared with the previous year. “Whether you are interested in shaping the future of secure silicon via Caliptra, improving open PDKs, or defining the next generation of AI-driven chip design - now is the time to engage.”

More information is available on the [CHIPS Alliance website](https://www.chipsalliance.org/news/2026-vision/).

<img src="/blog/2026-03-20-ecl95/uberddr3.jpg" style="max-width:100%" />

## Pushing UberDDR3 Frequency Through RTL Cleanup

Digital IC design engineer and self-described “FPGA hobbyist” Angelo Jacobo is continuing his blog series on UberDDR3 - this looking at boosting its clock frequency still further through a clean-up process.

“After a few years of working on UberDDR3, the design was in a good place feature-wise. ECC, dual-rank support, open-source tool flows, and ports to Lattice ECP5 were all working, and simulations were clean,” Angelo writes. "The one thing that kept bothering me was frequency, especially when using OpenXC7.

"Over the past few months, I went back to the RTL with a more timing-focused mindset. I did not do a big redesign or add aggressive pipelining. Starting from a stable 90MHz UberDDR3 design, I focused on cleaning up the RTL: separating combinational and sequential logic, registering decisions earlier, simplifying control paths, flattening stall logic, and finally trimming down registers that were bigger than they needed to be. None of these changes altered functionality, but together they made the design much easier to reason about and easier for the tools to optimise.

“In the end, those small, deliberate changes pushed the maximum frequency,” Angelo says, “using OpenXC7 and fully open-source tools, with no aggressive pipelining and no architectural redesign. If there’s one takeaway here, it’s this: timing closure is often less about clever tricks and more about clarity. When the RTL becomes easier to understand, timing tends to follow.”

The full post is available on [Angelo’s blog](https://www.openiphub.com/post/pushing-uberddr3-frequency-through-rtl-cleanup-post-18), along with measurements showing a 30-53 percent clock speed increase depending on target platform.

<img src="/blog/2026-03-20-ecl95/cleanroom.jpg" style="max-width:100%" />

## Building a Cleanroom in a Garden Shed

Matthew Hartensveld, also known as YouTuber “Dr. Semiconductor,” is looking to bring the process of making your own chips a little closer to home - and has started by converting a garden shed into a class-100 cleanroom.

“[Chips are] made inside facilities larger than football stadiums, costing billions of dollars, filled with machines worth more than most houses. All inside clean rooms are thousands of times cleaner than a hospital operating room, because one tiny dust particle can destroy an entire chip,” Matthew explains. "But I have none of that. No billions of dollars, no stadium-sized buildings. But what I do have is I have a shed.

"First, I had to turn it into a controlled environment. Insulation, framing to support real clean-room-grade HEPA filters, dedicated electrical, heating and cooling with a mini-split. It had to function like a lab, not just some backyard building. I divided the space into two areas: a gowning area and the cleanroom itself. You don’t just walk into the cleanroom, you transition into it.

“I was able to borrow a particle counter,” Matthew says of testing his efforts, “and I measured 40 particles per cubic foot - and around the edges of the cleanroom, under 100. This puts the lab in a class-100 cleanroom category, alongside Samsung, Intel, TSMC - at least in terms of particle counts. But outside the shed, that’s a different story: well over 20,000 particles per cubic foot. Same backyard, but completely different environment.”

The full video is available on [Matthew’s YouTube channel](https://www.youtube.com/watch?v=HfSO-LCKmrA).

<img src="/blog/2026-03-20-ecl95/slang.jpg" style="max-width:100%" />

## Hudson River Trading Details its SystemVerilog Language Server

Andrew Nolte, of technology-driven stock-tracing firm Hudson River Trading, has detailed his company’s creation of a SystemVerilog language server - and its release under the permissive MIT licence.

“It may seem counterintuitive for a trading firm, typically protective of its intellectual property, to contribute to and publish open-source projects,” Andrew says, noting as well the company’s involvement with projects including Verilator and cocotb. "However, we believe it is vital to the long term success of software projects to provide extra validation, opinions, and contributions that move these projects forward. We’re also very happy to lower the barrier of entry for hardware development and improve the lives of hardware developers around the world.

"The project we built and released is a language server, which is a tool that provides intelligent code navigation and instant feedback into popular editors like VS Code, Vim, and Emacs for a particular language. It’s a protocol based on the VSCode API, allowing the server to be written in any language, not just TypeScript. The server is based on the Slang project, which is a SystemVerilog frontend and linter. Slang was created by our own Mike Popoloski, and he’s continued to develop features and maintain that project. According to the ChipsAlliance test suite, Slang is the fastest and most compliant SystemVerilog frontend, which in hardware compilers is the engine that parses code, checks for errors, and builds the design hierarchy.

"As part of my role, I need to read and understand parts of our hardware codebase. It irked me (and others on my team) every time I had to scour our codebase for declarations when seeking to understand a piece of code. I couldn’t even imagine how much time our team would save if we had proper editor features like we did in other languages, where a simple cmd+click would bring you to a symbol definition.

“Luckily, at HRT we have the ability to work on greenfield projects through a program called “Surge”, in which groups of engineers choose to come together to explore and build new projects. Both our FPGA team and the Slang library were first created as Surge projects many years ago. Last year, we created slang-server during Surge, and we’re proud to have recently open sourced it.”

More information is available in [Andrew’s blog post](https://www.hudsonrivertrading.com/hrtbeat/designing-a-systemverilog-language-server/), while slang-server is available on [GitHub](https://github.com/hudson-trading/slang-server) under the permissive MIT licence.

<img src="/blog/2026-03-20-ecl95/interrupt.jpg" style="max-width:100%" />

## John Hauser Releases a SystemVerilog RISC-V APLIC

John Hauser, one of the architects behind the RISC-V Advanced Interrupt Architecture Advanced Platform-Level Interrupt Controller, has released an APLIC implementation in SystemVerilog under the permissive Apache 2.0 licence.

“This Git repository contains a SystemVerilog implementation of an APLIC (Advanced Platform-Level Interrupt Controller) that conforms to the Advanced Interrupt Architecture (AIA) standard for RISC-V computers,” John explains. "The current version of this APLIC is a preliminary one labeled 0.6.1. This version has some known shortcomings compared to what is expected for version 0.7.

"Notably: The only bus interface supported for now is AXI4-Lite. Version 0.7 is expected also to support AMBA APB (Advanced Peripheral Bus) and OBI (Open Bus Interface) connections. Some APLIC functionality has been only lightly tested at best. This is especially true of direct delivery mode, which signals interrupts to harts by wires. Most testing so far has concerned only MSI delivery mode. For more about the current state of testing, see the documentation in the doc subdirectory. There are plans for version 0.7 to improve some parts of the internal implementation. It is hoped that version 0.7 will be available sometime around mid-2026.

"Both little-endian and big-endian are supported, either as little-endian-only, big-endian-only, or bi-endian. Up to 1023 interrupt sources are supported. The set of implemented source modes is configurable separately for each interrupt source. Any arbitrary interrupt domain tree is supported, up to an implausibly large size of 127 domains. Both direct delivery mode and MSI delivery mode are supported. The interrupt delivery mode of each domain is individually configurable as either direct-delivery-only, MSI-delivery-only, or controlled by domaincfg.DM.

“For direct delivery mode,” Hauser continues, “the maximum number of harts per interrupt domain is 512. MSI delivery mode allows for as many as 16,384 harts. The hart index numbers used to identify actual harts need not all be contiguous; there can be unused gaps in the sequence of index numbers. Each interrupt domain may signal interrupts to a different subset of harts, where each subset covers a range of index numbers from a lowest to a highest number (and all valid numbers in between). These subsets may overlap partially or entirely. Within each supervisor-level interrupt domain, the hart index numbers can be offset by a fixed constant if necessary.”

The source code is available on [GitHub](https://github.com/jhauser-us/jh_APLIC?tab=readme-ov-file) under the permissive Apache 2.0 licence; it is, its creator notes, supplied “as-is, for free, [and] may contain flaws that cause it to fail.”

<img src="/blog/2026-03-20-ecl95/animesh.jpg" style="max-width:100%" />

## RISC-V “Far More Than a Reference Manual,” Says Mentee

Software engineer Animesh Agarwal has written of his experience in the RISC-V Mentorship Programme, working on the RISC-V Unified Database project - and his discovery that the RISC-V ISA is is “far more than a reference manual.”

“When I first heard about the RISC-V Unified Database project, I was immediately drawn to its ambition: to become a single, machine-readable source of truth for the RISC-V Instruction Set Architecture (ISA),” Animesh explains. "Once complete, the project would power a broad ecosystem of downstream tools such as assemblers, disassemblers, simulators, debuggers and more.

"Coming from a software background, I had mostly thought of ISAs as static PDFs and reference manuals. Instead of every tool re-encoding the ISA in its own ad hoc format, the Unified Database aims to centralise that knowledge and let generators produce consistent artifacts.

"Contributing to UDB changed how I think about ISAs and toolchains. A unified database avoids duplication by letting one canonical representation feed many generators. It deepened my understanding of extension interactions, profiles like RV32E, and the subtle differences in expectations between downstream projects.

“The work I have done so far, modeling GPRs, generating QEMU decode rules and opcode tables, and drafting a GAS test generator, feels like just the beginning,” Animesh adds. "Natural next steps include extending the register model to floating-point and vector registers, improving binutils test generation, and tightening integration between UDB and QEMU.

“Contributing to the RISC-V Unified Database through the RISC-V Mentorship Program has been a formative experience for me as an engineer,” Animesh concludes. “I leave this mentorship with a much deeper understanding of RISC-V, greater confidence contributing to large infrastructure codebases, and strong motivation to continue contributing to open-source projects that prioritise correctness, reuse, and community-driven development.”

The full write-up, including details of Animesh’s work, is available on the [RISC-V International blog](https://riscv.org/blog/risc-v-mentorship/).  

<img src="/blog/2026-03-20-ecl95/opentitan.jpg" style="max-width:100%" />

## OpenTitan Hardware Root-of-Trust Now Shipping

The team behind OpenTitan, a free and open hardware root-of-trust, has announced the project’s biggest milestone yet: shipping in commercially-available Google Chromebook devices, following mass production by Nuvoton.

“Over the past seven years, Google has worked with the open source communities to build OpenTitan, the first open source silicon Root of Trust (RoT). The RoT is the foundation upon which all other security properties of a device are derived, and anchoring this in silicon provides the strongest possible security guarantees that the code being executed is authorised and verified,” explain OpenTitan team members Cyrus Stoller and Miguel Osorio. "The OpenTitan project and its community are actively supported and maintained by lowRISC C.I.C., an independent non-profit.

"OpenTitan provides the community with a high-quality, low-cost, commoditised hardware RoT that can be used across the Google ecosystem and also facilitates the broader adoption of Google-endorsed security features across the industry. Because OpenTitan is open source, you can choose to buy it from a commercial partner or manufacture it yourself based on your use case. In any of these scenarios, you can review and test OpenTitan’s capabilities with a degree of transparency never afforded before in security silicon. This allows optimization for the use case at hand, whether it is having multiple reliable suppliers or ensuring the complete end-to-end control of the manufacturing process.

“Last year, we shared the exciting news that fabrication of production OpenTitan silicon had begun. Today, we’re proud to announce that OpenTitan is now shipping in commercially available Chromebooks. The first OpenTitan part is being produced by Nuvoton, a leader in silicon security. Having successfully demonstrated that we are able to deliver secure open silicon, we’re confident that the same methodology can be used to develop additional open source designs targeting a wide range of use cases (whether the focus is on security, safety, or elsewhere). We’re excited to see re-use of IP that was developed for OpenTitan being adapted for Caliptra, a RoT block that can be integrated into datacenter-class SoCs.”

More information is available on the [OpenTitan website](https://opentitan.org/).

<img src="/blog/2026-03-20-ecl95/isle.jpg" style="max-width:100%" />

## Will Green’s Isle Gets a FemtoRV32 CPU

FPGA developer and open hardware maker Will Green has announced an upgrade to the Isle build-your-own educational computer project: the addition of an open RV32IMC core as the system’s CPU, bringing support for interrupts.

“I‘ve upgraded Isle with the FemtoRV32 ‘Gracilis’ CPU (RV32IMC),” Will wrote in an announcement on social media regarding the latest in the ongoing project. “It even has interrupt support, which we’ll make use of later. I’ll release the next Isle chapter soon, with keyboard input and the start of our RISC-V software library. There’s simulation with graphics for Linux/Mac/Windows too.”

Will launched Isle late last year as an initiative to build “a simple, modern computer - an open design that encourages tinkering, experimentation, and doing your own thing,” he said at the time. “By simple, I mean that one person can understand the whole system. Modern in that we use contemporary components, development tools, and standards.”

The understandable part of the system comes in its use of open IP, in particular RISC-V for the CPU side. This runs on low-cost FPGAs, or in simulation if learners would rather not splash out on hardware. The project includes a custom operating system, Isle OS, with a 2D graphics engine, Unicode-compatible text mode, sound, SD Card storage, keyboard and mouse inputs, and options for further expansion.

The project is being built up over time, with the latest always available on [Will’s website](https://projectf.io/isle/fpga-computer.html); the source code is available on [GitHub](https://github.com/projf/isle) under the permissive MIT licence.  

<img src="/blog/2026-03-20-ecl95/newsinbrief.jpg" style="max-width:100%" />

## News in Brief

-   [Can Lehmann "did a thing:" a programmable state machine controller heading for production in the HeiChips tapeout.](https://github.com/can-lehmann/heichips25-fsm/tree/main) [(Mastodon announcement.)](https://mastodon.social/@CanLehmann/116055196646393427)
-   [Lyra Rebane's x86 CPU was built in an unexpected language: Cascading Style Sheets (CSS).](https://lyra.horse/x86css/)
-   [RISC-V Vector Extensions made more accessible, thanks to integration into the RAJA performance-portability framework.](https://riscv.org/blog/support-raja-and-scientific-applications-on-rvv-architectures/)
-   [Luke Wren's Hazard3 RISC-V core gets a bug-fix release, hits v1.1.1.](https://github.com/Wren6991/Hazard3/releases)
-   [ETH Zurich pledges to fund Tiny Tapeout submissions for qualifying Swiss residents.](https://swisschips.ethz.ch/news-and-events/tiny-tapeout-submission-form.html)
-   [Andrew Waterman and Rafael Sene announce the public review of the RISC-V Instruction/Data Coherence and Consistency Extension (Ziccid) - closing April 1st 2026.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/c81E_uso6g0)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
