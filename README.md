# README

This application was created using the create Ruby on Rails 6.0.2, and demonstrates how to verify the JWT authentication tokens used by AWS Cognito in an Rails API.

* Modify /app/javascript/config/app-config.json
` 
{
  "region": "us-east-2",
  "userPool": "pool-id",
  "userPoolBaseUri": "https://domain-name.auth.us-east-2.amazoncognito.com",
  "clientId": "app-client-id",
  "callbackUri": "http://localhost:3000/callback",
  "signoutUri": "http://localhost:3000",
  "tokenScopes": [
      "openid",
      "email",
      "profile"               
  ],
  "apiUri": "http://localhost:3000"
} `

* Modify config/initializers/congnito.rb
`
CognitoUrls.init('domain-name','us-east-2')
CognitoJwtKeysProvider.init('pool-id')
`
