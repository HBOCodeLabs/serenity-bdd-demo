import {Actor} from '@serenity-js/core/lib/screenplay';
import {Cast} from '@serenity-js/core/lib/stage';
import {protractor} from 'protractor';
import {BrowseTheWeb} from 'serenity-js/lib/screenplay-protractor';
import {Properties} from '../screenplay/properties';
import {CallAnApi} from './abilities/call_an_api';

export class Actors implements Cast {

    actor(name: string): Actor {
        return Actor.named(name)
            .whoCan(CallAnApi.at(Properties.endPoint))
            //.whoCan(CallAnApi.at(Properties.postEndpoint))
            .whoCan(BrowseTheWeb.using(protractor.browser));
    }
}
