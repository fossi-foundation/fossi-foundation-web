---
title: "LibreLane - ASIC flow infrastructure library"
layout: default
header: |
  Free and open source silicon lives by its contributors.
  And you can be one, too!
  Read on for ways to get involved.
---

::ff-header-libre-lane
::

::ff-content-long
LibreLane is a powerful and versatile infrastructure library that enables the construction of digital implementation flows for application specific integrated circuits (ASICs) based on open-source and commercial electronic design automation (EDA) tools. It includes two reference flows (`Classic` and `Chip`) that are built entirely using open-source EDA tools.

The successor to the massively popular OpenLane, LibreLane is:

- Simple to use: Configure your entire ASIC implementation flow using one file.

- Free and open source: With a complementary set of open-source process design kits (PDKs), design and implement your chip without signing a single document. Freely modify both the infrastructure, underlying tools, and PDK to fit your needs – you're in control. Not a vendor.

- Flexible and extensible: Create custom flows, both by simple modifications to the default flows in the configuration file, or by writing Python scripts or plugins to implement advanced functionality.

- Hermetic: Rewind and explore alternative configurations without losing data – LibreLane captures explicit snapshots of the configuration and state of your design at every step.

- Reproducible and traceable: LibreLane comes packaged with a verified environment of free EDA utilities with a simple goal in mind: same tools, same flow, same configuration; same result. Capture your modifications and engineering change orders (ECOs) as automated steps, and your flow is your documentation.

You can try LibreLane right in your browser:

::center

  ::ff-btn-cta{linkTo="https://colab.research.google.com/github/librelane/librelane/blob/main/notebook.ipynb" class="my-20"}
  Try LibreLane in your Browser
  ::
  
  <br />
  
  ::ff-btn-cta{linkTo="https://github.com/librelane" class="my-20"}
  LibreLane Repository
  ::
  
  <br />
  
  ::ff-btn-cta{linkTo="https://librelane.readthedocs.io/en/latest/" class="my-20"}
  LibreLane Documentation
  ::
::
::

::ff-libre-lane-news
::

<br />

::center
<FfH1 class="text-ultraviolet">
Our Principles
</FfH1>
::

<br />

::ff-section-top
  :::ff-section-top-item
  ---
  icon: community
  title: Community
  description: LibreLane is developed by the community, for the community. Join us over at FOSSi Chat!
  linkTo: https://fossi-chat.org/
  linkTitle: FOSSi Chat
  color: ultraviolet
  ---
  :::

  :::ff-section-top-item
  ---
  icon: innovation
  title: Innovation
  description: LibreLane allows you to configure and implement chips using just one configuration file – and once it works, it keeps working.
  linkTo: /our-work/projects
  linkTitle: FOSSi Foundation projects
  color: nasu-purple
  ---
  :::

  :::ff-section-top-item
  ---
  icon: guardianship
  title: Guardianship
  description: LibreLane is under the umbrella of the FOSSi Foundation, a not-for-profit organisation.
  linkTo: /about-us/manifesto
  linkTitle: The FOSSi Foundation manifesto
  color: fuchsia-flourish
  ---
  :::

  :::ff-section-top-item
  ---
  icon: resources
  title: Contribution
  description: If you would like to contribute to LibreLane, find the repository here.
  linkTo: https://github.com/librelane/librelane
  linkTitle: Repository
  color: pink-piano
  ---
  :::

::

<br /><br />

::center
<FfH1 class="max-w-[800px] text-ultraviolet">
PDK Support
</FfH1>
::

::ff-container

::ff-cards{class="mt-16"}
  ::ff-card-pdk
  ---
  img: /librelane/images/pdks/SkyWater Logo Color Landscape.png
  headline: sky130
  ---
  ::

  ::ff-card-pdk
  ---
  img: /librelane/images/pdks/GF_logo_horz_rgb_R.svg
  headline: gf180mcu
  ---
  ::

  ::ff-card-pdk
  ---
  img: /librelane/images/pdks/ihp_logo_without_claim_CMYK.png
  headline: ihp-sg13
  ---
  ::
::


