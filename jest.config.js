module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-puppeteer",
  setupFilesAfterEnv: ["expect-puppeteer", "./.config/testSetup.ts"],
  globalSetup: "./.config/puppeteerSetup.ts",
  globalTeardown: "jest-environment-puppeteer/teardown",
  bail: true,
  testTimeout: 400000,
  collectCoverage: false,
  roots: ["./"],
  testMatch: ["<rootDir>/src/test-steps/emails/emails-send-all-emails.tests.ts"],
  // testMatch: ["<rootDir>/src/test-steps/trash/trash-test.tests.ts"],
  testPathIgnorePatterns: [".config", "node_modules"],
  moduleNameMapper: {
    uuid: require.resolve("uuid"),
  },
  reporters: ["default"],
};
