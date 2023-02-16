import { ContactFormActions } from "../contact-form.section.actions";

const contactFormActions: ContactFormActions = new ContactFormActions();

export const whenIFillHrContactPageFormWithDataNameXCompanyXEmailXPhoneNumberXMessageX = (when: any) => {
  when(
    /^I fill hr contact page form with data, name: "(.*)", company: "(.*)", email: "(.*)", phone number: "(.*)", message: "(.*)"$/,
    async (name: string, company: string, email: string, phone: string, message: string) => {
      await contactFormActions.sendMail(name, company, email, phone, message);
    }
  );
};