::ff-content-long
Support for additional **open-source** or **proprietary** PDKs can be added by creating a LibreLane PDK configuration. Read more about this process in the LibreLane documentation under [Process Design Kits](https://librelane.readthedocs.io/en/latest/usage/about_pdks.html) and [Universal Flow PDK Configuration Variables](https://librelane.readthedocs.io/en/latest/reference/common_pdk_vars.html). A good example for a LibreLane PDK configuration can be found in the [IHP Open PDK](https://github.com/IHP-GmbH/IHP-Open-PDK/tree/main/ihp-sg13g2/libs.tech/librelane).
::

::

::center
<FfH1 class="max-w-[800px] text-ultraviolet">
LibreLane Plugins
</FfH1>
::

::ff-container

::ff-cards{class="mt-16"}
  ::ff-card-plugin
  ---
  headline: Difetto DFT Plugin
  linkTo: https://github.com/donn/difetto
  ---
  A design for test plugin.
  ::ff-btn-cta{linkTo="https://github.com/donn/difetto" class="my-10"}
  Repository
  ::
  ::

  ::ff-card-plugin
  ---
  headline: FABulous eFPGA Plugin
  linkTo: https://github.com/mole99/librelane_plugin_fabulous
  ---
  Physical implementation of FABulous eFPGAs.
  ::ff-btn-cta{linkTo="https://github.com/mole99/librelane_plugin_fabulous" class="my-10"}
  Repository
  ::
  ::
::

::ff-content-long
LibreLane also supports the ability to freely extend or modify flows using Python scripts and utilities.
You would like your plugin to be featured? Please write to <librelane@fossi-foundation.org>.
::
::


<br />

::center
<FfH1 class="max-w-[800px] text-ultraviolet">
Testimonials
</FfH1>
::

::ff-container

::ff-cards{class="mt-16"}
  ::ff-card-testimonial
  ---
  img: /librelane/images/testimonials/ttlogo_400.png
  headline: Tiny Tapeout
  linkTo: https://tinytapeout.com/
  ---

  "We couldn't run Tiny Tapeout without LibreLane — it’s our default Verilog to GDS flow.
Its simplicity enables our customers to create their first designs. Its flexibility enables us to use it for the Tiny Tapeout chip design itself; the multiplexers, the controller, the ROM." **—&nbsp;Matt&nbsp;Venn, Tiny&nbsp;Tapeout&nbsp;Founder**
  ::

  ::ff-card-testimonial
  ---
  img: /librelane/images/testimonials/chipfoundry.png
  headline: ChipFoundry
  linkTo: https://chipfoundry.io/
  ---

  "LibreLane brings software-defined agility to the hardware world. By providing a stable, extensible framework for specialized design flows, they help ChipFoundry customers accelerate the path to silicon. It’s a powerful addition to the designer’s toolkit that streamlines the transition from concept to verified design." **—&nbsp;Jeff&nbsp;DiCorpo, CEO&nbsp;ChipFoundry**
  ::

  ::ff-card-testimonial
  ---
  img: /librelane/images/testimonials/nativechips-logo-dark.png
  headline: NativeChips
  linkTo: https://nativechips.ai/
  ---

  "OpenLane proved that open-source EDA could produce real silicon — more than 800 tapeouts delivered.  LibreLane takes that foundation and makes it programmable, modular, and extensible enough to build commercial design flows on top of." **—&nbsp;Mohamed&nbsp;Kassem, CEO&nbsp;NativeChips**
  ::

  ::ff-card-testimonial
  ---
  img: /librelane/images/testimonials/Wafer.Space.black.svg
  headline: wafer.space
  linkTo: https://wafer.space/
  ---

  "With LibreLane, our customers can create complete chip designs, ready for tape-out with wafer.space. To ensure that each and every design is manufacturable, we use LibreLane to implement our custom precheck flow." **—&nbsp;Tim&nbsp;“mithro”&nbsp;Ansell", CEO&nbsp;wafer.space**
  ::

  ::ff-card-testimonial
  ---
  img: /librelane/images/testimonials/LOGO SPHERICAL-01_cropped.png
  headline: SPHERICAL
  linkTo: https://spherical-systems.com/
  ---

  "LibreLane enables us to integrate place and route into our software-driven flow with flexibility - and then use it to build high-performance chips for space." **—&nbsp;Thomas&nbsp;Parry, CEO&nbsp;SPHERICAL**
  ::
::
::ff-content-long
You would like to be featured in our testimonials? Please write to <librelane@fossi-foundation.org>.
::
::

::ff-libre-lane
::
