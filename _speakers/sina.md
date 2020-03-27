---
title: Sina
name: Sina Sheikholeslami
_sort: Sheikholeslami
pic: sina
layout: bio
work_title: Asynchronous Hyperparameter Tuning and Ablation Studies with Apache Spark
position_txt: PhD student of computer science at KTH
social:
- title: globe
  url: https://www.kth.se/profile/sinash
- title: file-pdf-o
  url: slides/Sina_Sheikholeslami_CSD19.pdf
---

#### Abstract
For the past two years, the open-source Hopsworks platform has used Apache Spark to distribute hyperparameter tuning tasks for Machine Learning. Hopsworks provides some basic optimizers (gridsearch, randomsearch, differential evolution) to propose combinations of hyperparameters (trials) that are run synchronously in parallel on executors as map functions. However, many such trials perform poorly, and we waste a lot of CPU and hardware accelerator cycles on trials that could be stopped early, freeing up the resources for other trials. In this talk, we present our work on Maggy, an open-source asynchronous hyperparameter tuning framework built on Spark that transparently schedules and manages hyperparameter trials, increasing resource utilization, and massively increasing the number of trials that can be performed in a given period of time using a fixed amount of resources. In addition to that, Maggy provides support for parallel ablation studies, which will be introduced in this talk.

#### Slides
<iframe class="slides" src="pdf/web/viewer.html?file=/slides/Sina_Sheikholeslami_CSD19.pdf"></iframe>
