---
title: "What is Free and Open Source Silicon (FOSSi)?"
---

Free and Open Source Silicon (FOSSi) are components and systems that
are inside silicon devices (‘chips’). It is our core belief that
building blocks that form such digital devices should be free and open.

## The FOSSi target audience

Digital systems are nowadays created not only by industry experts, but
the community of hobbyists and academics is steadily increasing. The
introduction of the FPGA (a re-programmable digital hardware device)
is the key enabler for this development and communities have evolved
around open source ‘IP blocks’ and entire System-on-Chip.

FOSSi is a good way for hobbyists and academics to collaborate and
re-use existing building blocks to build their own systems. But it is
not limited to such non-commercial users. Instead, there is an
increasing number of companies that use open source IP blocks and make
their own development open source. Beside the publicity companies gain
communities and involve people around their designs by doing so.

We hence see the three pillars of companies, hobbyists and academics
for the success of FOSSi.

## FOSSi components, code and systems

The starting point of a digital hardware design is a hardware
description, most often a hardware description language, sometimes
schematic. This is the source code of a design. This is then
synthesized (compiled) into netlist that is the structural definition
of the hardware design. The next major step is the Implementation and
Placement & Routing of the design to the actual hardware output. In
case of a chip (ASIC) this step results in the creation of masks for
the silicon production, while in case of an FPGA the result is a
bitstream which is used to program the FPGA.

While the concept of pre-synthesized netlists exists (mostly for
closed digitial designs), the standard way of exchanging FOSSi
components is on the hardware description language level. FOSSi covers
everything from building blocks (for example a UART controller or a
processor) or complex System-on-Chip.

Two non-functional aspects are critical to FOSSi: Clear *interface
definitions* are required for interoperability of different building
blocks and building blocks must be trusted to follow well-defined
(open) protocols. Furthermore, reliable *testbenches and test
strategies* are required, because hardware bugs are much harder to
cope with as they can in the case of silicon production not be fixed.

## A Very Short History of Open Source Software and Hardware

The open source software movement is similarly old as the open source
hardware movement. For example the
[Homebrew Computer Club](https://en.wikipedia.org/wiki/Homebrew_Computer_Club)
in the seventies can be seen as the big bang of both movements where
hardware design and the software for it were exchanged freely. Not
only has an entire industry evolved from this club, but also the
discussion around open source software has been a dynamic topic over
the decades since this time. After periods of large companies with
closed software dominating the market, open source software is widely
accepted nowadays, at latest since Linux and collaborative platforms
on the Internet. Open Source Hardware has had a similar history, but
at much smaller dimension. But over the last decade the “maker scene”
has evolved in the tradition of the Homebrew Computer Club.

### Difference between FOSSi and Open Source Software

Free and Open Source Silicon is slightly different in the
conditions. Distributing software and compiling, modifying and testing
it is very easy nowadays. While FOSSi sources can generally be
distributed as easy as software source code, it is very expensive to
build a chip out of it. Fortunately, it has become moderately
expensive since the introduction of the FPGA and nowadays FPGA
development boards are available for as low as 25
Dollars. Nevertheless, the community has been much smaller and often
limited to experts as the traditional learning curve for building
hardware was a bit steeper as in software programming (we are of
course not claiming it is harder to design excellent hardware than to
design excellent software).

### Difference between FOSSi and OSHW

The Open Source Hardware movement has seen a big growth in the last
decade, mainly driven by cheap embedded system platforms like Arduino
or RaspberryPi and the advances of collaborative (software)
development online-platforms. While there also was an increase in
FOSSi in this period, OSHW has grown much faster until now. We think
that the main reason why FOSSi did not see that breakthrough until now
is on the one hand the cost and difficulty of production and on the
other hand the reluctance of companies from this field as it still
seen critical.

## The FOSSi ecosystem

Beside fostering the development of Free and Open Source Silicon we
encourage the open source development of the FOSSi ecosystem. This
ecosystem is mainly the Electronic Design Automation (EDA) tools, that
have been traditionally expensive and required a lot of experience to
use. This has improved over the last decade and the FPGA vendors
provide free tools for their small FPGA devices. We encourage the
development of open source EDA tools, especially for system synthesis
and testing.
