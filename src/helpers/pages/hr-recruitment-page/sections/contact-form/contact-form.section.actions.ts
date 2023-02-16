import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormActions {
  async sendMail(name: string, company: string, email: string, phone: string, message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.hrRecruitmentPageMiddleContactFormNameInput);
    await page.waitForSelector(contactFormSelectors.hrRecruitmentPageMiddleContactFormSubmitButton);

    await page.type(contactFormSelectors.hrRecruitmentPageMiddleContactFormNameInput, name, { delay: 10 });
    await page.type(contactFormSelectors.hrRecruitmentPageMiddleContactFormCompanyInput, company, { delay: 10 });
    await page.type(contactFormSelectors.hrRecruitmentPageMiddleContactFormEmailInput, email, { delay: 10 });
    await page.type(contactFormSelectors.hrRecruitmentPageMiddleContactFormPhoneInput, phone, { delay: 10 });
    await page.type(contactFormSelectors.hrRecruitmentPageMiddleContactFormMessageInput, message, { delay: 10 });

    await page.click(contactFormSelectors.hrRecruitmentPageMiddleContactFormSubmitButton, { delay: 200 });
  }
}
