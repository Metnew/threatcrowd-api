# ThreatCrowd API

API layer for [threatcrowd.com](https://threatcrowd.com).

> `got` for requests, `async/await` support required.

## Install

```
npm i threatcrowd-api
```

## Usage

```js
const {
	getDomain,
	getFile,
	getEmail,
	getAntivirus,
	getIP
} = require("threatcrowd-api");
// ...
const result = await getDomain("google.com");
// and so on.
```

### Author

Vladimir Metnew <vladimirmetnew@gmail.com>

### License

MIT
