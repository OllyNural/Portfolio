---
title: Effective Pair Programming
date: "2019-07-11T22:12:03.284Z"
excerpt: Pairing is a common concept 
tags: ["Pairing", "Workplace"]
---

Pair programming is a pretty common concept, especially in well-experienced teams - however, it can be daunting to new developers coming into the software scene, due to a lack of confidence coding around others, and also confusion around how it _should_ be done. 

This article aims to explain <span class="blogpost-highlighted">how Pair Programming is intended to be done, discuss why it's so invaluable, and will talk through one of my favourite methods of pairing. </span>

### What is Pair Programming?

Pair programming is a concept where two developers jointly work on a ticket to complete it - so this involves all code, tests and any other work needed to get it done.

Pairing involves both a <span class="blogpost-highlighted">Driver</span> and a <span class="blogpost-highlighted-blue">Navigator</span>. 

### <span class="blogpost-highlighted">Driver</span>

The Driver should be on the keyboard. They are in charge of writing code on the screen and should be focused entirely on the current problem/task. 

### <span class="blogpost-highlighted-blue">Navigator</span>

The Navigator should be observing and reviewing the code entered by the Driver. 

They should _also_ be observing and thinking about the overall direction and structure of the work. So this will involve thinking of potential future problems and improvements the team can make.

This allows the Driver to focus solely on tackling the problem at hand.

<span class="blogpost-highlighted">The pair should switch roles frequently - I prefer switching every 15-30 minutes at hard enforced timescales.</span>

That's it! There's a lot more rules and methods involved, but at a high level, that's enough to get started. 

## Why we should pair program
> Whilst this means more dev-hours are spent on effort within a ticket, it has been proven to output far higher-quality code with [fewer defects](https://collaboration.csc.ncsu.edu/laurie/Papers/XPSardinia.PDF). 

The obvious benefit is <span class="blogpost-highlighted">Two heads are better than one</span>. Some caveats come with this, around ensuring that you work well together, don't get distracted etc. But the code you will produce will be better than if you are coding alone. 

Not only this but there are a bunch of other reasons why pairing is fantastic:

### 1) Motivation/Focus
Having two people allows for the motivation and focus of one developer to travel through the power of osmosis (probably) to the other. One partner can help drive and motivate the other, and the role can switch throughout coding.

### 2) Knowledge Sharing
There are a couple of reasons why this is on the list:

#### The first is around Diverse teams

Better solutions happen when you have different kinds of people working together on a problem - whether it's different skillsets or mindsets. People bring different experiences to the table, assess the problem and information in different ways, and will approach and understand the problem in different ways - all of which are useful. 

In bringing all these different mindsets and approaches together, you naturally discuss and work out the best approach and solution for the problem at hand. And in doing so, you are considering and understanding each other approach - <span class="blogpost-highlighted"> effectively testing and reducing the chance you'll pick a worse approach</span>

#### The second is around Sharing Knowledge and confidence
People have different skillsets and knowledge - there's no getting around that. But pairing allows a really easy avenue and forum to spread that knowledge and upskill other members of your team. You will be able to teach and learn valuable hands-on skills that are only learnable from pairing with other developers - anything from language syntax and rules to overall system design.

Another benefit in doing this is that it's also showing that it is okay to not know the answer to a problem, and asking for help is much easier when there is a person right next to you!

<span class="blogpost-highlighted">Remember to provide feedback and constructively discuss code</span>. There's no quicker way to kill someone's confidence than to unconstructively criticise their work and belittle what they do. 

Some teams even go with the idea of not even doing Peer Reviews of the code as long as it has been paired on! (This is best left up the team to decide probably, although can be incredibly powerful if the pairs rotate through the team often).

### 3) Shared Breaks

> Sounds silly, but this is a real thing in my eyes. 

<span class="blogpost-highlighted">In programming, flow is a very important thing.</span>

By going for breaks and rest times at the time and same interval, it means you are constantly in sync with the other developer and allows you to progress and keep working incredibly efficiently. It also removes distractions outside of your pair and allows both developers to work in sync.

## Tips on getting the most out of pairing

### 1) Be ruthless with time
It's very easy to get bogged down on a problem and to let the other person bash their head at a keyboard for hours upon end to no avail. One of the most important things about Pair Programming is that <span class="blogpost-highlighted">there are two of you involved</span>. You should always feel confident to say something like 'This doesn't seem like a good approach, maybe we should take a step back'. 

Not only are you helping yourself, (as you are not providing much value in the above scenario, nor learning much), but you are also helping the other person - they might not how long something is taking, nor when you both last evaluated where you were with the current problem. 

**Fixed time limits are your friend here!**

## Ping Pong Pair Programming

> I'd like to talk about my most favourite method of pairing, called Ping Pong Pairing.

Ping Pong is a mixture of **Pair Programming** and **TDD (Test Driven Development)** - two of my favourite programming paradigms. 

The idea is as follows:
<hr/>

<span class="blogpost-highlighted">Developer A</span> Writes a failing test.

<span class="blogpost-highlighted-blue">Developer B</span> Writes the code to fix that test.

<span class="blogpost-highlighted-blue">Developer B</span> Writes the next failing test.

<span class="blogpost-highlighted">Developer A</span> Writes the code to fix that test.

<span class="blogpost-highlighted">Developer A</span> Writes the next failing test.

<span class="blogpost-highlighted-blue">Developer B</span> ...

And so on.
<hr/>

Ping Pong brings the best of both worlds together - bringing together all the benefits of small, correct pieces of code from using TDD, with the clear benefits of working closely alongside another developer. 

If you've never tried Ping Pong Pairing, I would _highly_ recommend that you at least give it a try. It may take some time to get used to, but when you get into the flow and rhythm, I have found it to be one of the most powerful pairing techniques!

- Olly