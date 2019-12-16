---
title: DevOps 101 - Overview
date: "2019-12-16T22:12:03.284Z"
excerpt: One of the most loaded term in Software Development. So what is it all about?
tags: ["DevOps"]
---
## TL;DR
> For terms as loaded as DevOps, I find it's usually helpful to have a definition in mind whilst exploring the topic to be able to refer back to at times. Here's a TL;DR.

<span class="blogpost-highlighted">DevOps is a methodology; a culture. It describes how work should be completed efficiently, how teams should communicate with each other, and most importantly the way in which barriers should be broken down in your organisation.</span>

## The aim of this series

In this series of blogposts, I aim to demystify the term DevOps and discuss what it actually means to the average developer. We'll cover an overview of the topic, some of the basic concepts and some of the tooling companies use to achieve a better DevOps culture.

In this article, we'll go over a high level overview of what DevOps actually means.

## Origin of the word
Without going in to too much detail, the word stems from two originally totally distinct facets of software delivery;

Developers and Operations. 

Developers would write the code. Operations would run it. 

Whilst this logical separation of groups made sense in theory, it caused a lot of issues - especially when dealing with responsibilities and workloads.

In previous times, code was often 'thrown over the fence' and left to the Operations teams to manage, development feedback loops were incredibly slow, and there was often a lot of tension between the two groups. They were seen as totally distinct teams with different business goals and aims, and because of this the communication often broke down due to both physical and business-based barriers.

So, some people found this process pretty annoying, and who can blame them.

And thus, a new term was born. A term to <span class="blogpost-highlighted">make this whole software process much more efficient</span>. To increase communication, efficiency and most importantly the actual delivery of software teams through changing the culture and mindsets of all involved. 

For a more in detail, and accurate history of the term I *highly* recommend the books:

* The Pheonix Project
* The DevOps Handbook

## So... what actually is it?
Definitions are usually pretty straightforward. Unfortunately with DevOps, it's never straightforward - however we'll get as close as we can. The DevOps Handbook describes DevOps using the idea of the **Three Ways**.

## Three Ways

### 1) Streamlined work flowing in one direction
> If you ever played Mario, or worked in a software company, pipelines should be familiar to you

Work should flow in an efficient and quick manner between environments. 

When work is finished, it should flow upwards towards Production in the most efficient way possible. Typically this involves progressing through multiple environments, running multiple levels of testing, and includes some form of business sign off.

Work should be able to flow uninhibted towards production - **and the development team should be in control of most, if not all of this**.

<span class="blogpost-highlighted">The important part is that this process is as streamlined as possible, removing any bottlenecks, manual inputs and unnecessary stages/steps.</span> 

### 2) Fast, efficient feedback loops
> Code should run the same in all environments, and feedback on all work should be quick

The first way describes how code works *upward, toward Production*. 

This second way describes how feedback loops and problems with the work find their way back down toward developers.

This loop should be as fast and as efficient as possible;

* Simple code quality checks such as Unit Tests, Code Linting and Building should **happen early on**
* Environments should be exactly the same - **Dev should be exactly the same as Production**, only with less server size
* **Automation testing should happen in as lower as possible environments**, and integration between services should happen as early on as possible
* **Developers should be involved as early on as possible in the Agile process** to enable discussion and communication around work to be done

<span class="blogpost-highlighted">TL;DR Move your testing as early on as possible to reduce risk. Make it so developers know as quickly as possible when something breaks.</span>

<span class="blogpost-highlighted">This is the origin of the term *Shift Left*</span>

### 3) Continued iteration and experimentation
> Just like code, process should always be living

We should all be comfortable experimenting with process.

Nothing is ever perfect. Process, pipelines nor culture. The entire software delivery lifecycle should be an interative process where we experiment, test and evaluate our current process and ways of working.

The entire team should be empowered to be able to constructively critique, discuss and propose new ways of working and process; from Agile methods all the way to Pipelines and Environment strategies. If you spot something that seems a bit odd in your process, then flag it and have a conversation about it. 

***For example***, if the code is failing linting most often in the pipeline - move it towards the beginning of the pipeline! Or better yet, add it as a pre-commit/pre-push hook. Or have a chat with developers to understand why this is happening - maybe people have different local set ups on their machines. 

<span class="blogpost-highlighted">There are always different solutions to problems; whether environmental, process or code-based, and experimentation is a great way to involve the entire team and get everyone's input.</span>

## Recap

This article is fluffy - there's no way around that unfortunately.

However, hopefully by now, you understand that <span class="blogpost-highlighted">DevOps is not a job title</span>. DevOps is not a single role that a single person can fulfil - perhaps as a coaching role but definitely not as a development role. 

DevOps is a mindset focused around optimisation, communication and efficiency. Underpinning all of the above is communication - a solid foundation for all projects is a safe environment where people can feel confident to question the status quo, and work together as a team to create a better, more efficient working process.

In the next articles, we will focus on CI, CD, tooling such as CircleCI and Jenkins, communication and other basic concepts that you can implement on projects you work on. 

Olly