import { test, expect } from '@playwright/test'

test('validates heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('heading')).toHaveText('Vue.js-Playwright testing tutorial')
})

test('validates sum result', async ({ page }) => {
  await page.goto('/')
  const firstInput = page.locator('input[name="num_a"]')
  await firstInput.fill('1')
  const secondInput = page.locator('input[name="num_b"]')
  await secondInput.fill('2')
  await page.getByRole('button', { name: 'Calculate' }).click()
  await expect(page.getByTestId('sum-result')).toHaveText('Result: 3')
})
