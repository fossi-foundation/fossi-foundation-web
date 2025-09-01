---
layout: post
title: "El Correo Libre Issue 76"
description: El Correo Libre Newsletter, Issue 76
author: Gareth Halfacree
date: 2024-07-09
---

<img src="/blog/2024-07-09-ecl76/euroflag.jpg" style="max-width:100%" />

## Europe Looks for a Roadmap Towards Open-Source EDA

  
Earlier this year, more than 500 academic colleagues joined me in [drafting an open letter](https://open-source-eda-letter.eu/) to European funding agencies, emphasising the significance of open source EDA (Electronic Design Automation) tools. These tools not only align with the broader principles of open source software but also contribute to the realisation of the European semiconductor roadmap.  
  
As a result of this letter and subsequent discussions with EU representatives, the GoIT project has been entrusted by the Chips Joint Undertaking to facilitate a community-driven process for developing a roadmap for open source EDA in Europe. In an initial webinar held on May 14, approximately 200 participants attended presentations and engaged in discussions. The webinar recording [is now accessible](https://sl3.meet-modular.com/video/39a5013c39f98b9cfd14920c4b97a68344d49b6b-1715671757453/).  
  
On June 18, the community convened in person at Sorbonne University for a workshop to further the discussion. The workshop comprised four sessions covering a range of topics, generating lively exchanges. In the coming days, we anticipate launching a call for participation in workgroups for the roadmap process. Stay tuned and make sure not to miss it – we will also share it through our social media channels.  
  
Immediately after the workshop, the FSiC Conference was held at Sorbonne, featuring esteemed members of the Free and Open Source Silicon community. You can find more details on the presentations [here](https://wiki.f-si.org/index.php/FSiC2024).  
  
One of the highlights was the participation of Tina Tauchnitz and Korbinian Schreiber, who manage the German funding for Open Source EDA. In their [presentation](https://wiki.f-si.org/images/9/9f/German_Microelectronics_Design_Initiative_FSiC_2024_r1.pdf) (PDF), they not only summarized the funding programme De:Sign but also addressed common counter-arguments faced by the community. I highly recommend keeping those slides for future discussions and I am grateful for their leadership. I hope other national funding agencies and the EU will follow suit.  
  
If you missed FSiC, the next great Free and Open Source Silicon conference is just around the corner. [ORConf #10](https://orconf.org) will be held in Gotenburg, Sweden, from September 13 to 15. Make sure to submit your proposal and make your travel arrangements!  
  
_-Stefan Wallentowitz, FOSSi Foundation Director_

<img src="/blog/2024-07-09-ecl76/fossifreakout.jpg" style="max-width:100%" />

## Olof Kindgren Takes Stock, Celebrates 2023's "FOSSi Freakout"

  
FOSSi Foundation director Olof Kindgren has penned a retrospective of 2023, declaring it the year of the "FOSSi freakout" as his award-winning bit-serial RISC-V CPU design celebrates its fifth birthday, FuseSoC hits version 2.0, and Olof himself walks away with another award for the trophy cabinet.  
  
"At the RISC-V Summit I was awarded a Community Contributor award," Olof explains of the latter. "I was really happy to receive that and to hear that the open source contributions I do are actually acknowledged and appreciated. So, big thanks for that.  
  
"This was the year when we resumed our on-site conferences after doing our virtual FOSSi Dial-Up series for a few years," Olof continues of the FOSSi Foundation's activities over the prior year. "We did [Latch-Up in Santa Barbara](https://www-archive.fossi-foundation.org/latchup/2023/) and [ORconf in Munich](https://orconf.org/2023/), and both events were great successes. Hope to see you all at our future events. Fellow FOSSi Foundation director Philipp Wagner also did a well-received [open source chip design talk](https://archive.fosdem.org/2023/schedule/event/open_source_chip_design/) at the FOSDEM main track.  
  
"The award-winning SERV, the world's smallest RISC-V CPU turned five years old. It was also the year when SERV got its big sister, QERV, which provides a 3x speed-up for a marginal extra cost in area. There's also an ever bigger version called HERV on its way.  
  
"During 2023 I found some time to work on [VeeRwolf](https://github.com/chipsalliance/VeeRwolf). The big new thing for [Edalize](https://github.com/olofk/edalize) the past year was the introduction of the Flow API. To sum it up, it's a complete revamp of how the Edalize backends work that enables new workflows, avoids code duplication, allows for external plugins, avoid unnecessary rebuilds and a lot more good things. In an attempt to collect all videos of my FOSSi projects, I made a [video gallery](https://www.award-winning.me/videos/). After that experience I decided not to add web design to my CV."  
  
Olof's full summary of the year recently closed is available [on his website](https://blog.award-winning.me/2024/06/fossi-freakout-2023.html).

<img src="/blog/2024-07-09-ecl76/socurellm.jpg" style="max-width:100%" />

## SoCureLLM Offers a New Approach to Security Verification - Using Large Language Models

  
Researchers from the University of Florida have written a paper describing SoCureLLM, a new approach to large-scale system-on-chip security verification and policy generation which attempts to harness the potential of large language model (LLM) generative artificial intelligence.  
  
"Contemporary methods for hardware security verification struggle with adaptability, scalability, and availability due to the increasing complexity of the modern system-on-chips (SoCs)," the researchers claim. "Large language models (LLMs) have emerged as a viable approach to address these shortcomings in security verification because of their natural language understanding, advanced reasoning, and knowledge transfer capabilities.  
  
"However, their application to large designs is limited by inherent token limitation and memorization constraints. In this paper, we introduce SoCureLLM, an LLM-based framework that excels in identifying security vulnerabilities within SoC designs and creating a comprehensive security policy database. Our framework is adaptable and adept at processing varied, large-scale designs, overcoming the abovementioned issues of LLM.  
  
"In evaluations, SoCureLLM detected 76.47% of security bugs across three vulnerable RISC-V SoCs, outperforming the state-of-the-art security verification methods. Furthermore, assessing three additional large-scale RISC-V SoC designs against various threat models led to the formulation of 84 novel security policies, enriching the security policy database. Previously requiring extensive manual effort to craft, these newly generated security policies can be used as guidelines for developing secured SoC designs."  
  
The team's experiments focused on three known-vulnerable RISC-V system-on-chip designs: the PULPissimo-based hack@dac 2018, the TrustHub benchmark SoC, and the Ariane-based HOST 2022; the security policy generation experiments additionally used the CVA6, lowRISC Ibex, and CV32E40P RISC-V designs.  
  
The full paper is available [on the IACR's ePrint server](https://eprint.iacr.org/2024/983) under open-access terms.

<img src="/blog/2024-07-09-ecl76/ara2.jpg" style="max-width:100%" />

## Ara2 Delivers an Open-Source RISC-V Processor with RVV 1.0-Compliant Vector Processing

  
Researchers at the Integrated Systems Laboratory (IIS) of ETH Zurich and Stanford University, working with the Huawei Zurich Research Centre, have released Ara2 - an open-source RISC-V processor which offers vector processing capabilities fully compliant with the ratified version of the RISC-V Vector (RVV) extension.  
  
"In this paper, we present Ara2, the first fully open-source vector processor to support the RISC-V V 1.0 frozen ISA," the researchers write in their abstract. "We evaluate Ara2's performance on a diverse set of data-parallel kernels for various problem sizes and vector-unit configurations, achieving an average functional-unit utilization of 95% on the most computationally intensive kernels. We pinpoint performance boosters and bottlenecks, including the scalar core, memories, and vector architecture, providing insights into the main vector architecture's performance drivers.  
  
"Leveraging the openness of the design, we implement Ara2 in a 22nm technology, characterise its PPA metrics on various configurations (2-16 lanes), and analyse its microarchitecture and implementation bottlenecks.  
  
"Ara2 achieves a state-of-the-art energy efficiency of 37.8 DP-GFLOPS/W (0.8V) and 1.35GHz of clock frequency," the researchers note. "Finally, we explore the performance and energy-efficiency trade-offs of multi-core vector processors: we find that multiple vector cores help overcome the scalar core issue-rate bound that limits short-vector performance. For example, a cluster of eight 2-lane Ara2 (16 FPUs) achieves more than 3x better performance than a 16-lane single-core Ara2 (16 FPUs) when executing a 32x32x32 matrix multiplication, with 1.5x improved energy efficiency."  
  
The team's work has been published in the journal [_IEEE Transactions on Computers_](https://www.computer.org/csdl/journal/tc/2024/07/10500752/1Warb1R886Y) under closed-access terms; an open-access preprint is available [on Cornell's arXiv server](https://arxiv.org/abs/2311.07493v2).

<img src="/blog/2024-07-09-ecl76/mirmis.jpg" style="max-width:100%" />

## Yosys Shines a Spotlight into Space, Highlights the MIRMIS Project

  
The latest Yosys community spotlight focuses on the Modular Infrared Molecules and Ices Sensor (MIRMIS) project, part of the European Space Agency's Comet Interceptor mission scheduled to launch in 2029.  
  
"The Space Instrumentation group at the University of Oxford is building the common structures and mechanisms for MIRMIS, building and calibrating the TIRI sensor, integrating the MIR/NIR sensors, and building MIRMIS’ command and data-handling unit (CDHU)," Oxford engineer Liam McSherry explains.  
  
"The CDHU is the interface to the spacecraft and is based around a radiation-hard microcontroller and radiation-tolerant FPGA that together process commands from Earth, control pointing mirrors to track the target comet, operate the imaging sensors, and carry out housekeeping over the instrument’s multi-year trip through deep space.  
  
"YosysHQ support[s] FPGA development on MIRMIS by providing formal verification tools, including SymbiYosys for safety and liveness property checking and reachability checking. Verification and validation are huge parts of building a space instrument. Not only is deep space a radiation-harsh environment but getting there on a rocket puts a lot of forces on the relatively delicate glassware in optical systems and, once you’ve launched, there’s no replacing a broken part.  
  
"This is part of our reason for using Yosys and SymbiYosys in particular," Liam concludes. "Formal verification of the FPGA components gives us a lot more confidence and functional coverage than plain unit tests and testbenches can provide."  
  
The full spotlight is available [on the YosysHQ Blog](https://blog.yosyshq.com/p/community-spotlight-mirmis/) now.

<img src="/blog/2024-07-09-ecl76/serv13.jpg" style="max-width:100%" />

## SERV Hits Version 1.3, Stops Shrinking - But is Still Getting Better

  
FOSSi Foundation director Olof Kindgren has released a new version of SERV, the award-winning bit-serial CPU - and while the world's smallest RISC-V CPU hasn't got noticeably smaller than its latest release, SERV 1.3 does bring with it a wealth of enhancements.  
  
"We have now reached the point where the award-winning SERV, the world's smallest RISC-V CPU, won't get much smaller," Olof admits. "I still sometimes get ideas for how to make it smaller and then spend a week implementing something just to discover that nine out of ten times it actually made it bigger instead. But it's OK. Size matters, but the important thing is what you do with it.  
  
"Seymour Cray once said 'anyone can build a fast CPU, the trick is to build a fast system.' I would like to think the same goes for small CPUs and systems. With SERV being very small, care must be taken to avoid the rest of the system eating a lot of gates. One such system-level improvement was made by slightly rescheduling RF accesses which makes it possible to use one combined single-port SRAM for RF, code and data.  
  
"I have claimed many times that SERV is so simple that it is possible to simulate it at almost the same speed as we can run it on a chip. And now it is much easier to check if this is really the case. A new parameter in the Verilator testbench called cps (cycles per second) keeps track of how many simulated cycles we can run each real second. Another convenient simulation feature is the addition of a PC tracing parameter which just dumps the PC to a binary file after each instruction."  
  
Other new features in the latest release, including a move to supporting Zephyr 3.5 and information on SERV's larger QERV and HERV stablemates, are detailed [in Olof's blog post](https://blog.award-winning.me/2024/07/serv-13.html).

<img src="/blog/2024-07-09-ecl76/xvpfloat.jpg" style="max-width:100%" />

## Proposed Xvpfloat Extension Adds Variable Precision Computing to RISC-V

  
A team from the Université Grenoble Alpes have proposed a new extension for the RISC-V instruction set architecture, Xvpfloat, which would introduce variable precision computation - and which they have proven with a hardware implementation based on the CVA6 RISC-V core and a full software stack.  
  
"n the field of scientific computation, numerical instability is a growing concern as the size of problems is continuously increasing. Numerical compensation techniques are a common solution, but are often problem specific, time consuming and require skilled numerical analysts," the researchers claim.  
  
":An alternative is to simply increase the working precision of the computation, but this is difficult due to the lack of efficient hardware support for extended precision. We propose Xvpfloat, a RISC-V ISA extension for dynamically variable and extended precision computation, a hardware implementation and a full software stack.  
  
"Our architecture provides a comprehensive implementation of this ISA, with up to 512 bits of significand, including full support for common rounding modes and mixed precision arithmetic operations. The memory subsystem has full support for IEEE-754 extendable formats, and features specialized indexed loads and stores, and a prefetcher.  
  
"This processor," the team concludes, "can either operate standalone or as an accelerator for a general purpose host. We demonstrate that the number of solver iterations can be reduced up to 5X and, for some problems, convergence is only possible with very high precision (384-bits). This accelerator provides a new approach to accelerate large scale scientific computing."  
  
The researchers' paper has been published in the journal [_IEEE Transactions on Computers_](https://www.computer.org/csdl/journal/tc/2024/07/10488759/1VORypu0Yq4) under closed-access terms; a preprint is available [from the HAL open access archive](https://cea.hal.science/cea-04546949v1) (automatic PDF download warning.)

<img src="/blog/2024-07-09-ecl76/verilatorassert.jpg" style="max-width:100%" />

## Verilator 5.026 Brings Initial Assertion Control Support

  
Verilator, the popular open-source SystemVerilog simulator and lint system, has now received initial support for assertion control - thanks to a pull request from Antmicro.  
  
"Initial support for global assertion control [builds] on existing support for assertions available in the simulator," Antmicro explains of the new feature. "These changes simplify verification testing by letting developers enable or disable assertions as required by particular simulation stages or testing scenarios.  
  
"It is common practice to define assertions for the normal mode of operation of a device. For example, if a control register holds a specific value, then a constraint can be formulated on the logic driven from this register. However, during initialization of the device, there may be a period of time after reset when this register is not yet initialized to its proper value.  
  
"An engineer would then have to create an if statement to make sure that the assertion is only fired when the device reaches the normal mode of operation (and not at the initialization phase). Instead of writing elaborate, non-reusable assertions in all modules of the design, a more elegant solution to this problem is to turn off assertions for this module at the time of initialization  
  
"While the addition of global assertion control to Verilator can already help developers simplify their test suites," Antmicro admits, "a large part of the potential offered by this mechanism still remains on the table. In order to fully tap into this potential and enable full assertion control support, the simulator requires more granular criteria that will allow for more diverse verification use cases - which will be implemented in the future given enough customer interest."  
  
Antmicro's full announcement is available [on the company's blog](https://antmicro.com/blog/2024/06/initial-assertion-control-support-in-verilator/); additional information is available [in the pull request](https://github.com/verilator/verilator/pull/5010), which was merged in time for [the Verilator 5.026 release](https://github.com/verilator/verilator-announce/issues/70).

<img src="/blog/2024-07-09-ecl76/cherialliance.jpg" style="max-width:100%" />

## CHERI Alliance Founded as lowRISC Partners with Microsoft on CHERIoT-Ibex Production

  
Founding members have announced the formation of the CHERI Alliance, which aims to drive adoption of the project's Capability Hardware Enhanced RISC Instructions technologies for memory safety and software compartmentalisation - while CHERI pioneer lowRISC has announced a partnership with Microsoft to create a production-grade verison of the CHERIoT-Ibex core.  
  
"The CHERI Alliance will drive the adoption of enhanced security across the industry and ensure compliance with commonly defined standards," the organisation's founders say. "The initial founding members of the CHERI Alliance include Capabilities Limited, Codasip, the FreeBSD Foundation, lowRISC, SCI Semiconductor, and the University of Cambridge.  
  
"The Alliance governing board will include representatives from industry as well as academia, whose work will go beyond technology to unite industry leaders, system developers, users, and security experts to drive and promote CHERI as an efficient security standard."  
  
The announcement of the organisation's founding, ahead of a full launch in September this year, comes as lowRISC announces a separate partnership with Microsoft on developing a production-grade implementation of CHERIoT-Ibex, a CHERI-enhanced RISC-V core targeting the Internet of Things.  
  
"“We are delighted to be working with Microsoft to bring CHERIoT-Ibex to the very high quality required for deployment into commercial products," says Dr. Gavin Ferris, lowRISC CEO, of the collaboration. "This joint effort further demonstrates the success of our Silicon Commons approach to making chip designs radically more transparent and trustworthy."  
  
More information on the CHERI Alliance is available [on the official website](https://cheri-alliance.net/).

<img src="/blog/2024-07-09-ecl76/terapool.jpg" style="max-width:100%" />

## TeraPool-SDR Taps 1,024 RISC-V Cores for Next-Generation Software-Defined Radios

  
Researchers at ETH Zurich have designed a cluster platform designed to deliver high-performance yet energy-efficient compute for future software-defined radio platforms, using 1,024 RISC-V RV32 cores to deliver 1.89 tera-operations per second (TOPS).  
  
"Radio Access Networks (RAN) workloads are rapidly scaling up in data processing intensity and throughput as the 5G (and beyond) standards grow in number of antennas and sub-carriers," the research team claims. "Offering flexible Processing Elements (PEs), efficient memory access, and a productive parallel programming model, many-core clusters are a well-matched architecture for next-generation software-defined RANs, but staggering performance requirements demand a high number of PEs coupled with extreme Power, Performance and Area (PPA) efficiency.  
  
"We present the architecture, design, and full physical implementation of Terapool-SDR, a cluster for Software Defined Radio (SDR) with 1,024 latency-tolerant, compact RV32 PEs, sharing a global view of a 4MiB, 4,096-banked, L1 memory. We report various feasible configurations of TeraPool-SDR featuring an ultra-high bandwidth PE-to-L1-memory interconnect, clocked at 730MHz, 880MHz, and 924MHz (TT/0.80V/25°C) in 12nm FinFET technology.  
  
"The TeraPool-SDR cluster achieves high energy efficiency on all SDR key kernels for 5G RANs," the team claims, "[including] Fast Fourier Transform (93 GOPS/W), Matrix-Multiplication (125 GOPS/W), Channel Estimation (96 GOPS/W), and Linear System Inversion (61 GOPS/W). For all the kernels, it consumes less than 10W, in compliance with industry standards."  
  
The team's work has been published in the [_Proceedings of the Great Lakes Symposium on VLSI 2024 (GLSVSLI '24)_](https://dl.acm.org/doi/10.1145/3649476.3658735) under open access terms.

<img src="/blog/2024-07-09-ecl76/yosystalks.jpg" style="max-width:100%" />

## Yosys User Group 7 Lightning-Talk Videos Available Now

  
The Yosys team has announced that recordings of lightning talks given at its seventh user-group meetup are now available on YouTube, covering topics ranging from an FPGA ASIC Simulator built for the Tiny Tapeout project to the Tillitis open-source USB security key.  
  
The six-video playlist opens with Pat Deegan's talk on building an ASIC simulator for the Tiny Tapeout project, Matt Venn's effort to democratise chip design by combining multiple submitted projects on a single chip in order to drive down the cost of seeing your design implemented in silicon.  
  
Next in the list is Frans Skarman's presentation on using a Raspberry Pi Camera Module as an input on an FPGA, rather than the single-board computer for which it was designed. Martin Heredia follows with a talk on teaching digital design using only open-source FPGA tools, with Sasko Simonovski then presenting on the Tillitis open-source USB security dongle project.  
  
Ashe Connor's talk covers combining the Chisel hardware description language with C++, "leaning on Yosys for all the hard work," while Christopher Lozinski closes the presentations with a look at stack versus register machine soft cores.  
  
All the aforementioned videos are live now on the YosysHQ YouTube channel, gathered into [one handy playlist](https://www.youtube.com/playlist?list=PL-ggbobZGIQuMGBkQgubVbJ1jffe2k18O) for ease of access.

<img src="/blog/2024-07-09-ecl76/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News in Brief

-   [Angelo Jacobo has launched a blog post series detailing his work on the UberDDR3 open-source memory controller project.](https://www.openiphub.com/post/uberddr3-an-opensource-ddr3-controller-post-1)
-   [Wei Wu, of ISCAS' PLCT Labs, calls for help in composing a "wish list" of software not yet ported to the RISC-V architecture.](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/OV7vNkh7NeI)
-   [Paper: Occamy - A 432-Core 28.1 DP-GFLOP/s/W 83% FPU Utilization Dual-Chiplet, Dual-HBM2E RISC-V-based Accelerator for Stencil and Sparse Linear Algebra Computations with 8-to-64-bit Floating-Point Support in 12nm FinFET, Paulin et al.](https://arxiv.org/abs/2406.15068)
-   [Will Green's "cheat sheet" aims to make RISC-V assembler more accessible.](https://projectf.io/posts/riscv-cheat-sheet/)
-   [Paper: RISC-H - Rowhammer Attacks on RISC-V, Marazzi et al (PDF warning).](https://dramsec.ethz.ch/papers/RISC-H_dramsec24.pdf)
-   [Canonical commits to RISC-V support, adds more platforms to its Ubuntu RISC-V port offerings.](https://ubuntu.com//blog/empowering-risc-v-with-open-source-through-ubuntu)
-   [RISC-V Summit Europe 2024 videos now available on the RISC-V International YouTube channel.](https://www.youtube.com/@RISCVInternational/videos)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
