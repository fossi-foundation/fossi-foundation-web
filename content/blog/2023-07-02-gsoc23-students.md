---
layout: post
title: GSoC Class of 2023
description: ""
category:
tags: []
author: Jonathan Balkind
date: 2023-07-02
---

The FOSSi Foundation is happy to introduce our Google Summer of Code Class of 2023 projects.
This year we are grateful that we have been granted six slots by Google to support projects and students.
We are thankful for all mentors who volunteered to supervise students, and we're looking forward to a great summer working together on Free and Open Source Silicon projects.

These projects are our "GSoC Class of 2023".
Please give our students a warm welcome!

### TinyParrot: A minimal BlackParrot RISC-V Multicore variant (Abdul Muheet Ghani)

Mentored by Dan Petrisko and Stefan Wallentowitz

The objective of this project is to reduce the size of BlackParrot, a validated open-source, Linux-capable, cache-coherent, RV64GC multicore, and make it even smaller. The project will explore various optimization techniques, such as parameterizing out support for the RISC-V MFD extensions or remapping FPGA primitives using the portability layer in BaseJump STL. Addressing Size Limitations to Make BlackParrot Multicore Accessible: The problem being solved in this project is to reduce the size of the BlackParrot multicore design to make it even smaller, so that it can fit into affordable educational FPGA boards, such as the Z2, using the ZynqParrot infrastructure. This would make it more accessible for students and researchers who may not have access to expensive hardware, while still providing a validated and efficient multicore design for educational and research purposes. An Approach to Address BlackParrot Multicore Size Limitations: The plan to solve the problem of size limitation of BlackParrot multicore is to parameterize the RISC-V MFD extension from it. By removing support for this extension, the design can become smaller and more streamlined, which will make it easier to fit into affordable educational FPGA boards while still maintaining its core functionalities. This approach is one of the various optimization techniques that will be explored in the project to reduce the size of the multicore design. Deliverables: The deliverables for this project include parameterizing the M, D, and F extensions of RISC-V in the BlackParrot multicore design. After parameterization, the design will be implemented and run on an FPGA using the ZynqParrot infrastructure. The FPGA build report will be compared before and after parameterization to evaluate the effectiveness of the optimization technique in reducing the size of the design.

### Circuit Visualization with Makerchip Platform (Chaitravi Chalke)

Mentored by Steve Hoover and Bala Dhinesh

The Makerchip platform has added custom visualization support for circuit simulations, allowing for improved insights into microarchitectural behavior and circuit debugging. This project seeks to extend the capabilities of the platform by implementing customized circuit visualization for various circuits, including SweRV, SERV, BaseJump STL, and fundamental circuits for educational purposes. Additionally, the project will incorporate neural networks and gamified circuit design visualization to further enhance the user experience. This feature will provide a clearer understanding of how each step of the code is functioning, leading to improved insights and faster debugging. By enabling users to visualize and analyze circuits in a more efficient and engaging manner, this project aims to improve the overall functionality and usability of the Makerchip platform.

### Parameterized device layouts for GF180MCU (Qurrat ul ain Alam)

Mentored by Tim Edwards and Stefan Wallentowitz

Throughout this project, I hope to gain a firmer understanding of TCL scripting and the backend working of parameterized devices and hopefully make some new ones too these devices are used many times while using magic to makes our work easier. This project will help me in a deeper understanding of how each command in the command line works in magic and how we can make some changes in its scripts to make it to improve user inference. In terms of the project, the goal is to work in scripts to draw devices like LDNMOS, LDPMOS, bipolar transistors, photodiodes, Avalanche Diode, etc as well as fixing a few devices that are known to draw incorrectly for some parameter values.

### Improving SDF support in Icarus Verilog (Leo Moser)

Mentored by Tim Edwards, Mohamed Shalan, and Cary R

When you design a digital circuit, you want to make sure that all timings are correct, even post-layout. Therefore, the gate level netlist is annotated with delays extracted from the layout. The file format that contains these delay and timing information is called Standard Delay Format (SDF). Icarus Verilogs' SDF implementation has shortcomings in the following categories:

1. Wire / Interconnect delays
2. Conditional path delays
3. Timing checks

Work needs to be done on these categories, all while supporting related bugs as we more completely test gate level simulations. With the work proposed here, I would like to improve Icarus' SDF support to simulate SDF back-annotated timing simulations for the open SKY130 PDK. The deliverables for this project are:

1. Implementing the SDF `INTERCONNECT` feature
2. Writing tests for the regression suite
3. Example of a SDF back-annotated timing simulation using the SKY130 PDK

Weekly posts can be found on his [blog](https://mole99.uber.space/).

### Enhancing OpenPiton+Ariane SoC With an Open-Source Advanced Interrupt Architecture (Kinza Qamar Zaman)

Mentored by Jonathan Balkind and Sandro Pinto

The Platform Level Interrupt Controller (PLIC) is the de facto interrupt controller in RISC-V systems. However, the specification has intrinsic limitations regarding scalability and feature richness, e.g., it lacks support for Message Signal Interrupts (MSI) and virtualization. The RISC-V Advanced Interrupt Architecture (AIA) is the new reference specification for interrupt handling. RISC-V International has just ratified the AIA specification. This project aims to integrate an (in-house) open-source AIA IP into the OpenPiton+Ariane platform and conduct an in-depth evaluation of the performance and suitability for general-purpose, multithreaded, manycore processors.

### Enhancing OpenPiton+Ariane With a High-Performance Data Cache (Noelia Oliete Escuín)

Mentored by César Fuguet and Jonathan Balkind

As the demand for High-Performance Computing (HPC) continues to grow, there is a need for open-source solutions that can deliver the performance required by modern applications. Different open-source architecture frameworks have been developed by the community, like OpenPiton, however, all of them present performance limitations that impact their ability to execute computationally-intensive tasks. OpenPiton is an open-source framework for designing many-core processors. Although OpenPiton was originally developed for SPARC v9 architectures, currently it is also compatible with different core architectures (RISC-V 32-bit, RISC-V 64-bit, x86, and SPARCv9). In this project, we will focus on improving the performance of the integration of CVA6/Ariane into OpenPiton (OpenPiton+Ariane). The architecture of OpenPiton consists of one chipset and one or more tiles. The chipset houses modules used to communicate the tiles with the peripherals, such as the UART. The tile is used to build the mesh for many-core designs. In these designs, the tiles are interconnected by three NoC routers to generate the mesh. Each tile comprises the three NoC routers, the Ariane core, and the cache hierarchy, which consists of Ariane’s private L1 data and instruction caches, a private L1.5 cache and a shared distributed L2 cache. Despite the fact that OpenPiton offers many advantages, it presents performance limitations that restrict its adoption in the HPC field. In this project, we will improve the performance of OpenPiton by replacing the L1 data cache of Ariane with the High-Performance, Multi-Requester, Out-of-Order, L1 data cache (HPDcache). In addition, other features such as the amount of L1.5 cache miss status holding registers (MSHRs) or the L1.5 cache associativity can also be improved in order to approach OpenPiton even closer to the HPC field.

