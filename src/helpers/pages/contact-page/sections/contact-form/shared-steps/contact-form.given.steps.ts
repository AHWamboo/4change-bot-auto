import { ContactFormActions } from "../contact-form.section.actions";

const contactFormActions: ContactFormActions = new ContactFormActions();

export const givenIFillContactFormWithDataNameXEmailXPhoneNumberXMessageX = (given: any) => {
  given(
    /^I fill contact form with data, name: "(.*)", email: "(.*)", phone number: "(.*)", message: "(.*)"$/,
    async (name: string, email: string, phone: string, message: string) => {
      await contactFormActions.sendEmail(name, email, phone, message);
    }
  );
};
