import {Task} from '@serenity-js/core/lib/screenplay';
import {Get} from '../../../support/interactions/get';


export const AskForALicensePlateCode = () => Task.where(`#actor wants to get a License Plate Code`,
   Get.resource('/'),
);
