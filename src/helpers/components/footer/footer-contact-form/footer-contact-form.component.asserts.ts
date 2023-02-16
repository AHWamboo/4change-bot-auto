import { footerContactFormSelectors } from "./footer-contact-form.component.selectors";

export class FooterContactFormAsserts {
  async checkFooterContactFormMessageValue(message: string): Promise<void> {
    await page.waitForSelector(footerContactFormSelectors.footerContactFormSuccessMessage);
    const messageHeader: any = await page.waitForSelector(footerContactFormSelectors.footerContactFormSuccessMessage);
    const messageHeaderValues: any = await messageHeader?.evaluate((el: any) => el.textContent);

    expect(messageHeaderValues).toBe(message);
  }
}
