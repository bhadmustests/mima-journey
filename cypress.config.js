const { defineConfig } = require("cypress");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

function setupNodeEvents (on, config){
  preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://staging.trymima.com/',
    defaultCommandTimeout: 10000,
    viewportHeight: 980,
    viewportWidth: 1020,
    specPattern:  '**/*.feature',
    env: {
          "MAILSLURP_API_KEY": "faac19f993905eb1cfbb0c214be792a8d52613fccb37b1ad612bbb5096b72313"
    },
    setupNodeEvents,
  },
});
