import { test, expect } from '@playwright/experimental-ct-vue'
import String from '../../src/components/String.vue'

test('should work', async ({ mount }) => {
  const component = await mount(String)
  const result = component.getByTestId('string-result')
  await expect(result).toHaveText(/result/i)
})
