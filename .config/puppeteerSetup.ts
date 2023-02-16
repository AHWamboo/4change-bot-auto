const { setup: setupPuppeteer } = require("jest-environment-puppeteer");
require("expect-puppeteer");

async function globalSetup(globalConfig: any) {
  await setupPuppeteer(globalConfig);
  console.info("\nStarting tests suite...\n");
}

export default globalSetup;
