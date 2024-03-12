const { defineConfig } = require("cypress");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents (on, config){
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://staging.trymima.com/',
    defaultCommandTimeout: 10000,
    viewportHeight: 900,
    viewportWidth: 1400,
    specPattern:  '**/*.feature',
    watchForFileChanges: false,
    setupNodeEvents,
  },
});
