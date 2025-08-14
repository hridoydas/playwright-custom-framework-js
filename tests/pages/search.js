import searchObjects from "../pageObjects/searchObjects.js";

const locate = new searchObjects();
export default class Search {
  async clickSearchIcon() {
    await locate.searchIcon.click();
  }

  async enterSearchedText(searchText) {
    await locate.searchInputField.sendKeys(searchText);
  }
}
