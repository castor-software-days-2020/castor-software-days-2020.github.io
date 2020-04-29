---
title: Sebastian
name: Sebastian Schelter
_sort: schelter
pic: sebastian
layout: bio
work_title: Making Production Machine Learning Resilient to Data Errors
position_txt: Assistant professor of computer science at University of Amsterdam
social:
- title: globe
  url: https://ssc.io/
---

#### Abstract
Software systems that learn from data using machine learning (ML) are being deployed in increasing numbers in the real-world. The reliability 
and correctness of these systems depends on the quality of the ingested 
data and is becoming a major concern. This talk presents research on 
simplifying and automating data validation for the input data and 
predictions of end-to-end ML applications.

The first part of the keynote will cover "unit tests for data" which are 
inspired by popular techniques from software engineering. These tests 
allow users to declaratively state how their data should look like by 
combining constraints on statistics of the data with user-defined 
validation code. I will describe how to execute these tests at scale, 
how to enable efficient testing on growing datasets, and how to 
bootstrap tests from samples of data. An open source implementation of 
our data validation library is available at 
https://github.com/awslabs/deequ . This library is also integrated into 
the Amazon SageMaker Model Monitor Service in AWS. In the second part of 
the talk, I will present ongoing research on learning to validate the 
input data and predictions of ML Models. The goal of is this research is 
to automate the validation of the inputs and outputs of ML applications 
as much as possible and empower non-ML experts to monitor ML 
applications in production.
