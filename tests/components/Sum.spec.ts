import { test, expect } from '@playwright/experimental-ct-vue'
import Sum from '../../src/components/Sum.vue'

test('should work', async ({ mount }) => {
  const component = await mount(Sum)
  const result = component.getByTestId('sum-result')
  await expect(result).toHaveText(/result/i)
})
