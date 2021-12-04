This is a Javascript client library for generating emails and getting email box messages based on using [1secmail](https://www.1secmail.com/api/) API.
### Installation
use npm:

``npm install secmail``
### Usage
```javascript
const secmail = require("secmail")

email = secmail.GerarEmail(1)

console.log(await email)
```
If you set the count to more than 1 it will return a list of emails
