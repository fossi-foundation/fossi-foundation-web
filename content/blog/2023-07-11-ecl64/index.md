---
layout: post
title: "El Correo Libre Issue 64"
description: El Correo Libre Newsletter, Issue 64
author: Gareth Halfacree
date: 2023-07-11
---

<img src="/blog/2023-07-11-ecl64/orconfpics.jpg" style="max-width:100%" />

## ORConf and ORktoberfest

Just two months remain until the return of ORConf! ORConf, the leading conference focused on open source silicon design, electronic design automation (EDA) tools, and the wider community, will take place in Munich on the 15th to the 17th of September. Coinciding with the first weekend of Oktoberfest, hotel prices are rising, so we encourage you to plan your trip now. It will definitely be a worthwhile experience!

ORConf has deep connections to the history of the FOSSi Foundation. It emerged from the OpenRISC and OpenCores ecosystem with the aim of placing the Free and Open Source Silicon ecosystem in the hands of the community. Although ORConf initially stood for OpenRISC Conference, it quickly expanded beyond OpenRISC. Beginning as a small team meeting in 2012, it became the platform for the first-ever presentation of RISC-V in 2014. Since then, interest has steadily grown, fuelled by fascinating projects involving open source EDA tools and the availability of open source Process Design Kits (PDKs) and affordable chip production.

ORConf has had numerous highlights over the years, including presentations by Wilson Snyder on Verilator, the introduction of lowRISC, engaging plenary discussions on licenses, the resurgence of cocotb, and the showcasing of countless remarkable projects by academia, hobbyists, and industry. The conference attracts individuals from large companies who attend to stay updated on exciting developments and network with like-minded individuals from academia and hobbyists.

We sincerely hope to see you in Munich this year. If you have any questions or need assistance with accommodation, please don't hesitate to reach out to us - you can get in touch [on the ORConf website](https://orconf.org/), where you can also register to attend for free or purchase Professional-tier tickets.

_-Stefan Wallentowitz, Director, FOSSi Foundation_

<img src="/blog/2023-07-11-ecl64/germanflag.jpg" style="max-width:100%" />

## Germany's BMBF Seeks Open-Source Design Tools to Further "Chip Sovereignty"


Germany's Federal Ministry of Education and Research (BMBF) is calling for proposals of research projects on open-source chip design tools and methodologies, as it seeks to improve the nation's sovereign chip development capabilities and lesson its reliance on proprietary closed-source technologies from foreign nations.

"The BMBF is funding projects to research new design tools and methods as well as innovative chip designs with a focus on open-source processes for new microelectronics," the organisation writes, in translation.

"Open-source design tools create the conditions for mobilising the creativity and innovative power of science and offer the potential to significantly improve the training of talent and specialists at universities. Furthermore, both the further development of existing open-source design tools and the research into design tools for new technologies are the subject of the guideline.

"The guideline serves to build up technology-open tool chains in the medium and long term, to close gaps in design processes and thus to promote local chip and system innovations. The innovations created on the basis of the guideline should contribute significantly to a significant improvement in availability and thus resilience in the microelectronic value chain in Germany."

