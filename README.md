# AstroFlow RFQ Automation Testing

Playwright test automation project for AstroFlow RFQ (Request For Quote) form.

## Overview

This project contains automated tests for the **Request for Quote** form on the AstroFlow website. It follows the **Page Object Model (POM)** design pattern and includes both positive and negative test scenarios.

## Project Structure

```bash
├── data/
├── flows/
├── POM/
│   ├── landing/
│   └── rfq/
├── tests/
├── fixtures/
├── playwright.config.ts
└── package.json
```

## How to Run the Tests

```bash
# Run all tests in headless mode
npm run test

# Run tests in UI mode (recommended for debugging)
npm run test:ui

# Run tests with browser visible
npm run test:headed

# Open the HTML test report
npm run report
```

## Roadmap & Pending Tasks

### High Priority

- [ ] Add meaningful comments to every method in the project
- [ ] Add dependency for generating dummy data (`@faker-js/faker`)
- [ ] Add more negative test cases (invalid data, partial form filling, etc.)
- [ ] Add more positive test cases for different scenarios

### Medium Priority

- [ ] Implement data-driven testing with multiple datasets
- [ ] Improve error handling and custom reporting
- [ ] Add visual regression testing
- [ ] Configure CI/CD pipeline (GitHub Actions)

### Nice to Have

- [ ] Parameterized tests
- [ ] Automatic screenshots on test failure
- [ ] Accessibility (a11y) testing
- [ ] API testing for form backend
- [ ] Performance testing
