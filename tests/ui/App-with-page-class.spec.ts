/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test'
import MainPage from '../pages/MainPage.js'

let sut: MainPage

test.beforeEach(async ({ page }) => {
  sut = new MainPage(page)
  await sut.openPage()
})

test('validates heading', async () => {
  await sut.validateHeading()
})

test('validates sum result', async () => {
  await sut.validateSumResult()
})

test('validates string result', async () => {
  await sut.validateStringResult()
})
