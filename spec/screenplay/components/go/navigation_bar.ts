// noinspection ES6UnusedImports
import { Question, Target, Text } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';


// The more general the XPath the slower it will be to execute
// const ALPHA_XPATH = "//div[contains(@class, 'class2') and contains(@class, 'class4')]/span/span";
const ALPHA_XPATH = "//*[@id='Viewport']/div[1]/div[3]/div//span/span";
const CAT_XPATH = "//*[@id='Viewport']/div[1]/div[5]/div/div[2]/div/a";
// const MORE_XPATH = "//div[contains(@class, 'class4') and contains(@class, 'class12')]/div/span[.='More']";
const MORE_XPATH = "//*[@id='Viewport']/div[1]/div[4]/div/div[6]//div/span[.='More']";

// TODO:  Provide autoUtils/Automation version of "by" locators
export class NavigationBar {
    // static Category = Target.the('Link to "{0}"').located(by.linkText('{0}'));
    static Category = Target.the('Link to "{0}"').located(by.xpath(CAT_XPATH + '[.="{0}"]'));
    static More_Categories = Target.the('More Categories').located(by.xpath(MORE_XPATH));

    // TODO: It's a navigation tool, but does it belong here?
    static Alphabet = Target.the('"{0}" side navigation link').located(by.xpath(ALPHA_XPATH + '[.="{0}"]'));

    static Code = Target.the('Code').located(by.tagName('input'));
}
