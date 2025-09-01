---
layout: post
title: "El Correo Libre Issue 72"
description: El Correo Libre Newsletter, Issue 72
author: Gareth Halfacree
date: 2024-03-12
---

<img src="/blog/2024-03-12-ecl72/letter.jpg" style="max-width:100%" />

## Importance of Open-Source EDA Tools for Academia: An Open Letter on European Strategic and Funding Directions

  
Below is a copy of an open letter signed, at the time of writing, by more than 130 signatories from across academia which calls upon European and national funding agencies to consider open-source electronic design automation (EDA) tools a first-class citizen in efforts to foster local chip design capabilities.  
  
The full list of signatories is available on Open-Source-EDA-Letter.eu, where educators and researchers from European academic institutions can find instructions on adding their voices to the call.  
  
_To Whom It May Concern,_  
  
_March 8, 2024_  
  
The recent semiconductor shortage and shifts in global political relations have changed the European roadmap on semiconductors and chip design significantly. A mix of incentives for new fabrication facilities for advanced technologies and the ambitious goals to (re)-build leading-edge chip design capabilities in Europe are key cornerstones of the European Chips Act. Under this impulse, various funding actions have been successfully launched, for instance in the area of the creation of IP based on the RISC-V instruction set.  
  
Universities have to be an integral part of Europe’s ambitions and are heavily involved in research activities on various levels. This is crucial for two reasons: First, they are incubators of innovative ideas. Second, and equally important, they are of key importance to educating future generations of chip designers and related jobs. The high demand for an increased workforce can only be satisfied with tight coordination and the best support of universities. In these efforts, we believe that open source is a key success factor. The availability of open-source RISC-V IPs developed in Europe has, for example, been of seminal importance for a significant ramp-up of research activities and the rapid build-up of a vibrant research community and innovation ecosystem around RISC-V hardware and software. This has led to new groups getting involved with computer architecture and an increase in innovative research that is currently funded to get commercialized at higher technology readiness levels.  
  
A key next step is to turn innovation in computer architecture for the European market into chip designs that utilize the fabrication facilities and skilled workers that create those designs. In this trajectory, it is our strong belief that **open-source chip design tools (Electronic Design Automation - EDA - tools) are essential for the European renaissance in chip design education and innovation:**

1.  Open-source EDA tools lower the barrier of entry significantly for students and researchers willing to engage in chip design. As such, we believe that early initiatives based on open-source EDA have already driven a significant amount of fresh talent into the semiconductor community. In addition to the current university-focused EUROPRACTICE program for access to proprietary tools and closed process design kits (PDKs), open-source EDA tools and PDKs are a great complementary offer, as they can be offered for free and under very liberal licensing terms.
2.  Open-source EDA tools allow researchers and designers to collaborate easily, without the complexities and delays of three-way NDAs or similar legal agreements. Researchers and collaborators can easily share designs, ideas, and materials. This makes it much easier to engage new people from diverse fields like computer science, where open-source development is often the norm.
3.  Open-source EDA tools are, for themselves, interesting for innovations, research, and development. They allow educators to let students inspect hands-on the functionality of various steps in the design automation process. Students and researchers can change the code, explore their own ideas, and gain a more profound understanding of the inner workings of a chip design process. The knowledge gained by these people will be extremely valuable for increasing Europe’s footprint in the commercial EDA ecosystem.

Based on the considerations above, we would like to express a strong recommendation to the European and national funding agencies:

1.  Open-source EDA tools must be a first-class citizen of the ambitions to foster chip design capabilities in Europe. A focus on proprietary EDA tools alone is not sufficient when the goal is to democratize chip design in Europe.
2.  Open-source EDA tools are often suited to be complementary to proprietary tools, but design platforms that focus on open-source EDA are an important goal. We value the products of proprietary EDA tool vendors for bleeding-edge chip designs (which are frequently not the focus of education and academic research). Choice and independent design platforms, commercial and alternatively open source, are indispensable.
3.  Funding agencies should identify gaps in the open-source EDA tool chain and support the community in closing those gaps and further developing the open-source tools. End-to-end design flows based on open-source EDA tools must be available and will ensure a very low entrance barrier to newcomers.

