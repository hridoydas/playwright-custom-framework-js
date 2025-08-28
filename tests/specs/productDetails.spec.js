import { test, expect } from "@playwright/test";
import ProductDetails from "../pages/productDetails";
import Utilities from "../../Utils/utilities";
import testData from "../../resource/testData.json" assert { type: "json" };

test.describe.serial("Evershop product details page", () => {
  let productDetails, utilities;
  test.beforeEach(async ({ page }) => {
    productDetails = new ProductDetails(page);
    utilities = new Utilities(page);
    await page.goto("https://demo.evershop.io/");
  });

  test("Should able to select valid product and add to cart", async () => {
    const index = await utilities.getRandomNumber(2, 4);
    await productDetails.selectProductFromList(testData.searchedText, index);
    await productDetails.getSingleProductPrice();
    await productDetails.selectProductSize(size);
    testData.color = "red";
    await productDetails.selectProductColor(color);
    await productDetails.enterProductQty(qty);
    await productDetails.clickAddToCartButton();
  });
});
