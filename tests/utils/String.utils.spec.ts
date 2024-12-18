import { expect, test } from '@playwright/test'
import { capitalize } from '../../utils/string.utils'

test('it should capitalize a string', () => {
  const actual = capitalize('hello')
  const expected = 'Hello'

  expect.soft(actual).toBe(expected)
  expect.soft(actual).not.toBe('hello')
  expect.soft(actual).toContain('ell')
  expect.soft(actual).not.toContain('hell')
})
