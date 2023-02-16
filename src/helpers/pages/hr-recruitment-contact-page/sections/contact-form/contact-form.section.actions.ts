import { ENV_URL } from "../../../../../../.config/envSetup";
import { URLS } from "./contact-form.section.consts";
import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormActions {
  async sendMail(name: string, company: string, email: string, phone: string, message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormNameInput, { visible: true });
    await page.waitForSelector(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormSubmitButton);

    await page.type(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormNameInput, name, { delay: 20 });
    await page.type(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormCompanyInput, company, { delay: 20 });
    await page.type(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormEmailInput, email, { delay: 20 });
    await page.type(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormPhoneInput, phone, { delay: 20 });
    await page.type(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormMessageInput, message, { delay: 20 });

    await page.click(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormSubmitButton, { delay: 20 });

    const contactFormResponse = await page.waitForResponse(
      (response) => response.url() === `${ENV_URL}${URLS.contactFormPOSTFeedback}` && response.status() === 200
    );
    expect(contactFormResponse.ok()).toBe(true);
  }
}
