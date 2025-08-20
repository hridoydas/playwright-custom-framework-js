export default class ProductDetailsObjects {
  constructor(page) {
    this.page = page;
    this.salePrice = this.page.locator("//span[@class='sale-price']");
    this.productQtyInput = this.page.locator("//input[@name='qty']");
    this.buttonAddToCart = this.page.locator("//button[contains(.,'ADD TO CART')]");
  }

  selectedProduct(text, index) {
    return this.page.locator(`(//span[contains(text(), '${text}')])[${index}]`);
  }

  variation(type) {
    return this.page.locator(`//a[@href='#' and contains(text(),'${type}')]`);
  }
}
