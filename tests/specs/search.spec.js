import { test, expect } from "@playwright/test";
import Search from "../pages/search";
import testData from "../../resource/testData.json" assert { type: "json" };

test.describe.serial("Evershop site search feature", () => {
  let search;
  test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto("https://demo.evershop.io/");
  });

  test("Should able to search with valid product name", async ({}) => {
    await search.clickSearchIcon();
    await search.enterSearchedText(testData.searchedText);
    test.expect(await search.getSearchedItem()).toContain(testData.searchedText);
  });
  test("Verify unsuccessful search with invalid product name", async ({ page }) => {
    await search.clickSearchIcon();
    await page.waitForTimeout(5000);
    await search.enterSearchedText("invalid product");
    await page.waitForTimeout(5000);
  });

  test("Verify unsuccessfull search with special character", async ({}) => {
    await search.clickSearchIcon();
    await search.enterSearchedText("&*(&(&(*&");
  });
});
