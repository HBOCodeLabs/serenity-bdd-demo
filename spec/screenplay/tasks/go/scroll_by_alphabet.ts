import { PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';     // imports the @step
import { Click, Is, Scroll, Wait } from 'serenity-js/lib/serenity-protractor';

import { NavigationBar } from '../../components/go/navigation_bar';

export class ScrollByAlphabet implements Task {
    static of = (alphabet: string) => new ScrollByAlphabet(alphabet);

    @step('{0} finds the #alphabet navigation link')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            // Scroll to content beginning with alphabet
            Wait.until(NavigationBar.Alphabet.of(this.alphabet), Is.present()),
            // Interactions
            Scroll.to(NavigationBar.Alphabet.of(this.alphabet)),
            Click.on(NavigationBar.Alphabet.of(this.alphabet)),
        );
    }

    constructor(private alphabet: string) {
    }
}
