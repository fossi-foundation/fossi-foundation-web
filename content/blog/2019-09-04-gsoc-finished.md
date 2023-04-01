---
layout: post
title: "GSoC 2019"
description:
category:
tags: []
author: Philipp Wagner
date: 2019-09-04
---

What an exciting summer!
We at FOSSi Foundation are happy to announce that all of our Google Summer of Code (GSoC) students this year successfully completed their projects.
For multiple years now, FOSSi Foundation acted as umbrella organization for multiple GSoC projects.
All projects were mentored by trusted community members, and we're extremely happy how well the projects went!
We owe a big thank you to all students and mentors, thanks to you, the free and open source hardware ecosystem is in a better place than before.


**Ákos Hadnagy** returned to GSoC this summer, making significant contributions to the "1st CLaaS" framework for developing hardware-accelerated web applications and microservices (where CLaaS stands for Custom Logic as a Service). 1st CLaaS provides the communication channel for applications to stream bits to and from custom hardware logic via REST requests and WebSockets. It reduces integration overhead for Amazon F1 FPGAs from months to hours, thereby bringing this burgeoning new world within reach of hobbyists and the open-source community. Ákos made two significant contributions to the project:

* First, he used Terraform to automate the provisioning (and destruction) of AWS EC2 instances (cloud CPUs) for the development of custom hardware kernels.
* Second, he utilized the Verilator open-source Verilog simulator to enable most hardware kernel development to be done without the need for AWS infrastructure. His solution runs about two orders of magnitude faster than the Xilinx simulation solution.

