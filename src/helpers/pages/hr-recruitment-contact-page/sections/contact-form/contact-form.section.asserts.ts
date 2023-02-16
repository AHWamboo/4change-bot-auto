import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormAsserts {
  async checkContactFormMessageValue(message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormSuccessMessage, { visible: true });

    const messageHeader: any = await page.waitForSelector(contactFormSelectors.hrRecruitmentContactPageMiddleContactFormSuccessMessage);
    const messageHeaderValues: any = await messageHeader?.evaluate((el: any) => el.textContent);
    const submitResult: boolean = messageHeaderValues === message ? true : false;

    expect(submitResult).toBe(true);
  }
}
