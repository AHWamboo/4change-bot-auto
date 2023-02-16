import { ContactFormAsserts } from "../contact-form.section.asserts";

const contactFormAsserts = new ContactFormAsserts();

export const thenIShouldSeeTheMessageX = (then: any) => {
  then(/^I should see the message "(.*)"$/, async (message: string) => {
    await contactFormAsserts.checkContactFormMessageValue(message);
  });
};
