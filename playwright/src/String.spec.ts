import { test, expect, MountResultJsx } from '@playwright/experimental-ct-vue'
import String from '../../src/components/String.vue'
import { Locator } from '@playwright/test'

let component: MountResultJsx
let resultText: Locator

test.beforeEach(async ({ mount }) => {
  component = await mount(String)
  resultText = component.getByTestId('string-result')
})

test('should work', async () => {
  await expect(resultText).toHaveText(/result/i)
})

test('should capitalize a string', async () => {
  const input = component.locator('input')
  await input.fill('hello')
  const button = component.getByRole('button', { name: /capitalize/i })
  await button.click()
  expect(await resultText.textContent()).toContain('Hello')
})
