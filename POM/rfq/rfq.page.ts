import { Page, expect } from "@playwright/test";
import { RFQFormData } from "@data/rfq.data";

export class RFQPage {
  private dialogMessage: string | null = null;
  // Locators
  readonly companyName;
  readonly phoneNumber;
  readonly industry;
  readonly warehousingCheckbox;
  readonly timeline;
  readonly monthlyVolume;
  readonly projectDetails;
  readonly submitButton;
  readonly firstName;
  readonly lastName;
  readonly email;

  constructor(private page: Page) {
    this.dialogMessage = null;
    this.firstName = this.page.getByRole("textbox", { name: "First Name *" });
    this.lastName = this.page.getByRole("textbox", { name: "Last Name *" });
    this.email = this.page.getByRole("textbox", { name: "Email Address *" });
    this.companyName = page.getByRole("textbox", { name: "Company Name" });
    this.industry = this.page.getByLabel("Industry *");
    this.phoneNumber = page.getByRole("textbox", { name: /Phone Number/i });
    this.warehousingCheckbox = page.getByRole("checkbox", {
      name: "Warehousing & Storage",
    });
    this.timeline = page.getByLabel("Timeline");
    this.monthlyVolume = page.getByRole("textbox", {
      name: "Estimated Monthly Volume",
    });
    this.projectDetails = page.getByRole("textbox", {
      name: "Project Details",
    });
    this.submitButton = page.getByRole("button", { name: "Submit Request" });
  }

  async fillFirstName(value: string = "Jose") {
    await this.firstName.fill(value);
  }

  async fillLastName(value: string = "Garcia") {
    await this.lastName.fill(value);
  }

  async fillEmail(value: string = "test@test.com") {
    await this.email.fill(value);
  }

  async fillPhone(value: string = "414123123123") {
    await this.phoneNumber.fill(value);
  }

  async fillCompany(value: string = "paypal") {
    await this.companyName.fill(value);
  }

  async selectIndustry(value: string = "ecommerce") {
    await this.industry.selectOption(value);
  }

  async selectServices(services: string[] = ["Warehousing & Storage"]) {
    for (const service of services) {
      await this.warehousingCheckbox.check();
    }
  }

  async selectTimeline(value: string = "immediate") {
    await this.page.getByLabel("Timeline *").selectOption(value);
  }

  async fillVolume(value: string = "5000") {
    await this.page
      .getByRole("textbox", { name: "Estimated Monthly Volume" })
      .fill(value);
  }

  async fillDetails(value: string = "test details") {
    await this.page
      .getByRole("textbox", { name: "Project Details *" })
      .fill(value);
  }

  async fillForm(data: RFQFormData = {}) {
    await this.fillFirstName(data.firstName);
    await this.fillLastName(data.lastName);
    await this.fillEmail(data.email);
    await this.fillPhone(data.phone);
    await this.fillCompany(data.company);
    await this.selectIndustry(data.industry);
    await this.selectServices(data.services);
    await this.selectTimeline(data.timeline);
    await this.fillVolume(data.volume);
    await this.fillDetails(data.details);
  }

  async clickSubmitRequest() {
    const submitButton = this.page.getByRole("button", {
      name: "Submit Request",
    });
    this.page.once("dialog", async (dialog) => {
      this.dialogMessage = dialog.message();
      await dialog.dismiss();
    });

    await submitButton.click();
    await this.page.waitForLoadState("networkidle");
  }

  async verifyDialogSuccessMessage() {
    await expect
      .poll(async () => this.dialogMessage, {})
      .toBe("Thank you for your request! We will contact you within 24 hours.");
  }
}
