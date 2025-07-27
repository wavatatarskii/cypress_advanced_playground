# Cypress Advanced Playground

🧪 Advanced [Cypress](https://www.cypress.io/) dummy project

## 📦 Installation

```bash
npm install
```

## 🚀 Start

```bash
npm run start        # Starts local service (port 3000)
npx cypress open     # Opens Cypress UI
```

## 🧪 Tests

- ✅ Validations forms
- ✅ Work with localStorage and tokens
- ✅ Async elements(delayed content)
- ✅ Drag & Drop
- ✅ File Upload
- ✅ Tables & data
- ✅ iframe access
- ✅ Autocomplete
- ✅ API-reqs (with intercept)

## 🤖 CI

Project contains GitHub Actions workflow `.github/workflows/cypress.yml`, which starts tests with each `push`/`PR`.

## 📊 Test reports

One of those reporters can be added:

### Mochawesome

```bash
npm install --save-dev mochawesome
```

In `cypress.config.js`:

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  }
})
```

### Allure (through Cypress Allure Plugin)

```bash
npm install --save-dev @shelex/cypress-allure-plugin
```

Add in `cypress.config.js`:

```js
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  }
}
```

In `support/e2e.js`:

```js
import '@shelex/cypress-allure-plugin';
```

Start with Allure:

```bash
npx cypress run --env allure=true
```
