---
layout: post
title: "El Correo Libre Issue 49"
description: El Correo Libre Newsletter, Issue 49
author: Gareth Halfacree
date: 2022-04-14
---
<img src="/blog/2022-04-14-ecl49/verigpu.jpg" style="max-width:100%" />

## VeriGPU is a Permissively-Licensed ML GPU Core, "Loosely Based" on RISC-V

Machine learning researcher Hugh Perkins is working on a project to create an open-source graphics processing unit (GPU), with a view to being able to produce a physical chip suitable for acceleration of machine-learning workloads.

"I don't actually intend to tape this out myself," Hugh explains, "but I intend to do what I can to verify somehow that tape-out would work OK, timings OK, etc."

The VeriGPU - short for "Verilog GPU" - is built atop the RISC-V free and open-source instruction set architecture, but Hugh doesn't intend the project to stay fully compliant. Instead, VeriGPU will follow a "loose compliance" model: "Where RISC-V conflicts with designing for a GPU setting," Hugh explains, "we break with RISC-V."

The core design goal for the project is a core capable of running workloads written for the Heterogeneous-compute Interface for Portability (HIP), and hopefully boasting compatibility with the PyTorch deep-learning framework. Support for additional programming interfaces, including SYCL and CUDA, aren't a focus - but, Hugh says, he's open to their implementation.

"[I] intend to keep the cores very focused on ML [Machine Learning]," Hugh adds. "For example, brain floating point ('BF16') throughout, to keep core die area low. This should keep the per-core cost low. Similarly, Intend to implement only few float operations critical to ML, such as exp, log, tanh, sqrt."

