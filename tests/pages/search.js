import searchObjects from "../pageObjects/searchObjects.js";

export default class Search {
  constructor(page) {
    this.page = page;
    this.locate = new searchObjects(page);
  }

  async clickSearchIcon() {
    await this.locate.searchIcon.click();
  }

  async enterSearchedText(text) {
    await this.locate.serchInputField.fill(text);
    await this.page.waitForTimeout(3000);
  }

  async getSearchedItem() {
    const searchedText = await this.locate.searchedResult.innerText();
    return searchedText;
  }
}
