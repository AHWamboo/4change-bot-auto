import { ContactFormAsserts } from "../contact-form.section.asserts";

const contactFormAsserts: ContactFormAsserts = new ContactFormAsserts();

export const thenIShouldSeeTheMessageXOnHrContactPage = (then: any) => {
  then(/^I should see the message "(.*)" on hr contact page$/, async (successMessage: string) => {
    await contactFormAsserts.checkContactFormMessageValue(successMessage);
  });
};
