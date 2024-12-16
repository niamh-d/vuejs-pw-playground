import { expect, test } from '@playwright/test'
import { capitalize } from '../../utils/string.utils'

test('it should capitalize a string', () => {
  const actual = capitalize('hello')
  const expected = 'Hello'

  expect(actual).toBe(expected)
})
