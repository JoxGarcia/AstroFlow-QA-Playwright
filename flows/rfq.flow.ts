// flows/rfq.flow.ts
import { LandingPage } from "@POM/landing/landing.page";
import { RFQPage } from "@POM/rfq/rfq.page";
import { RFQFormData, validRFQData } from "@data/rfq.data";

export async function fillRFQFormFlow(
  landing: LandingPage,
  rfq: RFQPage,
  data: RFQFormData = validRFQData,
) {
  await landing.goto();
  await landing.clickRequestQuoteButtonFromHeader();
  await rfq.fillForm(data);
  await rfq.clickSubmitRequest();
  await rfq.verifyDialogSuccessMessage();
}
