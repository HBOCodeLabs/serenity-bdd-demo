#Key Features
**Serenity/JS is a next gneration acceptance testing library**

*   **the flexibility and expressiveness of the [Screenplay Pattern](design/screenplay-pattern.html)**,  
    _so that your test scenarios stay free of noise and focused on the business logic_,
*   **the power and visibility of [Serenity BDD](http://serenity-bdd.info/#/documentation) [narrative reports](overview/reporting.html)**,  
    _so that failure analysis and release readiness assessment become more efficient_,
*   **an easy way to introduce and follow [SOLID design principles](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design))**,  
    _to keep your code simple, reusable and easy to extend_,
*   **effortless integration with popular test automation tools like [Cucumber](cucumber/readme.html), [Mocha](mocha/readme.html) and [Chai](design/assertions.html)**,  
    _so that you can introduce it into your existing toolchain **today**,  
    with just a single, [one-line code change](overview/retrofitting.html)_!


### SOLID Principles

Maintainability of code can make or break any project, whether it is to write test code, production code or both. If maintenance overheads increase, the time-to-market increases along with costs. Code smells help us recognise when there is a potential problem. SOLID principles help us recognise when we’ve resolved those problems in an effective way.

SOLID is an acronym coined by Michael Feathers and Bob Martin that encapsulates five good object-oriented programming principles:

Single Responsibility Principle  
Open Closed Principle  
Liskov Substitution Principle  
Interface Segregation Principle  
Dependency Inversion Principle

For the purposes of this article, we’ll concentrate on the two that have the most noticeable effect on refactoring of PageObjects — the [Single Responsibility Principle](http://bit.ly/rg-srp) (SRP) and the [Open Closed Principle](http://bit.ly/rg-ocp) (OCP).

#### SRP

The SRP states that a class should have only one responsibility and therefore only one reason to change. This reduces the risk of us affecting other unrelated behaviours when we make a necessary change.

> “If a class has more than one responsibility, then the responsibilities become coupled. Changes to one responsibility may impair or inhibit the class’ ability to meet the others. This kind of coupling leads to fragile designs that break in unexpected ways when changed.” -Robert Martin, Agile Principles, Patterns & Practices

PageObjects commonly have the following responsibilities:

*   Provide an abstraction to the location of elements on a page via a meaningful label for what those elements mean in business terms.
*   Describe the tasks that can be completed on a page using its elements(often, but not always, expressing navigation in the PageObject returned by a task).

Let’s consider a simple todo list application (e.g. the [Todo MVC example app](http://bit.ly/rg-todomvc)).

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*u8MCnsbNJZeV36Ju.)

The structure of a typical PageObject for the above example might look like this:

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*0er2D74ujAMYzt0Q.)

As these responsibilities are in a single class, when the way we locate a specific element is altered this class requires change. If the sequence of interactions required to complete a task change, again so must this class. There we have more than one reason for change — violating the SRP.

#### OCP

The Open Closed Principle (coined by Bertrand Meyer in Object-Oriented Software Construction) states that a class should be open for extension, but closed for modification. This means that it should be possible to extend behaviour by writing a new class without changing existing, working code.

> “When a single change to a program results in a cascade of changes to dependent modules, that program exhibits the undesirable attributes that we have come to associate with “bad” design. The program becomes fragile, rigid, unpredictable and unreusable. The open closed principle attacks this in a very straightforward way. It says that you should design modules that never change. When requirements change, you extend the behavior of such modules by adding new code, not by changing old code that already works.” — Robert C. Martin, The Open Closed Principle, C++ Report, Vol. 8, January 1996

In practice, this means:

> “Adding a new feature would involve leaving the old code in place and only deploying the new code, perhaps in a new jar or dll or gem.”  
>  — Robert Martin,  [The Open Closed Principle](http://bit.ly/rg-ocp)

Let’s say you have a _TodoListPage_ and we want to add the ability to sort todo items alphabetically. The most likely approach would be to ‘open’ the _TodoListPage_ class and modify it with new method to handle this behaviour. These steps would likely be repeated for any behaviour added to the page. Furthermore, there are times where a task may span multiple pages. Having to take this approach may cause you to artificially split the task up across two classes to conform to PageObject dogma.

To satisfy OCP it should be possible to simply add a new class that describes how to sort the list.

#### Refactoring with the SRP & OCP in mind

To satisfy the OCP, a naive approach would be to extract classes into smaller PageObjects where adding a new behaviour would involve adding a new class.

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*t4i0_t86lPSGMEK9.)

While this satisfies the OCP in this example, it does not satisfy the SRP. In each of the above classes the two responsibilities of a) how to find the elements; and b) how to complete a given task; are still grouped together. Each class has two reasons to change, violating the SRP. Additionally, the task responsibility is limited to the elements of a single page and where tasks share an element the tasks must either duplicate or refer to elements declared in other tasks. [This is bad](http://bit.ly/rg-shotgun-surgery).

To satisfy the SRP, a similarly naive approach might be to extract a class for each obvious responsibility, such as locating elements and performing tasks. While this satisfies the SRP it does not satisfy the OCP (each new task requires editing the Tasks class)

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*Jsz7SfUSzksWY1F5.)

Instead of the above, a less naive approach would be to combine the _Extract Class_ refactoring with the _Replace Method with Method Object_ refactoring. The result satisfies both OCP and SRP. New behaviours do not require you to modify existing classes and each class has only one reason to change — i.e. if the way we locate elements no longer works or, for the tasks, if the way a given task is performed no longer works. The key phrase here in Robert’s explanation of OCP is:

_“…you extend the behavior of such modules by adding new code, not by changing old code that already works.”_

This is where we begin to move away from PageObjects as we know them and see something closer to the Screenplay Pattern (formerly known as the Journey Pattern) begin to emerge.

![](https://d262ilb51hltx0.cloudfront.net/max/800/0*FEf0kOPNjDg7rakV.)

Dogmatically, the _TodoListPage_ in this example doesn’t quite satisfy the OCP, however, we believe this is a reasonable compromise where discoverability of cohesive elements is useful (i.e. elements that make sense as a single unit, e.g. a todo list item has a title, a complete button and a delete button that don’t make sense independently). Furthermore, these classes are essentially metadata and carry very low risk when the class is changed.


