import { mainMenuTopSelectors } from "./main-menu-top.component.selectors";

export class MainMenuTopActions {
  async clickMenuOption(optionName: string): Promise<void> {
    await page.waitForSelector(mainMenuTopSelectors.mainMenuTopContainer, { visible: true });

    const menuOptions = await page.$$(mainMenuTopSelectors.mainMenuTopMenuOption);

    for (const option of menuOptions) {
      const optionLabel = await option.$eval("a", (a) => a.textContent);
      if (optionLabel === optionName) {
        await option.click();
        await page.waitForNavigation();
        return;
      }
    }
  }
}
