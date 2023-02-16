import { ContactFormActions } from "../contact-form.section.actions";

const contactFormActions = new ContactFormActions();

export const givenIFillOpenTrainingsContactFormWithDataNameAndLastNameXCompanyXPhoneNumberXEmailXGroupSizeXMessageX = (given: any) => {
  given(
    /^I fill open trainings contact form with data, name and last name: (.*) company: (.*), phone number: (.*), email: (.*), group size: (.*), message: (.*)$/,
    async (name: string, company: string, phone: string, email: string, groupSize: string, message: string) => {
      await contactFormActions.sendMail(name, company, phone, email, groupSize, message);
    }
  );
};
