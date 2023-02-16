import { FooterContactFormActions } from "../footer-contact-form.component.actions";

const footerContactFormActions: FooterContactFormActions = new FooterContactFormActions();

export const givenIFillFooterContactFormWithDataNameAndLastNameXPhoneNumberXEmailXMessageX = (given: any) => {
  given(
    /^I fill footer contact form with data, name and last name: "(.*)", phone number: "(.*)", email: "(.*)", message: "(.*)"$/,
    async (name: string, phone: string, email: string, message: string) => {
      await footerContactFormActions.sendEmail(name, phone, email, message);
    }
  );
};
