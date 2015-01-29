//
// This is an example of using the DICOM data dictionary from ES5 Node.js
//

// load the 6to5 polyfill - requires that you install 6to5
require("6to5/register");

// load the library from the local dist folder
var dicomDataDictionary = require('../dist');
// load the library from the node_modules directory if installed via npm install dicom-data-dictionary
//var dicomDataDictionary = require('dicom-data-dictionary');

// create a data element dictionary
var dictionary = new dicomDataDictionary.DataElementDictionary();

// lookup an element by tag
var element = dictionary.lookup('00000000');

// print out the name and VR
console.log('Name = ' + element.name);
console.log('VR  = ' + element.vr);

// iterate over all elements in the dictionary looking for names that begin with "Patient"
var it = dictionary[Symbol.iterator];
for (var _iterator = it(), _step; !(_step = _iterator.next()).done;) {
    if(_step.value[1].name.indexOf('Command') === 0) {
        console.log('!!' + _step.value[1].name);
    }
}
