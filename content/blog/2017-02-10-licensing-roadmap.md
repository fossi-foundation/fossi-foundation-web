---
layout: post
title: "FOSSi Licensing: Planned Activities"
description: ""
category:
tags: []
author: Licensing Committee
---

The Free and Open Source Silicon Foundation aims to clarify the
licensing situation for Free and Open Source Silicon (FOSSi)
designs. Licensing of FOSSi is similar to that of Free and Open Source
Software (FOSS), but the process of making a chip and the industry
conditions vary a lot. The following assumes the reader is familiar
with the basics of open source licensing, please see our
[introduction](http://fossi-foundation.org/licenses.html) as
reference.

Similar to FOSS, there is a common source format in FOSSi: Hardware
Description Languages (HDL) are a textual representation of a FOSSi
design as programming languages are for FOSS software. While there are
other source formats too (like schematics), HDL is the most common and
we will use this as source format in the following.

Free and Open Source Software licenses are many and varied, well
established, well understood and have been tested in multiple major
jurisdictions around the world. Conversely, FOSSi licenses are fraught
with uncertainty and have not been tested in a court. Thus far a
common approach has been to apply FOSS licenses to FOSSi works,
however without clauses which make them apply to HDL designs they are,
at best, ill fitting.

The FOSSi Foundation will work towards more certainty in this field by:

 * Providing a comprehensive overview of the specialties of FOSSi and
   where we identify limitations of open source software licenses.

 * Presenting three license options as discussed below. Those can be
   (1) existing licenses, (2) improvements to existing licenses or (3)
   newly created licenses.

 * Seeking approval of the license options by the Open Source
   Initiative (OSI).

Generally, three kinds of licenses are supposed to cover the spectrum
of demands by users: permissive, weak copyleft and strong copyleft.

## Permissive

For permissive licenses the situation is reasonably
straightforward. However, a variant of an existing license with a
special wording for FOSSi has a great advantage. But it is important
that such licenses are considered, specifically in the context of
FOSSi works, and agreed upon and approved for use.

We think that the Solderpad hardware license (SHL) is a good
permissive license and want to contribute to its wording where
necessary. Once suitably amended, we will recommend it for use and
seek OSI approval.

## Copyleft

There are good reasons for both strong and weak copyleft licenses,
however to date licenses like the GNU GPL and LGPL have been
recommended to achieve these licensing goals for HDL designs. For
software works, the boundaries of the work — what sources are required
to be distributed and conditions upon which license obligations are
triggered, such as when a design is distributed — are clear; with
FOSSi works this is much less clear.

What the FOSSi Foundation would like to see is a consensus on the
boundaries of FOSSi works, what constitutes distribution and what is
required to be published, as these are crucial to implementing
practical strong and weak copyleft licenses.

### Strong Copyleft

The implication of a strong copyleft license is to require the user of
a work under such a license to release/convey the combined work
(ie. the rest of the code) under the same or a compatible copyleft
license. Usually the reasons for their use are:

 * To increase the number of free and open source works available, so
   requiring the entire derivative work and its constituent works to
   be open-sourced if they are not already, thereby adding to the pool
   of existing open source works.

 * For commercial gain by offering a work on a dual license scheme; a
   zero-cost version which is open source and copyleft (usually for
   evaluation, academia), and another with a non-zero cost and a
   proprietary license. The proprietary license version is purchased
   to eliminate any copyleft obligations on the end product in the
   case that the derivative (combined) work cannot be open-sourced
   because it contains other proprietary IP the developer does not
   have the right to release.

For strong copyleft, GPL is the most popular license in the software
world. However, if used as-is it requires interpretation of what it's
strongly software-oriented terminology means in the semiconductor
design domain. For instance, the GPL requires the conveying of
“corresponding source”, which in the digital design realm would
include highly commercially sensitive data such as technology
libraries and physical implementation information. A way around
requirements such as these is essential. However, using the
“additional terms-mechanism” of the GNU GPL is seen as a way forward
here to be applied to the GPL for it to be appropriate for use with
digital designs. Another path is improving the CERN Open Hardware
License (OHL) for FOSSi.

### Weak Copyleft

Weak copyleft licenses apply the requirements of the open source
license on the work up to a certain point or boundary in a derived
work, based on the manner in which it has become a derived work. This
is almost always done to allow to use of the copyleft work with others
of a different license, without the requirements of the copyleft
license applying to those other works.

Developing a weak copyleft license is considered crucial to the
success and adoption of FOSSi works within the semiconductor industry,
enabling collaboration with commercial developers as they would be
able to integrate open source works without fear of exposing other
proprietary IP.  The most important part of such a license is
specifying where the boundary lies between having to comply with the
open source terms of the license and not.

There are two approaches to specifying the boundaries of a work: the
first is by specifying the way in which the work is derived to ensure
the license does not apply beyond its bounds, and the second is by
specifying the boundary at the source file level. The LGPL is an
example of the former, and the Mozilla Public License (MPL) is an
example of the latter.

#### Logical boundary

The bounds of an individual HDL work are relatively easy to specify
when the work is instantiated whole and a standard interface is used
to access it. However, issues arise when third-party IP needs to be
instantiated within its bounds, such as memories and other standard
logic. Further problems arise when IP inserted by build tools, such as
complex logic structures inferred from the HDL code, end up in the
final derived work. Again, the semiconductor world is full of strongly
protected technologies which are inextricably woven into a design at
“build” time, and will never be allowed to become subject to an open
source license.

A copyleft license for HDL based on the logical scope of the core are
possible, and deriving a license similar to LPGL is possibly one
approach.

#### File boundary

The other approach, file-based, is likely to be the simplest, most
elegant solution, requiring the creators of a derived work release
only the files of the works including their modifications to
them. Such an approach can be achieved by modifying existing
file-based licenses such as the MPL, with likely minor changes. One
example for such a license is the Open Hardware Description License
(OHDL).

## Summary

As outlined above, activities the FOSSi Foundation Licensing Committee
will undertake shall include work towards a permissive and two
copyleft licenses (weak and strong). In the case of a permissive
license, it likely adapting the Solderpad license is a good way
forward. For a strong copyleft, attempting to work through the
software concepts for the GPL or CERN OHL will likely yield a robust
licenses, and for copyleft, logic-based versus file-based needs to be
explored.
