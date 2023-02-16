import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormActions {
  async sendEmail(name: string, company: string, phone: string, email: string, contact: string, message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.homePageMiddleContactForm);

    await page.type(contactFormSelectors.homePageMiddleContactFormNameInput, name);
    await page.type(contactFormSelectors.homePageMiddleContactFormCompanyInput, company);
    await page.type(contactFormSelectors.homePageMiddleContactFormPhoneInput, phone);
    await page.type(contactFormSelectors.homePageMiddleContactFormEmailInput, email);

    if (contact === "online") await page.click(contactFormSelectors.homePageMiddleContactFormContactTypeOnlineRadioButton);
    else await page.click(contactFormSelectors.homePageMiddleContactFormContactMeetingTypeRadioButton);

    await page.type(contactFormSelectors.homePageMiddleContactFormMessageTextArea, message);

    await page.click(contactFormSelectors.homePageMiddleContactFormSubmitButton);
  }
}
