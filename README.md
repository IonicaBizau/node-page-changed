
# page-changed

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][paypal-donations] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/page-changed.svg)](https://www.npmjs.com/package/page-changed) [![Downloads](https://img.shields.io/npm/dt/page-changed.svg)](https://www.npmjs.com/package/page-changed) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Call a function when the page body is changed.

## :cloud: Installation

```sh
$ npm i --save page-changed
```


## :clipboard: Example



```js
const http = require("http")
    , PageChanged = require("page-changed")
    ;

// Constants
const PORT = 8000;

// Create a http server
http.createServer((req, res) => {
    res.end(Math.floor(new Date().getTime() / 1000).toString());
}).listen(PORT);

// Detect changes
let pc = new PageChanged({
    page: "http://localhost:" + PORT
  , interval: 1000
}, (err, html) => {
    console.log(html);
});
```

## :memo: Documentation


### `PageChanged(options, callback)`
Creates a new instance of `PageChanged`.

#### Params
- **String|Object** `options`: A string being the page url or an object containing the following fields:
 - `interval` (Number): How many miliseconds between requests (default: `5000`).
 - `request` (Function): The request function (default: a function using the `request` module).
 - `ignoreError` (Boolean): A flag representing if the request errors should be ignored or not (default: `true`).
- **Function** `callback`: The callback function.

#### Return
- **PageChanged** The `PageChanged` instance.

### `check()`
Calls the request function and checks if the body was changed.

#### Return
- **PageChanged** The `PageChanged` instance.

### `callback(callback)`
Adds new callbacks to the callback buffer.

#### Params
- **Function** `callback`: The callback function.

#### Return
- **PageChanged** The `PageChanged` instance.

### `trigger(err, data)`

#### Params
- **Error** `err`: The error object.
- **String** `data`: The response body.

#### Return
- **PageChanged** The `PageChanged` instance.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
