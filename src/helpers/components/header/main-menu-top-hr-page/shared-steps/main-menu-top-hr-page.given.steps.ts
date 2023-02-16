import { MainMenuTopHrPage } from "../main-menu-top-hr-page.component.actions";

const mainMenuTopHrPage: MainMenuTopHrPage = new MainMenuTopHrPage();

export const givenIClickMenuOptionXOnHrRecruitmentPage = (given: any) => {
  given(/^I click menu option "(.*)" on hr recruitment page$/, async (menuOption: string) => {
    await mainMenuTopHrPage.clickMenuOption(menuOption);
  });
};
