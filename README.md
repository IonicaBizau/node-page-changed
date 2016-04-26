
# page-changed [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/page-changed.svg)](https://www.npmjs.com/package/page-changed) [![Downloads](https://img.shields.io/npm/dt/page-changed.svg)](https://www.npmjs.com/package/page-changed) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Call a function when the page body is changed.

## :cloud: Installation

```sh
$ npm i --save page-changed
```


## :clipboard: Example



```js
// Dependencies
var Http = require("http")
  , PageChanged = require("page-changed")
  ;

// Constants
const PORT = 8000;

// Create a http server
Http.createServer(function (req, res) {
    res.end(Math.floor(new Date().getTime() / 1000).toString());
}).listen(PORT);

// Detect changes
var pc = new PageChanged({
    page: "http://localhost:" + PORT
  , interval: 1000
}, function (err, html) {
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

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
