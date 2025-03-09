const { test, expect } = require("@playwright/test");
import Login from "../pages/login";
import PersonalDetails from "../pages/personal-details";
import OrganizationInformation from "../pages/organization-information";

test("chex-pass", async ({ page }) => {
  test.setTimeout(120000);
  //login
  const login = new Login(page);
  await login.gotoChexPass();
  await login.loginAccount("junnis111+t5@gmail.com", "Qwerty123@#");

  // Personal Details
  const personalDetails = new PersonalDetails(page);
  await personalDetails.details("Test", "user", "1111111115");

  //Organization information
  const organizationinformation = new OrganizationInformation(page);
  await organizationinformation.information(
    "abc",
    "def",
    "NewYork",
    "NY",
    "United States",
    "12345"
  );
});
