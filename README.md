# Authwave SDK

An intuitive library designed to simplify the integration of authentication services into web applications.

## Table of Contents

- [Installation & Usage](#installation)
- [Important Links](#important-links)

## Installation

Install the SDK using NPM:

```bash
npm install authwave-sdk
```

## Usage

```typescript
import { AuthService } from "authwave-sdk";

const authService = new AuthService("<your-project-id>", "<your-project-key>");

// Using async/await
const handleCreateAccount = async () => {
  try {
    const response = await authService.createAccount(username, email, password);
    console.log("Account created successfully:", response);
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

// Using promises
authService
  .createAccount(username, email, password)
  .then((response) => {
    console.log("Account created successfully:", response);
  })
  .catch((error) => {
    console.error("Error creating account:", error);
  });
```

> ***Head over to the [SDK Documentation](https://github.com/Auth-Wave/authwave-docs/wiki) for more information on the offered methods in the AuthService class.***

## IMPORTANT LINKS

- [Authwave Documentation](https://github.com/Auth-Wave/authwave-docs/wiki)
- [Authwave SDK Source Code](https://github.com/Auth-Wave/authwave-sdk)
- [Authwave Backend Source Code](https://github.com/Auth-Wave/authwave-backend)
- [Authwave Admin Console](https://authwave.com/console)
- [Authwave Website](https://authwave.com)

---

### DEVELOPER

This project is created by Abhijeet Gautam. You can find more about the developer and connect on the following platforms:

- [**GitHub**](https://github.com/Abhijeet-Gautam5702)
- [**LinkedIn**](https://www.linkedin.com/in/abhijeet-gautam-a413b1211/)
- [**X/Twitter**](https://x.com/abhijeet_gautam)

---
