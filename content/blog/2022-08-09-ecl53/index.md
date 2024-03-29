---
layout: post
title: "El Correo Libre Issue 53"
description: El Correo Libre Newsletter, Issue 53
author: Gareth Halfacree
date: 2022-08-09
---

<img src="sky90.jpg" style="max-width:100%" />

## OpenMPW Programme Expands to 90nm, Adds a PDK from GlobalFoundries

The Google-funded OpenMPW programme, launched in partnership with silicon fab SkyWater Technology and silicon design platform Efabless, is enjoying a boom with the announcement of two major expansions: the addition of a 90nm process node at SkyWater and a new 180nm production design kit (PDK) from GlobalFoundries.

"Through this important investment from the DOD [US Department of Defence] and collaboration with Google, we will enable open source design for our commercial SKY90-FD process technology, creating an IP pipeline and pathway to commercial volume manufacturing," explains SkyWater president and chief executive Thomas Sonderman of the first announcement.

With additional funding from the DOD, SkyWater is expanding its open-source silicon efforts with a PDK for its 90nm node - a considerable upgrade from the 130nm node it had previously opened. The new PDK will become part of the OpenMPW programme, which allows free and open silicon projects to submit designs through the Efabless platform for production into physical chips at zero cost - with Google footing the bill.

"We believe that having access to different technologies through open source PDKs is critical to grow and strengthen the open silicon ecosystem," claim Google's Johan Euphrosine and Ethan Mahintorabi of the extended partnership.

"Developers can go beyond the constraints of their familiar process nodes and explore different performance, power and area trade-offs with existing or new designs. Researchers can reproduce their research on different technologies to produce diverse figures of merit. Tool maintainers can generalise their technologies' back-ends to support more than one process. The community can refine the ways we structure, distribute and maintain these PDKs."

It's not just SkyWater which is seeing the benefits of opening PDKs to a wider audience, though: GlobalFoundries, formerly AMD's in-house fab division and now a fully-independent fab house, has announced its own partnership to release 180nm PDK under the permissive Apache 2.0 licence - and, as with SkyWater's two PDKs, GlobalFoundries will be making it available under the OpenMPW programme.

