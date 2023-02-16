module.exports = {
  launch: {
    // headless: process.env.HEADLESS !== "false",
    headless: false,
    devtools: process.env.DEVTOOLS === "true",
    product: "chrome",
    dumpio: true,
    args: [
      "--window-size=1920,1080",
      "--disable-dev-shm-usage",
      "--disable-features=IsolateOrigins,site-per-process",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--enable-quic",
      "--quic-version=h3-29",
    ],
    slowMo: 50,
  },
  // browserContext: "incognito", /* If unexpected cache issues are happenning, uncomment this setting */
  exitOnPageError: true,
};
