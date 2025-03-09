# ChexPass Automation using Playwright

## 📌 Overview

This project automates the login and form-filling process for the ChexPass website using Playwright. It includes automated handling of login authentication, personal details entry, and organization information submission.

## 📂 Project Structure

```
chexpass-automation/
│── pages/
│   ├── login.js                  # Handles login automation
│   ├── personal-details.js       # Automates personal details form
│   ├── organization-information.js # Automates organization form selection
│── tests/
│   ├── chex-pass.spec.js         # Main test execution script
│── README.md                     # Project documentation
│── package.json                   # Node.js package configuration
│── playwright.config.js           # Playwright configuration
```

## 🔧 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (>= 16.x recommended)
- **Playwright** (latest version)

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/junnis111/chexpass-automation.git
cd chexpass-automation
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Install Playwright Browsers

```sh
npx playwright install
```

## ▶ Running Tests

To execute the test script, run:

```sh
npx playwright test tests/chex-pass.spec.js
```

For **headed mode** (to see the browser UI), use:

```sh
npx playwright test --headed
```

## 📝 Test Workflow

1. **Login Automation:**
   - Navigates to the login page.
   - Enters email and password.
   - Handles OTP submission manually.
2. **Personal Details:**
   - Fills in user details such as first name, last name, and phone number.
3. **Organization Information:**
   - Fills in organization address details, selects state and country.

## 🔍 Debugging

If you encounter issues, try:

```sh
npx playwright test --debug
```

## 🤝 Contributing

- Fork the repository
- Create a feature branch (`git checkout -b feature-branch`)
- Commit your changes (`git commit -m 'Add new feature'`)
- Push to the branch (`git push origin feature-branch`)
- Open a Pull Request

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

## 📞 Contact

For questions or support, reach out via email or create an issue on GitHub.
