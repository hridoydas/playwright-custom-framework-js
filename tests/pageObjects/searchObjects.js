export default class SearchObjects {
  constructor(page) {
    this.page = page;
    this.searchIcon = page.locator("//a[@class='search-icon']");
    this.searchInputField = page.locator("//input[@placeholder='Search']");
  }
}
