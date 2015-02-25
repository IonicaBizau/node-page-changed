# page-changed
Call a function when the HTML from a page is changed.

## Installation
Run the following commands to download and install the application:

```sh
$  clone  page-changed
$ cd page-changed
$ npm install
```

## Documentation
## `exports(options, callback)`
PageChanged
Creates a new instance of `PageChanged`.

### Params 
- **String|Object** `options`: A string being the page url or an object containing the following fields: 
 - `interval` (Number): How many miliseconds between requests (default: `5000`).
 - `request` (Function): The request function (default: a function using the `request` module).
 - `ignoreError` (Boolean): A flag representing if the request errors should be ignored or not (default: `true`).

- **Function** `callback`: The callback function.

### Return
- **PageChanged** The `PageChanged` instance.

## `check()`
Calls the request function and checks if the body was changed.

### Return
- **PageChanged** The `PageChanged` instance.

## `callback(callback)`
Adds new callbacks to the callback buffer.

### Params 
- **Function** `callback`: The callback function.

### Return
- **PageChanged** The `PageChanged` instance.

## `trigger(err, data)`

### Params 
- **Error** `err`: The error object.
- **String** `data`: The response body.

### Return
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
