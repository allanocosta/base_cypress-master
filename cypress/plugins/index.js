
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('before:browser:launch', (browser = {}, launchOptions) => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches

    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // see: https://github.com/cypress-io/cypress/issues/3633
      launchOptions.args.push('--disable-dev-shm-usage');

      // whatever you return here becomes the launchOptions
      return launchOptions;
    }
    if (browser.family === 'chromium' && browser.name === 'electron') {
      // see: https://github.com/cypress-io/cypress/issues/3633
      launchOptions.args.push('--disable-dev-shm-usage');

      // whatever you return here becomes the launchOptions
      return launchOptions;
    }
    if (browser.family === 'chromium') {
      // see: https://github.com/cypress-io/cypress/issues/3633
      launchOptions.args.push('--disable-dev-shm-usage');

      // whatever you return here becomes the launchOptions
      return launchOptions;
    }
  });
};

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

