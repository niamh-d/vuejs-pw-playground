import { test, expect, MountResultJsx } from '@playwright/experimental-ct-vue'
import String from '../../src/components/String.vue'
import { Locator } from '@playwright/test'

let component: MountResultJsx
let resultTextA: Locator

test.beforeEach(async ({ mount }) => {
  component = await mount(String)
  resultTextA = component.getByTestId('string-result-A')
  expect.soft(resultTextA).toBeDefined()
  expect.soft(await resultTextA.textContent()).toContain('Result: ')
})

test('should work', async () => {
  await expect.soft(resultTextA).toHaveText(/result/i)
})

test('should capitalize a string', async () => {
  const input = component.locator('input')
  expect.soft(await input.inputValue()).toBe('')
  await input.fill('hello')
  const button = component.getByRole('button', { name: /capitalize/i })
  await button.click()
  expect.soft(await resultTextA.textContent()).toContain('Hello')
})
