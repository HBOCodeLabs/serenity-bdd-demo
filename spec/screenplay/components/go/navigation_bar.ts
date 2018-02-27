// noinspection ES6UnusedImports
import { Question, Target, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

const MORE_XPATH = "//div[contains(@class, 'class4') and contains(@class, 'class12')]/div/span[.='More']";
// Just to make the interaction more interesting
const R_XPATH = "//div[contains(@class, 'class2') and contains(@class, 'class4')]/span/span";

// TODO:  Provide autoUtils/Automation versversion of "by" locators
export class NavigationBar {
    static Category = Target.the('Link to "{0}"').located(by.linkText('{0}'));
    static More_Categories = Target.the('More Categories').located(by.xpath(MORE_XPATH));

    // TODO: It's a navigation tool, but does it belong here?
    static Alphabet = Target.the('"{0}" side navigation link').located(by.xpath(R_XPATH + '[.="{0}"]'));
}
