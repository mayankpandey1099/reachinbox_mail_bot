# Auto Email Bot

## Table of Contents

- Introduction
- Features
- Installation
- Usage
- Configuration
- Project Structure
- Documentation

## Introduction

The Auto Email Bot is a Node.js application that connects to the Gmail, Outlook account of user and automatically replies to unread emails from specific senders. This project uses Google APIs to access Gmail and Passport.js for authentication and for outlook using Microsoft graph client and MSAL-node for authentication purpose.

## Features

- Authenticate and authorization with Google by passport.js using OAuth2
- Authenticate and authorization with Microsoft Graph client using MSAL-node.
- Automatically reply to unread emails from specific senders

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/reachinbox_mail_bot.git
   cd reachinbox_mail_bot

2. Install dependencies:
   ```sh
   npm install

3. Set up the environment variables. Create a .env file in the root of the project and add the following
  ```env
  GOOGLE_CLIENT_ID=your-google-client-id
  GOOGLE_CLIENT_SECRET=your-google-client-secret
  PORT= YOUR_SERVER_PORT_NO
  EMAIL= CONFIGURED_EMAIL_ID
  REDIRECT_URL= GOOGLE_REDIRECT_URI
  DB_HOST="localhost"
  API_KEY= "your_api_key"

  //redis configuration 
  HOST_R= 'your_redis_host'
  PASS_R= "your_redis_pass"
  PORT_R= "your_redis_port"

  //outlook configuration
  CLIENT_ID = "your_outlook_client_id"
  TENANT_ID = "your_outlook_tenant_id"
  CLIENT_SECRET = "your_outlook_client_secret"
  ```

## Usage 

1. Start the server:
   ```sh
   npm start

2. Open your browser and navigate to `http://localhost:3000/auth/google`

3. Authenticate with your Google account. And will redirect you to `http://localhost:3000/auth/google/callback` to get the accessToken and refreshToken.

4. The bot will start checking for unread emails from all senders and automatically reply to them.

## Project Structure

```sh
reachinbox_mail_bot
      ├── controllers
      |   ├── gmailController.js
      │   └── outlookController.js
      ├── routes
      |   ├── googleRouter.js
      │   └── outlookRouter.js
      ├── middleware
      |   └── passportMiddleware.js
      ├── utils
      │   ├── gmailReplyHelper.js
      │   ├── outlookReplyHelper.js
      |   └── redisConfig.js
      ├── .env
      ├── package-lock.json
      ├── package.json
      ├── server.js
      └── README.md
```

## Documentation
```sh
https://www.passportjs.org/tutorials/google/
https://learn.microsoft.com/en-us/graph/api/resources/mail-api-overview?view=graph-rest-1.0
https://learn.microsoft.com/en-us/graph/outlook-mail-concept-overview
https://learn.microsoft.com/en-us/graph/sdks/create-client?tabs=csharp
```
## Conclusion

- This project demonstrates how to build an auto email bot using Node.js, the Google API, microsoft-graph-client and Passport.js for authentication. It covers handling OAuth tokens, interacting with the Gmail API, Graph api.




