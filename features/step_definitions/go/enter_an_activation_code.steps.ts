import {See} from '@serenity-js/core/lib/screenplay';
import {expect} from '../../../spec/expect';
import {ResponseMessage} from '../../../spec/screenplay/questions/response_message';
import {AskForALicensePlateCode} from '../../../spec/screenplay/tasks';
import {EnterLicensePlateCode} from '../../../spec/screenplay/tasks';

export = function enterAnActivationCodeSteps() {

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^that (.*) has retrieved an activation code$/, function(actor) {
        return this.stage.theActorCalled(actor).attemptsTo(
            AskForALicensePlateCode(),
        );
    });

    this.When(/^he enters the activation code in a second screen$/, function() {

        let response = ResponseMessage(this.stage.theActorInTheSpotlight());

        return this.stage.theActorInTheSpotlight().attemptsTo(
            EnterLicensePlateCode.called(response.data.activationCode),
        );
    });

    this.Then(/^he should see the provider list$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

};
