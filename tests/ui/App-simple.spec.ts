import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('validates heading', async ({ page }) => {
  await expect(page.getByTestId('heading')).toHaveText('Vue.js-Playwright testing tutorial')
})

test('validates sum result', async ({ page }) => {
  const firstInput = page.locator('input[name="num_a"]')
  await firstInput.fill('1')
  const secondInput = page.locator('input[name="num_b"]')
  await secondInput.fill('2')
  await page.getByRole('button', { name: 'Calculate' }).click()
  await expect(page.getByTestId('sum-result')).toHaveText('Result: 3')
})

test('validates string result', async ({ page }) => {
  const input = page.locator('input[name="string"]')
  await input.fill('hello')
  const button = page.getByRole('button', { name: /capitalize/i })
  await button.click()
  await expect(page.getByTestId('string-result')).toHaveText('Result: Hello')
})
