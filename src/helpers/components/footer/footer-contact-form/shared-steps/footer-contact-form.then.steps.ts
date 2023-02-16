import { FooterContactFormAsserts } from "../footer-contact-form.component.asserts";

const footerContactFormAsserts: FooterContactFormAsserts = new FooterContactFormAsserts();

export const thenIShouldSeeTheMessageXAfterSubmit = (then: any) => {
  then(/^I should see the message "(.*)" after submit$/, async (message: string) => {
    await footerContactFormAsserts.checkFooterContactFormMessageValue(message);
  });
};