Those interested in applying can find out more, in German, [on the BMBF website](https://translate.google.com/website?sl=auto&tl=en&hl=en-US&client=webapp&u=https://www.bmbf.de/bmbf/shareddocs/bekanntmachungen/de/2023/06/2023-06-02-Bekanntmachung-Chipentwicklung.html); applications close at the end of the month.

<img src="/blog/2023-07-11-ecl64/computerraria.jpg" style="max-width:100%" />

## Computerraria Does Away With the FPGA, Implements a RISC-V Core in Terarria


Engineering physics student Xander Naumenko has, like many before him, implemented his own processor core based on the free and open-source RISC-V instruction set architecture - but rather than writing it in a hardware description language and running it on an FPGA, he's implemented it entirely within the sandbox game Terarria.

I've been working on this for over six months now," Xander says of his work, "and thought it's cool enough that others might be interested in learning about it. By emulating a complete RV32-I instruction set inside the wiring system of Terraria, we push back speeds to the early '70s era.

"Inside the game there's a mechanic called 'wiring' which lets you trigger certain tiles such as opening doors or activating traps. When I say I've 'created a computer in Terraria' what I mean is that I've completely simulated the inner workings of a regular computer, except instead of electronics I did it inside of a video game world."

Xander's Computerraria is powerful enough to run games of its own, displayed within the game on which it is implemented, though it's not exactly the fastest RISC-V core around: "Running without the [WireHead] accelerator mod, the computer runs at around 0.1 instructions per second," Xander explains. "When using the mod I get around 5,000 instructions per second."

The files required to reproduce Computerraria are available [in Xander's GitHub repository](https://github.com/misprit7/computerraria) under an unspecified open-source licence; more information is available in his explanatory video [on YouTube](https://youtu.be/zXPiqk0-zDY).

<img src="/blog/2023-07-11-ecl64/veribleindexer.jpg" style="max-width:100%" />

## Antmicro, Google Collaborate on Continuous Integration for the RISC-V VeeR Core Family


Antmicro has written up an analysis of its recent work with Google on a continuous integration (CI) pipeline for the RISC-V VeeR core family, as featured in the Caliptra open-source root-of-trust project.

"In this note," Antmicro writes in a post published to the CHIPS Alliance website, "we describe Antmicro and Google’s collaborative effort focused on introducing a continuous integration (CI) based code quality checks, code indexing, coverage and functional testing pipeline into the RISC-V VeeR core family, as used within the Caliptra project.

"Many of Antmicro’s efforts focus around building not only the end products but the scalable CI solutions for collaborative hardware development environments that power them. Since Caliptra’s needs for establishing a more open process tie in perfectly with Antmicro’s and all of CHIPS Alliance’s open source-based approach to tooling, we gladly utilised our expertise to help advance VeeR, and by extension, the Caliptra project, in that direction."

The CI work includes the open-source SystemVerilog parser Verible, the riscv-dv framework, a VeeR-specific execution trace log parser, an indexer offering a complete code browser, and custom GitHub Actions runners which work around the current lack of complete open-source Verilator support for the Universal Verification Methodology (UVM) - something which is actively being worked on at present.

Antmicro's full write-up is available [on the CHIPS Alliance blog](https://www.chipsalliance.org/news/open-source-rtl-ci-testing-and-verification-for-caliptra-veer/).

<img src="/blog/2023-07-11-ecl64/tinytapeout.jpg" style="max-width:100%" />

## Matt Venn Announces the Launch of the New, Improved Tiny Tapeout 4


Matt Venn is preparing to open the fourth instalment of Tiny Tapeout, the multi-project wafer program which aims to introduce newcomers to the world of chip design with as low an entry price as possible - starting at just $100 to have a design manufactured in silicon and supplied packaged and on a PCB.

"This is a really big upgrade," Matt says of Tiny Tapeout 4. "We're now expecting around 50MHz bandwidth on the I/O [Input/Output]. Another upgrade is that we've now got more I/O, we have clock, reset, eight inputs, eight outputs, and eight bi-directional events.

"Tiny Tapeout makes it easier, quicker, and cheaper than ever before to get your designs onto a real chip. Open source tools, excellent documentation, and a vibrant community helps to make it much easier to get started and avoid common mistakes. Tiny Tapeout is for students, for makers, hackers, universities, and anyone who's interested in learning more or getting their designs made into a chip. Our learning resources and tools are free to use, and they're online to avoid download and installation problems."

Key to Tiny Tapeout's success is its take on the multi-project wafer concept: numerous smaller designs, starting at 160 by 100 microns, are placed within a single packaged chip - then your particular design can be tested using switches and a multiplexor on the test PCB. "One of my favourite things about this project," Matt says, "is that not only are you going to get your design but you're going to get everybody else's design as well."

Submissions will open for Tiny Tapeout 4 soon, Matt says, with more information available [on the project website](https://tinytapeout.com/).

<img src="/blog/2023-07-11-ecl64/vennaccelerator.jpg" style="max-width:100%" />

## Verifying a Physical Chip Against a Design - Using a Particle Accelerator


Inbetween preparations for the next Tiny Tapeout, Matt Venn has also been looking at a previously-produced application-specific integrated circuit (ASIC) designed using the Efabless platform and SkyWater's open-source process design kit.

"I've spent the last few years learning how to design chips, and I've got to be honest, it's been a pretty bumpy ride," Matt says. "One of the hardest things is once you get your chips back if something's wrong with it, how can you test it? When I make a PCB, I can easily inspect it. I can see if there's something wrong. But with a chip, all the wires and the transistors are hidden inside. There's no way to get to them. So is there a way to look inside the chip and trace the tiny wires?

"I met Tomas Aidukas last year at the Free Silicon Conference in Paris, where he showed some amazing images of a chip that he had scanned using a particle accelerator. I asked if I could bring my chip along and get it scan to and incredibly, he said yes. What we'll really be doing is using the accelerator to make X-rays a billion times more powerful than a hospital X-ray machine, we'll fire those through the chip and onto a custom image sensor that captures the scattered rays. With this data, we can build an image and look inside my chip."

Using the Swiss Light Source synchrotron at the Paul Scherrer Institut (PSI) in Switzerland, Matt was able to create images which can be directly compared to the design files submitted to the fab for production - verifying that the hardware received is indeed the same as expected.

A full look at the project is available [in Matt's YouTube video](https://us17.admin.mailchimp.com/campaigns/Paul Scherrer Institut (PSI) in Switzerland).

<img src="/blog/2023-07-11-ecl64/riscv-logo.jpg" style="max-width:100%" />

## RISC-V Summit 2023 Call for Participation Closes This Friday


RISC-V International has opened the call for participation for the RISC-V Summit 2023, to be helod on the 7th and 8th of November - with a members-only day on the 6th of November - in Santa Clara, California, but you'll have to hurry: submissions are due by Friday.

"This November," the event's organisers explain, "the global RISC-V community - including technical, industry, domain, ecosystem and special interest groups who define the architecture’s specifications - will meet in Santa Clara, California to share technology breakthroughs, industry milestones, and case studies to network and build relationships and to experience much more."

The call for participation seeks submissions in three categories: 25 minute presentations, 55 minute deep-dives, and 55 minute panel discussions. There are three technical tracks - the ISA and related track, the systems and software track, and the security track - plus industry tracks for high-performance compute and data centre, automotive, embedded and the Internet of Things (IoT), mobile, solution-focused case studies, and software and ecosystem.

Those interested in presenting can submit their proposals [on the event website](https://events.linuxfoundation.org/riscv-summit/program/cfp/#tracks-and-suggested-topics), but only have until Friday to do so.

<img src="/blog/2023-07-11-ecl64/tilelinkuh.jpg" style="max-width:100%" />

## The Caravan Framework gets Tile Link Ultra High (UH) Integration


Students Dev Chadha and Mohsin Siddiqui, under the mentorship of Shahzaib Kashif, have worked to integrate Tile Link Ultra High (UH) into the Caravan framework - bringing new capabilities and higher performance.

"Caravan aims to provide a unified framework for all Chisel based bus protocols that are supported to work on the FPGAs as well as on the ASIC flow," the students explain. "Tile Link UH, an extended protocol of Tile Link UL, brought new capabilities and improved performance to the framework by introducing atomic and hint operations, along with support for burst messages.

"Integrating Tile Link UH into the Caravan framework was a challenging yet rewarding journey that expanded the capabilities of the framework. By successfully implementing atomic and hint operations, addressing integration challenges, and conducting thorough testing and verification, we achieved enhanced functionality and improved performance.

"The integration of Tile Link UH opens up new possibilities for leveraging its advanced features within the Caravan framework," the pair says, "and paves the way for future advancements. We are proud of our team’s efforts and the collaborative spirit that drove this project to success."

The full project write-up is available [on the RISC-V International blog](https://riscv.org/blog/2023/06/integrating-tile-link-uh-in-the-caravan-framework-a-journey-of-enhanced-functionality/).

<img src="/blog/2023-07-11-ecl64/bluepadlock.jpg" style="max-width:100%" />

## The RISC-V Crypto Task Group Opens Public Review for Vector Cryptography Extensions


The RISC-V Crypto Task Group has announced the opening of the public review period for the Vector Cryptography Extensions, designed to accelerator and ease crypto-related operations on RISC-V hardware.

The review covers the Zvk extension, which in turn is a roll-up of a range of individual extensions: Zvbb, Vector Bit-manipulation used in Cryptography; Zvbc, Vector Carryless Multiplication; Zvkg, Vector GCM/GMAC; Zvkned, NIST Suite: Vector AES Block Cipher; Zvknha, NIST Suite: Vector SHA-2 Secure Hash: SHA-256; Zvknhb, NIST Suite: Vector SHA-2 Secure Hash: SHA-512 and SHA-256; Zvksed, ShangMi Suite: SM4 Block Cipher; Zvksh, ShangMi Suite: SM3 Secure Hash; Zvkn, NIST Algorithm Suite; Zvknc, NIST Algorithm Suite with carryless multiply; Zvkng, NIST Algorithm Suite with GCM; Zvks, ShangMi Algorithm Suite; Zvksc, ShangMi Algorithm Suite with carryless multiplication; Zvksg, ShangMi Algorithm Suite with GCM; and Zvkt, Vector Data-Independent Execution Latency.

"During the public review period," Krste Asanovic and Earl Killian, chair and vice-chair of the Unprivileged ISA Committee explain in a joint announcement, "corrections, comments, and suggestions will be gathered for review by the RISC-V Crypto Task Group. Any minor corrections and/or uncontroversial changes will be incorporated into the specification.

"Any remaining issues or proposed changes will be addressed in the public review summary report. If there are no issues that require incompatible changes to the public review specification, the Unprivileged ISA Committee will recommend the updated specifications be approved and ratified by the RISC-V Technical Steering Committee and the RISC-V Board of Directors."

The review runs through to the 23rd of July 2023, with a discussion already taking place [on the RISC-V ISA Dev mailing list](https://groups.google.com/a/groups.riscv.org/g/isa-dev/c/DpjkaK_1zQs/m/ubf7oSBFAgAJ); the latest versions of the extensions are available [on GitHub](https://github.com/riscv/riscv-crypto/tree/master/doc/vector), where issues and pull requests are welcomed.

<img src="/blog/2023-07-11-ecl64/airiscvsbc.jpg" style="max-width:100%" />

## Researchers Develop an AI for Chip Design, Churn Out a RISC-V CPU in Just Five Hours


A team of researchers from the Chinese Academy of Sciences, the University of Science and Technology of China, and Cambricon Technologies Corporation have released a paper detailing their "pushing the limits of machine design" with an AI capable of designing a RISC-V processor offering performance roughly equivalent to an Intel i486SX - in just five hours.

"To explore the boundary of machine design, here we present a new AI approach to automatically design a central processing unit (CPU), the brain of a computer, and one of the world's most intricate devices humanity have ever designed," the researchers write "This approach generates the circuit logic, which is represented by a graph structure called Binary Speculation Diagram (BSD), of the CPU design from only external input-output observations instead of formal program code.

"Compared to human-designed CPUs, our approach reduces the design cycle by about 1000x because the manual programming and verification process of traditional CPU design is completely eliminated. Thus, our approach changes the traditional CPU design flow and potentially reforms the semiconductor industry."

To prove the concept, the team taped out the chip and built a single-board computer around it, successfully booting a Linux-based operating system and showing it to have roughly the same performance as Intel's i486SX from 1991 - not exactly bleeding edge, but a great start for a novel and speedy design approach.

A preprint of the team's paper is available [on Cornell University's arXiv server](https://arxiv.org/abs/2306.12456).

<img src="/blog/2023-07-11-ecl64/sifivehifive.jpg" style="max-width:100%" />

## RISC-V is "The Next Revolution in the Microchip Industry," Says Nasdaq Author


Lenore Elle Hawkins, writing for the Nasdaq Stock Market, has described RISC-V as "the next revolution in the microchip industry," listing among its advantages its free and open-source licensing and its modular and customisable nature.

"For years, [the ISA] layer has been dominated by two major types: x86, the main choice of Intel and AMD, and Arm, the product of Softbank Group's subsidiary Arm Ltd.," Lenore writes. "However, a new player has emerged in recent years, challenging the status quo and disrupting the industry's dynamics. RISC-V (pronounced “risk five”) is an open-source ISA gaining significant momentum, so much so that MIT Technology Review listed it as one of the ten breakthrough technologies for 2023.

"The emergence of RISC-V poses a significant challenge to established players in the microchip industry and is a potential game-changer. As of the end of 2022, there were over 10 billion RISC-V cores in the market, and tens of thousands of engineers were working on RISC-V initiatives worldwide. The research firm Semico predicts that the number of chips that include at least some RISC-V technology will grow over 70% annually through 2027.

"Its open-source nature that fosters collaboration and innovation, customisation capabilities, scalability, energy efficiency, agility, and future-proof design," Lenore concludes, "make it an ideal choice for a wide range of applications that could redefine market standards."

The full article is available [on the Nasdaq website](https://www.nasdaq.com/articles/the-next-revolution-in-the-microchip-industry).


<img src="/blog/2023-07-11-ecl64/ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
