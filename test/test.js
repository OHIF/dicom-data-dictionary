// NOTE: This file includes tests written in ES5 and ES6

var assert = require("assert");
var es6Module = require("../");

describe('Module' , function() {
    it('should not be undefined', function() {
        assert.notEqual(undefined, es6Module);
    });
    it('constructor not undefined', function() {
        var dataDictionary = new es6Module.DataElementDictionary();
        assert.notEqual(undefined, dataDictionary)
    });
    it('lookup not undefined', function() {
        var dataDictionary = new es6Module.DataElementDictionary();
        var element = dataDictionary.lookup('00000000');
        assert.notEqual(undefined, element)
    });
    it('iterator not undefined', function() {
        var dataDictionary = new es6Module.DataElementDictionary();
        var it = dataDictionary[Symbol.iterator];
        assert.notEqual(undefined, it)
    });
    it('iterator returns more than 0 values', function() {
        var dataDictionary = new es6Module.DataElementDictionary();
        var it = dataDictionary[Symbol.iterator];
        var count=0;
        for (var _iterator = it(), _step; !(_step = _iterator.next()).done;) {
            count++;
            break;
        }
        assert.notEqual(0, count)
    });
    it('standarDataElements is not undefined', function() {
        var dataDictionary = es6Module.standardDataElements;
        assert.notEqual(undefined, dataDictionary)
    });
    it('es6 iterator returns more than 0 values', function() {
        var dataDictionary = new es6Module.DataElementDictionary();
        var count=0;
        for(let it of dataDictionary) {
            count++;
            break;
        }
        assert.notEqual(0, count)
    });
});

