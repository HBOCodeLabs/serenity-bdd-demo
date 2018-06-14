import {Question, PerformsTasks, UsesAbilities} from '@serenity-js/core/lib/screenplay';
import {AxiosResponse} from 'axios';
import {CallAnApi} from '../../support/abilities/call_an_api';
import {expect} from '../../support/expect';

//export const ResponseMessage = () => Question.about('The Response Message', actor =>
//   CallAnApi.as(actor).getLastResponse() as PromiseLike<AxiosResponse>,
//);

export const ResponseMessage = actor => CallAnApi.as(actor).getLastResponse();
export const hasActivationCode = () => question => question.then(lastResponse => expect(lastResponse.data.activationCode).to.be.empty);
