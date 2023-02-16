import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormAsserts {
  async checkContactFormMessageValue(message: string): Promise<void> {
    const messageHeader: any = await page.waitForSelector(contactFormSelectors.homePageMiddleContactFormSuccessMessage);
    const messageHeaderValues: any = await messageHeader?.evaluate((el: any) => el.textContent);
    expect(messageHeaderValues).toBe(message);
  }
}
