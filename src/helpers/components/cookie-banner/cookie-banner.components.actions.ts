import { cookieBannerSelectors } from "./cookie-banner.component.selectors";

export class CookieBannerActions {
  async closeCookieBanner(): Promise<void> {
    try {
      const cookieBanner = await page.waitForSelector(cookieBannerSelectors.cookieBannerOkSubmitButton);
      await cookieBanner?.click();
    } catch {
      console.log("Cookie Banner has been closed already");
    }
  }
}