More details on the project are available [on the VeriGPU GitHub repository](https://github.com/hughperkins/VeriGPU), where the source is made available under the permissive MIT licence.

<img src="/blog/2022-04-14-ecl49/riscv-uefi-frozen.jpg" style="max-width:100%" />

## RISC-V International Opens UEFI Protocol Spec to Public Review


RISC-V International has begun public review of the RISC-V Unified Extensible Firmware Interface (UEFI) Protocol Specification, to run through to early May.

Developed as the successor to the Basic Input/Output System (BIOS) which had driven most computers since they were referred to as "IBM Compatibles," the Unified Extensible Firmware Interface (UEFI) builds on work carried out at Intel for the Itanium platform in the late 90s.

Now standard among x86/x86-64 desktops, laptops, tablets, and servers, UEFI remains effectively incompatible with RISC-V-based systems - which is the issue the new protocol specification aims to resolve.

"RISC-V Platforms need special UEFI Protocols," the specification team explains. "Any new UEFI Protocol needs to be discussed and approved there before being merged. Once approved in RISC-V community, it can be added/referenced to the UEFI spec maintained by UEFI forum."

Following months of work, the RISC-V end of the specification has now been frozen - making it ready for public review. The latest version of the specification is available [on the RISC-V Non-ISA GitHub repository](https://github.com/riscv-non-isa/riscv-uefi/releases/tag/1.0-rc3), with corrections, comments, and suggestions welcomed through to the close of the review period on the 6th of May 2022.

<img src="/blog/2022-04-14-ecl49/xuantie-security.jpg" style="max-width:100%" />


## Alibaba's Xuan Jian Details XuanTie VirtualZone Security Extensions


Alibaba's Xuan Jian has written a blog post detailing XuanTie VirtualZone trusted execution environment (TEE) developed for the XuanTie C-Series RISC-V processor cores.

"The security extensions for RISC-V-based XuanTie C series processors [...] are developed based on RISC-V’s physical memory protection (PMP) mechanism and privileged architecture," Xuan explains. "Multiple mutually isolated and executable virtualized zones are created to form TEEs in RISC-V architecture.

"The purpose of this design is to protect software, memory, peripherals, and I/O within the zones from outside intrusions. Furthermore, processor resources, such as cache, interrupt, memory, and code execution, are isolated so that processors can be run in different zones at the same time.

"This solution does not require virtualisation support," Xuan adds. "It requires the capability if implementing multiple TEEs with the support of three privilege modes (U-mode, S-mode, and M-mode), as well as TF management."

Full details are available [on the RISC-V International blog](https://riscv.org/blog/2022/04/xuantie-virtualzone-risc-v-based-security-extensions-xuan-jian-alibaba/); T-Head, Alibaba's chip division, has previously released [the XuanTie OpenC906](https://github.com/T-head-Semi/openc906) and [OpenC910](https://github.com/T-head-Semi/openc910) cores under the permissive Apache 2.0 license.

<img src="/blog/2022-04-14-ecl49/vroom.jpg" style="max-width:100%" />

## VRoom! Takes Aim at High-End, Out-of-Order, Super-Scalar, Speculative RISC-V


Paul Campbell's VRoom! aims to do exactly what it says on the tin: High-performance compute for high-end systems, based on the RISC-V instruction set architecture and offering up to eight instructions per cycle (IPC).

"[VRoom! is a] very high-end RISC-V implementation," Campbell writes of the project, which implements the RV64-IMAFDCHB(V) architecture. "Goal, cloud server class."

The core design is out-of-order, super-scalar, and with speculative execution, with a goal of an eight IPC peak dropping to around four IPC for ALU-heavy operations. It supports multi-core implementations with two-way simultaneous multithreading, and while described as a work-in-progress has already hit the point of being able to boot Linux on an AWS-FPGA instance.

At present, the performance of the design sits at around 6.5 DMIPS/MHz - with Campbell looking to improve that as the project progresses. The whole core is made available under the reciprocal GNU General Public Licence 3, with commercial licensing offered.

More details on the project are available [on the Moonbase Otago website](https://moonbaseotago.github.io/index.html), while full source is available [on the project's GitHub repository](https://github.com/MoonbaseOtago/vroom).

<img src="/blog/2022-04-14-ecl49/silice-dualmemory.jpg" style="max-width:100%" />

## Sylvain Lefebvre Shows Off Dual-Core Dual-Memory-Interface Silice Functionality


Sylvain Lefebvre, creator of the Silice programming language for FPGAs, has shown off a new feature: the ability to create a dual-core RISC-V device with shared memory and parallel execution.

"Two RISC-V cores, two memory interfaces, executing in parallel from shared SPRAM and SPI flash ~ 2K LUTs," Sylvain writes alongside a short video demonstration. "Coming soon in Silice! Both cores can access both memories. While one core waits on SPI flash, the other is free to execute on SPRAM."

At the time of writing, the feature had yet to make it into the main branch of Silice - but was available by switching to the "draft" branch. "[The] draft branch is where work in progress happens," Sylvain explains, "but this is still very rough around the edges."

The short video demo is available [on Twitter](https://twitter.com/sylefeb/status/1507104033902837766), while Silice itself is [published to GitHub](https://github.com/sylefeb/Silice/) under the reciprocal GNU General Public Licence 3.

<img src="/blog/2022-04-14-ecl49/icesugar-nano.jpg" style="max-width:100%" />

## MuseLab Launches iCESugar-nano, iCESugar-Pro FPGA Boards


MuseLab has officially launched a pair iCESugar boards, low-cost FPGA development boards designed for RISC-V projects and released as source-available hardware - following component shortages halting production of the original iCESugar design.

"Due to the shortage of iCE40UP5k chip and the soaring price (the price of this chip has increased tenfold), we are no longer producing iCESugar boards for the time being," the company explains. "Please consider buy iCESugar-nano or iCESugar-Pro as an alternative, thank you very much!"

The iCESugar-nano is the smaller of the two, offering a Lattice iCE40LP1k-CM36 FPGA at its heart and three PMOD connectors - two six-pin, one 12-pin. The board has 1,280 logic cells, 64kB of RAM, 2MB of flash, one phase-locked loop, and three high-current LED drivers, while an on-board iCELink debugger provides drag-and-drop programming support.

The larger iCESugar-Pro, meanwhile, is a system-on-module design with a Lattice LFE5U-25F-6BG256C chip, offering 24k LUTs, 128kB SPROM, a phase-locked loop, SPI, I2C, a digital signal processor (DSP), and pulse-width modulation (PWM). The board is also Linux-compatible, with 32MB of SDRAM and 32MB of SPI flash, plus a total of 106 usable IOs - and, of course, the same iCELink debug support.

Both boards are available to buy [on the MuseLab Tindie store](https://www.tindie.com/stores/johnnywu/) now, priced at $19 and $60 respectively. Schematics and source code, meanwhile, are available [on the iCESugar-nano](https://github.com/wuxx/icesugar-nano/blob/main/schematic/ICESugar-nano-v1.2.pdf) and [iCESugar-Pro GitHub repositories](https://github.com/wuxx/icesugar-pro) under an unspecified licence. The iCELink source, however, has yet to be shared.

<img src="/blog/2022-04-14-ecl49/precursor-braille.jpg" style="max-width:100%" />

## Precursor Portable RISC-V FPGA Dev Kit Hardware Begins Shipping


Precursor, the security-focused highly-open smartphone-like FPGA development platform built around a RISC-V core, has begun to ship to pre-order customers after a last-minute delay pushed the date back.

"We missed our estimated shipping date by a couple of weeks," project creator Andrew "bunnie" Huang admits, "but Precursor is finally shipping to backers - more than half of the crowdfunding orders have already shipped and all outstanding orders should be shipped very soon. The global electronics supply chain is still a mess, but we remain undaunted.

"Once all existing orders are filled, Crowd Supply will have about 70 Precursor units remaining in the stock they bought as part of the campaign, plus we have about 100 units of factory stock that will free up once we’re confident the initial wave of returns and exchanges are serviced. Once those are depleted, anyone who wants a Precursor will either have to turn to the secondhand market or wait until the next production run."

While waiting for the hardware to wind its way through the logistics chain, bunnie has been working on a Braille variant of the design - using the same internal hardware but doing away with the display in favour of a full-size Braille keyboard and an audio interface.

"I’m glad that I will soon be able to fulfil my overdue promise to Matt Campbell," bunnie writes, "the original blind developer who reached out to me and inspired this work, and send him a prototype with a Braille keyboard and a basic text-to-speech engine so he can offer further guidance and help on how to improve the user experience."

A full update is available [on the Precursor Crowd Supply campaign page.](https://www.crowdsupply.com/sutajio-kosagi/precursor/updates/more-supply-chain-issues-surprise-edition-the-good-the-bad-and-the-ugly)

<img src="/blog/2022-04-14-ecl49/isadsp.jpg" style="max-width:100%" />

## RISC-V Extension Promises to Boost Suitability for Ultra-Low Power IoT Work


A trio of computer engineers have proposed an extension to the RISC-V instruction set which would improve its suitability for the Internet of Things (IoT) by adding ultra-low-power wireless signal processing capabilities.

"This article presents an instruction-set extension to the open-source RISC-V ISA (RV32IM) dedicated to ultra-low power (ULP) software-defined wireless IoT transceivers," write Hela Belhadj Amor, Carolynn Bernier, and Zdeněk Přikryl in the abstract to their paper.

"The custom instructions are tailored to the needs of 8/16/32-bit integer complex arithmetic typically required by quadrature modulations. The proposed extension occupies only two major opcodes and most instructions are designed to come at a near-zero energy cost."

In simulated testing, the extension showed cycle-count improvements ranging from 19 to 68 per cent for tasks including LoRa preamble detection and FSK demodulation, while power simulations suggest a peak power draw as low as 380µW for Bluetooth Low Energy (BLE) demodulation.

The team's work has been published in the journal [_IEEE Transactions on Computers_](https://www.computer.org/csdl/journal/tc/2022/04/09366907/1rDRgr9Zn7G) under closed-access terms, with a preprint copy available [via the HAL archive (PDF)](https://hal-cea.archives-ouvertes.fr/cea-03158876/file/TCOMP__A_RISC_V_ISA_Extension_for_ULP_IoT_DSP.pdf).

<img src="/blog/2022-04-14-ecl49/naxriscv.jpg" style="max-width:100%" />

## SpinalHDL Shows its Capabilities via the Linux-Ready NaxRiscv Core


The SpinalHDL project has shown off just what it can do through the development of the NaxRiscv core, a Linux-ready LiteX-compatible RISC-V design offering out-of-order and super-scalar capabilities.

"Why a OoO core targeting FPGA," its maintainer explains. "There [are] a few reasons: Improving single threaded performance. During the tests made with VexRiscv running Linux, it was clear that even if the multi-core can help, 'most' applications aren’t made to take advantage of it.

"Hiding the memory latency. (There isn’t much memory to have a big L2 cache on FPGA). To experiment with more advanced hardware description paradigms (Scala/SpinalHDL). By personal interest."

The resulting core design is based on RV32-IMASU, with RV64 support in the works, and supports deployment on hardware via LiteX. In its current incarnation, it offers a claimed 2.59 DMIPS/MHz, 4.70 CoreMark/MHz, and 78 frames per second in a RISC-V port of id Software's classic Doom.

"Being plugin-based you can also configure it in various ways," adds Romain Dolbeau of the project, "including e.g. the number and types of execution units. It's even more configurable than VexRiscv is."

More details are available [on the project's GitHub repository](https://github.com/SpinalHDL/NaxRiscv), where it's made available under the permissive MIT licence.

<img src="/blog/2022-04-14-ecl49/tong-laser.jpg" style="max-width:100%" />

## Zachary Tong Puts Together a Laser Lithographic Etching Machine


As part of a broader effort to bring chip fabrication technology into the garage, dubbed "MakerFoundry," former neurobiologist Zachary Tong has built a laser lithography machine - offering, he claims, feature sizes down to a single micron.

"Photolithography is simply a process to create a pattern onto a photoresist," Zachary says in a video introducing the device. "Most people are probably familiar with PCB development and etching, and it's the same idea — just shrunk down to a very small scale so that you can fabricate transistors, or MEMS, or microfluidics, anything at the micron level.

"This is a form of maskless lithography, meaning that it directly writes the pattern onto the substrate rather than using an intermediate mask that you first generate and then project through."

The device, which Zachary describes as having been "cobbled together with aluminium extrusions and 3D-printed parts," is built around a low-cost ultraviolet diode laser with "a kind of optical breadboard" for cleaning the beam, and is demonstrated etching lines between one and three microns thick.

The full video is available [on Zachary's YouTube channel](https://www.youtube.com/watch?v=XJ9w7DjI_Bc).

<img src="/blog/2022-04-14-ecl49/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [The Register: "RISC-V takes steps to minimise fragmentation."](https://www.theregister.com/2022/04/01/riscv_fragmentation/)
-   [CHIPS Alliance announces Spring Event, 19th April (virtual-only.)](https://riscv.org/event/chips-alliance-spring-event/)
-   [Google shows off PRIME, a data-driven approach for offline optimisation of hardware accelerator architectures.](https://ai.googleblog.com/2022/03/offline-optimization-for-architecting.html)
-   [OpenJDK merges RISC-V port.](https://github.com/openjdk/jdk/commit/5905b02c0e2643ae8d097562f181953f6c88fc89)
-   [Mouser launches RISC-V-focused "Empowering Innovation" series of videos, podcasts, and articles.](https://www.mouser.com/empowering-innovation/)
-   [Saptadeep Pal et al: Designing a 2,048-chiplet, 14,336-core waferscale processor](https://ieeexplore.ieee.org/document/9586194) (closed-access, [preprint PDF here.](https://nanocad.ee.ucla.edu/wp-content/papercite-data/pdf/c116.pdf))
-   [Alphawave IP acquires SiFive's OpenFive business unit for $210m in cash.](https://www.awaveip.com/en/news-views/alphawave-ip-announces-definitive-agreement-to-acquire-entire-openfive-business-unit-from-sifive-for-us-210m-in-cash/) [(Interesting commentary from former SiFive staffer Bruce Hoult here.)](https://www.reddit.com/r/RISCV/comments/te7pzs/alphawave_ip_announces_definitive_agreement_to/i0oa340/)
-   [Erik Engheim: "Addressing criticism of RISC-V microprocessors."](https://medium.com/codex/addressing-criticism-of-risc-v-microprocessors-803239b53284)

<img src="/blog/2022-04-14-ecl49/ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to** [**ecl@librecores.org**](mailto:ecl@librecores.org)**.**

**Subscribe to** [**get El Correo Libre direct to your inbox**](http://eepurl.com/dnL4v1)**.**

