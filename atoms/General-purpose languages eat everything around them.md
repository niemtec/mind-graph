Given time, a [[turing complete language]] will eat every [[domain specific language]] adjecent to it.


Even on the web, where declerative, domain-specific languages had a 20 year head-start, JavaScript is eating HTML and CSS.

Why? [[turing complete language]]s are [[universal-machines]]:
- They can replace any [[domain specific language]]
- They transfer optionality from the platform implementation to 3rd party developers

---
# General-purpose languages eat everything around them

**Advantages** of declarative, [[domain specific language]]s (DSLs):
- [[USLICE]]
- Sidesteps security, privacy, and performance problems
- Implementation is decoupled from intent. The platform/OS has the option to optimise the performance of the implementation over time
- Accessibility and other features can be baked into the language, rather than bolted on as a feature

**Problems** with [[general purpose language]]s (GPLs):
- Security, privacy, and performance problems. They can be mitigated with difficulty, but are at some fundamental level, [unresolvable](https://en.wikipedia.org/wiki/Halting_problem)
- A [[turing complete language]] is a [[black box]]. There could be [anything in there](https://en.wikipedia.org/wiki/Universal_Turing_machine). The platform cannot optimise, reimplement or recontextualise scripted applications for other contexts without the risk of breaking things.