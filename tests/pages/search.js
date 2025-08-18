import searchObjects from "../pageObjects/searchObjects.js";

export default class Search {
  constructor(page) {
    this.locators = new searchObjects(page);
    this.page = page;
  }

  async navigete() {
    await this.page.goto("https://demo.evershop.com");
  }

  async clickSearchIcon() {
    await this.locators.searchIcon.click();
  }

  async enterSearchedText(text) {
    await this.locators.searchInputField.fill(text);
  }
}
