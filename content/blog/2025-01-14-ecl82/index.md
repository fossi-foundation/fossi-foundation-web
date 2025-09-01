---
layout: post
title: "El Correo Libre Issue 82"
description: El Correo Libre Newsletter, Issue 82
author: Gareth Halfacree
date: 2025-01-14
---
<img src="/blog/2025-01-14-ecl82/ttulinux.jpg" style="max-width:100%" />

## Booting uLinux on Tiny Tapeout 6 Chips

  
Matt Venn has announced a breakthrough for the Tiny Tapeout programme: the successful first-boot of uLinux on silicon from Tiny Tapeout 6, using Hirosh Dabui’s KianV 32-bit RISC-V IMA system-on-chip included in the multi-project chip.

“I just booted uLinux on Tiny Tapeout 6,” Matt announced [on Mastodon](https://chaos.social/@matthewvenn/113747997235216349). “[A] very easy to use flashing tool by Uri [Shaked] made it easy to test Hirosh’s! Also big thanks to Mike [Bell] & [Leo Moser] for the PMOD we’re using with designs that need external memory.”

Tiny Tapeout delivers ultra-low-cost and readily-accessible silicon production using a multi-project chip approach: Hirosh’s SoC design is only one of a number of projects included in the chip, each of which can be selected for execution independently using a development board provided to participants. By going beyond the traditional multi-project waver approach, the costs of a small production run can be cut into finer slices than ever before - encouraging experimentation and educational experiments.

“First step: Connecting the QSPI PMOD to the bidirectional port of the demo board. This gives the system 128Mbit Flash and PSRAM (pseudo SRAM),” Mike Bell says of the steps required to boot uLinux on the TT06 chip. "The next steps can be carried out entirely from within the browser. First we need to write the binaries to the Flash at the correct offsets. This is easily accomplished via the Tiny Tapeout Flasher utility. It already has a preset for the KianV SoC to flash the files at the appropriate offsets. So I just press ‘FLASH’ and wait a few minutes.

“We then start the KianV SoC and connect to its serial output. All this can be done via the Tiny Tapeout Commander. I select the project, set the clock frequency to 30MHz and set up the UART console. The bootloader loads the kernel image and after a good two minutes Linux has booted successfully. It’s great to see what’s possible within the Tiny Tapeout ecosystem and how easy the bring-up was!”

More information is available [on Leo’s Mastodon account](https://fosstodon.org/@mole99/113758788955951960), while details on the Tiny Tapeout programme and all projects submitted so far are available [on the official website](https://tinytapeout.com/).

<img src="/blog/2025-01-14-ecl82/silicegithub.jpg" style="max-width:100%" />

## Silice Gains In-Browser Generation, Programming Powers

  
Researcher and maker Sylvain Lefebvre has unveiled a new feature for his Silice hardware description language: the ability to generate designs and program them to a target FPGA entirely in-browser.

“You can now generate your Silice designs and program your board directly on GitHub,” Sylvain explains. “Edit the files, push, the bitstream automatically builds and a link to program your board from your browser appears. This is inspired by Matthew Venn’s Tiny Tapeout (GitHub build system) and [Catherine] Whitequark’s YoWASP (web version of FPGA tools), in particular the web port of Gwenhael Goavec-Merou’s openFPGALoader which I modified to not require pthread and SharedArrayBuffer (so no extension a la CORS Unblock required).”

The toolchain is powered by GitHub Actions, a feature of Microsoft’s collaborative coding platform designed primarily for testing and continuous integration (CI) in which scripts can be automatically executed in response to code changes. Using an approach inspired by Tiny Tapeout, the Silice project template automatically builds Silice projects when they’re committed - both as a downloadable bitstream and as a link to flash the project directly in-browser.

“Why [am I] doing this? I’m teaching with these tools, and getting everyone started always proves challenging, despite a lot of energy spent on the problem,” Sylvain explains of the problem the system is designed to solve. “With web/online tools everything will hopefully get significantly easier for everyone. Also, I like the idea of the GitHub project page configuring the FPGA directly after building.”

More information is available [on Sylvain’s Mastodon thread](https://mastodon.online/@sylefeb/113594633345217128), with the project template available [on GitHub](https://github.com/sylefeb/silice-project-template/).

<img src="/blog/2025-01-14-ecl82/beehive.jpg" style="max-width:100%" />

## Beehive: A 100Gb/s Hardware Network Stack for FPGAs

  
Researcher Katie Lim and colleagues have officially released Beehive, a permissively-licensed 100Gb/s hardware network stack for FPGAs - targeting direct-attached accelerator hardware.

“Direct-attached accelerators, where application accelerators are directly connected to the data centre network via a hardware network stack, offer substantial benefits in terms of reduced latency, CPU overhead, and energy use,” Katie and colleagues from the University of Washington and Microsoft Research explain in an abstract to their paper introducing Beehive. "However, a key challenge is that modern data centre network stacks are complex, with interleaved protocol layers, network management functions, and virtualisation support. To operators, network feature agility, diagnostics, and manageability are often considered just as important as raw performance. By contrast, existing hardware network stacks only support basic protocols and are often difficult to extend since they use fixed processing pipelines.

“We propose Beehive, a new, open-source FPGA network stack for direct-attached accelerators designed to enable flexible and adaptive construction of complex network functionality in hardware. Application and network protocol elements are modularised as tiles over a network-on-chip substrate. Elements can be added or scaled up/down to match workload characteristics with minimal effort or changes to other elements. Flexible diagnostics and control are integral, with tooling to ensure deadlock safety. Our implementation interoperates with standard Linux TCP and UDP clients, with a 4x improvement in end-to-end RPC tail latency for Linux UDP clients versus a CPU-attached accelerator.”

“Beehive has been tested using Questa FSE and ModelSim. VCS has been used for some basic test cases. That being said, Beehive doesn’t do anything too wild with SystemVerilog and should also work in other hardware simulators,” Katie says of the project’s current status. “The FPGA flow has been tested for the Alveo U200. However, it only uses minor changes to the Corundum FPGA flow to bring in the correct files and set some parameters, so it could likely easily be ported to other boards supported by Corundum.”

Beehive is documented in a paper published in the [Proceedings of the 57th IEEE/ACM International Symposium on Microarchitecture (MICRO 2024)](https://ieeexplore.ieee.org/document/10764472); an open-access preprint is available [on Cornell’s arXiv server](https://arxiv.org/abs/2403.14770). Beehive itself is available [on GitHub](https://github.com/beehive-fpga/beehive) under the permissive BSD 3-Clause licence.

<img src="/blog/2025-01-14-ecl82/ebeamlitho.jpg" style="max-width:100%" />

## Homebrew Electron-Beam Lithography

  
Self-described hacker Peter Bosch has been working on the development of an electron-beam lithographer, as part of an effort to go hands-on with the full semiconductor fabrication process at home.

“I’ve always been curious about the technology that surrounds us,” Peter explains, "and if I want to understand how something works I’ve found that just reading about it isn’t enough. I’m only satisfied once I’ve been able to build at least a simple version of it from scratch. Now for electronics and computer science, that’s been a fun thing to do. But there’s always been a limit on how fundamental I could go with this, as you can’t easily get around using pre-made transistors or chips.

“Now, making semiconductors is a rather involved process consisting of many steps requiring complex equipment and hazardous chemicals. In [my] first video, I’ll focus on creating the microscopic patterns that will guide the other fabrication steps. This step is called lithography and there are a few different methods to do it. So most of the techniques project the image of a mask onto a chip using light. And I’d like to avoid having to make a mask but I could do what Sam Zeloof did and use a DLP projector strapped to a microscope. I instead decided to use a different method entirely. Besides light, it’s also possible to use electrons to create the pattern and instead of projecting an image I sweep a narrow beam of electrons over the surface. Tracing out the shapes I want to create.”

Born from a project, launched at the start of the pandemic, for reverse-engineering a processor from die photography, Peter’s work centres around a scanning electron microscope - which, he surmised, could be modified to act as a lithographer rather than a microscope. To prove the concept, Peter sensitised mylar-blanket targets to the electrons beamed from the SEM using a custom-mixed resist spread evenly over the target by attaching it to a spinning computer fan.

“Instead of producing a TV scan like pattern, like the SEM normally does, I provide vector scan signals like an oscilloscope clock or a Vectrex [vector-based games console],” Peter explains of the act of printing patterns on the target. “In this case I use a simple device containing a microcontroller and two 12-bit DACs [Digital to Analogue Converters] that scans out a list of trapeziums provided to it by a computer.”

Developing the resist reveals the test pattern, which can then be transferred to the aluminium layer of the mylar with an etchant made from phosphoric, nitric, and acetic acid diluted in water. “The best result I’ve acheived so far,” Peter says, “is [one] where I added a QR Code and a thin-film resistor.”

The full video is avilable on [Peter’s YouTube channel](https://www.youtube.com/watch?v=HA9p38AnByY) as the first in a planned series.

<img src="/blog/2025-01-14-ecl82/fusesoc.jpg" style="max-width:100%" />

## FuseSoC 2.4.2 Brings Features, Fixes

  
FOSSi Foundation director Olof Kindgren has delivered a new release of FuseSoC, the award-winning package manager and build tool collection for hardware description language projects - bringing a few bug-fixes and some new features beside.

“A new version of FuseSoC was just released,” Olof announced, of the project’s latest release, on his [Bluesky account](https://bsky.app/profile/olofkindgren.bsky.social/post/3lfbaz2urcc2t). “A couple of fixes and new features, but no dramatic changes. This hopefully also means less things that can break so updating should be smooth.”

Among the changes in the latest release are a new warning in the presence of non-deterministic virtual cores to prevent unexpected behaviours, a shift to always building non-cached generators in work_root, and new support for lists in file_input-parameters alongside file-specific defines. The new release also brings with it a new splitlib filter, and the addition of an SVN provider.

With no breaking changes included, FuseSoC 2.4.2 is a recommended upgrade to all users - while work progresses on the next release, including a restructuring of the CAPI2 schema which includes simplification amongst its goals.

The latest release of FuseSoC is, as always, available [on GitHub](https://github.com/olofk/fusesoc/releases/latest), alongside its source code under the permissive BSD 2-Clause licence.

<img src="/blog/2025-01-14-ecl82/riscv.jpg" style="max-width:100%" />

## RISC-V CX TG to Host Extension Logic Interface Workshop

  
The RISC-V Composable Custom Extensions Task Group (CX TG) has announced an ad-hoc meeting, taking the form of an Extension Logic Interface Workshop, to be held virtually on the 31st of January - with the invitation open to all in the community.

“The Composable Custom Extensions Task Group’s upcoming Extension Logic Interface Workshop (ad hoc TG meeting) is scheduled for Fri Jan 31, 2025, from 7a-10a Pacific Time,” CCX TG chair and vice-chair Darius Rad and Jan Gray announced in a mailing list message. "All presentations will be scheduled in the first two hours of the meeting, to be followed by up to one hour of additional general discussion comparing/contrasting the different systems.

“Each presentation will showcase one extension logic interface: its purpose, highlights, signalling (channels, port maps), state model, kinds of custom instructions supported, what architectural state (e.g., vector registers) is accessible to extensions, any pipeline considerations, and also, the logic interface’s current ecosystem, user community, CPU cores that support it, and exemplary uses in industry.”

Logic interfaces already confirmed as being presented during the event include ROCC, CV-X-IF, SCAIE-V, and CXU-LI; all from the RISC-V extension logic interface community are welcome, the chairs have confirmed.

Those looking to attend can find an agenda [on GitHub](https://github.com/riscv-admin/composable-custom-extensions/blob/main/meetings/2025-01-31-xli-agenda.md), while the meeting itself is to be held [on Zoom](https://zoom.us/j/99210229713?pwd=YjJNZEZzMVZ1akdFL2s0eEpvNmw4QT09) with the meeting ID 992 1022 9713 and passcode 822239 on the 31st of January 2025 from 0700 to 1000 Pacific Time.

<img src="/blog/2025-01-14-ecl82/hadesv.jpg" style="max-width:100%" />

## Tobias Scheipel Opens HaDes-V Hands-On Lab To All

  
Educator Tobias Scheipel has delivered a gift for anyone looking to learn about SystemVerilog RISC-V processor implementation, hardware and software co-design in assembly and C, and FPGA development: the HaDes-V open educational resource.

“I’m excited to share an early Christmas present for all students, educators, hardware enthusiasts, and the entire RISC-V International community: HaDes-V,” Tobias wrote in an announcement just prior to the end of 2024, "my Open Educational Resource (OER) for RISC-V microcontroller design, is now available to everyone!

"HaDes-V is a hands-on lab designed to help you implement a modular, pipelined 32-bit RISC-V processor from scratch. Originally developed by David Beikircher, Florian Riedl, and myself at Technische Universität Graz, this course combines RISC-V processor architecture implementation using SystemVerilog, hardware/software co-design with RISC-V assembly and C, step-by-step implementation with pre-compiled golden reference (just like solving a jigsaw puzzle), [and] real-world FPGA development with the [Digilent] Basys3 development board.

“Inspired by the principles of the RISC-V community, this project contributes to the growing open hardware movement, enabling accessible and customizable processor design for everyone. HaDes-V bridges the gap between theory and practice, empowering you to dive deeper into processor design, FPGA development, and the exciting possibilities of open hardware while building confidence in designing processors from scratch.”

More information is available [Tobias’ LinkedIn post](https://www.linkedin.com/posts/tscheipel_openeducationalresources-oer-risc-activity-7275057257246056449-4vQl/), while HaDes-V itself is available [on GitHub](https://github.com/tscheipel/HaDes-V) under the permissive MIT licence.

<img src="/blog/2025-01-14-ecl82/tux.jpg" style="max-width:100%" />

## Proposed Linux Patches Bring RISC-V 64k Page Size Support

  
A patch set submitted to the Linux Kernel Mailing List (LKML) by Bytedance engineer Xu Lu aims to boost performance of Linux-based operating systems on RISC-V processors by enabling support for a 64kB page size, up from the current 4kB limit.

“Some existing architectures like Arm support base page larger than 4k as their MMU [Memory Management Unit] supports more page sizes,” Xu explains. "Thus, besides hugetlb page and transparent huge page, there is another way for these architectures to enjoy the benefits of fewer TLB [Translation Lookaside Buffer] misses without worrying about cost of splitting and merging huge pages. However, on architectures with only 4K MMU, larger base page is unavailable now. This patch series attempts to break through the limitation of MMU and supports larger base page on RISC-V, which only supports 4k page size now.

“The key idea to implement larger base page based on 4k MMU is to decouple the MMU page from the base page in view of kernel mm, which we denote as software page. In contrary to software page, we denote the MMU page as hardware page.”

Xu submitted an earlier version of the patch set in November 2023, based on Linux 6.7-rc1; the latest version of the patch set is rebased on Linux 6.12, and includes adjustments to the page table entry shift designed to reduce page table memory use and the fixing of “some bugs” found in the original proposed patches. The engineer describes the current version as a Request For Comment (RFC), and has promised to release performance data in the near future - primarily to address criticisms regarding the overhead compared to using 4k pages with contpte support.

More information is available [in Xu’s post to the LKML](https://lore.kernel.org/lkml/20241205103729.14798-1-luxu.kernel@bytedance.com/), along with the resulting replies.

<img src="/blog/2025-01-14-ecl82/redmond.jpg" style="max-width:100%" />

## Calista Redmond Resigns as RISC-V International CEO

  
RISC-V International has announced a major change at the top: chief executive officer Calista Remond is moving on after more than five years in the role, with a search underway to find a replacement.

“It is with deep gratitude that I announce my resignation from RISC-V International as I’ve accepted a new role for the next step in my career,” Calista writes. "My time with RISC-V has been a remarkable journey, shaped by the collective efforts and passion of an extraordinary community. Together, we have made incredible strides that have laid the foundations that will redefine computing for generations to come. Reflecting on the past few years, I am filled with immense pride in what we have achieved as a team.

"Since joining RISC-V in March 2019, our shared vision has driven amazing progress. Membership has grown from 236 to over 4,600 members spanning 70 countries, and industry adoption has accelerated across automotive, AI, HPC, and embedded systems. With over two billion SoCs today and projections of 20 billion by 2031, RISC-V’s impact is undeniable. On the technical front, we’ve ratified 68 new specifications, expanded work groups to more than 80, and advanced software ecosystems with tools, collaboration, and global OS adoption. These milestones reflect the power of collaboration and a shared commitment to open innovation.

“Our global and local initiatives have strengthened RISC-V’s role as a global standard,” Calista continues, “fostering partnerships with governments, universities, and developers around the world. One of the most amazing things about RISC-V is how people around the world have adopted it locally to solve problems specific to them, while also engaging in a global movement. It has been a privilege to meet with and work alongside the worldwide RISC-V ecosystem and develop the standard together.”

The search for a successor for Calista, who leaves to become vice-president for global artificial intelligence initiatives at Nvidia, is currently underway, with more information available [on the RISC-V International blog](https://riscv.org/riscv-news/2024/12/risc-v-ceo-calista-redmond-resigns-after-5-years-of-progress/).

<img src="/blog/2025-01-14-ecl82/newsinbrief.jpg" style="max-width:100%" />

## News In Brief

-   [Matt Venn's Zero to ASIC Course experiments with chip-on-board instead of traditional packaging.](https://www.zerotoasiccourse.com/post/cob/)
-   [RISC-V International declares 2024 "a year of global growth and innovation."](https://riscv.org/blog/2024/12/risc-v-2024-a-year-of-global-growth-and-innovation/)
-   [...and explores the year's technical highlights in the RISC-V ISA and beyond.](https://riscv.org/blog/2024/12/exploring-risc-v-isa-developments-and-technical-highlights-from-2024/) [(Supporting video)](https://www.youtube.com/watch?v=Ronw27au6RE)
-   [Gaurav Singh reverse-engineers an unknown €12 Intel PCIe FPGA card to make a cheap dev board.](https://www.circuitvalley.com/2024/12/how-to-reverse-engineering-12-eur-intel-fpga-board.html)
-   [Tiny Tapeout chips from Multi-Project Wafer (MPW) runs one through five now available as limited-edition desk ornaments.](https://chaos.social/@matthewvenn/113764382154316288)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
