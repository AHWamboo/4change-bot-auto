import { ContactFormAsserts } from "../contact-form.section.asserts";

const homeContactFormAsserts: ContactFormAsserts = new ContactFormAsserts();

export const thenIShouldSeeTheMessageX = (then: any) => {
  then(/^I should see the message "(.*)"$/, async (message: string) => {
    await homeContactFormAsserts.checkContactFormMessageValue(message);
  });
};
