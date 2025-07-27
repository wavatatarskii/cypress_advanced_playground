# Cypress Advanced Playground

🧪 Продвинутый проект для практики автотестов с использованием [Cypress](https://www.cypress.io/)

## 📦 Установка

```bash
npm install
```

## 🚀 Запуск

```bash
npm run start        # Запускает локальный сервер (порт 3000)
npx cypress open     # Открывает Cypress UI
```

## 🧪 Что тестируется

- ✅ Формы с валидацией
- ✅ Работа с localStorage и токенами
- ✅ Асинхронные элементы (delayed content)
- ✅ Drag & Drop
- ✅ File Upload
- ✅ Таблицы и данные
- ✅ iframe доступ
- ✅ Autocomplete
- ✅ API-запросы (с intercept)

## 🤖 CI

Проект содержит GitHub Actions workflow `.github/workflows/cypress.yml`, который запускает тесты при каждом `push`/`PR`.

## 📊 Тестовые отчёты

Можно подключить один из следующих репортеров:

### Mochawesome

```bash
npm install --save-dev mochawesome
```

В `cypress.config.js`:

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

### Allure (через Cypress Allure Plugin)

```bash
npm install --save-dev @shelex/cypress-allure-plugin
```

Добавь в `cypress.config.js`:

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

В `support/e2e.js`:

```js
import '@shelex/cypress-allure-plugin';
```

Запуск с Allure:

```bash
npx cypress run --env allure=true
```

## 🧠 Автор

Создан для обучения и отработки реальных сценариев автоматизации.
