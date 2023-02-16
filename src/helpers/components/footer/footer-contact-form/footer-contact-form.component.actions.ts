import { footerContactFormSelectors } from "./footer-contact-form.component.selectors";

export class FooterContactFormActions {
  async sendEmail(name: string, phone: string, email: string, message: string): Promise<void> {
    await page.waitForSelector(footerContactFormSelectors.footerContactFormNameInput);

    await page.type(footerContactFormSelectors.footerContactFormNameInput, name);
    await page.type(footerContactFormSelectors.footerContactFormPhoneInput, phone);
    await page.type(footerContactFormSelectors.footerContactFormEmailInput, email);
    await page.type(footerContactFormSelectors.footerContactFormMessageTextArea, message);

    await page.type(footerContactFormSelectors.footerContactFormCaptchaInput, (await this.resolveCaptcha()).toString());
    await page.click(footerContactFormSelectors.footerContactFormSubmitButton);
  }

  async resolveCaptcha(): Promise<Number> {
    const captchaLabel = await page.waitForSelector(footerContactFormSelectors.footerContactFormCaptchaLabel);
    const captchaValue: string[] = await captchaLabel?.evaluate((label) => label.textContent.split("+"));
    return Number(captchaValue[0]) + Number(captchaValue[1]);
  }
}
