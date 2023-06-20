const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://creditguard.mystore.today",
    consumerKey: "cc0s9xqdxzr8u3a2xtwjutbxqb2c8kdi",
    consumerSecret: "0la3djam4xi04phafidw0bm04m3y2871",
    accessToken: "ie8ahic38j1u5bmhqvhmkk4gv8zo5yev",
    accessTokenSecret: "ls3fe40hybgn5orcctvqiqdh36sxvk87",
    customerUsername: "test@studioraz.co.il",
    customerPassword: "qwaszx1234$",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
