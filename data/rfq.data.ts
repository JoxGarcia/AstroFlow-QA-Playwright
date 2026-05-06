export interface RFQFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  services?: string[];
  timeline?: string;
  volume?: string;
  details?: string;
}

export const validRFQData = {
  firstName: "Jose",
  lastName: "Garcia",
  email: `test${Date.now()}@mail.com`,
  phone: "(502)59129129",
  company: "Testing Company",
  industry: "ecommerce",
  services: ["Warehousing & Storage"],
  timeline: "immediate",
  volume: "500",
  details: "This are project details randomly",
};
