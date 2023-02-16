import { contactFormSelectors } from "./contact-form.section.selectors";

export class ContactFormActions {
  async sendMail(name: string, company: string, phone: string, email: string, groupSize: string, message: string): Promise<void> {
    await page.waitForSelector(contactFormSelectors.openTrainingsPageMiddleContactFormNameInput);

    await page.type(contactFormSelectors.openTrainingsPageMiddleContactFormNameInput, name);
    await page.type(contactFormSelectors.openTrainingsPageMiddleContactFormCompanyInput, company);
    await page.type(contactFormSelectors.openTrainingsPageMiddleContactFormPhoneInput, phone);
    await page.type(contactFormSelectors.openTrainingsPageMiddleContactFormEmailInput, email);
    await this.chooseGroupSize(groupSize);
    await page.type(contactFormSelectors.openTrainingsPageMiddleContactFormMessageTextArea, message);

    await page.click(contactFormSelectors.openTrainingsPageMiddleContactFormSubmitButton);
  }

  async chooseGroupSize(groupSize: string): Promise<void> {
    const groupList = await page.$$(contactFormSelectors.openTrainingsPageMiddleContactFormGroupSizeRadioButton);

    for (const singleGroup of groupList) {
      const group = await singleGroup.evaluate((option) => option.textContent);
      console.log(singleGroup);

      if (group === groupSize) await singleGroup.click();
    }
  }
}
