import { PerformsTasks, step, Task } from 'serenity-js/lib/screenplay-protractor';     // imports the @step
import { Click, Is, Wait } from 'serenity-js/lib/serenity-protractor';

import { NavigationBar } from '../../components/go/navigation_bar';

export class ScrollByAlphabet implements Task {
    static of = (alphabet: string) => new ScrollByAlphabet(alphabet);

    @step('{0} scrolls by #alphabet looking for #content')      // Gives the Task a more descriptive name
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(

            // Scroll down to Real Sports
            Wait.until(NavigationBar.Alphabet.of(this.alphabet), Is.clickable()),
            Click.on(NavigationBar.Alphabet.of(this.alphabet)),
        );
    }

    constructor(private alphabet: string) {
    }
}
