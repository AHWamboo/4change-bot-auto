import { ContactFormActions } from "../contact-form.section.actions";

const homeContactFormActions: ContactFormActions = new ContactFormActions();

export const givenIFillContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXContactXMessageX = (given: any) => {
  given(
    /^I fill contact form with data, name and last name: (.*) company: (.*), phone number: (.*), email: (.*), contact: (.*), message: (.*)$/,
    async (name: string, company: string, phone: string, email: string, contact: string, message: string) => {
      await homeContactFormActions.sendEmail(name, company, phone, email, contact, message);
    }
  );
};
