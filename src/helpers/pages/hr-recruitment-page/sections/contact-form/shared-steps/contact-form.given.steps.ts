import { ContactFormActions } from "../contact-form.section.actions";

const contactFormActions = new ContactFormActions();

export const givenIFillHrContactFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX = (given: any) => {
  given(
    /^I fill hr contact form with data, name: "(.*)", company: "(.*)", email: "(.*)", phone number: "(.*)", message: "(.*)"$/,
    async (name: string, company: string, email: string, phone: string, message: string) => {
      await contactFormActions.sendMail(name, company, email, phone, message);
    }
  );
};
