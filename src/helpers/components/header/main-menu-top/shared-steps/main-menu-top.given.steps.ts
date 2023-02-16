import { MainMenuTopActions } from "../main-menu-top.component.actions";

const mainMenuTopActions: MainMenuTopActions = new MainMenuTopActions();

export const givenIIClickMenuOptionX = (given: any) => {
  given(/^I click menu option "(.*)"$/, async (menuOption: string) => {
    await mainMenuTopActions.clickMenuOption(menuOption);
  });
};
