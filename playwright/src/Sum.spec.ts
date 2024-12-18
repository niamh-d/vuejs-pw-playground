import { test, expect, MountResultJsx } from '@playwright/experimental-ct-vue'
import { Locator } from '@playwright/test'
import Sum from '../../src/components/Sum.vue'

let component: MountResultJsx
let resultText: Locator

test.beforeEach(async ({ mount }) => {
  component = await mount(Sum)
  resultText = component.getByTestId('sum-result')
})

test('should work', async () => {
  await expect(resultText).toHaveText(/result/i)
})

test('should add two numbers', async () => {
  const firstInput = component.locator('input[name="num_a"]')
  const secondInput = component.locator('input[name="num_b"]')

  await firstInput.fill('1')
  await secondInput.fill('2')
  await component.getByRole('button', { name: 'Calculate' }).click()

  expect(await resultText.textContent()).toContain('3')
})
