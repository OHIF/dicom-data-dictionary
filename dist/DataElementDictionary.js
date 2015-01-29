"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

/* (c) 2015 Chris Hafey */

var standardDataElements = _interopRequire(require("./standardDataElements"));

var DataElementDictionary = (function () {
    function DataElementDictionary() {}

    _prototypeProperties(DataElementDictionary, null, (function () {
        var _prototypeProperties2 = {
            lookup: {

                // lookup element by tag
                value: function lookup(tag) {
                    return standardDataElements[tag];
                },
                writable: true,
                enumerable: true,
                configurable: true
            }
        };

        _prototypeProperties2[Symbol.iterator] = {
            // iterator for the entries in the data dictionary
            value: function () {
                return regeneratorRuntime.mark(function callee$3$0() {
                    var _iterator, _step, key;
                    return regeneratorRuntime.wrap(function callee$3$0$(context$4$0) {
                        while (1) switch (context$4$0.prev = context$4$0.next) {
                            case 0:
                                _iterator = Object.keys(standardDataElements)[Symbol.iterator]();
                            case 1:
                                if ((_step = _iterator.next()).done) {
                                    context$4$0.next = 7;
                                    break;
                                }
                                key = _step.value;
                                context$4$0.next = 5;
                                return [key, standardDataElements[key]];
                            case 5:
                                context$4$0.next = 1;
                                break;
                            case 7:
                            case "end":
                                return context$4$0.stop();
                        }
                    }, callee$3$0, this);
                })();
            },
            writable: true,
            enumerable: true,
            configurable: true
        };
        return _prototypeProperties2;
    })());

    return DataElementDictionary;
})();

module.exports = DataElementDictionary;