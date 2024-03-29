---
layout: post
title: "El Correo Libre Issue 60"
description: El Correo Libre Newsletter, Issue 60
author: Gareth Halfacree
date: 2023-03-14
---

<img src="gsoc.jpg" style="max-width:100%" />

## Apply Now for Google Summer of Code 2023

We have once again been selected as a mentor organisation for [Google Summer of Code (GSoC) 2023.](https://summerofcode.withgoogle.com/) Google Summer of Code is an excellent program for new open-source contributors to receive a stipend (generously provided by Google) to contribute to open source projects in the FOSSi community. As an organisation, we encompass a variety of community projects in the space of open source silicon design, EDA tools, and the surrounding ecosystem.

For those previously familiar with the program, please note that since last year there have been several significant changes. Google are enabling a mix of 175 hour and 350 hour projects. Eligibility has been expanded to include those who are not enrolled as students, too! We hope to welcome many new contributors to the FOSSi community as GSoC mentees. Please check out the official Google website to understand the new terms of the program.

To act as a first point of reference, we have prepared a [list of project ideas](https://www.fossi-foundation.org/gsoc23-ideas.html). As a mentee you are free to base your project on one of these ideas, but remember that it is **your** idea we are looking for, and you should come up with an idea that you want to work on, in conjunction with one of our mentors. Your job is to write a realistic project proposal (of appropriate scope) to show us that you have a good idea of the work involved, and discuss the idea with our mentors to get feedback.

As there are more project proposals than the number of slots we are likely to receive, a well-written project idea is important for us to judge your potential success as a FOSSi GSoC mentee. It is also a good idea to get involved with the community early on (perhaps via our [gitter](https://gitter.im/librecores/Lobby) to get a better feeling for what kind of project you want to do, and what already exists. For more general information about what it takes to be a GSoC mentee, there are several guides available on the GSoC site, for example [here](https://developers.google.com/open-source/gsoc/resources/manual).

Please get in touch with the project maintainers from the list of ideas or with other projects you like. We are happy to answer questions about the program and the application procedure at [gsoc@fossi-foundation.org](mailto:gsoc@fossi-foundation.org).

Please also get in touch if you have project ideas with your community and think that FOSSi Foundation is the right umbrella organisation for you!

_- Jonathan Balkind, Director, FOSSi Foundation_

<img src="firefoxlogo.jpg" style="max-width:100%" />

## Firefox's SpiderMonkey Gains a RISC-V JIT/Wasm Back-End For Better Performance


While Firefox has been available on RISC-V devices for a while, JavaScript performance has been lacking compared to other builds - something which should be dramatically improved by a new Just-In-Time/Web Assembler (JIT/Wasm) back-end, contributed by the PLCT Lab of the Chinese Academy of Sciences.

"SpiderMonkey now has a JIT/Wasm back-end for the 64-bit RISC-V architecture," the team behind SpiderMonkey, the JavaScript engine used in Mozilla's Firefox, has announced. "This port was contributed by PLCT Lab and they’ll also be maintaining it going forward. Adding a back-end for a new platform is a lot of work so we're grateful to them for making SpiderMonkey run well on this exciting new architecture."

While Firefox's performance on RISC-V devices, emulated or in silico, has been acceptable, the new back-end for SpiderMonkey will bring some major improvements for JavaScript-heavy pages. According to the PLCT Lab's testing, the new back-end shows a sixfold performance gain in the SunSpider benchmark when using Just-In-Time (JIT) compilation.

More information is available [in the SpiderMonkey newsletter](https://spidermonkey.dev/blog/2023/02/16/newsletter-firefox-110-111.html), and [in the Bugzilla entry](https://bugzilla.mozilla.org/show_bug.cgi?id=1800431) for the patch set.

<img src="siliwiz.jpg" style="max-width:100%" />

## Matt Venn, Uri Shaked Release SiliWiz to Teach Silicon-Level Chip Design


Matt Venn and Uri Shaked have worked together to develop an open-source platform designed to teach how chips work at the silicon level, using a friendly browser-based interface: SiliWiz, the silicon wizard.

"SiliWiz will help you get a basic understanding of how semiconductors work and are manufactured at a fundamental level," Matt says of the software, which was developed alongside the Zero to ASIC and Tiny Tapeout courses. "Semiconductors are the most important technology of the 21st century but only a tiny fraction of us know how they work or are designed and made."

SiliWiz offers an in-browser component designer which allows the user to place metal and dopant layers on a virtual silicon die, creating components along the way. These components aren't just for decoration, either: a SPICE simulator, running under the hood, allows each component to be tested for functionality.

Companion documentation includes a tutorial, designed to be accessible to users aged 14 and above, which should take confident students around three hours to complete, Matt says.

SiliWiz can be used freely and without registration [on the official website](https://app.siliwiz.com/), with the source code [published to GitHub](https://github.com/wokwi/siliwiz) under the permissive Apache 2.0 licence.

<img src="tomsalvage.jpg" style="max-width:100%" />

## Tom Verbeure Turns to Discarded Cisco Modems as a Source of Cheap FPGAs


Hardware engineer Tom Verbeure, faced with the high costs and ongoing supply chain issues afflicting the field-programmable gate array (FPGA) market, has turned to an unusual source of high-end parts: second-hand Cisco modems.

"Need a[n Intel] Cyclone II EP2C35 FPGA? You can pay $220 to Digikey… or buy a pre-heater, a BGA reballing jig, and $5 for an old Cisco modem," Tom explains of the plan - which involved "watching YouTube videos for a whole weekend" in preparation.

While the hardware is certainly cheap, though, getting it in a usable state takes rather longer than just popping an order in. "Took hours to get there," Tom says of his first attempts. "Those guys on YouTube are surely cheating. On first try, I had 255 of 256 balls correct. I needed 5 reflow iterations to get the last and surrounding ones fixed.

"[Reworking] requires wicking away the solder of only a few balls, then manually placing new flux and balls. It takes forever… And then it fails and you need to do it again, and again."

With practice, though, the process should become easier - and Tom already has his eyes on other pieces of salvage. "I’m not sure yet which FPGA I’ll use for my next projects," he writes. "It depends on the other components that can be harvested. The RV901T board has a Spartan 6 plus an SDR SDRAM (easier to use than DDR) and is very cheap too."

More information is available [on Tom's Twitter thread](https://twitter.com/tom_verbeure/status/1629370764859408391).

<img src="quark.jpg" style="max-width:100%" />

## Quark is an Integer RISC-V Vector Core for Sub-Byte Neural Network Inference


Researchers at the _Ecole Polytechnique de Montréal_ and ETH Zürich have designed an integer RISC-V vector processor, dubbed Quark, which is designed for deep neural networks (DNNs) quantised down to a sub-byte level - using the open-source Ara core as a base.

"[Quark] is designed on top of Ara, an open-source 64-bit RISC-V vector processor," the team explains. "To accommodate sub-byte DNN inference, Quark extends Ara by adding specialised vector instructions to perform sub-byte quantised operations. We also remove the floating-point unit from Quarks' lanes and use the CVA6 RISC-V scalar core for the re-scaling operations that are required in quantised neural network inference.

"This makes each lane of Quark 2 times smaller and 1.9 times more power efficient compared to the ones of Ara. We show that Quark can run quantised models at sub-byte precision. Notably we show that for 1-bit and 2-bit quantised models, Quark can accelerate computation of Conv2d over various ranges of inputs and kernel sizes."

In simulated testing, Quark proved capable of running a two-bit quantised version of the Resnet18 model some 5.7 times faster than the eight-bit version of the same model on Ara - though dropping to a one-bit quantised version did bring a noticeable drop in accuracy, the researchers noted.

More information is available in the paper, published as a preprint [on Cornell's arXiv server](https://arxiv.org/abs/2302.05996).

<img src="tinytapeout3.jpg" style="max-width:100%" />

## Matt Venn Announces Tiny Tapeout 3, Aims to Fab 250 Designs


Matt Venn has announced the opening of the third Tiny Tapeout round, which will see up to 250 small silicon designs fabricated into a single multi-project die - complete with development board to try each out in turn.

""Semiconductors are so important in our daily lives," Matt says of the program, which was designed as a more accessible alternative to the Zero to ASIC course. "We depend on them for so many things, but not many of us really know how they're designed or made - and Tiny Tapeout is designed for high-school students, for undergrads, for hobbyists, for anyone who's interested in learning more."

The third Tiny Tapeout had, at the time of writing, room for 195 additional designs for inclusion on the multi-project die - which will be produced as a physical chip through the Efabless platform on SkyWater's open-source Process Development Kit (PDK). For those not ready to try building something physical, there are also a limited number of design-only slots available - allowing you to receive feedback on your design without committing to production.

More information, and instructions on signing up for a design-only slot at $25 or a production slot at $100 plus postage, is available [on the Tiny Tapeout website](https://tinytapeout.com/).

<img src="schroderxv6.jpg" style="max-width:100%" />

## Michael Schröder's Compact PC is a Fully-Open RISC-V UNIX xv6 Box


Michael Schröder has built a compact personal computer with a difference: its 3D-printed housing hides an FPGA running a RISC-V core and a copy of UNIX xv6, and was built using only free and open-source resources.

"xv6-riscv is a simple educational UNIX operating system written in ANSI-C developed and used at MIT in courses to teach operating systems," Michael explains. "The original code is implemented for RISC-V 64 bit CPU. In this project we will build a minimal computer system based on an FPGA board capable of running UNIX xv6. We will implement only the smaller 32 bit version of RISC-V CPU and we will drop all features not explicit needed to run xv6, like floating point operation and even multiplication in hardware."

Designed as an educational project in its own right, Michael's xv6-riscv-fpga walks the reader through the implementation of a custom minimal RISC-V core, rv32ia_zicsr, on an Olimex iCE40HX8K-EVB open-hardware development board. On the software side, everything is also open - using Project Icestorm as the toolchain.

"The final computer will be able to boot UNIX xv6 and even run a home made LISP interpreter," Michael writes of the project's eventual product, "which is capable of doing numerical computations even on floating point numbers."

The full guide is available [on Michael's GitLab repository](https://gitlab.com/x653/xv6-riscv-fpga), along with source code and 3D-printable chassis files under an open-source licence.

<img src="livehd.jpg" style="max-width:100%" />

## LiveHD, a Multi-Threaded Compiler for HDLs, Offers a Major Performance Boost


Researchers from the University of California Santa Cruz have released a paper detailing LiveHD, a compiler for Hardware Description Languages (HDLs) which uses parallelism to provide a big performance boost on multi-threaded hardware.

"HDL compilation time is a major bottleneck in the designer’s productivity," the research team claims. "Moreover, as the HDLs are developed independently, the possibility to share innovations in compilation technology is limited.

"We design and implement LiveHD, a new multi-threaded, fast, and generic compilation framework across many HDLs (FIRRTL, Verilog, and Pyrope). We propose new parallel full and bottom-up passes to handle HDLs. The resulting compiler can parallelise all the compiler steps."

The claimed performance gains are impressive. Running single-threaded, LiveHD offers a claimed sixfold speed boost over the Scala-FIRRTL compiler and nearly ninefold over Yosys when compiling Verilog. On top of this are the gains from parallelisation, which bring the overall speed-up anywhere from 16.5x to a whopping 71.3x for Verilog against Yosys on a 16-threaded processor.

The team has said that it plans to release LiveHD under an open-source licence, with the paper available under open-access terms [from the ACM Digital Library](https://dl.acm.org/doi/abs/10.1145/3578360.3580254).

<img src="riscv.jpg" style="max-width:100%" />

## The First RISC-V Summit Europe Opens This June in Barcelona


The first-ever RISC-V Summit Europe opens its doors in early June 2023, with talks, poster sessions, and an exhibition aiming to cover everything from RISC-V's impact in cloud computing, embedded, and automotive to open electronic design automation (EDA) tools, open-source hardware, and open silicon.

"The RISC-V community is thriving in Europe with a strong culture of contribution and collaboration that we look forward to showcasing at the event," says RISC-V International chief executive Calista Redmond of the event. "By working together, RISC-V members are accelerating innovation and seizing global opportunities across the compute spectrum, proving that RISC-V is truly inevitable."

"After strong interest and participation in the recent RISC-V Week in France, RISC-V Activities Workshop in Germany, and Red-RISC-V in Spain, we felt Europe should have its own marquee event," adds Christian Fabre, senior researcher and engineer at CEA and the chair of the RISC-V Summit Europe 2023. "There are a lot of deep, innovative collaborations around RISC-V going on around Europe, and RISC-V Summit Europe will be a perfect opportunity to meet the lively community and showcase the momentum."

The event is to be held at the _Barceló Sants_ hotel in Barcelona across five days: Monday the 5th of June, for the technical working group meetings; Tuesday the 6th to Thursday the 8th of June, for keynotes, panels, presentations, poster sessions, and the exhibition; and Friday the 9th of June, for workshops.

More information is available on the event website.

<img src="aalto.jpg" style="max-width:100%" />

## Aalto Students Extend the A-Core, a Modular RISC-V Implementation, With AI Acceleration


Students at Aalto University have taken an earlier project, the A-Core modular and extensible RISC-V core design, and expanded it with acceleration engines for artificial intelligence (AI) and cryptographic workloads.

"We started the implementation process from the processor’s instruction set so that our students could learn how to create processors, as the processors are way more difficult to design than to use," explains Marko Kosunen, senior lecturer, of the project which began with the A-Core's design in 2021.

"We are also striving to utilize programming more in our microelectronics design process, and processor design is well suited to this goal. This project has helped our students realise that programming can be used to create more than just software. Additionally, we can utilize of A-Core, our processor, in some of our courses, to strengthen our expertise at the software–hardware interface."

The newly-expanded A-Core now includes an accelerator for vector-matrix multiplications along with a second accelerator designed to boost cryptographic workloads, in particular communication encryption. While designed primarily for educational purposes, the University has confirmed it has submitted the design for manufacturing in silicon with testing on real hardware expected to take place this spring.

More information is available [on the Aalto University website](https://www.aalto.fi/en/news/aalto-university-students-combine-an-open-microprocessor-with-an-ai-accelerator), with the A-Core sources [available on GitLab](https://gitlab.com/a-core) under open-source licences.

<img src="theadglass.jpg" style="max-width:100%" />

## Alibaba's T-Head Semi Silicon Division "Steps Up RISC-V Development"


Alibaba's T-Head Semi division, which has designed a number of RISC-V cores several of which have been released under a permissive licence, is reportedly stepping up its efforts in the field as part of a national effort to make China less dependent on foreign technologies.

Speaking at a conference in Shanghai, T-Head's vice president Meng Jianyi unveiled plans to encourage 150,000 developers to learn RISC-V - providing grist for the mill which is the company's desire to expand commercial applications of its in-house RISC-V chip designs through business partnerships.

The South China Morning Post, owned by Alibaba, recently reported on plans for Alibaba's Alipay payments division to launch hardware powered by T-Head's RISC-V chips - the first of which are expected to land in the Chinese market this month.

The paper describes RISC-V as "a new hope for China" as the nation, still under trade restrictions in its economic tussles with the US, seeks to encourage native hardware development and lessen its reliance on outside technologies.

The full report is available [on the South China Morning Post website](https://www.scmp.com/tech/big-tech/article/3212122/alibabas-chip-unit-t-head-steps-risc-v-development-china-pushes-open-source-architecture-face-us?module=perpetual_scroll_0&pgtype=article&campaign=3212122) now. T-Head's previously-released open-source RISC-V cores, made available under the permissive Apache 2.0 licence, are available [on the company's GitHub repository](https://github.com/T-head-Semi/).

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [RISC-V will be showcased at Embedded World this week, from the 14th to 16th of March in Nuremberg, Germany.](https://events.linuxfoundation.org/riscv-at-embedded-world/)
-   [Andrew Waterman announces the public review of the Zihintntl RISC-V ISA extension, open through to the 31st of March.](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/YNSVNRINwIc/m/LPjG_TokBAAJ)
-   [The first International Workshop for High-Performance Computing on RISC-V is confirmed for ISC23 in Hamburg, Germany, on the 25th of May.](https://riscv.org/blog/2023/02/announcing-the-first-international-workshop-for-hpc-based-on-risc-v/) [(Call for papers open until the 24th of March.)](https://riscv.epcc.ed.ac.uk/community/isc23-workshop)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
