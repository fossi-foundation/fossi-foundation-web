---
layout: post
title: "Google Summer of Code - Update"
description: ""
category:
tags: []
author: Stefan Wallentowitz
---

We host three students this year during Google's Summer of Code. The
midterm is over and they are fastly approaching the end of the
program. We want to give you a quick update about their progress here.

## Improving QEMU for OpenRISC

Dalmon Ian works on improving the QEMU support of OpenRISC. The main
item was updating the OpenRISC instruction set, testing and
benchmarking so far. Dalmon works on his Github repository
[here](https://github.com/dalmonian/qemu/commits/new-instructions) in
case you want to peek into the progress and test his code. The
remaining work includes testing a Linux boot, troubleshooting and
preparing the upstream patches.

## RISC-V support for Parallella

Elias Kouskoumvekakis works on porting the Rocket RISC-V core to the
Parallella board. The best place to track his work is his
[Github repository](https://github.com/eliaskousk/parallella-riscv),
while his [blog](http://eliaskousk.teamdac.com/) is a bit
outdated. You can clone the repository and follow the instructions in
the README to generate the design and boot Linux on the core.

## Yosys Tools: Automatic schematic generation for web browsers

Rishabh Rawat designs and implements a schematic viewer for web
browsers to be integrated with the Yosys tools. It takes the Yosys
json description of a digital circuit to render it on the client side
in the web browser. His work can be followed
[here](https://github.com/RishabhRawat/schematicGenerator) and he will
create documentation around it in the last part of GSoC.
