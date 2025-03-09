class PersonalDetails {
  constructor(page) {
    this.page = page;
    this.firstName = "Enter first name";
    this.lastName = "Enter last name";
    this.phone = "Phone";
    this.continue = "//button[normalize-space()='Continue']";
  }
  async details(firstName, lastname, phone) {
    await this.page.getByPlaceholder(this.firstName).fill(firstName);
    await this.page.getByPlaceholder(this.lastName).fill(lastname);
    await this.page.getByPlaceholder(this.phone).fill(phone);
    await this.page.locator(this.continue).click();
  }
}
module.exports = PersonalDetails;
