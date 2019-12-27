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

Inspired from 
              <ul>
                <li><a href="https://medium.com/@arron.harden/aws-cognito-example-using-react-ui-and-node-js-rest-apis-part-1-cognito-setup-5597acb02db4">AWS Cognito example using React UI and Node.js REST APIs — part 1 (Cognito setup)</a></li>
                <li><a href="https://medium.com/@arron.harden/aws-cognito-example-using-react-ui-and-node-js-rest-apis-part-2-react-ui-app-with-redux-6cc22610affe">AWS Cognito example using React UI and Node.js REST APIs — part 2 (React UI app with Redux)</a></li>
                <li><a href="https://medium.com/@arron.harden/aws-cognito-example-using-react-ui-and-node-js-rest-apis-part-3-jwt-secured-rest-apis-e56d336ce306">AWS Cognito example using React UI and Node.js REST APIs — part 3 (JWT secured REST APIs)</a></li>
              </ul>
