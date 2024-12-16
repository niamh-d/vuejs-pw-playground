import { expect, test } from '@playwright/test'
import { sum } from '../../utils/Math.utlis'

test('it should add two numbers', () => {
  const actual = sum(1, 2)
  const expected = 3

  expect(actual).toBe(expected)
})
