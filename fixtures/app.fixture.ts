import { test as base } from "@playwright/test";
import { LandingPage } from "@POM/landing/landing.page";
import { RFQPage } from "@POM/rfq/rfq.page";

type Fixtures = {
  landing: LandingPage;
  rfq: RFQPage;
};

export const test = base.extend<Fixtures>({
  landing: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  rfq: async ({ page }, use) => {
    await use(new RFQPage(page));
  },
});

export const expect = test.expect;
