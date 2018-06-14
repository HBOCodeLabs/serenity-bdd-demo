
import { Open, PerformsTasks, step, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';     // imports the @step
import { Click, Is, Wait, Duration, Enter, Text } from 'serenity-js/lib/serenity-protractor';

import { NavigationBar } from '../../components/go/navigation_bar';
import { protractor } from 'protractor';

export class EnterLicensePlateCode implements Task {
    static called = (licensePlate: string) => new EnterLicensePlateCode(licensePlate);

    @step('in order for {0} to explore #category')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            // TODO: disabling synchronization slows tests, we need a hadron/auto-utils version
            // Performance notes:  Headless-Chrome is faster than Chrome
            //                     Protractor is faster but more error prone than Serenity.
            UseAngular.disableSynchronisation(),

            // TODO:  Provide autoUtils/Automation versions of `Open, Click, Is, Wait`
            Open.browserOn('https://qa.activate.hbonow.com/?environment=snp'),
            
            Enter.theValue(this.licensePlate).into(NavigationBar.Code).thenHit(protractor.Key.ENTER),

            Wait.for(Duration.ofSeconds(10)),

            // Open "More" just in case link is hidden
            // Wait.until(NavigationBar.More_Categories, Is.clickable()),
            // Click.on(NavigationBar.More_Categories),

            // Wait.until(NavigationBar.Category.of(this.category), Is.clickable()),
            // Click.on(NavigationBar.Category.of(this.category)),
        );
    }

    constructor(private licensePlate: string) {
    }
}
