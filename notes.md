Q1) What is jwt and how does it work?
-> Hash

Q2) Authorization:
The HTTP Authorization request header is a standard mechanism used to provide credentials that authenticate a user agent with a server, granting access to protected resources.  Its syntax follows the pattern Authorization: <auth-scheme> <authorization-parameters>, where the scheme defines the method of encoding and the parameters contain the actual credentials.

Common authentication schemes include:

Basic Authentication: Uses the scheme Basic followed by a Base64-encoded string of username:password.  Example: Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l. This method sends credentials in cleartext (encoded, not encrypted) and should only be used over HTTPS.
Bearer Token: Uses the scheme Bearer followed by an opaque token, such as a JWT or OAuth 2.0 access token.  Example: Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.... This is widely used in modern APIs and reduces the blast radius of credential leakage compared to passwords.
Digest Authentication: Uses the scheme Digest with parameters like username, realm, nonce, and a hashed response to authenticate without sending the actual password. 
API Key: Some APIs use a custom scheme or header to pass a confidential API key for client identification.