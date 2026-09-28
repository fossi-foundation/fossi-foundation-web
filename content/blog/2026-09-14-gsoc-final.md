---
layout: post
title: "GSoC 2026 Wrapup!"
description: ""
category:
tags: []
author: Dan Ruelas-Petrisko
date: 2026-09-14
---

# FOSSi Foundation GSoC 2026: End-of-Summer Project Highlights!

Google Summer of Code (GSoC) 2026 has officially wrapped up, and the FOSSi Foundation would like to show off what our contributors managed this year! From supercharging RTL simulations to using AI to clean up code, this cohort addressed some tough hardware engineering challenges. Here are some results making open-source hardware tools better, faster and easier to use.

---

### 🚀 Speeding Up RTL Sims with Generic MinimumLinuxBoot

**Contributor:** Xuhai Chang

**Project Link:** [Read Xuhai’s Final Report](https://glaunix.dev/gsoc2026mlb/)

Waiting for an operating system to boot in a detailed RTL simulation is a notorious time-sink—it can literally take days before you even get to the workload you want to test.

Xuhai fixed this by building a massive shortcut. The Generic MinimumLinuxBoot project uses QEMU to boot Linux lightning-fast. Once it's booted, the tool checkpoints the state and drops it right into an OpenPiton/Verilator simulation. Instead of using messy, fragile RTL signal hacks, Xuhai built a clean RISC-V M-mode restore stub to handle the transition. The result? You can skip the boot sequence and jump straight into running realistic Linux workloads for cycle-accurate studies!

### 🤖 Teaching AI to Speak TL-Verilog

**Contributor:** Muhammad Rayyan Khan

**Project Link:** [Read Rayyan’s Blog Post](https://medium.com/@khan.rayyan3622/teaching-ai-to-speak-tl-verilog-a-gsoc-2026-field-report-d4f3dc5a8c87)

AI is already great at writing software, but what if we could use it to clear out legacy hardware technical debt?

This summer, Rayyan Khan and his teammates figured out how to train AI models to convert traditional open-source Verilog into sleek Transaction-Level Verilog (TL-Verilog). Because TL-Verilog naturally hides a lot of the pipeline and timing boilerplate, this conversion could wipe out nearly half the open-source Verilog code currently out there. It’s a huge step toward making IP cores cleaner, much easier to read, and simpler to maintain.

### 🧠 Leveling Up the CVA6 Core with Virtual-Memory Extensions

**Contributor:** Seongwon Jo

**Project Link:** [View Seongwon’s Work Product](https://github.com/sjo99-kr/cva6-svadu/tree/gsoc2026-work-product) | **Pull Request:** [openhwgroup/cva6#3384](https://www.google.com/search?q=https://github.com/openhwgroup/cva6/pull/3384)

Keeping an open-source processor up-to-date with the latest RISC-V specs is no small feat. Seongwon Jo took on the OpenHW Group's CVA6 core and gave its memory management a massive upgrade by adding three privileged virtual-memory extensions: **Svadu**, **Svpbmt**, and **Svinval**.

The coolest part of Seongwon's work is a brand-new Page-Table Entry Update Engine tucked into the store unit, which handles hardware A/D-bit updates seamlessly. After rigorous differential testing against the Spike simulator, the new extensions are passing all RV32 and RV64 regressions. It’s a massive leap forward for CVA6!

### 📊 A Much-Needed Memory Viewer for Surfer

**Contributor:** Kutikuppala Deekshita

**Project Link:** [Read Deekshita’s Final Report](https://gitlab.com/deekshita.kutikuppala5/gsoc-2026-final-report)

Let’s be real: trying to debug memory arrays by staring at raw waveforms is a major headache. Deekshita Kutikuppala completely changed the game by building a dedicated, interactive memory viewer natively into the Surfer waveform viewer.

Instead of squinting at wiggling lines across thousands of cycles, you now get a clean, customizable table. You can filter data, search for specific values, and even highlight changes that happen right at your cursor. It takes the pain out of memory debugging and makes analyzing simulation data way more intuitive.

### 🐛 Actionable Debugging with Cycle-by-Cycle Counter-Examples

**Contributor:** Shri Vishakh Devanand

**Project Link:** [Read Shri’s Blog Post](https://5iri.me/blog/gsoc-2026)

Bounded Model Checking is fantastic for mathematically proving your hardware works, but tools that just spit out a generic "pass/fail" aren't super helpful when things break. The `circt-bmc` tool used to do exactly that.

Shri upgraded the tool to make it a practical, daily-driver for debugging. Now, when an assertion fails, `circt-bmc` doesn't just tell you it broke—it gives you a detailed, cycle-by-cycle counter-example. You get to see the exact sequence of inputs that caused the failure, saving you hours of guessing and making the whole CIRCT ecosystem much friendlier for developers.

---

A massive thank you to all of our 2026 contributors and the incredible mentors who guided them! We look forward to seeing how the open-source silicon community adopts and extends these new features. We also look forward to collaborating with our amazing contributors for future FOSSi Foundation projects!
