---
layout: post
title: "El Correo Libre Issue 90"
description: El Correo Libre Newsletter, Issue 90
author: Gareth Halfacree
date: 2025-10-14
---

<img src="/blog/2025-10-14-ecl90/sydney.jpg" style="max-width:100%" />

## Say Hello to Down Underflow

The FOSSi Foundation is heading Down Under! We’re pleased to announce the inaugural Down Underflow, a conference in the shape of ORConf and Latch-Up, to be held the weekend of February 28 2026 in Sydney, Australia.

Much like ORConf and Latch-Up before it, Down Underflow will focus on bringing the FOSSi community together for presentations and networking during the day and a social event in the evening. A day-after of unconference is also being planned. Venue to be confirmed but expect it to be in central Sydney.

Registration and presentation submissions are now open [on the official website](https://downunderflow.io).

Questions about the event end sponsorship enquiries can be sent to [downunderflow@fossi-foundation.org](mailto:downunderflow@fossi-foundation.org).

Australia and the region are a hotbed of FOSSi activity and we’re looking forward to meeting as many new folks as possible, and of course welcoming back our friends who’ve visited our events before.

_- Julius Baxter, Director, FOSSi Foundation_

<img src="/blog/2025-10-14-ecl90/waferspace.jpg" style="max-width:100%" />

## wafer.space Opens Crowdfunding for Medium-Run Chip Production

Tim Ansell and Leo Moser’s startup wafer.space has officially opened a crowdfunding campaign for those looking to have their designs manufacturers as physical chips - offering a medium-scale run of 1,000 parts for each backer, priced as low as $7 per chip.

“Thanks to open PDKs [Process Design Kits], advancing open‑source EDA [Electronic Design Automation tools], and programs like [Matt Venn’s] Tiny Tapeout, it’s never been easier to design a chip,” Tim and Leo say of their venture. “With wafer.space, you can easily turn a design into real, working chips. We provide pooled fabrication with clear specs, an automated submission system, and a shipment of real silicon you can hold, probe, and ship to other people.”

The first wafer.space production run, which aims to deliver parts in March next year, is based around GlobalFoundries’ open GF180MCU 180nm mixed-signal process. Unlike Tiny Tapeout, the run is open to all projects both open- and closed-source - and rather than receiving a single chip, backers will receive 1,000.

“Through this campaign, you can purchase one or more slots in wafer.space’s first production run at GlobalFoundries,” the pair explain. “Each slot consists of a 3.88×5.07mm (19.67mm²) fixed die area, replicated 1,000 times. You can choose to receive bare dies (in Gel-Paks) or chip-on-board dies (i.e., dies wire-bonded to small PCBs). For those needing to perform on-wafer probing, or who want a unique memento, full wafers are also available.”

Pricing for inclusion in the production run starts at $7,000, for 1,000 bare dies; for $8,500, these can be packaged as wire-bonded chip-on-board (COB). Backers at either level can choose to add an undiced full wafer for an additional $2,000 - though this will, Tim and Leo note, include not only the backers’ own chip design but others’ designs too.

More information is available [on the wafer.space website](https://wafer.space/), while the crowdfunding campaign is open [on Crowd Supply](https://www.crowdsupply.com/wafer-space/gf180mcu-run-1) until the 28th of November 2025.

<img src="/blog/2025-10-14-ecl90/subleq.jpg" style="max-width:100%" />

## This 700-Transistor CPU Implements One Instruction

Maker Michael Morton has built a custom processor with a difference: it’s built entirely from discrete transistors and implements the “subleq” set of just one instruction - yet is Turing-complete.

“This is an 8-bit one-instruction CPU that I built over the course of about four months in the summer of 2025,” Michael explains of the project. "It implements the subleq instruction set, which achieves Turing-completeness with just one instruction. It has a maximum clock speed of just over 1kHz (more a limitation of the clock circuit I built, it could probably run faster with a faster clock). Each instruction takes 6 clock cycles to execute, resulting in an execution speed of around 170 instructions per second. Not light-speed by any means, but more than enough to run some simple programs!

“The computer is built entirely out of discrete NMOS logic gates with 2n7000 transistors and 51 k-Ohm pull-up resistors. This keeps power consumption quite low, in the range of a few watts, most of which is consumed by the indicator LEDs and not by the logic circuitry itself. There are a few hundred gates, comprised of over 680 transistors. That might seem like a lot, but it is actually quite low for an 8-bit CPU.”

The CPU is tailored to the simplest possible instruction set, which has but one instruction: subleq. This, Michael explains, takes three memory locations as arguments, subtracting the value at the first address from the second and then overwriting that with the result - then, if the result was less than or equal to zero, jumping to the third memory location. “With some clever permutations of this one instruction,” he explains, “it is possible to simulate any CPU operation we want.”

The project is documented in full [on Hackaday.io](https://hackaday.io/project/204002-my-homemade-subleq-cpu), with a video available [on YouTube](https://youtu.be/10Kjh3kQZHY).

<img src="/blog/2025-10-14-ecl90/vhdl.jpg" style="max-width:100%" />

## Ahmad Nabil Plans 100 Progressive VHDL Projects

Hardware developer Ahmad Nabil has planned out a series of permissively-licensed VHDL projects which grow from simple individual logic gates all the way up to a mini processor and system-on-chip - and, at the time of writing, was already a quarter the way through the project.

“This collection presents a structured progression of VHDL projects, ranging from basic logic gates to a fully functional mini CPU and SoC,” Ahmad explains. "Each project is fully synthesisable and tested using ModelSim simulations, providing both the VHDL source code and accompanying test benches. This repository serves as a comprehensive resource for anyone looking to learn or reference VHDL, FPGA design, or digital system development.

“I’m documenting everything on GitHub as I go, including both the VHDL source code and test benches,” Ahmad notes.

At the time of writing Ahmad had completed 25 projects which could be completed without the use of a clock signal, including a full set of logic gates, multiplexers and demultiplexers, a seven-segment display driver, four- and eight-bit comparators, half and full adders, and a four-bit adder-subtractor, and was working on a cascadable n-bit comparator. The next batch of projects will expand to the use of clock signals, including flip-flops, shift registers, and counters, before introducing memory elements, more complex combinatorial logic blocks including arithmetic and logic units, state machines, and peripherals.

The final ten projects planned for the series include a digital stopwatch with seven-segment display, a calculator, a series of simple processors, a Pong scoreboard, music player, data acquisition system, before finishing at a mini system-on-chip implementing CPU, RAM, and peripherals, Ahmad has said.

The project can be followed [on its GitHub repository](https://github.com/TheChipMaker/VHDL-100-Projects?tab=readme-ov-file), where everything is made available under the permissive MIT licence.

<img src="/blog/2025-10-14-ecl90/llvm.jpg" style="max-width:100%" />

## Adding a New Instruction to LLVM’s RISC-V Backend

Celera Systems co-founder and compiler engineer Gustavo Leite has written a guide to adding a new instruction to the RISC-V backend in the LLVM compiler - as a way of demystifying the process and showing how new instruction set extensions can be supported.

“A compiler is often referred to be a mysterious piece of software,” Gustavo explains. "It takes a program written in a high-level language, applies dozens of transformations on it, and then spits out optimised machine code. It sounds like black magic.

I would like to provide a counter argument by implementing a new dummy instruction in LLVM, and hopefully demonstrate how surprisingly straightforward it is if you know your way around. Here is our plan: add a new instruction to the RISC-V target; make this instruction available through a feature flag; and finally use and assembler to assemble a program."

Gustavo’s write-up, based around LLVM 20.1, adds a new “dummy” instruction dubbed “foo” to the backend, designed to simply take two operands in registers and store the result in a third register - an “R-type” instruction. This is added through a domain-specific language called TableGen, “[which] is used all throughout LLVM, Clang, and MLIR for different purposes,” Gustavo notes.

“Compilers are fun! Both theory and practice are beautiful,” he concludes. “In this post I hope to have convinced you, even a little bit, that tinkering with compilers is not impossible.”

The full write-up is available [on Gustavo’s blog](https://blog.gustavoleite.me/llvm-riscv-instruction).

<img src="/blog/2025-10-14-ecl90/tt.jpg" style="max-width:100%" />

## Tiny Tapeout Submits 237 Projects for Production

Matt Venn has issued an update on the most recent Tiny Tapeout production run, which included an impressive 237 individual projects packed into a single chip - which, as always, dramatically lowers the per-project manufacturing cost of having the designs realised in silicon.

“We just packed 237 of your projects into our most packed ASIC to date and submitted it for manufacture,” Matt announced of the latest production run. "It was the first time we enabled four-tile-high designs, enabling a monster crowdsourced RISC-V microcontroller competition called Asteroid. At 60k standard cells, this is the biggest design so far on Tiny Tapeout.

"Mitch Altman has long inspired us, and as a tribute we included an ASIC version of his classic TV-B-Gone universal off button for TVs. We also took the opportunity to test Sylvain Munaut’s ROM. We have our first commissioned art from Bleeptrack, “Cross Stitch Creatures” - the first of four in a series exploring silicon art.

“Thanks to ChipFoundry for sponsoring us and helping keep ASIC design and manufacture affordable,” Matt added. “Our next shuttle is already open and thanks to ChipFoundry you can tape out a single tile digital design and receive a copy of the ASIC for just €185 including shipping!”

More information is available [in Matt’s Mastodon thread](https://chaos.social/@matthewvenn/115299539166804327), with full details available on the [Tiny Tapeout website](https://tinytapeout.com/chips/ttsky25a/). The winners of the crowdsourced microcontroller competition, meanwhile, were announced [in a livestream on YouTube](https://www.youtube.com/watch?v=dbEW9u5Fh0M).

<img src="/blog/2025-10-14-ecl90/riscv.jpg" style="max-width:100%" />

## RISC-V Summit Welcomes Newcomers

RISC-V International has announced the opening of registration for the RISC-V Summit North America 2025, which takes place in Santa Clara California on the 22nd and 23rd of October - and is positioning the event as an ideal introduction for those new to the RISC-V ecosystem.

“You could read white papers for months, or you could spend two days getting hands-on briefings and live answers from the people building the future of compute,” RISC-V International claims of the conference. "RISC-V Summit North America concentrates the entire value chain in one place: architects, software leaders, tool vendors, integrators, and end-product companies.

"Our 2025 program includes keynotes, breakout sessions, a bustling exhibition hall and demo area, and separately ticketed developer workshops that run alongside the Summit.

“Openness is reshaping compute, and how it’s utilised in every corner of industry,” the organisation claims. "The ability to align silicon with your software, tune for your workloads, and source from multiple vendors reduces risk and unlocks new economics. Industry momentum continues to build across AI, automotive, and edge, with announcements and roadmaps you can validate in person at the Summit.

“The result is a concrete plan to accelerate your product roadmap, cut development costs, harden your supply chain, and keep strategic control of the technology that defines your business.”

Registration is open now [on the event website](https://events.linuxfoundation.org/riscv-summit/register/).

<img src="/blog/2025-10-14-ecl90/cheri.jpg" style="max-width:100%" />

## CHERI Alliance Gives a Glimpse Behind the Scenes

The CHERI Alliance, responsible for the Capability Hardware Enhanced RISC Instructions which are designed to provide hardware-level memory safety capabilities to RISC-V and other RISC-based processors, has published a piece offering a behind-the-scenes look at one of its Working Groups: the Promotion & Ambassadors Programme WG.

“If you’ve been watching the CHERI Alliance gather momentum, you’ve probably noticed a growing wave of community activity - talks, demos, explainers, and friendly faces spreading the word about capability-based security,” the Alliance writes. "A lot of that energy is coordinated by the Promotion & Ambassador Programme Working Group (WG).

"At a high level, the Promotion & Ambassador Programme WG exists to do two things: promote CHERI and the CHERI Alliance and develop the Ambassador Programme that powers community advocacy. The promotion is mostly about direct contact with all organisations who would be interested in the CHERI technology, either to integrate into their offering, or just as potential users. Both are important: the users need to show there is a demand and the technology providers need to develop the components and products that will fill that need. This is how we managed to build a fast-growing community of CHERI promoters.

“The ambassador programme,” the organisation continues, “is a way to extend the reach and visibility of the Alliance, and provide a local presence in many countries. Initially we didn’t really know what to expect or what these ambassadors would be able to do, but we really wanted to leverage the enthusiasm of people who were interested in cybersecurity and wanted to make the cyber world a better place. We left the candidates decide what they wanted to do to help, while of course guiding them with our own ideas. As no one is expected to be the best at everything, they picked the activities that best fit their strengths.”

The full article is available [on the CHERI Alliance website](https://cheri-alliance.org/behind-the-scenes-inside-the-promotion-and-ambassador-program-working-group/).

<img src="/blog/2025-10-14-ecl90/tenmil.jpg" style="max-width:100%" />

## UK Government Announces £10m Next-Gen Semiconductor Fund

The UK government has announced a new £10 million fund which is earmarked for the UK semiconductor industry, to promote “innovation from lab to market.”

“There is immense potential in the UK semiconductors sector. By investing in its growth, we will build on our country’s strengths, setting ourselves apart in a highly competitive market to unlock new skilled jobs at home and boost our economy,” claims Tech Minister Kanishka Narayan of the fund.

“We’re backing Britain’s businesses with the support they need to thrive, helping turn world-class research into major advancements such as more efficient mobile phones and TVs - making life easier for people right across the UK.”

“This funding being delivered by Innovate UK (through the Technology Missions Fund and DSIT [Department for Science, Innovation and Technology]) is for diverse projects, all developing cutting-edge semiconductor innovations that are fundamental for the UK and our frontier technology areas,” adds Innovate UK’s head of semiconductors Iain Mauchline.

“We’re pleased to provide support for these innovative companies who are using semiconductors as the key enabling technology to make a difference across a vast range of industries.”

The fund, which does not require the use of free and open source silicon or supporting technologies, is part of the UK’s mission - along with a number of other nations - to increase sovereignty in its technology industry and reduce reliance on foreign firms. Official figures suggest the money will be split among around 40 businesses, with initial recipients named as Paragraf and Silicon Microgravity.

More information is available [on GOV.UK](https://www.gov.uk/government/news/new-10-million-fund-to-support-uk-businesses-to-deliver-next-generation-of-semiconductors).




**Have feedback or news for inclusion in a future newsletter? Please send this to [ecl@fossi-foundation.org](mailto:ecl@fossi-foundation.org)**.

**Subscribe to [get El Correo Libre direct to your inbox](http://eepurl.com/dnL4v1).**
