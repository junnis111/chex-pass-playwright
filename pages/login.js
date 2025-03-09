class Login {
  constructor(page) {
    this.page = page;
    this.email = "[name = 'email']";
    this.password = "[name = 'password']";
    this.signin = "//button[normalize-space()='Sign In']";
    this.opt = "[name='otp']";
    this.submit = "//button[@type='submit']";
  }

  async gotoChexPass() {
    await this.page.goto("https://stage.app.chexpass.io/test-5/login");
  }

  async LoginAccount(email, password) {
    await this.page.locator(this.email).fill(email);
    await this.page.locator(this.password).fill(password);
    await this.page.locator(this.signin).click();
    await this.page.waitForSelector(this.opt, { timeout: 20000 });
    await this.page.locator(this.submit).click();
  }
}

module.exports = Login;
