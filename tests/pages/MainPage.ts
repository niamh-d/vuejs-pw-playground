import { expect, Locator, Page } from '@playwright/test'

const headingString = 'Vue.js-Playwright testing tutorial'

export default class MainPage {
  private readonly page: Page
  private readonly heading: Locator
  private readonly sumInputA: Locator
  private readonly sumInputB: Locator
  private readonly calculateButton: Locator
  private readonly sumResult: Locator
  private readonly stringInput: Locator
  private readonly capitalizeButton: Locator
  private readonly stringResult: Locator

  constructor(page: Page) {
    this.page = page
    this.heading = this.page.getByTestId('heading')
    this.sumResult = this.page.getByTestId('sum-result')
    this.stringResult = this.page.getByTestId('string-result')
    this.sumInputA = this.page.locator('input[name="num_a"]')
    this.sumInputB = this.page.locator('input[name="num_b"]')
    this.calculateButton = this.page.getByRole('button', { name: /calculate/i })
    this.stringInput = this.page.locator('input[name="string"]')
    this.capitalizeButton = this.page.getByRole('button', { name: /capitalize/i })
  }

  public async openPage(): Promise<void> {
    await this.page.goto('/')
  }

  public async validateHeading(): Promise<void> {
    await expect.soft(this.heading).toHaveText(headingString)
  }

  public async validateSumResult(): Promise<void> {
    await this.fillInput(this.sumInputA, '1')
    await this.fillInput(this.sumInputB, '2')
    await this.calculateButton.click()
    await expect.soft(this.sumResult).toHaveText('Result: 3')
  }

  public async validateStringResult(): Promise<void> {
    await this.fillInput(this.stringInput, 'hello')
    await this.capitalizeButton.click()
    await expect.soft(this.stringResult).toHaveText('Result: Hello')
  }

  private async fillInput(input: Locator, value: string): Promise<void> {
    await input.fill(value)
  }
}
