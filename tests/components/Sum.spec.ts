import { test, expect } from '@playwright/experimental-ct-vue'
import Sum from '../../src/components/Sum.vue'

test('should work', async ({ mount }) => {
  const component = await mount(Sum)
  const result = component.getByTestId('sum-result')
  await expect(result).toHaveText(/result/i)
})

test('should add two numbers', async ({ mount }) => {
  const component = await mount(Sum)
  const firstInput = component.locator('input[name="num_a"]')
  await firstInput.fill('1')
  const secondInput = component.locator('input[name="num_b"]')
  await secondInput.fill('2')
  await component.getByRole('button', { name: 'Calculate' }).click()
  const result = component.getByTestId('sum-result')
  expect(await result.textContent()).toContain('3')
})
