"use strict";

const ul = require("ul")
    , typpy = require("typpy")
    ;

let Request = null;

class PageChanged {
    /**
     * PageChanged
     * Creates a new instance of `PageChanged`.
     *
     * @name PageChanged
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
    constructor (options, callback) {

        if (typeof options === "string") {
            options = {
                page: options
            };
        }

        // Process arguments
        options = ul.merge(options, {
            interval: 5 * 1000
          , request: function (cb) {
                Request = Request || require("tinyreq");
                Request(this.page, (err, body) => {
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
        this.request = options.request;

        if (typeof callback === "function") {
            this.callback(callback);
        }

        this.oldBody = null;
        this.page = options.page;
        this.check();
        this.interval = setInterval(this.check.bind(this), options.interval);
    }

    /**
     * check
     * Calls the request function and checks if the body was changed.
     *
     * @name check
     * @function
     * @return {PageChanged} The `PageChanged` instance.
     */
    check () {
        this.request((err, body) => {
            if (err && !this.ignoreError) { return this.trigger(err); }
            if (this.oldBody === body) { return; }
            this.trigger(null, this.oldBody = body);
        });
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
    callback (callback) {
        this.callbacks.push(callback);
        return this;
    }

    /**
     * trigger
     *
     * @name trigger
     * @function
     * @param {Error} err The error object.
     * @param {String} data The response body.
     * @return {PageChanged} The `PageChanged` instance.
     */
    trigger (err, data) {
        this.callbacks.forEach(c => c.call(this, err, data));
        return this;
    }
}

module.exports = PageChanged;
