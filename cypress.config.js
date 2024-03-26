const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://walkdog.vercel.app',
    defaultCommandTimeout:40000,
    setupNodeEvents(on, config) {
    },
  },
});
