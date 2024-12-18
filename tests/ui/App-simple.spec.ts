import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('validates heading', async ({ page }) => {
  await expect.soft(page.getByTestId('heading')).toHaveText('Vue.js-Playwright testing tutorial')
})

test('validates string result', async ({ page }) => {
  const stringResultA = page.getByTestId('string-result-A')
  const stringResultB = page.getByTestId('string-result-B')
  const stringResultC = page.getByTestId('string-result-C')

  await expect.soft(stringResultA).toBeHidden()
  await expect.soft(stringResultB).toBeHidden()
  await expect.soft(stringResultC).toBeHidden()

  expect.soft(stringResultA).toBeDefined()
  expect.soft(stringResultB).toBeDefined()
  expect.soft(stringResultC).toBeDefined()

  const input = page.locator('input[name="string"]')
  await expect.soft(input).toBeEnabled()
  await input.fill('hello')
  await expect.soft(input).toHaveValue('hello')
  const button = page.getByRole('button', { name: /capitalize/i })
  await button.click()

  await expect.soft(stringResultA).toHaveText('Result: Hello')
  await expect.soft(stringResultB).toBeVisible()
  await expect.soft(stringResultC).toBeInViewport()
})

test('validates sum result', async ({ page }) => {
  const firstInput = page.locator('input[name="num_a"]')
  const secondInput = page.locator('input[name="num_b"]')
  const sumResult = page.getByTestId('sum-result')

  await firstInput.fill('1')
  await secondInput.fill('2')
  await page.getByRole('button', { name: /calculate/i }).click()

  await expect.soft(sumResult).toHaveText('Result: 3')
  await expect.soft(sumResult).toContainText('3')
})
