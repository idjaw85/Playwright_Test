import { test, expect } from "@playwright/test";
test("verification page", async ({ page }) => {
  //Open platform
  await page.goto("https://www.demoblaze.com/index.html");
  // login to the platform
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").click();
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  //Choose Phone
  await page.getByRole("link", { name: "Nexus" }).click();
  await page.getByRole("link", { name: "Add to cart" }).click();
  await page.getByRole("link", { name: "Cart", exact: true }).click();
  //Delete product from cart (phone)
  await page.getByRole("link", { name: "Delete" }).click();
  //Go back to home page
  await page.goto("https://www.demoblaze.com/index.html");
  //Choose a new product Laptop
  await page.getByRole("link", { name: "Laptops" }).click();
  await page.getByRole("link", { name: "Sony vaio i5" }).click();
  //Add to cart
  await page.getByRole("link", { name: "Add to cart" }).click();
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
  // verify redirection to home page

  const login = page.getByRole("link", { name: "Log in" });
  console.log("login: ", login);
  let login_exist = await page.getByRole("link", { name: "Log in" });
  if (login_exist) {
    console.log("Logout successfully");
  } else {
    console.log("Logout failed");
  }

  await page.close();
});
