export default class SearchObjects {
  constructor(page) {
    this.page = page;
    this.searchIcon = page.locator("//a[@class='search-icon']");
    this.serchInputField = page.locator("//input[@placeholder='Search']");
    this.searchedResult = page.locator("(//div[contains(@class,'product-name')])[1]");
  }
}