The GlobalFoundries GF180MCU PDK is available [on GitHub now](https://github.com/google/gf180mcu-pdk), with SkyWater's SKY90-FD to follow; those looking to stay updated can find more information [on the Google custom silicon landing page](https://developers.google.com/silicon).

<img src="sbydemo.jpg" style="max-width:100%" />

## Yosys Autotune Aims to Find You the Fastest Solver for Formal Verification


The Yosys project has announced a new feature for users of its Sby formal verification front-end, designed to speed up the process considerably: Autotune, for picking the fastest possible solver.

"Most verification tasks can be performed by several of the supported engines and solvers. Depending on the specific verification task at hand, there can be large performance differences between them. Thus, it makes sense to try several engines and solvers to pick the best performing one," the Yosys team explains of the need for Autotune.

"With Sby, switching the engine or solver only requires changing a single line in the '[engines]' section of the .sby file. Still, the large number of engine and solver configurations made it impractical to manually try all of them for every verification task, so it was easy to leave performance on the table by sticking with a worse performing configuration."

The new -autotune option, by contrast, runs through a range of recommended engine and solver combinations to produce a report on their relative performance - alongside a configuration which can be quickly copy-and-pasted into an .sby file to default to the best-performing option.

"Sby –autotune is also a lot smarter than just trying every configuration in sequence," the project maintainers add. "It runs in parallel and knows how to use timeouts and retries so that a single slow engine that would take hours doesn’t keep Sby from quickly discovering a better configuration that finishes in seconds. When selecting the recommended engines and solvers, it also takes into account the design and settings in your .sby file to avoid known incompatibilities or performance issues."

Additional information is available in the Sby documentation, with a small sample project [available on GitHub](https://github.com/YosysHQ/sby/tree/master/docs/examples/autotune) for those who prefer hands-on learning.

<img src="v8-outline.jpg" style="max-width:100%" />

## Google's V8 JavaScript Engine's RISC-V RV32GC Port Merged Upstream


A port of Google's V8 JavaScript engine, as used in the Chrome browser and Node.js, to the RV32GC RISC-V architecture has been accepted upstream.

"Now V8 can support both 32-bit and 64-bit back-ends for [the] RISC-V ISA," explains PCLT member Wei Wu of the effort. "The team from PLCT will maintain for it in long term. Reporting bugs at GitHub repo site is welcome. We hope this would be a stepping stone to enable more applications for the 32-bit RISC-V world."

In addition to the RV64 and RV32 ports, the effort to port V8 to RISC-V has also included support for Just In Time (JIT) through the optional vector extensions - a challenge, those behind the work explain, owing to the extension's use of an independent vector register file contrasted with the overlapping or aliasing approach taken by other supported architectures.

"The porting has been carried out in a cooperative way as a mentorship project of RVI [RISC-V International] and the Linux Foundation," Wu adds. "Thanks to the communication channel provided by the mentorship project (special thanks to Megan!), people who are willing to contribute to RISC-V could join together more effectively and easily."

More details are available [on the RISC-V software development mailing list](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/zeml52WHAU4/m/hMbGwJzHAgAJ) and [in the upstream commit](https://chromium-review.googlesource.com/c/v8/v8/+/3736732). The source code, meanwhile, [is available on GitHub](https://github.com/riscv-collab/v8) under a mix of licences.

<img src="chipsact.jpg" style="max-width:100%" />

## The US Government Passes the CHIPS Act, Authorises $250bn Funding Over Five Years


The US Government has officially passed the Creating Helpful Incentives to Produce Semiconductors (CHIPS) and Science Act, built upon the foundation of the earlier United States Innovation and Competition Act (USICA), which makes a $250 billion commitment to spending in research and development over the next five years.

"This legislation is a major milestone, the largest single investment that we've seen in a long time in US R&D [Research & Development]," claims senator Maria Cantwell, who helped lead the effort. "A great day for what might seem to many Americans as a very kind of 'what does science and R&D really mean for me?' Well, in reality, investment today means jobs for tomorrow."

As the name implies the CHIPS Act aims to promote US interests in the semiconductor industry, including $39 billion in "direct assistance" for new US fabs, investment tax credits, $11 billion for advanced research and development, $2 billion for university-led R&D relating to military-specific chip technologies, and $200 million for a workforce-growing initiative to be led by the National Science Foundation.

"[This is] going to make a great deal of difference here in the United States," opines US President Joe Biden. "You know, these microchips are used in everything from automobiles to washers and dryers to all appliances to cell phones - across the board. And we used to make these chips, [but] we don't make many of them any more. The investment now in building more factories to make these chips is going to bring down the price of everything from automobiles to everything across the board. But more importantly it's going to create thousands of good-paying jobs."

The full text of the CHIPS Act is available [as a PDF download](https://www.commerce.senate.gov/services/files/CFC99CC6-CE84-4B1A-8BBF-8D2E84BD7965) from the US Senate Committee on Commerce, Science, and Transportation; sadly, the Act does not specifically offer provisions for free and open-source silicon efforts.

<img src="venn-openmpwbrowser.jpg" style="max-width:100%" />

## Matthew Venn Launches a Tool For Browsing, Searching OpenMPW Projects


Free and open source silicon expert Matthew Venn has launched what he describes as a "small utility tool" designed to make it easier to browse through the numerous projects submitted for manufacturing through the OpenMPW programme - including options to narrow the search to particular categories.

"For example," Matthew explains of what you can do using the tool, "[you can ask] 'what ReRAM projects passed tapeout and were selected for manufacture on MPW6?'"

The open-source utility, written in Python, is designed as a workaround for the lack of an official application programming interface (API) for the Efabless platform which hosts information about projects submitted under the OpenMPW programme.

"While there are around 600 public projects (as of July 2022)," Matthew notes, "only 240ish have been selected to be made. The selected status isn't a secret but it's also not easily available, so I have put a list of (most of) the IDs in the 'selected' file, which is merged into the data from the website. I'll manually update this after every shuttle selection."

The tool is available [from Matthew's GitHub repository](https://github.com/mattvenn/efabless_project_tool), where it is published under the permissive Apache 2.0 licence.

<img src="ocpbow.jpg" style="max-width:100%" />

## The Open Compute Project Foundation Launches "Bunch of Wires" Interface Spec


The Open Compute Project Foundation (OCP Foundation) has announced the launch of a open specification for chiplet interconnect, dubbed Bunch of Wires (BoW), as part of its Open Domain Specific Architecture (ODSA) project.

"The demand for specialised silicon has been increasing steadily due to workload diversity, such as with the adoption of AI and ML, and we expect this trend to continue for several years," says OCP Foundation chief technical officer Bill Carter.

"In response to this demand the OCP recognises that it must be a catalyst to establish open and standardized chiplet ecosystems and new markets by investing in chiplet interconnect technology that will enable composable silicon. The release of the BoW specification is an important step in this direction. We expect to increase our efforts on developing supply chain models for composable silicon."

The ODSA BoW PHY specification, to give the spec its full title, is designed for both commodity and advanced packaging technologies across a range of process nodes, its creators claim. It's also field-tested, with OCP pointing to active use by "at least 10 companies" including Samsung and NXP on 5-65nm process nodes.

Bunch of Wires is made available under the Open Web Foundation Final Specification Agreement (OWFa) 1.0, with contributors asked to sign a modified OWF Contributor Licence Agreement. A PDF of the release version of the specification is available [on the OCP website](https://www.opencompute.org/contributions).

<img src="eandt-opensource.jpg" style="max-width:100%" />

## The IET's Engineering and Technology Highlights "Open-Source Choices" for Chips


Chris Edwards, writing for the Institute of Engineering and Technology (IET)'s E&T publication, has highlighted the growing popularity of free and open source silicon and its ability to provide wider access to custom chips.

"At the leading edge [of chip manufacturing] the economics have certainly not improved for anyone who cannot command high volumes or operating margins," Chris admits in the comment piece. "Design costs have spiralled up as well for chips at these advanced nodes, though primarily in verification, validation, and software development.

"The idea of democratising design with these trends in the background seems counter-intuitive. But others suggest there is demand for easier, cheaper access to custom silicon and that a growing number of design teams can justify the switch from software or FPGA to ASIC or SoC."

Chris highlights RISC-V as offering "a wide range of options" in the field of processor cores, "whether free and open-source or commercial paid-for." The OpenRoad project is also mentioned, along with "a growing armoury of EDA [Electronic Design Automation] software [which] provides more accessible options for teams that either do not want to pay or want to try out options without having to enter into lengthy licence agreements."

The full piece, which includes comment from Rapid Silicon's Tony McDowell, CHIPS Alliance's Rob Mains, Open Hardware Group's Rick O'Connor, and Silicon Initiative's Vic Kulkarni, [is available on the E&T website now](https://eandt.theiet.org/content/articles/2022/07/chip-democratisation-leads-to-open-source-choices/).

<img src="wallentowitz-boardmember.jpg" style="max-width:100%" />

## FOSSi Foundation Director Stefan Wallentowitz Elected to RISC-V International Board


FOSSi Foundation director and professor at the Munich University of Applied Sciences Stefan Wallentowitz has been elected to the board of RISC-V International, to represent community-level members' interests, as part of the 2022 election process.

"We are in a period of enormous progress and momentum for RISC-V," says RISC-V International chief executive Calista Redmond. "As a member-driven organisation, our success will continue to be fuelled by the commitment and leadership of our community. We are grateful for the leadership of more than a dozen candidates who stepped forward in this election and the engagement of the community in our election."

Stefan joins four other newly-elected board members: Frans Sijstermans from Nvidia; Philipp Tomsich from VRULL GmbH; Ted Speers from Microchip Technology; and Jesús Labarta from the Barcelona Supercomputing Center (BSC).

"Thank you to our RISC-V membership for their ongoing commitment to RISC-V through collaboration, contribution, and innovation on RISC-V," Calista adds. "Together, we are catalysing RISC-V as the most profound open architecture underpinning generations computing – now and for our future."

The current list of board members is available [on the RISC-V International website](https://riscv.org/about/board-of-directors/).

<img src="cpuwebring.jpg" style="max-width:100%" />

## The Homebuilt CPUs WebRing Highlights Hobbyist Processor Efforts


The New Stack's David Cassel has written a piece highlighting a "webring" which brings together 85 CPU designs built entirely at home - with more added surprisingly frequently.

"Each page represents somebody’s beloved personal project - and an inspiring story of determination," David explains of the project, which was founded by Warren Toomey using a round-robin site linking system most would have thought obsolete in the days of ubiquitous search engine crawling: the webring.

"Follow the webring’s links, and the stories keep coming, page after page, each one offering the near-magical tale of a determined hobbyist who summoned up their own hardware just by tapping their own reserves of ingenuity," David writes.

"The webring is open 'to any computer project featuring a home-built CPU,' explains the site’s official charter. That can be a field-programmable gate array (or FPGA), or a chip using transistor-transistor logic (TTL) - as long as it’s not a store-bought, off-the-shelf CPU. And the webring's official charter ends by sardonically asking if anyone will ever contribute a design that was built with vacuum tubes."

David's article is available [on The New Stack](https://thenewstack.io/the-hobbyists-who-build-their-own-cpus/) now, while the 85-and-counting machines which make up the Homebuilt CPUs WebRing can be seen [on the project's homepage](https://www.homebrewcpuring.org/ringhome.html).

<img src="serv.jpg" style="max-width:100%" />

## Tiny SERV Core Hits 1.2.0 Release, Brings M and C Extension Support


The ultra-compact award-winning bit-serial SERV core, created by FOSSi Foundation director Olof Kindgren, has reached version 1.2.0 - a release which brings with it a selection of new features, including additional board compatibility and the RISC-V M and C extensions.

"The 1.2.0 version of the award-winning SERV, the world's smallest RISC-V CPU, focuses on features rather than size reduction as has previously been the case," Olof explains of the new version. "Most notably, two major ISA extensions are now supported but there are also a number of other new features."

Those two extensions: the RISC-V C extension for compressed instruction support, added by Abdul Wadood during a Linux Foundation mentorship in spring this year; and the M extension for integer multiplication and division, implemented through the creation of an external MDU which can be shared between multiple SERV cores and which was contributed by Zeeshan Rafique during the Google Summer of Code last year.

Other enhancements in the new release include: SERV "Servant" system-on-chip support for the EBAZ4205, Chameleion96, Nexys2 500 and 1200, and Alinx AX309 FPGA development boards; support for the Virtual Development Board (ViDBo) protocol to simulate SERV on an FPGA without physical FPGA hardware; and OpenLANE support, alongside improved documentation and some bug fixes.

The new release is available [on the SERV GitHub repository now](https://github.com/olofk/serv), under the permissive ISC licence.

<img src="newsinbrief.jpg" style="max-width:100%" />

## FOSSi News In Brief

-   [Kito Cheng announces public review period for the RISC-V non-ISA psABI specification, to close 29th August 2022.](https://groups.google.com/a/groups.riscv.org/g/sw-dev/c/jwUHdLesHLY/m/8MvW6Aa0AAAJ)
-   [Imperas releases permissive open-source SystemVerilog RISC-V processor functional coverage library for verification.](https://www.imperas.com/index.php/articles/imperas-leads-risc-v-verification-ecosystem-first-release-open-source-systemverilog-risc-v)
-   [Go 1.19 brings a 10 per cent speed boost on RISC-V through registers for function argument and result passing.](https://go.dev/doc/go1.19)
-   [RISC-V International opens call for proposals for the RISC-V Global Summit North America 2022 (12-15th December 2022).](https://riscv.org/announcements/2022/07/risc-v-global-summit-will-showcase-enormous-momentum-for-the-open-source-hardware-architecture-and-software-ecosystem-risc-v-international/)
-   [Codasip's Brett Cline asks "is it too risky _not_ to adopt RISC-V" in DAC 2022 round-up piece.](https://codasip.com/2022/07/18/dac-2022-is-it-too-risky-not-to-adopt-risc-v/)


<img src="ecl-logo-small.jpg" style="max-width:100%" />

**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@librecores.org](mailto:ecl@librecores.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
