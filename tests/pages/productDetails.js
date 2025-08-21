import ProductDetailsObjects from "../pageObjects/productDetailsObject";

export default class ProductDetails {
  constructor(page) {
    this.page = page;
    this.locate = new ProductDetailsObjects(page);
  }

  async selectProductFromList(text, index) {
    await this.locate.selectedProduct(text, index).click();
  }

  async getSingleProductPrice() {
    const getPrice = await this.locate.salePrice.innerText();
    const getPriceInNumber = parseFloat(getPrice.replace("$", ""));
    return getPriceInNumber;
  }

  async selectProductSize(size) {
    await this.locate.variation(size);
  }
  async selectProductColor(color) {
    await this.locate.variation(color);
  }

  async enterProductQty(qty) {
    await this.locate.productQtyInput.fill(qty);
  }

  async clickAddToCartButton() {
    await this.locate.buttonAddToCart.click();
  }
}
