import { test } from "@playwright/test";
import Search from "../pages/search";
const search = new Search();

test.describe("Evershop site search feature", () => {
  test("Should able to search with valid product name", async () => {
    await search.clickSearchIcon();
    await search.enterSearchedText("Nike Air");
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

// before hook
// before suite
// before Method
// before

// after hook
// after
// after method
// after suite
