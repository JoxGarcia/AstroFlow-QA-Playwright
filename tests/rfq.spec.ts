import { test, expect } from "@fixtures/app.fixture";
import { fillRFQFormFlow } from "@flows/rfq.flow";
import { validRFQData } from "@data/rfq.data";

test("[HP] Verify RFQ form submission is successful", async ({
  landing,
  rfq,
}) => {
  await fillRFQFormFlow(landing, rfq, validRFQData);
});

test("[NEG] Verify required field validation on empty RFQ form", async ({
  landing,
  rfq,
}) => {
  await landing.goto();
  await landing.clickRequestQuoteButtonFromHeader();
  await rfq.clickSubmitRequest();
  await expect(rfq.firstName).toBeVisible({ timeout: 10000 });
});
