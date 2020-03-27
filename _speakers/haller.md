---
title: Haller
name: Philipp Haller
_sort: Haller
pic: philipp
layout: bio
work_title: Fine-grained Deterministic Parallelization of Static Analyses
datetime: 14-10-2019
time: 14:35-14:55
position_txt: Associate professor of computer science at KTH
social:
- title: globe
  url: http://www.csc.kth.se/~phaller/
- title: file-pdf-o
  url: slides/Philipp_Haller_CSD19.pdf
---

#### Abstract
Parallelization of static analyses is necessary to scale to real-world programs, but it is a complex and difficult task and, therefore, often only done manually for selected high-profile analyses. In this talk, I present a reactive programming model as a foundation for implementing parallel static analyses. Using the proposed programming model, developers can reuse the domain-expert knowledge on how to parallelize analyses encoded in the programming framework and do not need to think about parallelization and concurrency issues on their own.  When implementing an exemplary analysis on top of the proposed approach, our evaluation shows a 4.94x speed-up on a 10-core CPU when compared with an equivalent but non-concurrent implementation of an IFDS-based analysis. This result beats the current best parallelized IFDS approach. Furthermore, the run-time overhead introduced by the framework is reasonable: using two threads we already gain a 27% speed increase--when compared with the best state-of-the-art implementation. The programming model supports stateful computations and only requires monotonic computations over lattices, and is thus widely applicable.

#### Bio
Philipp Haller is an associate professor in the School of Electrical Engineering and Computer Science (EECS) at KTH Royal Institute of Technology in Stockholm, Sweden. His main research interests are in the design and implementation of programming languages, type systems, concurrency, and distributed programming. He was part of the team that received the 2019 ACM SIGPLAN Programming Languages Software Award for the development of the Scala language. At KTH, he teaches courses on foundations of programming languages and on compiler construction. He is a member of the founder's circle of Lightbend, Inc. (formerly Typesafe), a start-up company developing and supporting Scala as well as frameworks for large-scale distributed programming. Prior to Lightbend, he was a post-doctoral fellow at Stanford University, USA, and at EPFL, Switzerland. He received his Dipl.-Inform. degree in 2006 from Karlsruhe Institute of Technology (KIT), his PhD in computer science in 2010 from EPFL, and his Docent title in 2018 from KTH.

#### Slides
<iframe class="slides" src="pdf/web/viewer.html?file=/slides/Philipp_Haller_CSD19.pdf"></iframe>

<!--
#### [Slides](https://speakerdeck.com/phaller/fine-grained-deterministic-parallelization-of-static-analyses)
-->