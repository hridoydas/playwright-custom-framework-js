import { test } from "@playwright/test";
import Search from "../pages/search";

test.describe("Evershop site search feature", () => {
  let search;
  test.beforeEach(async ({ page }) => {
    search = new Search(page);
    await page.goto("https://demo.evershop.io/", { timeout: 60000 });
  });

  test("Should able to search with valid product name", async () => {
    await search.clickSearchIcon();
    await search.enterSearchedText("Nike Air");
  });
});
