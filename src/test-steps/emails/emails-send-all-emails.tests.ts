import { loadFeature, defineFeature } from "jest-cucumber";
import { ENV_URL } from "../../../.config/envSetup";
import { CookieBannerActions } from "../../helpers/components/cookie-banner";
import { givenIFillFooterContactFormWithDataNameAndLastNameXPhoneNumberXEmailXMessageX } from "../../helpers/components/footer/footer-contact-form/shared-steps/footer-contact-form.given.steps";
import { thenIShouldSeeTheMessageXAfterSubmit } from "../../helpers/components/footer/footer-contact-form/shared-steps/footer-contact-form.then.steps";
import { givenIClickMenuOptionXOnHrRecruitmentPage } from "../../helpers/components/header/main-menu-top-hr-page/shared-steps";
import { givenIIClickMenuOptionX } from "../../helpers/components/header/main-menu-top/shared-steps";
import { givenIFillContactFormWithDataNameXEmailXPhoneNumberXMessageX } from "../../helpers/pages/contact-page/sections/contact-form/shared-steps";
import { givenIFillContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXContactXMessageX } from "../../helpers/pages/home-page/sections/contact-form/shared-steps";
import { thenIShouldSeeTheMessageX } from "../../helpers/pages/home-page/sections/contact-form/shared-steps/contact-form.then.steps";
import { whenIFillHrContactPageFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX } from "../../helpers/pages/hr-recruitment-contact-page/sections/contact-form/shared-steps/contact-form.when.steps";
import { thenIShouldSeeTheMessageXOnHrContactPage } from "../../helpers/pages/hr-recruitment-contact-page/sections/contact-form/shared-steps/contact-from.then.steps";
import {
  givenIFillHrContactFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX,
  thenIShouldSeeTheMessageXOnHrPage,
} from "../../helpers/pages/hr-recruitment-page/sections/contact-form/shared-steps";
import { givenIFillOpenTrainingsContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXGroupSizeXMessageX } from "../../helpers/pages/open-trainings-page/sections/contact-form/shared-steps/contact-form.given.steps";

const feature = loadFeature("src/features/emails/emails-send-all-emails.feature");
const cookieBannerActions: CookieBannerActions = new CookieBannerActions();

defineFeature(feature, (test) => {
  beforeEach(async () => {
    await page.goto(`${ENV_URL}`);
    await cookieBannerActions.closeCookieBanner();
  });

  test("Send an email from the home page", ({ given, when, then }) => {
    givenIFillContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXContactXMessageX(given);
    thenIShouldSeeTheMessageX(then);
  });

  test("Send an email from footer contact form", ({ given, when, then }) => {
    givenIFillFooterContactFormWithDataNameAndLastNameXPhoneNumberXEmailXMessageX(given);
    thenIShouldSeeTheMessageXAfterSubmit(then);
  });

  test("Send an email from the contact page", ({ given, when, then }) => {
    givenIIClickMenuOptionX(given);
    givenIFillContactFormWithDataNameXEmailXPhoneNumberXMessageX(given);
    thenIShouldSeeTheMessageX(then);
  });

  test("Send an email from the open trainings page", ({ given, when, then }) => {
    givenIIClickMenuOptionX(given);
    givenIFillOpenTrainingsContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXGroupSizeXMessageX(given);
    thenIShouldSeeTheMessageX(then);
  });

  test("Send an email from the HR Recruitment page", ({ given, when, then }) => {
    givenIIClickMenuOptionX(given);
    givenIFillHrContactFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX(given);
    thenIShouldSeeTheMessageXOnHrPage(then);
  });

  test("Send an email from the HR Recruitment contact page", ({ given, when, then }) => {
    givenIIClickMenuOptionX(given);
    givenIClickMenuOptionXOnHrRecruitmentPage(given);
    whenIFillHrContactPageFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX(when);
    thenIShouldSeeTheMessageXOnHrContactPage(then);
  });
});
