# Page Changed
Call a function when the page body is changed.

## Installation

```sh
$ npm install page-changed
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
