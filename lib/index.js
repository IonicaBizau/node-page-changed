// Dependencies
var Ul = require("ul")
  , Request = null
  ;

/**
 * PageChanged
 * Creates a new instance of `PageChanged`.
 *
 * @name exports
 * @function
 * @param {String|Object} options A string being the page url or an object containing the following fields:
 *
 *  - `interval` (Number): How many miliseconds between requests (default: `5000`).
 *  - `request` (Function): The request function (default: a function using the `request` module).
 *  - `ignoreError` (Boolean): A flag representing if the request errors should be ignored or not (default: `true`).
 *
 * @param {Function} callback The callback function.
 * @return {PageChanged} The `PageChanged` instance.
 */
var PageChanged = module.exports = function (options, callback) {

    if (this.constructor !== PageChanged) {
        return new PageChanged(options, callback);
    }

    if (typeof options === "string") {
        options = {
            page: options
        };
    }

    // Process arguments
    Ul.merge(options, {
        interval: 5 * 1000
      , request: function (cb) {
            Request = Request || require("request");
            Request(this.page, function (err, res, body) {
                cb(err, body);
            });
        }
      , ignoreError: true
    });

    if (!options.page) {
        throw new Error("The page field is missing.");
    }

    callback = callback || options.callback || null;

    this.callbacks = [];
    this.request = options.request.bind(this);

    if (typeof callback === "function") {
        this.callback(callback);
    }

    this.oldBody = null;
    this.page = options.page;
    this.check();
    this.interval = setInterval(this.check.bind(this), options.interval);
};

/**
 * check
 * Calls the request function and checks if the body was changed.
 *
 * @name check
 * @function
 * @return {PageChanged} The `PageChanged` instance.
 */
PageChanged.prototype.check = function () {
    this.request(function (err, body) {
        if (err && !this.ignoreError) { return this.trigger(err); }
        if (this.oldBody === body) { return; }
        this.trigger(null, this.oldBody = body);
    }.bind(this));
    return this;
}

/**
 * callback
 * Adds new callbacks to the callback buffer.
 *
 * @name callback
 * @function
 * @param {Function} callback The callback function.
 * @return {PageChanged} The `PageChanged` instance.
 */
PageChanged.prototype.callback = function (callback) {
    this.callbacks.push(callback);
    return this;
};

/**
 * trigger
 *
 * @name trigger
 * @function
 * @param {Error} err The error object.
 * @param {String} data The response body.
 * @return {PageChanged} The `PageChanged` instance.
 */
PageChanged.prototype.trigger = function (err, data) {
    this.callbacks.forEach(function (c) {
        c.call(this, err, data);
    }.bind(this));
    return this;
};
