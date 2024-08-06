import { test, expect } from "@playwright/test";

test("verification page", async ({ page }) => {
  test.setTimeout(120000);
  //Open platform
  await page.goto("https://www.demoblaze.com/index.html");
  // login to the platform
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").click();
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  //empty cart
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  async function emptyCart() {
    await page.waitForTimeout(5000);
    // Get all anchor elements with the exact text "delete"
    let deleteLinks = await page.$$('a:text("delete")');
    console.log(deleteLinks.length);
    while (deleteLinks.length > 0) {
      if (deleteLinks.length == 0) {
        break;
      }
      // Click on the first "delete" link
      await deleteLinks[0].click();

      // Wait for the page to potentially change after the click
      // This can be customized depending on the expected behavior of the page
      await page.waitForNavigation({ waitUntil: "networkidle" });

      // Refresh the list of "delete" links
      deleteLinks = await page.$$('a:text("delete")');
    }
  }
  await emptyCart();
  //Choose Phone
  await page.goto("https://www.demoblaze.com/index.html");
  await page.getByRole("link", { name: "Nexus" }).click();
  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.waitForTimeout(5000);
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  //Delete product from cart (phone)
  let delete_nexus = await expect(
    page.getByRole("link", { name: "Delete" })
  ).toBeVisible({ timeout: 5000 });
  await page.getByRole("link", { name: "Delete" }).click();
  //Go back to home page
  await page.goto("https://www.demoblaze.com/index.html");
  //Choose a new product Laptop
  await page.getByRole("link", { name: "Laptops" }).click();
  await page.getByRole("link", { name: "Sony vaio i5" }).click();
  //Add to cart
  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.waitForTimeout(5000);
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  await page.getByRole("button", { name: "Place Order" }).click();
  //Payment data
  await page.getByLabel("Total:").click();
  await page.getByLabel("Total:").fill("waj");
  await page.getByLabel("Country:").click();
  await page.getByLabel("Country:").fill("waj");
  await page.getByLabel("City:").click();
  await page.getByLabel("City:").click();
  await page.getByLabel("City:").fill("paris");
  await page.getByLabel("Credit card:").click();
  await page.getByLabel("Credit card:").fill("123456789");
  await page.getByLabel("Month:").click();
  await page.getByLabel("Month:").fill("11");
  await page.getByLabel("Year:").click();
  await page.getByLabel("Year:").fill("2026");
  await page.getByRole("button", { name: "Purchase" }).click();
  await page.getByRole("button", { name: "OK" }).click();
  // Logout
  await page.reload();
  await page.getByRole("link", { name: "Log out" }).click();
  await page.waitForTimeout(1000);
  // verify redirection to home page
  let visib = await page.isVisible("#login2");
  if (visib == true) {
    console.log("Test Passed");
    await expect(page.locator("#login2")).toBeVisible();
  } else {
    console.log("Test Failed");
    await expect(page.locator("#login2")).not.toBeVisible();
  }
  
  await page.close();
});
