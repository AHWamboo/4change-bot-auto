import { selectorsMainMenuTopHrPage } from "./main-menu-top-hr-page.component.selectors";

export class MainMenuTopHrPage {
  async clickMenuOption(optionName: string): Promise<void> {
    await page.waitForSelector(selectorsMainMenuTopHrPage.mainMenuTopMenuOptionsNames, { visible: true });

    const menuOptions = await page.$$(selectorsMainMenuTopHrPage.mainMenuTopMenuOptionsNames);

    for (const option of menuOptions) {
      const optionLabel = await option.$eval("a", (a) => a.textContent);
      console.log(optionLabel);
      if (optionLabel === optionName) {
        const singleOption = await option.$("a");
        await singleOption?.click();
      }
    }
  }
}
