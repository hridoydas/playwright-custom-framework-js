import { test, expect } from "@playwright/test";
import Search from "../pages/search";
const searchText = "Nike Air";
test.describe("Evershop site search feature", () => {
  let search;
  test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto("https://demo.evershop.io/");
  });
  test("Should able to search with valid product name", async () => {
    await search.clickSearchIcon();
    await search.enterSearchedText(searchText);
    test.expect(searchText).toContain(await search.getSearchedItem());
  });

  test("Verify unsuccessful search with invalid product name", async () => {
    await search.clickSearchIcon();
    await search.enterSearchedText("invalid product");
  });

  test("Verify unsuccessfull search with special character", async () => {
    await search.clickSearchIcon();
    await search.enterSearchedText("&*(&(&(*&");
  });
});
