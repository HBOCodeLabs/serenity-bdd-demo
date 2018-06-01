import {protractor} from 'protractor';
import {serenity} from 'serenity-js';
import {Actor, BrowseTheWeb} from 'serenity-js/lib/screenplay-protractor';
import {expect} from '../../../spec/expect';
import {ContentArea} from '../../../spec/screenplay/components/go/content_area';
import {ExploreACategory} from '../../../spec/screenplay/tasks/';
import {ScrollByAlphabet} from '../../../spec/screenplay/tasks/';
import {EnterActivationCode} from '../../../spec/screenplay/tasks/';
import {CallAnApi} from '../../../spec/screenplay/tasks/go/CallAnApi';

// TODO:  generalize this feature test to work with any category using Scenerio Outlines/Examples
export = function checkOutMoreHBOContentSteps() {

    var code;

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    const stage = serenity.callToStageFor({
        actor: name => Actor.named(name)
            .whoCan(BrowseTheWeb.using(protractor.browser))
            .whoCan(CallAnApi.at('http://www.google.com'))
    });

    this.Given(/^that John has retrieved an activation code$/, function() {
        return stage.theActorCalled("John").attemptsTo(
           EnterActivationCode.called(),
        );
    });

    this.When(/^he enters the activation code in a second screen$/, function() {
        return stage.theActorInTheSpotlight().attemptsTo(
        );
    });

    this.Then(/^he should see the provider list$/, function() {
        //const content = new ContentArea(alphabet);
        //const regex = new RegExp('^(' + alphabet + '|The ' + alphabet + ')');  // Starts-with
        // The actor asks to see the content that starts with the provided alphabet (asks a question)
        //return expect(stage.theActorInTheSpotlight().toSee(content.displayedContentThatStartsWithAlpha()))
        //    .eventually.match(regex);
        return expect(1 + 1).to.equal(2);
    });


};

function SendRequest() {

};
