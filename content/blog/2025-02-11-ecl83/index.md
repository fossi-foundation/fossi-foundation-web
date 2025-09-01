---
layout: post
title: "El Correo Libre Issue 83"
description: El Correo Libre Newsletter, Issue 83
author: Gareth Halfacree
date: 2025-02-11
---

<img src="/blog/2025-02-11-ecl83/henleyhall.jpg" style="max-width:100%" />

## Latch-Up 2025 Opens for Registration, Talks

  
We know you’ve been waiting for this: Registration for this year’s Latch-Up conference in Santa Barbara, CA is now open!

Head over to the [Latch-Up event site](https://fossi-foundation.org/latch-up/2025) to register and learn more about the planned schedule. Now is also a great time to book your travel, if you haven’t done so already.

As part of the registration, you are able to submit a full talk or a lightning talk. We’re sure everyone has something cool to talk about and we look forward to what you have to share!  

### [Supporting Latch-up](https://fossi-foundation.org/blog/2025-01-30-latchup-2025-registration-is-open#supporting-latch-up)

Latch-Up is free of charge to attend, but not free to run. Events like Latch-Up are a great way to get your brand in front of a passionate audience of engineers. Please get in touch if you’d like to view our sponsorship packages and help make Latch-Up a success.

A variety of sponsorship packages are available for this year’s Latch-Up. You’ll find all of the details in our [sponsorship prospectus](https://fossi-foundation.org/latch-up/2025/latch-up_2025_sponsorship_prospectus.pdf).

We also need folks on the ground to lend a hand - so if you have any expertise in helping to run or staff such events, your help would be greatly appreciated, so please do [get in touch](mailto:latch-up@fossi-foundation.org) to let us know you’d like to help out.  

### [When and where](https://fossi-foundation.org/blog/2025-01-30-latchup-2025-registration-is-open#when-and-where)

The conference will be held during the weekend May 2-4 2025 at Henley Hall, University of California, Santa Barbara, USA.

All event information is available at [latchup.io](https://fossi-foundation.org/latch-up/2025).  
  
_-Philipp Wagner, Director, FOSSi Foundation_

<img src="/blog/2025-02-11-ecl83/tt6bringup.jpg" style="max-width:100%" />

## Tiny Tapeout 6 Analogue a Hit, TT10 Demoscene Contest Opens

  
Matt Venn’s Tiny Tapeout, an initiative to dramatically drop the barrier to entry for small-scale custom silicon creation through the use of tile-based multi-project chips, has celebrated a milestone: the successful bring-up of Tiny Tapeout 6, proving the platform suitable for analogue and mixed-signal designs in addition to pure digital projects.

Earlier this month Matt and other Tiny Tapeout members held a bringup party, hosted on [YouTube](https://www.youtube.com/watch?v=UnpSEdZgYKs), in which the chips from the Tiny Tapeout 6 production run were brought to life live on camera. Among the designs included in this run were Carsten Wulff’s [successive approximation analogue to digital converter (SAR ADC)](https://github.com/wulffern/tt06-sar), one of the first analogue designs submitted to a Tiny Tapeout run.

“It’s an ADC that I made and published in the Journal of Solid-State Circuits back in 2017,” Carsten explains [in his own bringup video](https://www.youtube.com/watch?v=xxq_HTKABZ0). “Originally it was made for 22nm FD-SOI [Fully-Depleted Silicon-On-Insulator], [and] it has since been ported to Sky130. [The original] was a nine-bit [ADC], I reduced it to an eight-bit for Tiny Tapeout. It’s a successive approximation ADC, it has a digital core, it has a comparator at the end.”

Carsten’s SAR ADC isn’t the only analogue design in Tiny Tapeout 6: Vincent Fusco contributed [an open-source equivalent](https://github.com/vincentfusco/tt06_555) to the classic 555 timer chip. “Blinking an LED using a 555 timer has long served as the ‘Hello World’ for novice electronics enthusiasts,” Vincent explains. "With the ongoing improvement in open-source tools and the emergence of communities like Tiny Tapeout, analogue chip design is now within reach for hobbyists, hackers, and other free individuals.

“In light of this, I decided to take on the challenge of building my own 555-style IC to learn the open-source flow, to see if I really could tape-out custom silicon for less than $250.00, and just for the fun of blinking an LED the hard way.” Matt digs further into the project, and other analogue experiments, in his [Open Source Silicon Steam #2 video](https://www.youtube.com/watch?v=Xs4UHDy313s&t=484s).

In addition to the bringup of Tiny Tapeout 6, Matt is bringing back [the Demoscene Contest from Tiny Tapeout 8](https://tinytapeout.com/competitions/demoscene-tt08-entries/). Inspired by digital artists of the eight- and 16-bit era, the contest asks entrants to create a chip design which outputs video using a VGA-compatible signal, audio via a standardised PMOD pinout, and optionally accepts gamepad input, all running from as few tiles as possible. Details are available [on the Tiny Tapeout website](https://tinytapeout.com/competitions/demoscene-tt10/); Tiny Tapeout 10 closes submissions on the 7th of March 2025.

<img src="/blog/2025-02-11-ecl83/donut.jpg" style="max-width:100%" />

## Andy Sloane’s ASIC Delivers Digitised Doughnuts

  
Andy Sloane has written up a project to develop what may well be the first chip dedicated to ray-tracing a toroid solid — a doughnuts, in other words, building atop a 2006 project to create an obfuscated C program whose doughnut-shaped source code would render an animated treat in ASCII art.

“For many years after coming up with donut.c, I wondered in the back of my mind if it could be simplified somehow, like maybe there was a way to raytrace a donut with a small chunk of code,” Andy explains. "In October 2023, I tweeted a dumb random epiphany where I figured out another way to do it which requires no memory, no sines or cosines, no square roots, no divisions, and technically, not even any multiplications. The whole thing can be rendered with just shifts and adds.

"It took almost another year to put this idea into action with an actual hardware implementation. In early September 2024, I submitted a four-tile design to Tiny Tapeout 8, taking up 0.8% of a 130nm process chip shared with many other designs. This chip is currently (as of January 2025) being manufactured by SkyWater Technologies, and if my design works, it will render [a doughnut] to a VGA monitor.

“This design is not rendering polygons,” Andy continues. “Instead, it’s making an iterative approximation of a ray-traced donut, and it is racing the VGA beam - every 39 nanoseconds, the monitor is going to show the next pixel, ready or not, practical considerations limit us to a ~50MHz clock, and we have no memory buffer whatsoever - so it doesn’t have enough time to do a good job; the polygonal appearance is a complete accident!”

The project was developed and submitted as part of the Tiny Tapeout 8 Demoscene Contest, and takes up around 7,000 standard cells. “With more die area, and/or a faster clock (which would need something more modern than the 130nm SkyWater process),” Andy notes, “this could be pipelined so that every pixel was perfectly rendered, but the point was to make it as small as I could.”

Andy’s full write-up is available [on his website](http://[https://www.a1k0n.net/2025/01/10/tiny-tapeout-donut.html), while the project source is available [on GitHub](https://github.com/a1k0n/tt08-vga-donut/) under the permissive Apache 2.0 licence. Testing of the physical chip itself is waiting manufacturing and delivery of the silicon from SkyWater, scheduled for later this year.

<img src="/blog/2025-02-11-ecl83/ferris.jpg" style="max-width:100%" />

## lowRISC Chief Gavin Ferris Talks Challenges and Milestones

  
Gavin Ferris, chief executive officer of open silicon specialist lowRISC, has been interviewed by Amit Chowdhry of Pulse 2.0 - and talks of topics ranging from the company’s milestones including in the OpenTitan hardware root-of-trust project and the challenges it has faced along the way.

“Silicon development has much higher barriers to entry than software. There’s a physical supply chain to reckon with, far fewer skilled engineers, the high cost of EDA tools and mask sets, and the need for eye-watering levels of up-front testing - or design verification (DV) - because ‘release early, release often’ doesn’t work for silicon,” Gavin tells Amit in the interview. “So projects have to be able to attract multi-year, significant funding and have the heavyweight governance to go along with that if they are to deliver commercially relevant outputs.”

Those challenges led to lowRISC adopting an approach in which it “learned from, and leveraged, the best parts of open source software development,” Gavin explains, but meant that it wasn’t as simple as adopting the exact same approach as open-source software development for open-source silicon. This, he says, led to the creation of the Silicon Commons project - and underpins the company’s work on OpenTitan, an open-silicon hardware root-of-trust developed in partnership with Google and others.

“We reached a major milestone in that journey this year with the first commercial-grade fully open-source silicon, OpenTitan, successfully developed with our partners and heading into its first socket in Chromebooks,” Gavin adds, referring to the “Earl Grey” design which recently entered RTL freeze and is to enter volume production this year. “It’s very exciting to see an open silicon solution being produced, adopted by a mainstream platform, and paving the way for future use.”

The full interview is available [on Pulse 2.0](https://pulse2.com/lowrisc-profile-gavin-ferris-interview/) now.

<img src="/blog/2025-02-11-ecl83/riscvspace.jpg" style="max-width:100%" />

## April Workshop Targets RISC-V in Space

  
The European Space Agency (ESA), working with Frontgrade Gaisler and RISC-V International, is to open the doors for an event which looks both forwards and upwards in terms of what is achievable with free and open-source silicon: the RISC-V in Space Workshop, taking place in Gothenburg, Sweden this April.  
  
“[The] RISC-V in Space Workshop 2025 will be hosted by Frontgrade Gaisler in their city of Gothenburg, Sweden,” the event’s organisers write. "Located on Sweden’s southwestern coast, and Kattegatt, an arm of the North Sea, Gothenburg, Sweden’s 2nd largest city, has a population of approximately 545,000 and is easily accessible by planes, trains and automobiles.  
  
“Topics of interest [include]: application of RISC-V in satellite systems, launchers, lunar and planetary exploration, and beyond; design considerations for space-based RISC-V processors; RISC-V processor resilience in space environments, fault tolerance approaches taken both in hardware and software implementations; RISC-V compilers, simulators, and debugging tools; AI/ML applications and tools for space using RISC-V; implementing secure communications and data integrity in space systems using RISC-V; collaborative efforts between the space industry, research organizations, and open-source RISC-V communities.”  
  
Confirmed keynote speakers for the event include European High Performance Computing Joint Undertaking (EuroHPC JU) programme manager Alexandra Jourfali, RISC-V International vice president for technology Andrea Gallo, ESA microelectronics engineer Boris Glass, ETH Zürich Microelectronics Design Centre director Frank Kagan Gürkaynak, AMD fellow Göran Bilski, Thales research engineer Jimmy Le Rhun, Semidynamics chief executive Roger Espasa, and Microchip technical fellow Ted Speers.  
  
Those interested in presenting during the event have a short window in which to submit an abstract, with submissions closing on the 19th of February; successful applicants will be notified on the 3rd of March. Tickets are available for attendees at €100 for students and €250 for regular attendees, plus Swedish VAT where applicable; the ESA has announced sponsorship for up to three tertiary education students.  
  
More information is available [on the event website](https://www.risc-v.space/wp/).

<img src="/blog/2025-02-11-ecl83/siliceasic.jpg" style="max-width:100%" />

## Sylvain Lefebvre Celebrates the First Silice ASIC

  
Sylvain Lefebvre, creator of the Silice hardware description language (HDL), is celebrating a major milestone for his project: the creation, through Tiny Tapeout, of the first hardware silicon defined in Silice, designed to render a voxel-based terrain.

“To me, this is crazy,” Sylvain writes. "When I started on FPGA and Silice back in 2018 I never _dreamed_ of one day having my own design on silicon. Thanks Tiny Tapeout, Matt Venn, and everyone involved who makes this possible!

"This renderer fits in two tiles of the Tiny Tapeout chip. That’s 161x225μm (130nm process), and roughly 3,000 gates. To squeeze it in there I rely a lot on memory: there is a PSRAM mod attached with ample memory for lookup tables. I am using [the] [Machdyne PSRAM PMOD](https://github.com/machdyne/qqspi).

“The algorithm is the famous Comanche 1992 ‘voxel terrain’ renderer,” Sylvain continues, referring to a rendering algorithm developed by NovaLogic for its MS-DOS helicopter shooter Comanche: Maximum Overkill, designed to provide more interesting terrain than the flat planes with occasional polygon mountain of its rivals. "However, I pre-compute many things in RAM to reduce the design size. The algorithm draws the screen column by column, left to right, and then steps along the ray in depth. Each step it draws small textures segment if they become visible. This requires computing 1/z, as well as stepping along the ray by x,y increments.

“I store all of that in memory (in the PSRAM PMOD): for each step, 1/z and x,y offsets along the ray. The terrain texture (height and color) is also fetched from memory. How do I put data in memory in the first place? Tiny Tapeout is an amazing project with amazing tools, and the demo board has a RP2040 onboard with MicroPython on it. So you can use that to initialise (‘flash’) data in the PSRAM PMOD before starting your design.”

Sylvain’s full write-up is available [in his Mastodon thread](https://mastodon.online/@sylefeb/113924343576976008), with additional information available [on GitHub](https://github.com/sylefeb/tt07-explorer/blob/main/docs/info.md) alongside links to the project’s Silice source code.

<img src="/blog/2025-02-11-ecl83/placeit.jpg" style="max-width:100%" />

## PlaceIT Delivers an Open-Source Chiplet Placement Solution

  
Researchers from ETH Zürich and the University of Bologna have unveiled a project which offers an open-source approach to 2.5D chiplet integration, delivering reduced latency over existing approaches.

“2.5D integration technology is gaining traction as it copes with the exponentially growing design cost of modern integrated circuits. A crucial part of a 2.5D stacked chip is a low-latency and high-throughput inter-chiplet interconnect (ICI),” Patrick Iff and colleagues explain in the abstract to their paper. "Two major factors affecting the latency and throughput are the topology of links between chiplets and the chiplet placement.

"In this work, we present PlaceIT, a novel methodology to jointly optimise the ICI topology and the chiplet placement. While state-of-the-art methods optimise the chiplet placement for a predetermined ICI topology, or they select one topology out of a set of candidates, we generate a completely new topology for each placement. Our process of inferring placement-based ICI topologies connects chiplets that are in close proximity to each other, making it particularly attractive for chips with silicon bridges or passive silicon interposers with severely limited link lengths.

“We provide an open-source implementation of our method that optimises the placement of homogeneously or heterogeneously shaped chiplets and the ICI topology connecting them for a user-defined mix of four different traffic types,” the team continues. “We evaluate our methodology using synthetic traffic and traces, and we compare our results to a 2D mesh baseline. PlaceIT reduces the latency of synthetic L1-to-L2 and L2-to-memory traffic, the two most important types for cache coherency traffic, by up to 28% and 62%, respectively. It also achieve an average packet latency reduction of up to 18% on traffic traces. PlaceIT enables the construction of 2.5D stacked chips with low-latency ICIs.”

The researchers’ paper is available in preprint [on Cornell’s arXiv server](https://arxiv.org/abs/2502.01449); PlaceIT itself has been published [on GitHub](https://github.com/spcl/placeit) under an unspecified open-source licence.

<img src="/blog/2025-02-11-ecl83/matrixsig.jpg" style="max-width:100%" />

## RISC-V SIG-Vector Works Towards an Integrated Matrix Extension

  
Matheus Ferst and Guido Araújo, members of the RISC-V Vector Special Interest Group (SIG-Vector), have penned an article highlighting ongoing work towards an integrated matrix extension for the instruction set architecture - focusing on a workload analysis of convolutional neural network (CNN) inference.

“Following the gap analysis done in the second half of 2023, the Vector Special Interest Group (SIG-Vector) has been working on specifying instructions to accelerate matrix operations. Two Task Groups were proposed to explore approaches that may be applicable to different markets,” Matheus and Guido explain. " The Attached Matrix Extension Task Group (AME-TG) has deep learning and other Artificial Intelligence-related workloads as the primary focus. The Integrated Matrix Extension Task Group (IME-TG) primarily focuses on the HPC market and proposes developing an instruction set that reuses the Vector Registers introduced by the Vector extension to perform matrix operations.

"In this work, we developed a QEMU TCG [Tiny Code Generator] plugin called Vector-Matrix Profiler (VMP) to investigate the potential impact of data movement between Vector and Matrix Registers. With POWER10’s MMA as a proxy for what a RISC-V IME implementation should look like, we used this plugin to instrument the execution of eight Convolutional Neural Networks (CNN) optimised to use the POWER10 matrix operations and profile the interaction between scalar, matrix, and vector instructions.

“The results show that this type of workload has very little interaction between vector and matrix registers,” the pair continue, “indicating that the two convolution algorithms tested do not currently explore this characteristic of the IME approach. The collected data can also give some insights into the type of vector operation that interacts with matrix data and would be helpful in an AME implementation to avoid sending data back to memory.”

The full write-up is available [on the RISC-V International blog](https://riscv.org/blog/2025/01/towards-an-integrated-matrix-extension-workload-analysis-of-cnn-inference-with-qemu-tcg-plugings/).

<img src="/blog/2025-02-11-ecl83/riscv.jpg" style="max-width:100%" />

## RISC-V International’s CEO Search is Underway

  
RISC-V International’s Andy Moore has announced that the organisation is broadening its search for a new chief executive officer, following the departure of Calista Redmond to lead artificial intelligence initiatives at Nvidia late last year.

“2024 was a year of accelerating momentum for RISC-V. Adoption grew across a diverse range of markets, the foundational new RVA23 Profile was ratified, and many new members joined this impressive ecosystem of innovators,” Andy claims of the year just closed. "As we enter 2025, the search is underway for a new CEO to lead RISC-V and further accelerate our momentum.

“This search is being led by an experienced, hand-selected committee comprised of members of the RISC-V Board of Directors, and Todd Moore, the interim CEO of RISC-V. The combined experience of the search committee will ensure the timely recruitment of a new CEO with the experience to take RISC-V into its next phase of its growth, accelerate adoption of the RISC-V ISA worldwide and promote the success of our member organizations. Meanwhile Todd Moore will work closely with the RISC-V community and leadership team to ensure a seamless transition.”

Calista had held the post of CEO at the organisation for over five years at the time of her resignation. "“My time with RISC-V has been a remarkable journey, shaped by the collective efforts and passion of an extraordinary community,” she wrote at the time. “Together, we have made incredible strides that have laid the foundations that will redefine computing for generations to come. Reflecting on the past few years, I am filled with immense pride in what we have achieved as a team.”

No timescale for the appointment of a replacement CEO has yet been announced.

<img src="/blog/2025-02-11-ecl83/tux.jpg" style="max-width:100%" />

## Linux Patches Introduce Xen RISC-V Guest Support

  
Developer Slavisa Petrovic, of Serbian consultancy firm RT-RK, has submitted a patch set designed to bring support for running RISC-V guests under the Xen hypervisor - though the project is still a work-in-progress.

“This patch introduces initial support for running RISC-V as a Xen guest,” Slavisa explains in a post to the Linux kernel mailing list. “It provides the necessary infrastructure and stubs for Xen-specific operations.  
  
"Key changes include: modifications to the RISC-V kernel to integrate Xen-specific hypercalls and interfaces, with function implementations stubbed for future work; introduction of Xen-specific headers for RISC-V, including event handling, hypervisor interaction, and page management; stub implementations for memory management, grant tables, and context switching in the Xen environment, allowing further development and integration.”

Slavisa admits that the patches are a work-in-progress, stating that in addition to the stub implementations functions relating to event handling, hypervisor interaction, and page management “are defined but not yet implemented.” Fellow developer Milan Đokić has also confirmed plans to break the large patch down “into smaller logical parts” in order to release a “patch series in the next revision.”

The patch and its discussion thread are available to view on the [Linux kernel mailing list](https://lore.kernel.org/lkml/e4a649a7fdfc8fcf5f48a0bc4e76e5d546078083.1736868605.git.Slavisa.Petrovic@rt-rk.com/), in a post brought to our attention by [Phoronix](https://www.phoronix.com/news/Xen-RISC-V-Linux-Patches).



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
