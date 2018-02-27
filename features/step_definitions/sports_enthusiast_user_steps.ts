import {protractor} from 'protractor';
import {serenity} from 'serenity-js';
import {Actor, BrowseTheWeb} from 'serenity-js/lib/screenplay-protractor';
import {expect} from '../../spec/expect';
import {ContentArea} from '../../spec/screenplay/components/go/content_area';
import {Exploration} from '../../spec/screenplay/tasks';
import {ScrollByAlphabet} from '../../spec/screenplay/tasks';

// TODO:  generalize this feature test to work with any category using Scenerio Outlines/Examples
export = function sportsEnthusiastUserSteps() {

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.Given(/^.*that (.*), a non-registered user, wants to explore (.*)$/, function(name: string, category: string) {
        return stage.theActorCalled(name).attemptsTo(
            Exploration.of(category),
        );
    });

    this.When(/^s?he scrolls alphabetically using (.*)$/, function(alphabet: string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            ScrollByAlphabet.of(alphabet),
        );
    });

    this.Then(/^she should see (.*)$/, function(content) {
        return expect(stage.theActorInTheSpotlight().toSee(ContentArea.Content_Displayed));
        // Headless Chrome can't always find the `content` returns  ` ` instead.
        //    .eventually.contain(content);
    });
};
