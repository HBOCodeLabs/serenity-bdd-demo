import { Open, PerformsTasks, step, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';     // imports the @step
import { Click, Is, Wait } from 'serenity-js/lib/serenity-protractor';

import { NavigationBar } from '../../components/go/navigation_bar';

export class ExploreACategory implements Task {
    static called = (category: string) => new ExploreACategory(category);

    @step('in order for {0} to explore #category')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            // TODO: disabling synchronization slows tests, we need a hadron/auto-utils version
            // Performance notes:  Headless-Chrome is faster than Chrome
            //                     Protractor is faster but more error prone than Serenity.
            UseAngular.disableSynchronisation(),

            // TODO:  Provide autoUtils/Automation versions of `Open, Click, Is, Wait`
            Open.browserOn('https://play.hbogo.com/'),

            // Open "More" just in case link is hidden
            Wait.until(NavigationBar.More_Categories, Is.clickable()),
            Click.on(NavigationBar.More_Categories),

            Wait.until(NavigationBar.Category.of(this.category), Is.clickable()),
            Click.on(NavigationBar.Category.of(this.category)),
        );
    }

    constructor(private category: string) {
    }
}
