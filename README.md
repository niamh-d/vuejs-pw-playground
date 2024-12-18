# vuejs-pw-tutorial-playground

<code><img width="50" src="https://github.com/marwin1991/profile-technology-icons/assets/25181517/37cb517e-d059-4cc0-8124-1a72b663167c" alt="Playwright" title="Playwright"/></code>
<code><img width="50" src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png" alt="Vue.js" title="Vue.js"/></code>
<code><img width="50" src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" alt="TypeScript" title="TypeScript"/></code>

This is an introductory project tutorial to testing with [Playwright](https://playwright.dev) (in a [Vue.js](https://vuejs.org/) project using TypeScript) created by Niamh Doyle (Github: [@niamh-d](https://github.com/niamh-d)). This project introduces the basics of Playwright to write and execute unit tests, UI tests, and tests on Vue.js components. It is a first starter and is in no way meant to be an exhaustive introduction.

## Vue.js app

The Vue.js app is a simple app consisting of a single view and three components (App.vue, Sum.vue, and String.vue) to illustrate the basics of testing with Playwright.

## Branches

- main: Starter code
- final: [Final code](https://github.com/niamh-d/pw-intro-vuejs/tree/final) (see below for how to copy final branch to your local machine)

## Accompanying Presentation

[Presentation slide deck](https://docs.google.com/presentation/d/1VBuV3xnmSvv_a95qQayRqszB07a5DCGXEH6vm1sohNs/edit?usp=sharing)

## Tests

The tests are written in TypeScript and are divided into three types:

- Unit tests on two utility functions (./tests/utils)
- UI tests on App view (./tests/ui)
- Tests on the two Vue components (./playwright/src)

## Copy final code to local machine

```sh
cd desktop # or path to wherever you want to save the project
git clone https://github.com/niamh-d/pw-intro-vuejs
# open in VSCode
cd pw-intro-vuejs
code .
# download final code to local machine
git checkout origin/final # This allows you to explore the final code
git checkout final # This creates a local copy of the final code
# switch back to main branch (starter code)
git checkout main
```

## Project Setup

```sh
npm i
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Tests with Playwright

```sh
# Install browsers for the first run
npx playwright install

# Runs all UI and unit tests
npm test

# Runs the UI tests in debug mode
npm run test:d

# Runs the UI tests using the Playwright UI tool
npm run test:ui

# Opens the Playwright report for the most recently-runned tests
npm run test:r

# Runs the tests on the Vue components
npm run test:ct
```

License: Attribution-NonCommercial-NoDerivatives 4.0 International [(CC-BY-NC-ND-4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Technology icons by [Marwin1991](https://github.com/marwin1991/profile-technology-icons)
