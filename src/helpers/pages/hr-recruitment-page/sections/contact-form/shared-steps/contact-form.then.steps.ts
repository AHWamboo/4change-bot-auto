import { ContactFormAsserts } from "../contact-form.section.asserts";

const contactFormAsserts = new ContactFormAsserts();

export const thenIShouldSeeTheMessageXOnHrPage = (then: any) => {
  then(/^I should see the message "(.*)" on hr page$/, async (message: string) => {
    await contactFormAsserts.checkContactFormMessageValue(message);
  });
};
