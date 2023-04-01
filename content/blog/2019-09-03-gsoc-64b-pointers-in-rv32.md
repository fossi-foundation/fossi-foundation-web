---
layout: post
title: "GSoC Report: 64 bit global pointers in RV32 based GP-GPU"
description: ""
category: 
tags: ['GSoC', 'basejump', 'RISCV', 'LLVM']
author: Reshabh Sharma
date: 2019-09-03
---

*This is a guest post by Reshabh Sharma, who worked this summer on a Google Summer of Code (GSoC) project under the umbrella of the FOSSi Foundation.*

RISC-V will change the world. Prof Taylor's [Bespoke Silicon Group][bespoke-silicon-group] is contributing by developing a GP-GPU based on RISC-V 32 bit ISA (RV32), after the huge success of their Open-Source RISC-V Tiered Accelerator Fabric SoC, [Celerity][celerity] which holds the world record for RISC-V performance; 500B RISC-V instructions per second, beating prior records by 100X.

For compute 32 bit is common for requirements like very high energy efficiency and density. Since GPGPUs often requires 4GB+ of memory, we need 64 bit addresses to access DRAM. This summer I worked under the vision of Prof. Taylor to initiate the support for custom instructions specifically designed for [RISC-V based GP-GPU][basejump]. We started with supporting 64 bit pointers using custom load and store instructions in address space 1 inside the RISC-V LLVM backend.

### Getting Started
Our RISC-V LLVM backend fork is available [here][rv32-gpu]. Get started by building LLVM with our custom RISC-V backend fork following the steps given [here][get-started]. 

### Custom Instructions
Following new instructions have been added:
- LDW rd, rs1, rs2
Loads the value from a 64 bit address by concating the i32 values in two registers.
-  SDW rd, rs1, rs2
Stores the value to a 64 bit address by concating the i32 values in two registers.

### Phase 1: Define new instructions
This phase was fairly simple and dealt with the addition of new instructions in RISCV LLVM backend.

### Phase 2: Update data layout string
Data layout string conveys the front-end about the size and alignments of different entities like integers, pointers etc. We updated the data layout string to support 64 bit pointers in address space 1.

### Phase 3: Lowering to custom load and store
Lowering to custom store was a huge challange and I'm glad that we could complete it. More information about the challanges we faced during lowering can be found at this [blog post][lower-custom]

### Links
All the code is hosted [here](https://github.com/reSHARMA/RISCV32-GPU)
List of commits:
- [Make pointer size 64 bit in RV32](https://github.com/reSHARMA/RISCV32-GPU/commit/93b7b814d7d312a119102f167858c10353b596cd)
- [Update data layout string in backend to support 64 bit pointers](https://github.com/reSHARMA/RISCV32-GPU/commit/f28937bea0badb325f24bf8cacadb76f8360c4d7)
- [Add custom load/store instructions](https://github.com/reSHARMA/RISCV32-GPU/commit/26d66f69f184ff0845cd2cc551d566c9200e167f)
- [Break 64 bit GlobalAddress in address space 1 into a pair of i32 values](https://github.com/reSHARMA/RISCV32-GPU/commit/6dbaa4b79c594431a71c78ae4ce81f16905666fe)
- [Partially support MO_LOLO and MO_LOHI target flags](https://github.com/reSHARMA/RISCV32-GPU/commit/95ecd051e2b65482b860d697bd1aaa6c63e196ad)
- [Custom lower store to custom store node](https://github.com/reSHARMA/RISCV32-GPU/commit/e72fe7880f5eb459093a3d21eda5c3d162e26df1)
- [Custom lower load to custom load node](https://github.com/reSHARMA/RISCV32-GPU/commit/c4be64c3512528ab96394cd39268da2870a37dfa)

### Conclusion
It was a wonderful experience working under the mentorship of Prof. Taylor. I also appriciate all the efforts from [Neil Ryan](https://neildryan.com/) and the awesome collaboration with [Bespoke Silicon Group][bespoke-silicon-group]. The task was complex and looked hard to be completed in the given time frame, I'm glad we did it. I've got a lot of help from llvm-dev mailing list, riscv-llvm group especially Alex Bradbury and Luís Marques who are still helping us to run perf benchmark on spike. Million thanks to everyone who supported us. Feel free to reach out at reshabhsh@gmail.com for any feedback/suggestions.


[bespoke-silicon-group]:http://cseweb.ucsd.edu/~mbtaylor/group_news.html
[celerity]:http://opencelerity.org/
[basejump]:http://bjump.org/manycore/
[rv32-gpu]:https://github.com/reSHARMA/RISCV32-GPU
[get-started]:https://resharma.github.io/RISCV32-GPU/docs/home/
[lower-custom]:https://resharma.github.io/RISCV32-GPU/blog/2019/08/02/custom-load-store/
