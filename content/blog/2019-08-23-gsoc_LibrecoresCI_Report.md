---
layout: post
title: "GSoC Project Report: Continuous Integration for Hardware Projects on LibreCores CI"
description: ""
category:
tags: ['GSoC', 'LibrecoresCI' ,'FOSSi-Foundation']
author: Nancy Chauhan
date: 2019-08-23
---

[Librecores][librecores] provides a platform to share projects and ideas, in the area of free and open-source digital hardware design. [Librecores CI][librecoresCI] is a service to provide CI for hardware projects hosted on Librecores to improve user experience and reliability.

This summer, I worked on developing continuous integration pipeline for hardware projects such as [OpenRISC][openrisc], a family of free and open-source processor implementations on the RISC architecture

I worked from May to August 2019. In this project I worked on contrasting technologies (EDA tools, processors, Docker, Jenkins, Groovy DSL & Jenkins Shared Pipeline library) and GitHub organizations (OpenRISC, LibreCores, [FuseSoC][fusesoc]) with the following goals:

1. Enhance OpenRISC CI pipelines and modify them to use standard LibreCores images

2. Enhance CI Pipelines with new test automation

3. Develop a [Yosys synthesis metrics parser][yosys-parser] and add it to the LibreCores CI base image

4. Add [_Yosys Synthesis_][yosys]  resource usage statistics parsing and publishing on Jenkins

5. Export OpenRISC test results to TAP and publish on Jenkins

6. Move shared code of OpenRISC Pipelines to LibreCores Pipeline Library

7. Add TAP and Yosys code parsing & publishing steps to [LibreCores Pipeline library][librecorespipelinelib]

8. Implement Default Pipeline for FuseSoC-based OpenRISC projects

## Community Bonding: Planning the solution

During the community bonding period, we planned the goals of the project and its timeline. My mentors guided me on the existing CI pipelines and solutions
to proceed with the project.

## Coding Phase

The coding phase was of 3 months, during which I implemented the ideas I proposed in my [GSoC proposal][proposal].

### First Phase

In the first month, I worked on enhancing OpenRISC CI pipelines as it previously worked on Travis CI. The OpenRISC Continuous Integration (CI) suite is now running in a [_librecores-ci-openrisc_][librecores-openrisc] docker container.

#### Links

1. [Modifying mor1k Travis CI flow to use Librecores-CI image][week2report]
2. [Coding Phase 1: Week 3 & 4][week4report]


### Second Phase

In the second phase, we started working on enhancing CI pipelines. We completed work on Yosys synthesis with changes in core description file of [mor1kx][mor1kx] (FuseSoC). This goal led to developments and changes in FuseSoC backend 
[_edalize_][edalize] with its newly released version ``v0.1.6 ``

#### Links

1. Blog: [Coding Phase 2 with Librecores CI, OpenRISC, Fusesoc & Jenkins][phase2report]

2. Presentation: [GSoC/Outreachy 2019: Mid-term project demos, part 2][midtermpresentation]

3. Demo Video: [GSoC/Outreachy 2019: Mid-term project demos, part 2][midtermdemo]

### Third Phase

In the third month, we completed Yosys Synthesis and published its result [LibreCoresCI Jenkins server][lcciopenrisc] with plot plugin which also led to the release of [new version][changelog] _0.5.0_ of _Librecores CI base_ docker image.

I also worked on exporting OpenRISC test results to TAP Format and published on Jenkins with TAP plugin.

Finally, I worked on improving LibreCores Pipeline library for adding a generic pipelines for CI of the OpenRISC project. I also worked on generalising Yosys Synthesis so that it can be configured for various hardware projects with a simple declarative call.

#### Links

1. [Presentation: 2019 Summer Project Demos][presentation]

## Conclusion

Here is my [Project Dashboard][dashboard] which has all my contributions to the project.

#### What tasks were accomplished


| Tasks                            | Planned | Completed |
| ---------------------------------|:-------:| :--------:|
| Enhance CI Pipelines             |   Yes   |    Yes    |
| OpenRISC CI pipelines In Jenkins |   Yes   |    Yes    |
| Docker Image for OpenRISC        |   Yes   |    Yes    |
| Yosys Metrics Parser             |   Yes   |    Yes    |
| Yosys Synthesis                  |   Yes   |    Yes    |
| Export Tests to TAP              |   Yes   |    Yes    |
| Publish results with plugins     |   Yes   |    Yes    |
| Openrisc Pipeline Library        |   Yes   |    Yes    |
| Yosys Synthesis Pipeline Library |   Yes   |    Yes    |
| Fusesoc Pipeline Library         |   Yes   |    Yes    |
| Open OCD / GDB                   |   Yes   |    No     |
| E-Mail Notification              |   Yes   |    WIP    |

## What did I learn in GSoC

1. Various technologies i.e Docker, Jenkins

2. Groovy Programming and developing Jenkins Shared Library

3. Concepts of DSL and Closure

4. Various EDA Tools

## Future engagements

We would like to invite more hardware projects to use the LibreCores Pipeline library and development tools.
If you are interested to do so, please reach out to us in the [LibreCores CI Gitter Chat](https://gitter.im/librecores/librecores-ci).

Thank you Oleg Nenashev, Stafford Horne, Olofk Kindgren for helping me complete the goals for GSoC 2019.

Please send in your feedback at nancychn1@gmail.com

[changelog]:https://github.com/librecores/docker-images/releases
[mor1kx]:https://github.com/openrisc/mor1kx
[edalize]:https://github.com/olofk/edalize
[librecores-openrisc]:https://github.com/librecores/docker-images/tree/master/librecores-ci-openrisc
[yosys]:http://www.clifford.at/yosys/
[librecorespipelinelib]:https://github.com/librecores/librecores-pipeline-lib
[yosys-parser]:https://github.com/librecores/docker-images/tree/master/librecores-ci
[fusesoc]: https://github.com/olofk/fusesoc
[openrisc]: https://openrisc.io/
[librecoresCI]: https://www.librecores.org/static/librecores-ci
[librecores]: https://www.librecores.org/
[proposal]: https://docs.google.com/document/d/1d0mIrLpU80IqB5oe4CvUz5H3bMR84tg0P99doWrovek/edit?usp=sharing
[phase2report]: http://nancychauhan.in/stories/2019/07/30/coding-phase2/
[week4report]: http://nancychauhan.in/stories/2019/06/28/gsoc-week3_4/
[week2report]: http://nancychauhan.in/stories/2019/06/08/gsoc-week1_2/
[lcciopenrisc]: https://ci.librecores.org/job/Projects/job/OpenRISC/
[dashboard]: https://github.com/orgs/librecores/projects/1
[presentation]: https://docs.google.com/presentation/d/10GbtgTQwdoZqCfPv5hhXnVffNXPT8BeGNx0H5PJAJuw/edit?usp=sharing
[midtermpresentation]: https://docs.google.com/presentation/d/1MyXM3xn0ZwbXyJpsaAi3q_CkBsdfXjbGQKcMuOk83i4/edit?usp=sharing
[midtermdemo]: https://www.youtube.com/watch?v=HlENuZZq7zc
