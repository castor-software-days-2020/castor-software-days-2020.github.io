---
title: Carbone
name: Paris Carbone
_sort: Carbone
pic: paris
layout: bio
work_title: Continuous Intelligence through Computation Sharing with Arcon
position_txt: Senior researcher at RISE
social:
- title: globe
  url: https://www.ri.se/en/paris-carbone
- title: file-pdf-o
  url: slides/Paris_Carbone_CSD19.pdf
---

#### Abstract
There is high diversity today in the ways people can declare and execute computations on high volumes of data. Each available framework focuses on compiling and executing functions with a specific data model in mind (e.g., data frames, tensors, streams, graphs etc.) and often supporting a single programming language (e.g., python or scala). Critical performance and operational issues though arise when analytics teams try to put all these pieces of software together in order to build end-to-end pipelines. This hinders the use of data-driven insights for critical decision making. 
To that end, we investigate a fundamental solution to this problem that is computation sharing across frameworks, at the instruction level. Arcon, is a system we currently build at RISE and KTH that provides this opportunity. At its core, Arcon is equipped with a powerful compiler that can take code from any frontend or language and translate it into Arc, a general-purpose, data-driven intermediate language. Code in Arc is universal and optimized on-spot with efficient code generation for the hardware you have available. Arcon's runtime engine is scalable, streaming-first and is built entirely in Rust to guarantee memory safety, fault-tolerance and high performance for many types of analytics.

#### Bio
Paris Carbone is senior researcher at RISE (Research Institutes in Sweden), currently leading the "Continuous Deep Analytics" joint group at Rise and KTH. Paris holds a PhD in Distributed Computing from KTH with distinguished findings in state management for stream processing and also serves as an open source committer for Apache Flink, the most powerful stream processing framework to date. 

#### Slides
<iframe class="slides" src="pdf/web/viewer.html?file=/slides/Paris_Carbone_CSD19.pdf"></iframe>

