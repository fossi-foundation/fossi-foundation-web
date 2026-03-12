---
layout: post
title: "Announcing the launch of our website — and LibreLane 3.0"
description: ""
category:
tags: []
author: Leo Moser & Mohamed Gaber
date: 2026-03-12
---

## librelane.org

Introducing the brand-new [LibreLane website](https://librelane.org)! We're
hoping that this website serves as a friendly introduction to LibreLane – its
capabilities, design principles, and community. This website – and our beautiful
new logo by [Jon Walters](https://wolde.tv/) – mark us fully settling in in our 
home at the FOSSi Foundation.

It has been [a long journey](/blog/2025-08-17-librelane/). From the shutdown of
Efabless, to the forking of OpenLane 2, to setting up all of our development
infrastructure – until we finally could work on new LibreLane features and
improvements again.

And we have been busy…

## LibreLane 3.0

<img src="/librelane/blog/2026-03-12-website_release_3-0/chips.png" style="max-width:100%" />

We are proud to finally release **LibreLane 3.0**.

This is the second major version release for LibreLane and our first outside of
Efabless. It has been in development for a fairly long time, parts,
and is packed with new features, enhancements, support for new technologies, and
more, and our first API cleanup (which is what actually caused the major version
bump, but the features are worth talking about too, promise.)

Some highlights are as follows:

### The `Chip` Flow

Alongside our trusty
[`Classic` flow](https://librelane.readthedocs.org/en/stable/reference/flows.html#classic),
based on OpenLane which is used to harden macros for implementing into larger
chips such as [Tiny Tapeout](https://tinytapeout.com) or
[Caravel](https://chipfoundry.io/soc_platforms), we're introducing a new
built-in flow named `Chip`, built by LibreLane maintainer Leo Moser.

This new flow is intended for the tape-out of top-level chips, eschewing the
generation of top-level pins and adding long-requested new pad ring generation
functionality. A number of new steps have been added to support this, including:

- [`OpenROAD.PadRing`](https://librelane.readthedocs.io/en/stable/reference/step_config_vars.html#step-openroad-padring):
  Generates the pad ring itself using OpenROAD.
- [`KLayout.Density`](https://librelane.readthedocs.io/en/stable/reference/step_config_vars.html#step-klayout-density):
  Performs a density check on the final GDSII for supported PDKs.
- [`KLayout.SealRing`](https://librelane.readthedocs.io/en/stable/reference/step_config_vars.html#step-klayout-sealring):
  Generates a seal ring around the chip for supported PDKs.

This flow has in turn been used to enable designs that use LibreLane on two
new shuttles:

- The IHP Shuttles: support for top-level chip tapeouts on both the
  [**ihp-sg13g2** and the brand new **ihp-sg13cmos5l**](https://github.com/IHP-GmbH/IHP-Open-PDK)
  open-source PDKs using these templates:
  - ihp-sg13g2: https://github.com/IHP-GmbH/ihp-sg13g2-librelane-template
  - ihp-sg13cmos5l: https://github.com/IHP-GmbH/ihp-sg13cmos5l-librelane-template
- [wafer.space](https://wafer.space): Top-level tapeouts on the gf180mcu PDK
  using this template: https://github.com/wafer-space/gf180mcu-project-template

IHP support for LibreLane was implemented in part by the Tiny Tapeout team, who
we thank dearly.

### Custom Flow and plugin updates

LibreLane 3.0 also includes some small tweaks to enable easier creation of
custom flows. The two biggest ones are to **Design Formats** and
**step substitution**.

Design Formats are how LibreLane represents the various file types that hold
information about your design. For example, `nl` is a DesignFormat with the
human-friendly name `Verilog Netlist`. A floorplanning step, for example, takes
an `nl` DesignFormat and returns a `def` DesignFormat.

Until LibreLane 3.0, these design formats were part of a fixed enumeration.
Meaning if you had a new tool that uses one or more new file types, you would
not be able to use them with LibreLane.

In LibreLane 3.0 and higher, you can now register new design formats for your
custom flows. For example, if someone were hypothetically working on a
design-for-test plugin, and said plugin requires circuits to be transformed into
the `bench` format as part of the DFT flow, the new format would be registered
and used as follows:

```python
DesignFormat("bench", "bench", "DFT Bench Format").register()

@Step.factory.register()
class WriteBench(Step):
  # …
  outputs = [DesignFormat.bench]
```

This allows for a lot more flexibility when creating custom flows.

Similarly, step substitution is a simple but powerful feature in LibreLane that
lets you create a custom flow by modifying an existing flow, which is accessible
from either Python code or from the very same design configuration file you use
for everything else.

For example, a design with this substitution would delete all
`OpenROAD.STAMidPnR` steps from a flow, and replaces `Yosys.Synthesis` with
`Yosys.Resynthesis`, which instead of using the `VERILOG_FILES` variable instead
uses a pre-existing netlist in the state dictionary:

```yaml
meta:
  flow: Classic
  substituting_steps:
    - ["OpenROAD.STAMidPnR*", null]
    - ["Yosys.Synthesis", "Yosys.Resynthesis"]
```

An issue that plagued this feature in LibreLane 2 however was that Step IDs were
not recomputed after each substitution. This made it very cumbersome to "chain"
substitutions, such as with the same hypothetical plugin:

```python
@Flow.factory.register()
class DifettoPNR(Flow.factory.get("Classic")):
    Substitutions = [
        ("Yosys.Synthesis", "Difetto.Synthesis"),
        ("+Difetto.Synthesis", "Difetto.BoundaryScan"),
        # …
    ]
```

In LibreLane 2, this would fail as it would not recognize `Difetto.Synthesis` as
a valid step ID already in the flow. In LibreLane 3.0, this now behaves as you'd
expect, which is, ironically, a breaking change.

This enabled us to introduce our two most complex plugins yet, namely:

- [**Difetto**](https://github.com/donn/difetto): A not-actually-hypothetical
  but still work-in-progress design-for-test flow that is implemented as a
  LibreLane plugin, leveraging all-open-source utilities, both already available
  and developed ad-hoc.
- [**librelane_plugin_fabulous**](https://github.com/mole99/librelane_plugin_fabulous):
  A plugin that adds two flows to harden FPGA tiles and fabrics respectively,
  using LibreLane and the [FABulous](https://github.com/FPGA-Research/FABulous)
  FPGA.

We would love it if you too would try your hand at implementing custom LibreLane
flows and plugins. Guides on writing custom flows, custom steps, and plugins are
all in the
[LibreLane Usage Guide](https://librelane.readthedocs.io/en/stable/usage/index.html)
in the documentation.

### Other

We've updated the tool environment to be based on NixOS 25.11, and included more
up-to-date versions of tools across the board for the `Classic` and `Chip`
flows. As usual, each update cleared our meticulous CI, which we've enhanced
further for 3.0, for all PDKs to ensure you're still receiving a first-class
chip experience.

Additionally, we've updated the Nix recipes to support loading user-defined
Yosys plugins and add user-defined Python packages to Yosys/OpenROAD Python
interpreters. This is useful for some custom flows - for example,
in Difetto, we required OpenROAD and Yosys scripts to use the 

And of course there many other many small improvements, such as improved
rendering of the chip layout, support for non-default rules, reduced file size
for both Magic and KLayout GDS files, better subprocess formatting, and many
more improvements and bug fixes.

---

Above all else, we would like to thank our community for your continued support
of LibreLane. We'd like to extend special thanks to:

- **[Kareem Farid](https://github.com/kareefardi)** - for his work what were
  OpenLane 2.0 and the 3.0 alpha back at Efabless.
- **[Tim Edwards](https://opencircuitdesign.com)** – for his help updating and
  bringing up the various PDKs while maintaining LibreLane compatibility.
- **[Mohamed Shalan](https://github.com/shalan)** – for starting OpenLane and
  supervising the initial development of LibreLane.
- **[Mohamed Kassem, Jeffrey DiCorpo](https://chipfoundry.io/)** and other
  Efabless alumni – who were the first adopters of OpenLane 2 and who later
  supported us moving to LibreLane under the FOSSi Foundation, and let us set up
  soft redirects for our various projects.
- **[The Tiny Tapeout team](https://tinytapeout.com/credits/#team)** – for their
  continued use of LibreLane as the primary flow for user projects, and for help
  bringing up the first IHP Open PDK.
- **[Our contributors](https://github.com/librelane/librelane/graphs/contributors)**
  for submitting fixes, feature ideas, and many other things that make LibreLane
  even better.
- And last but definitely not least – **the FOSSi Foundation** for giving the
  project a home after Efabless was wound up.

See the full release notes here:
https://github.com/librelane/librelane/blob/3.0.0/Changelog.md

::ff-btn-cta{linkTo="https://librelane.readthedocs.io/en/stable/" class="my-20"}
Install LibreLane today!
::
