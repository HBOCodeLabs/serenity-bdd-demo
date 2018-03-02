// noinspection ES6UnusedImports
import { Question, Target, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

const CONTENT_XPATH = "(//a[contains(@class, 'class2') and contains(@class, 'class4')]//span";

// TODO:  Provide autoUtils/Automation version of "by" locators
// TODO: Find out what the business language to describe regions of the application is.
// TODO: This class should be more semantic, see NavigationBar
export class ContentArea {
    alphabet: string;

    constructor(alphabet: string) {
        this.alphabet = alphabet;
    }

    getContentDisplayed() {
        const content = Target.the('content containing "{0}"').located(by.xpath(CONTENT_XPATH + '[starts-with(.,"' + this.alphabet + '")])[1]'));
        return Text.of(content);
    }
}
