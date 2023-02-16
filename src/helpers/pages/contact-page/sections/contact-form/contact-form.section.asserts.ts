import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormAsserts {
  async checkContactFormMessageValue(message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.contactPageMiddleContactFormSuccessMessage);
    const messageHeader: any = await page.waitForSelector(contactFormSelectors.contactPageMiddleContactFormSuccessMessage);
    const messageHeaderValues: any = await messageHeader?.evaluate((el: any) => el.textContent);
    expect(messageHeaderValues).toBe(message);
  }
}
