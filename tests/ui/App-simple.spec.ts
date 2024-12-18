/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable playwright/expect-expect */
import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('validates heading', async ({ page }) => {
  await expect.soft(page.getByTestId('heading')).toHaveText('Vue.js-Playwright testing tutorial')
})

test('validates string result', async ({ page }) => {
  // write test here
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