Ákos's contributions are in the [alessandrocomodi/fpga-webserver GitHub repo](https://github.com/alessandrocomodi/fpga-webserver).
Ákos summarized his work in a [Linkedin article](https://www.linkedin.com/pulse/paving-way-fpga-accelerated-web-applications-%25C3%25A1kos-hadnagy/).

Ákos was mentored by Steve Hoover.


**Alaa Salman**'s contributions in GSoC 2019 centered around the WARP-V RISC-V core generator written in TL-Verilog. Alaa first explored the integration of WARP-V with RocketChip, a Chisel RISC-V SoC from UC Berkeley. The goal was to leverage the RocketChip SoC infrastructure and swap out the CPU core for various WARP-V cores. This would enable Linux boot and performance studies with different WARP-V configurations. Alaa completed a proof-of-concept exercise to path-clear the various technologies involved, he identified the boundary at which this "lobotomy" would be performed, he defined the necessary logic changes, and he refined the timeline based on discoveries. This exposed some schedule risk, so Alaa's work was redirected to implementation characterization and optimization of WARP-V. Alaa generated insightful data showing area/clock-speed tradeoffs with different WARP-V configurations and tool settings, and he identified a key critical path that was addressed by a parameter change for a significant clock speed improvement.

Alaa's contributions are to the [stevehoover/warp-v GitHub repository](https://github.com/stevehoover/warp-v).
Alaa summarized his work in a [Linkedin article](https://www.linkedin.com/pulse/gsoc-2019-summary-alaa-salman-alaa-salman).

Alaa was mentored by Steve Hoover.


**Aquib Baig** worked on a notification system for [LibreCores](https://www.librecores.org).
He added the ability to inform its users about problems when analyzing a project on LibreCores, about the need to update credentials, and much more.
With this new notification system in place, we now have a feedback channel to our project owners, helping them to get the most of of LibreCores.
Read more about Aquib's work in his [summarizing blog post](https://www.aquibbaig.in/gsoc-2019-project-report/).

Aquib was mentored by Philipp Wagner with support from Amitosh Swain.


**Kunal Gulati** worked on integrating the [ao486 processor](https://github.com/alfikpl/ao486) into the [OpenPiton manycore research framework](http://parallel.princeton.edu/openpiton/). Recently, OpenPiton was extended as JuxtaPiton, which brought together cores of two different ISAs (SPARC + RISC-V) to explore how to build such a heterogeneous ISA system. Kunal's project was to connect an X86 core to bring a new form of ISA heterogeneity. Over the summer, he wrote a new memory transducer from the core's Avalon memory interface to OpenPiton's P-Mesh memory system and an I/O transducer to handle several of the legacy peripherals (timers, clock, interrupt controller). He modified the BIOS distributed with the Bochs X86 emulator to remove unused peripherals and was able to run this BIOS on ao486 connected to P-Mesh. On top of the BIOS, he built assembly tests in a boot sector which can access the standard peripherals (UART, SD, etc) in OpenPiton using memory-mapped I/O. Kunal did an amazing job to get all this working and we both learned a lot of low-level X86 details along the way. Thanks Kunal!

Kunal's [Medium article](https://medium.com/@kunalgulati29/juxtapiton-x86-support-coming-through-906e68a5806) explains his contributions more and links to the PRs that he made as part of the project.

Kunal was mentored by Jonathan Balkind.


**Nancy Chauhan** worked on improving LibreCores CI by example: switching the continuous integration for the [mor1kx OpenRISC CPU core](https://github.com/openrisc/mor1kx) to use LibreCores CI.
Her work included improvements to multiple tools used across the build pipeline, from Docker and Jenkins to yosys and edalize.
The CI [now includes](https://ci.librecores.org/blue/organizations/jenkins/Projects%2FOpenRISC%2Fmor1kx/) steps to run an Icarus Verilog simulation with different mor1kx configurations (e.g. with and without data caches), and a Yosys synthesis to report the resource usage of the core.

Nancy summarized her work in a [FOSSi Foundation blog post](https://fossi-foundation.org/2019/08/23/gsoc_LibrecoresCI_Report).

Nancy was mentored by Oleg Nenashev and Stafford Horne.


**Reshabh Sharma** worked on LLVM improvements for a RISC-V GPGPU.
Recently, as part of the evolving [BaseJump Manycore open source RISC-V GP-GPU effort](https://bjump.org/manycore), U. Washington taped out an open source RISC-V manycore processor with 496 cores that hits 695 Billion RISC-V instructions per second using 12 mm<sup>2</sup> of area. The silicon is up and running in the lab and broke several world records for both RISC-V instruction throughput and RISC-V energy efficiency. A second generation design is being developed based on results from the first generation, with a target of improving programmability. This GSoC project focused on extending the 32b RISC-V LLVM compiler implementation to allow a 32-bit RISC-V ISA to leverage 64-bit pointers for accessing a large pool of DRAM, but retaining 32-bit pointers for accessing local memory.
Reshabh Sharma tackled this complex task handily, navigating the perilous waters of LLVM, leveraging the expertise of the LLVM community, and explored many options until he finally found a combined solution that was effective.

A pull request with summary as comment is [available on GitHub](https://github.com/fossi-foundation/fossi-foundation.github.io/pull/23).
Reshabh summarized his findings in a [blog post at the FOSSi Foundation blog](https://fossi-foundation.org/2019/09/03/gsoc-64b-pointers-in-rv32).

Reshabh was mentored by Michael Taylor.


**Zach Zheng** improved the microarchitecture of Ariane, an open-source 64 bit, application-class RISC-V core. In particular, his contributions included IPC improvements by employing a new global predictor and making the processor a super-scalar implementation. To sustain the higher instruction throughput Zach had to widen the instruction fetch interface to support 64 bit fetch packages. This included modification to the instruction re-aligner which handles 16 bit compressed instructions. In the next phase, Zach had to adapt the branch-prediction interface to handle the widened instruction fetch interface. In addition, he added a new global predictor (GSHARE). Final he added a second issue port to the execute stage as well as another arithmetic logic unit (ALU) to take full advantage of the dual-issue capabilities. In addition, he benchmarked his contributions, both in IPC increase as well as FPGA resource utilization. For a detailed explanation, you can visit his [GSoC project page](https://zachzzc.github.io/gsoc-ariane/).

Zach was mentored by Florian Zaruba.

