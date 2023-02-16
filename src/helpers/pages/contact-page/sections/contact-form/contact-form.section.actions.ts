import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormActions {
  async sendEmail(name: string, email: string, phone: string, message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.contactPageMiddleContactFormNameInput);

    await page.type(contactFormSelectors.contactPageMiddleContactFormNameInput, name);
    await page.type(contactFormSelectors.contactPageMiddleContactFormEmailInput, email);
    await page.type(contactFormSelectors.contactPageMiddleContactFormPhoneInput, phone);
    await page.type(contactFormSelectors.contactPageMiddleContactFormMessageInput, message);

    await page.click(contactFormSelectors.contactPageMiddleContactFormSubmitButton);
  }
}
