# page-changed [![Support this project][donate-now]][paypal-donations]

Call a function when the page body is changed.

## Installation

```sh
$ npm i page-changed
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md