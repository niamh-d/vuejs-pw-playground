/* eslint-disable @typescript-eslint/no-unused-vars */
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

  // write test here
})
