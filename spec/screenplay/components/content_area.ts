// noinspection ES6UnusedImports
import { Question, Target, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

const CONTENT_XPATH = "(//a[contains(@class, 'class2') and contains(@class, 'class4')]//span";

// TODO:  Provide autoUtils/Automation version of "by" locators
export class ContentArea {
    // TODO: Migrate from static content locator predicate to dynamic predicate
    static Content           = Target.the('content containing "{0}"').located(by.xpath(CONTENT_XPATH + '[starts-with(.,"Real Sports")])[1]'));
    static Content_Displayed = Text.of(ContentArea.Content);
}
