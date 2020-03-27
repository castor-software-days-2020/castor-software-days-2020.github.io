---
title: Pietzuc
name: Peter Pietzuch
_sort: Pietzuch
pic: peter
layout: bio
work_title: Scaling Deep Learning on Multi-GPU Servers
position_txt: Professor of computer science at Imperial College London
social:
- title: globe
  url: https://www.doc.ic.ac.uk/~prp/
- title: file-pdf-o
  url: slides/Peter_Pietzuch_CSD19.pdf
---

#### Abstract
With the widespread availability of GPU servers, scalability in terms of the number of GPUs when training deep learning models becomes a paramount concern. For many deep learning models, there is a scalability challenge: to keep multiple GPUs fully utilised, the batch size must be sufficiently large, but a large batch size slows down model convergence due to the less frequent model updates.
In this talk, I describe CrossBow, a new single-server multi-GPU deep learning system that avoids the above trade-off. CrossBow trains multiple model replicas concurrently on each GPU, thereby avoiding under-utilisation of GPUs even when the preferred batch size is small. For this, CrossBow (i) decides on an appropriate number of model replicas per GPU and (ii) employs an efficient and scalable synchronisation scheme within and across GPUs. 

#### Bio
Peter Pietzuch is a Professor at Imperial College London, where he leads the Large-scale Data & Systems (LSDS) group (http://lsds.doc.ic.ac.uk) in the Department of Computing. His research focuses on the design and engineering of scalable, reliable and secure large-scale software systems, with a particular interest in performance, data management and security issues. He has published papers in premier international venues, including SIGMOD, VLDB, OSDI, USENIX ATC, EuroSys, SoCC, ICDCS, CCS, CoNEXT, NSDI, and Middleware. Before joining Imperial College London, he was a post-doctoral fellow at Harvard University. He holds PhD and MA degrees from the University of Cambridge. 

#### Slides
<iframe class="slides" src="pdf/web/viewer.html?file=/slides/Peter_Pietzuch_CSD19.pdf"></iframe>