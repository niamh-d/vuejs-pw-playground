import { test, expect } from '@playwright/experimental-ct-vue'
import String from '../../src/components/String.vue'

test('should work', async ({ mount }) => {
  const component = await mount(String)
  const result = component.getByTestId('string-result')
  await expect(result).toHaveText(/result/i)
})

test('should capitalize a string', async ({ mount }) => {
  const component = await mount(String)
  const input = component.locator('input')
  await input.fill('hello')
  const button = component.getByRole('button', { name: /capitalise/i })
  await button.click()
  const result = component.getByTestId('string-result')
  expect(await result.textContent()).toContain('Hello')
})
