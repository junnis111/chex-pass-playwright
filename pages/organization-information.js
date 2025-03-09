class OrganizationInformation {
  constructor(page) {
    this.page = page;
    this.streetAddress1 = "Street address 1";
    this.streetAddress2 = "Street address 2";
    this.city = "City";
    this.svg = "//div[@name='state']//button[@title='Open']//*[name()='svg']";
    this.stateList =
      "//li[@class = 'MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiAutocomplete-option css-cfojyr']";
    this.country =
      "//li[@class = 'MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiAutocomplete-option css-cfojyr']";
    this.zipcode = "Zip code";
    this.continueBtn = "//button[normalize-space()='Continue']";
  }

  async information(
    address1,
    address2,
    cityName,
    stateName,
    countryName,
    zipcode
  ) {
    await this.page.getByPlaceholder(this.streetAddress1).fill(address1);
    await this.page.getByPlaceholder(this.streetAddress2).fill(address2);
    await this.page.getByPlaceholder(this.city).fill(cityName);
    await this.page.locator(this.svg).click();
    const stateList = await this.page.$$(this.stateList);
    //state
    for (const state of stateList) {
      let stateText = await state.textContent();
      if (stateText === stateName) {
        await state.click();
        break;
      }
    }

    //country
    const countryList = await this.page.$$(this.country);

    for (const country of countryList) {
      let stateText = await country.textContent();
      if (stateText === countryName) {
        await country.click();
        break;
      }
    }
    await this.page.getByPlaceholder(this.zipcode).fill(zipcode);
    await this.page.locator(this.continueBtn).click();
    await this.page.waitForTimeout(5000);
  }
}
module.exports = OrganizationInformation;
