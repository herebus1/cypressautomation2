const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //Provide the path where cypress can find the spec files to execute
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/fails/screenshots',
  },
});
