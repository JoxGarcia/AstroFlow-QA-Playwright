import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://astroflow.wingflows.com/");
  }

  async clickRequestQuoteButtonFromHeader() {
    await this.page.getByRole("link", { name: "Request Quote" }).nth(1).click();
  }
}
