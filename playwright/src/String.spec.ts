import { test, expect } from '@playwright/experimental-ct-vue'
import String from '../../src/components/String.vue'

test('should work', async ({ mount }) => {
  const component = await mount(String)
  const resultTextA = component.getByTestId('string-result-A')
  await expect.soft(resultTextA).toHaveText(/result/i)
})

test('should capitalize a string', async () => {
  // write test here
})
