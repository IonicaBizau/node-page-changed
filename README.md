
# page-changed

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/page-changed.svg)](https://www.npmjs.com/package/page-changed) [![Downloads](https://img.shields.io/npm/dt/page-changed.svg)](https://www.npmjs.com/package/page-changed)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`gh-notifier`](https://bitbucket.org/IonicaBizau/gh-notifier#readme)—Receive desktop notifications from your GitHub dashboard.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
