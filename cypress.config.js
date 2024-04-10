const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on, config){
     // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
     await addCucumberPreprocessorPlugin(on, config);
     on("file:preprocessor", preprocessor(config));

     // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}

module.exports = defineConfig({
  projectId: "36ey6d",
  defaultCommandTimeout: 6000,
  env:{
    url: "https://www.rahulshettyacademy.com"
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    //Provide the path where cypress can find the spec files to execute
    //specPattern: "**/*.feature",
    specPattern: "**/*.js",
    setupNodeEvents,
    screenshotsFolder: 'cypress/fails/screenshots',
  },
});
