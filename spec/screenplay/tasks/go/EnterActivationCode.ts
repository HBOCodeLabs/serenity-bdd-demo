import { Open, PerformsTasks, step, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';     // imports the @step
import { Click, Is, Wait } from 'serenity-js/lib/serenity-protractor';
import { serenity } from 'serenity-js';
import { Get } from './Get';

export class EnterActivationCode implements Task {

    static called = () => new EnterActivationCode();

    @step('Step definition pending...')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(

            // TODO: disabling synchronization slows tests, we need a hadron/auto-utils version
            // Performance notes:  Headless-Chrome is faster than Chrome
            //                     Protractor is faster but more error prone than Serenity.
            UseAngular.disableSynchronisation(),

            // TODO:  Provide autoUtils/Automation versions of `Open, Click, Is, Wait`
            //Open.browserOn('https://play.hbogo.com/'),

            Get.resource('http://www.google.com')
        );
    }

    private constructor() {
    }
}
