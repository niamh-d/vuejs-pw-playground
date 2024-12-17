import { expect, test } from '@playwright/test'
import { sum } from '../../utils/Math.utlis'

test('it should add two numbers', () => {
  const actual = sum(1, 2)
  const expected = 3
  const notExpected = 4
  const two = 2
  const five = 5

  expect.soft(actual).toBe(expected)
  expect.soft(actual).not.toBe(notExpected)
  expect.soft(actual).toBeGreaterThan(two)
  expect.soft(actual).toBeLessThan(five)
})
