import {protractor} from 'protractor';
import {serenity} from 'serenity-js';
import {Actor, BrowseTheWeb} from 'serenity-js/lib/screenplay-protractor';
import {expect} from '../../../spec/expect';
import {ContentArea} from '../../../spec/screenplay/components/go/content_area';
import {ExploreACategory} from '../../../spec/screenplay/tasks/';
import {ScrollByAlphabet} from '../../../spec/screenplay/tasks/';

// TODO:  generalize this feature test to work with any category using Scenerio Outlines/Examples
export = function checkOutMoreHBOContentSteps() {

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
    });

    this.Given(/^.*that (.*), an unregistered user, wants to explore (.*)$/, function(name: string, category: string) {
        return stage.theActorCalled(name).attemptsTo(
            ExploreACategory.called(category),
        );
    });

    this.When(/^s?he looks for content starting with (.*)$/, function(alphabet: string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            ScrollByAlphabet.of(alphabet),
        );
    });

    this.Then(/^s?he should see content that starts with (.*)$/, function(alphabet: string) {
        const content = new ContentArea(alphabet);
        const regex = new RegExp('^' + alphabet);  // Starts-with
        return expect(stage.theActorInTheSpotlight().toSee(content.displayedContentThatStartsWithAlpha()))
            .eventually.match(regex);
    });
};