We thank you in advance for considering our input. We are at your availability for a more in-depth discussion on this topic.  
  
Sincerely,  
  
_Luca Benini, Giovanni De Micheli, Marie-Minerve Louërat, Harald Pretl, Stefan Wallentowitz, and 130 co-signatories_

<img src="/blog/2024-03-12-ecl72/latchup.jpg" style="max-width:100%" />

## Second Batch of Speakers Confirmed for Latch-Up 2024

  
The FOSSi Foundation is thrilled to announce the second batch of speakers for [Latch-Up 2024](https://fossi-foundation.org/latch-up/2024), a conference dedicated to free and open-source silicon being held in Cambridge, Massachusetts, this April.  
  
The talks confirmed in this second batch are:  
  
**UMI: Universal Memory Interface**  
_Andreas Olofsson_  
A look at the transaction-based Universal Memory Interface (UMI) standard, an alternative to bus architectures like Wishbone and AXI which takes the dramatically reduced number of wires available in PCB and system-in-package (SIP) design into consideration, and its applicability to complex system-on-chip (SOC) and chiplet-based SIP designs - alongside its open-source reference implementation, which has been used to design and manufacture four different chiplets in a 12nm CMOS process.  
  
**Open Source Hardware: Hacking Silicon for Fun (Instead of Profit)**  
_Troy Benjegerdes_  
Troy's talk this year takes the form of an update to a presentation at _Systems We Love_ in Minneapolis in 2017, available on [YouTube](https://us17.admin.mailchimp.com/campaigns/www.youtube.com/watch?v=cyfSgcQeWqc) for those interested in its background, covering everything that's taken place between then and now - and gazing into a possible future where orbital farmers may design and fabricate replacement silicon on-site for installation into space-rated robotics systems.  
  
**IHP Open Source PDK: Announcement, Setup, Current State and Experiences, and a Look Ahead**  
_Frank Vater_  
This talk will cover the development of the SG13G2 Open Source Process Design Kit (PDK) for the IHP 130nm BiCMOS fabrication node, with Frank discussing both the digital and analogue PDKs, their design flows, and the open-source tools used therein. Frank will also be detailing first experiences with schematic driven design, simulation, design-rules checking (DRC), and layout versus schematic (LVS), along with a roadmap for future work on the project..  
  
**Tiny Tapeout: Custom Silicon Open to All**  
_Pat Deegan_  
A look at Tiny Tapeout, an educational project which aims to make chip design and manufacture accessible as broadly as possible, and its recent expansion to improve the performance of submitted designs and the addition of support for analogue designs. Pat's presentation will walk through the Tiny Tapeout process, how the programme works, and the possibilities it offers for education and beyond.  
  
**Clean Up Your EDA Flows with tclint**  
_Noah Moroze_  
Designed for those working with electronic design automation systems which require Tcl scripting, tclint aims to make it easier to write and maintain clean and bug-free tool flows through static analysis and the flagging of both stylistic and functional issues. Noah's talk will cover practical real-world tclint examples, how it can be tailored through plugins, and how it improves on existing alternatives.  
  
**Cedar EDA for Open Source Silicon**  
_Keno Fischer_  
Keno's presentation will cover the Cedar EDA project, a suite of tools designed to offer a commercial-grade platform for analogue chip design. Built for performance and openness, the software offers out-of-the-box support for the SkyWater Sky130 and GlobalFoundries GF180 open-source process design kits, with Keno offering a tour of Cedar's capabilities for open-source chip tapeouts.  
  
**Application of AI-Computer Vision Based Software to Rate and Manage Roads' Surface Condition**  
_Max Faramarzi_  
A look at a real-world use-case for open embedded computation systems, Max's talk will go into detail on an effort to automatically monitor, rate, and manage the surface of roads and other thoroughfares using a computer vision system - allowing for greater data-gathering capabilities than previous manual efforts.  
  
**Open-Source Resources for Learning the Bluespec HL-HDLs Along with RISC-V**  
_Rishiyur Nikhil_  
An overview of materials, including a textbook, slides, sample code, and more, Rushiyur and colleagues have developed for the dual purpose of learning how to use the Bluespec High-Level Hardware Design Languages (HL-HDLs) and to create a simple pipelined CPU built around the free and open-source RISC-V instruction set architecture (ISA).  
  
**Chisel 6 and Beyond**  
_Jack Koenig_  
Jack's presentation will offer a look at Chisel, a hardware generator language embedded in the Scala general-purpose programming language and which is designed to empower hardware designers to boost their productivity through the creation of reusable hardware generators. Following an earlier talk on the topic at the last Latch-Up, Jack's latest presentation will take a look at new features in Chisel 6 and the upcoming Chisel 7.  
  
**PyHDL-IF: An Easy-to-Use Python/HDL Cross-Calling Interface**  
_Matthew Ballance_  
Finally, Matthew plans to present on PyHDL-IF, a family of Python libraries designed to enable object-oriented cross-calling between a "very-nearly" pure Python interface and hardware design language environments, as a way of avoiding the complexities of generating C/C++ wrapper code then compiling and linking it with the simulator.

For information on submitting a talk proposal, registering to attend - free of charge, though with a "professional ticket" available for those representing companies and who want to contribute to the cost of running the event - and the latest on the programme, see [the Latch-Up 2024 page on the FOSSi Foundation website](https://fossi-foundation.org/latch-up/2024).

Latch-Up 2024 will be held from the 19th to the 21st of April at the Massachusetts Institute of Technology in Cambridge, and we hope to see you there!

<img src="/blog/2024-03-12-ecl72/openpadlock.jpg" style="max-width:100%" />

## Make Government-Funded Hardware Open-Source, Federation of American Scientists Says

  
The Federation of American Scientists, an evidence-based policy research and advocacy group founded in 1945, has issued call for all government-funded hardware projects adopt a default policy of releasing under open source licences.  
  
"The US government and taxpayers are already paying to develop hardware created as part of research grants. In fact, because there is not currently an obligation to make that hardware openly available, the federal government and taxpayers are likely paying to develop identical hardware over and over again," argues Michael Weinberg in a policy publication posted to the FAS website.  
  
"Grantees have already proven that existing open publication and open data obligations promote research and innovation without unduly restricting important research activities. Expanding these obligations to include the hardware developed under these grants is the natural next step."  
  
Michael's article calls for a "default expectation" from federal grantmakers that all federally-supported hardware research should be released as open hardware, with exceptions available "for researchers who intend to patent their hardware" in order to retain incentives for translation and commercialisation.  
  
This, he argues, would reduce wasteful reinvention, increase access to information, provide alternatives paths to recognition beyond simply how many patents you can claim to your name, and provide verifiability currently missing from closed-source projects.  
  
The full article is available [on the FAS website](https://fas.org/publication/open-source-hardware/).

<img src="/blog/2024-03-12-ecl72/hullorigami.jpg" style="max-width:100%" />

## Researchers Unveil an Unusual Platform for Open Computation: Origami

  
Researchers Thomas Hull and Inna Zakharevich, from Western New England University and Cornell University respectively, have written a paper providing proof that origami, the Japanese art of paper-folding, is Turing-complete - meaning it can serve as a platform for free and open source hardware projects.  
  
"I was like, origami is a lot more complicated than the Game of Life," Inna tells [Quanta Magazine](https://www.quantamagazine.org/how-to-build-an-origami-computer-20240130/) of the work, in an interview which brought a preprint of the pair's paper to our attention. "If the Game of Life is Turing complete, origami should be Turing complete too."  
  
Turing completeness, named for polymath and codebreaker Alan Turing and his work on a theoretical "universal computer" which was simply a tape of infinite length covered in binary code which could be modified, means that any computer system exhibiting the trait can do the same tasks as any other computer system - given enough time and memory.  
  
The same, Thomas and Inna say, is true of folded paper. "In this paper," the pair write, "we prove that flat origami, when viewed as a computational device, is Turing complete. We do this by showing that flat origami crease patterns with optional creases (creases that might be folded or remain unfolded depending on constraints imposed by other creases or inputs) can be constructed to simulate Rule 110, a one-dimensional cellular automaton that was proven to be Turing complete by Matthew Cook in 2004."  
  
The full paper is available as a preprint [on Cornell's arXiv server](https://arxiv.org/abs/2309.07932v1), with more background available [in Quanta Magazine's article](https://www.quantamagazine.org/how-to-build-an-origami-computer-20240130/) on the topic.

<img src="/blog/2024-03-12-ecl72/top.jpg" style="max-width:100%" />

## TOP Aims to Deliver Architecture Analysis for Open Low-Power Cyber-Physical Systems

  
The TOP project, unveiled in a preprint paper by Luca Valente, Francesco Restuccia, Davide Rossi, Ryan Kastner, and Luca Benini, looks to deliver a new methodology for modelling and analysing open-source system-on-chips (SoCs) targeting low-power cyber-physical systems - proving the concept on a RISC-V architecture across RTL simulation and FPGA implementation.  
  
"Ensuring predictability in modern real-time systems-on-chip is an increasingly critical concern for many application domains such as automotive, robotics, and industrial automation," the researchers explain by way of background. "An effective approach involves the modelling and development of hardware components, such as interconnects and shared memory resources, to evaluate or enforce their deterministic behaviour.  
  
"Unfortunately, these IPs are often closed-source, and these studies are limited to the single modules that must later be integrated with third-party IPs in more complex SoCs, hindering the precision and scope of modelling and compromising the overall predictability.  
  
"With the coming-of-age of open-source instruction set architectures (RISC-V) and hardware, major opportunities for changing this status quo are emerging," the researchers continue. "This study introduces an innovative methodology for modelling and analysing State-of-the-Art (SoA) open-source SoCs for low-power cyber-physical systems. Our approach models and analyses the entire set of open-source IPs within these SoCs and then provides a comprehensive analysis of the entire architecture."  
  
To prove the potential of TOP the team used it on a sample heterogeneous low-power RISC-V design, which combines the CVA6 RISC-V processor and a PULP cluster, minimising pessimism in bounding the service time of transactions between 28 and 1 per cent — "which is considerably lower when compared to similar SoA works," the researchers say.  
  
The full paper is available as a preprint [on the Cornell arXiv server](https://arxiv.org/abs/2401.15639).

<img src="/blog/2024-03-12-ecl72/abiriscvforai.jpg" style="max-width:100%" />

## Edge-AI Boom Will See 129 Million RISC-V Chips Shipped by 2030, ABI Research Says

  
The current explosion of interest in artificial intelligence at the edge (edge-AI) will be a big win for the free and open-source RISC-V instruction set architecture, ABI Research claims - with a total of 129 million RISC-V chips shipping by the end of the decade.  
  
"The flexibility of the architecture to address specific workloads, as well as the scalability, increases its appeal," Paul Schell, ABI Research industry analyst, says of the RISC-V ISA and its popularity for startups aiming to deliver on-device AI processing at the edge.  
  
"RISC-V International has diligently promoted and nurtured the ecosystem, and the RISE project now seeks to develop the software side through collaboration between industry leaders including Google, MediaTek, and Intel.  
  
"RISC-V processors are entering the mainstream, and the community eagerly awaits the addition of matrix extensions, a key component of AI workloads, to the open-source ISA. Google's full support for Android on RISC-V processors and the participation of major players like Intel and NXP Semiconductors in RISC-V International's working groups point to a long-term commitment by the wider industry.  
  
"However," Paul adds as a note of caution, "the ecosystem lacks the governance of other popular open-source projects like Android, which could lead to fragmentation and hinder adoption in embedded systems. Nonetheless, OEMs and hardware vendors should follow the architecture's progress given its increasing market share, which displaces some legacy architectures like those developed by Arm."  
  
Paul's comments are based on the ABI Research report _RISC-V for Edge AI Applications_, available to purchase [through the company's website](https://www.abiresearch.com/market-research/product/7783287-risc-v-for-edge-ai-applications/?utm_source=media&utm_medium=email) now.

<img src="/blog/2024-03-12-ecl72/reservoir.jpg" style="max-width:100%" />

## The SERV "Reservoir" Provides Reference and Ready-to-Run SERV Designs and Subsystems

  
SERV, the award-winning world's smallest RISC-V CPU, now has a "reservoir" of ready-to-go subsystems, designed to make it easier for newcomers to get started.  
  
"Looking for reference designs, examples or ready-made drop-in subsystems to get quickly started with the award-winning SERV, the world's smallest RISC-V CPU," asks FOSSi Foundation director and SERV creator Olof Kindgren, rhetorically, by way of introduction. "Welcome to the reservoir, which serves all your SERV needs!"  
  
The SERV reservoir - "a pool of ready-made designs and subsystems," Olof explains - can be used as a source of ready-to-use designs for those looking to experiment with SERV or as reference designs for further development.  
  
The SERV reservoir includes, at launch: Servile, a "convenience wrapper" helper component designed as a building block for other designs and subsystems; Serving, an FPGA subsystem using a single combined block RAM for instructions, data, and RF; and Servant, an FPGA reference platform capable of running the Zephyr RTOS.  
  
Documentation for the projects are included [on the reservoir page](https://serv.readthedocs.io/en/latest/reservoir.html); the source code for each is published [to the SERV GitHub repository](https://github.com/olofk/serv) under the ISC licence.

<img src="/blog/2024-03-12-ecl72/ahkiofig5.jpg" style="max-width:100%" />

## Research Paper Characterises Hardware Security Bugs in Open-Source Projects

  
A research paper by Joey Ah-kiow and Benjamin Tan, of the NYU Tandon School of Engineering and the University of Calgary respectively, has characterised hardware security bugs in open-source projects - taking as its target the OpenTitan project.  
  
"Hardware security is an important concern of system security as vulnerabilities can arise from design errors introduced throughout the development lifecycle," the researchers note. "Recent works have proposed techniques to detect hardware security bugs, such as static analysis, fuzzing, and symbolic execution.  
  
"However, the fundamental properties of hardware security bugs remain relatively unexplored. To gain a better understanding of hardware security bugs, we perform a deep dive into the popular OpenTitan project, including its bug reports and bug fixes. We manually classify the bugs as relevant to functionality or security and analyse characteristics, such as the impact and location of security bugs, and the size of their bug fixes. We also investigate relationships between security impact and bug management during development."  
  
"Finally," the researchers conclude, "we propose an abstract syntax tree-based analysis to identify the syntactic characteristics of bug fixes. Our results show that 53% of the bugs in OpenTitan have potential security implications and that 55% of all bug fixes modify only one file. Our findings underscore the importance of security-aware development practices and tools and motivate the development of techniques that leverage the highly localized nature of hardware bugs."  
  
The full paper is available as a preprint [on Cornell's arXiv server](https://arxiv.org/abs/2402.00684).

<img src="/blog/2024-03-12-ecl72/makinote.jpg" style="max-width:100%" />

## BSC Researchers Unveil Makinote, a Platform for Pre-Silicon RISC-V Emulation

  
Elias Perdomo, Alexander Kropotov, Francelly Cano, Syed Zafar, Teresa Cervero, Xavier Martorell, and Behzad Salami, all of the Barcelona Supercomputing Centre (BSC), have designed and built an FPGA-based hardware/software platform for the pre-silicon emulation of RISC-V designs: Makinote.  
  
"Emulating chip functionality before silicon production is crucial, especially with the increasing prevalence of RISC-V-based designs," the researchers write in the abstract to their paper. "FPGAs are promising candidates for such purposes due to their high-speed and reconfigurable architecture.  
  
"In this paper, we introduce our Makinote, an FPGA-based Cluster platform, hosted at Barcelona Supercomputing Centre (BSC-CNS), which is composed of a large number of FPGAs (in total 96 AMD/Xilinx Alveo U55c) to emulate massive size RTL designs (up to 750M ASIC cells). In addition, we introduce our FPGA shell as a powerful tool to facilitate the utilization of such a large FPGA cluster with minimal effort needed by the designers.  
  
"The proposed FPGA shell provides an easy-to-use interface for the RTL developers to rapidly port such design into several FPGAs by automatically connecting to the necessary ports, e.g., PCIe Gen4, DRAM (DDR4 and HBM), ETH10g/100g. Moreover, specific drivers for exploiting RISC-V based architectures are provided within the set of tools associated with the FPGA shell. We release the tool online for further extensions."  
  
To prove the concept the team used the Makinote cluster and its FPGA Shell software tool to emulate a RISC-V processor running the High Performance Computing (HPC) Challenge workload across 32 FPGAs. "Our results demonstrate," the researchers conclude, "that the performance improves by 8 times over the single-FPGA case."  
  
The full paper is available as a preprint [on Cornell's arXiv server](https://arxiv.org/abs/2401.17984).

<img src="/blog/2024-03-12-ecl72/opentitanchip.jpg" style="max-width:100%" />

## OpenTitan Celebrates Commercial Availability of its Open-Source Silicon

  
The OpenTitan project, created by lowRISC in partnership with the OpenTitan Coalition, has hit a major milestone: commercial availability of validated physical chips implementing the free and open-source hardware root of trust (RoT).  
  
“This is the culmination of the monumentally hard work of a vibrant and engaged community of contributors focused on a singular goal to achieve what’s never been done before - make open-source silicon work the same way as open-source software," says Dr. Gavin Ferris, chief executive officer of lowRISC, OpenTitan’s host organisation. "I am grateful for this support and can't wait for what’s to come."  
  
"Our mission is to advance the incredible work of the OpenTitan project by delivering an end-to-end supply chain security solution built on an open secure silicon foundation," adds Dom Rizzo, chief executive officer at OpenTitan coalition member zeroRISC. "That we’re able to deliver commercial products so soon after tapeout clearly illustrates the coalition's momentum. With this first, crucial step for open silicon implementations, we look forward to a world where a transparent and trustworthy supply chain is the default."  
  
Based on the OpenTitan discrete chip design codenamed [Earl Grey](https://opentitan.org/book/hw/top_earlgrey/doc/specification.html), the commercial OpenTitan chip is designed to provide assurance that systems can boot securely using only authorised and verifiable code.  
  
More information is available [on the OpenTitan website](https://opentitan.org/), along with links to the project's sources.

<img src="/blog/2024-03-12-ecl72/newsinbrief.jpg" style="max-width:100%" />

## FOSSi News in Brief

-   [Event: the 4th Workshop on Open-Source Design Automation, hosted at the International Conference on Design, Automation, and Test in Europe (DATE), 25th of March at the Valencia Conference Centre, Spain.](https://osda.ws/)
-   [Event: the 4th International Workshop on RISC-V for High Performance Computing (HPC), hosted at ISC High Performance, 16th of May at the Congress Centre Hamburg (CCH), Germany.](https://riscv.epcc.ed.ac.uk/community/isc24-workshop/)
-   [Rapid Silicon embraces open-source EDA, releases its first complete open-source FPGA toolchain: Raptor Design Suite.](https://rapidsilicon.com/rapid-silicon-leads-the-way-with-first-complete-open-source-fpga-eda-tool-chain/)



**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
