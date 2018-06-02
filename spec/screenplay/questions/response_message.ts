import {Question} from '@serenity-js/core/lib/screenplay';
import {AxiosResponse} from 'axios';
import {CallAnApi} from '../../support/abilities/call_an_api';
import {expect} from '../../support/expect';

export const ResponseMessage = () => Question.about(`The Response Message`, actor =>
   CallAnApi.as(actor).getLastResponse() as PromiseLike<AxiosResponse>,
);

export const hasDadJoke = () => question => question.then(lastResponse => expect(lastResponse.data.joke).to.not.be.empty);

export const hasDadJokeWithId = id => question => question.then(lastResponse => expect(lastResponse.data.id).to.equal(id));
