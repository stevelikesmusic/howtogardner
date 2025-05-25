---
date: '2025-03-26T14:28:29Z'
draft: true
title: 'The Hidden Cost of Technical Debt'
Description: 'What CTOs and Engineers Overlook and How to Address It'
cover:
    image: "/images/overgrown-plane.jpg"
    alt: "Airplane overgrown with grass in a green landscape" 
    caption: "“Natural Aesthetics by Marco Verch" 
    
---

At some point on a seasoned team, an engineering leader has asked:

> _Why is our velocity slowing down?_

The team is growing, we’re hiring great engineers, but somehow, shipping features is taking longer than ever.

The likely culprit? In my experience, **technical debt.** What exactly is technical debt (aka tech-debt)? The term can mean different things to different people.

At its core, tech-debt refers to the trade-offs made in software development. For instance, a team might optimize for development speed at the cost of architectural complexity. Such a decision exemplifies a strategy with short term payoffs but potential long term consequences. [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham), who coined the term technical debt, [explained it in a wiki post](https://wiki.c2.com/?TechnicalDebt). Taking shortcuts mentioned earlier is like borrowing money. You can borrow money today but you will have to repay it with interest later. Similarly, you can take technical shortcuts today but you may need to repay those tech debt with interest later.  

It's not just the obvious kind. The hidden, systemic debt that accumulates in ways even experienced teams fail to recognize. In fact, software behaves like many a dynamic system. It's constantly changing—both within the system itself and the world around that system. Without constant investment, the system decays towards [entropy](https://en.wikipedia.org/wiki/Entropy).

In many ways, technical debt is an inevitable consequence of the Software Development Life Cycle. Just as entropy increases in a system unless deliberate energy is applied, technical debt (aka software entropy) naturally accumulates unless actively managed. 

How does this type of debt affect the business? Let me give some examples of what I've encountered throughout my career—maybe you'll recognize some:

- Some new product ideas aren't feasible
- Those features that are feasible take longer to ship
- Bugs are increasingly difficult to triage and diagnose
- Growing areas of the codebase are known as dangerous with fewer engineers willing to touch it
- A legacy service thought to be inconsequential creates an outsized incident when it fails

Left unchecked, this entropy becomes both an anchor to product innovation and a risk to the business. The key is **continuous investment** to intentionally keep software entropy manageable. 

## It’s Not Just About Code

Technical debt isn’t just “messy code” that needs refactoring. It’s an increasingly expensive tax on engineering operations and innovation. The real problem is that many organizations treat it as an engineering issue rather than a business risk.

Consider this:

- [McKinsey](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/breaking-technical-debts-vicious-cycle-to-modernize-your-business) estimates that 10-20% of tech budgets go toward servicing technical debt instead of delivering new value.
- [CIO.com](https://www.cio.com/article/1258780/want-to-tackle-technical-debt-sell-it-as-business-risk.html) argues that leaders must frame technical debt as a financial risk to gain executive buy-in for meaningful investment in addressing it.

Yet, most companies don’t measure technical debt effectively and may continue making decisions that worsen it.

## How Technical Debt Creeps In

The obvious areas of tech-debt are those notorious sprawling routines that span hundreds—sometimes thousands—of lines of code. Lets take a step back and look at some broader and more subtle ways entropy increases in our software. Beyond a heaping plate of spaghetti code, here are four examples of where hidden technical debt builds up:

1. **Misaligned Architecture Decisions** – These are early choices that were “good enough”, but don’t scale with business growth and current needs. This is common in assumptions made early on that no longer suit the current product direction.
2. **Tooling & Process Debt** – This debt often manifests in slow CI/CD pipelines, inefficient testing, or outdated developer environments. It creates a bottleneck on the developer experience, as well as the time it takes for a feature to ship to production.
3. **Knowledge Deficits** – When tribal knowledge isn’t documented, new engineers can unknowingly reinforce bad patterns. Adjacently, as teams change, primary contributors may no longer be on the project—or even at the company. This often creates a fear of change where engineers avoid touching code they don't understand.
4. **Short-term Business Goals** – Who cares about tech-debt if we don't have customers? It's sometimes necessary to move at lightning speed, especially when you're building 0 to 1. The problem is when there isn't a follow through to address those short-term decisions. I've seen this manifest in new features being built using mostly-migrated platforms because they "just work". 

Any of these sound familiar?

## Fixing Technical Debt Starts at the Top

Technical debt isn’t just an engineering problem—it’s a business problem. And it's a consequence of shipping software. Here’s how to start addressing tech-debt effectively in your organization:

✔️ **Make Technical Debt Visible** – Track and measure it like financial debt. Know where it is and the risks it carries, including the downstream systems that are dependent on that debt. Assign an explicit percentage of engineering capacity to managing software entropy each sprint.

✔️ **Shift the Narrative** – Help executives see technical debt as a risk to business agility, not just an engineering concern. Capabilities increase as tech-debt and entropy are reduced. Conversely, lingering tech-debt drops anchors on the business, slowing down its ability to respond to market changes.

✔️ **Create a Pay-Down Strategy** – Balance feature development with debt reduction. A strong strategy involves categorizing technical debt into high-risk vs. low-risk areas and allocating dedicated time for investment. Teams should integrate debt reduction into sprint planning, using a structured approach. Prioritize fixes that unblock future scalability and reduce compounding complexity.

✔️ **Complete Migrations** – Migration work is often de-prioritized in favor of feature development. Incomplete migrations are a primary source of avoidable self-inflicted problems as the long-tail of remaining functionality often implicitly remains coupled to innovation. Every time new functionality is built on top of a deprecated or half-migrated system, the entropy and business risk compounds. Prioritize completing migrations, even if they don’t have an immediate business-facing impact.

✔️ **Encourage a Culture of Refactoring** – Reward teams for proactive maintenance—not just new feature delivery. Broadly share and celebrate tech-debt wins. The more visible the work, the more it will become part of your engineering culture. Reward the behaviors you want in your culture. Periodically revisit architecture decisions and change where appropriate.

Business demands often prioritize new features that deliver more potential immediate revenue. Constant intentional investments in reducing software entropy enable  new revenue generating features to be built. Those investments release the future from the anchors of the past allowing the business' capabilities to evolve. 

Pinpoint your tech debt. Plan and prioritize its investment. Then publicly praise your teams for reducing the inevitable software entropy. 

## How Do You Manage Technical Debt?

No software escapes entropy and no company is immune to technical debt. Some handle it better than others. **What strategies have helped your team reduce technical debt while maintaining speed?** Drop your insights in the comments! 👇

