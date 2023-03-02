import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    env: {
      baseUrl: {
        login: 'https://the-internet.herokuapp.com/login',
        inputs: 'https://the-internet.herokuapp.com/inputs',
        dropdown: 'https://the-internet.herokuapp.com/dropdown',
        hovers: 'https://the-internet.herokuapp.com/hovers'
    },
      username: 'tomsmith',
      password: 'SuperSecretPassword!'
    },
    chromeWebSecurity: false
  },
});
