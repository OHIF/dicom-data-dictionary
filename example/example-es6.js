//
// This is an example of using the ES6 version of DICOM data dictionary from 6to5-node
// to run this example:
//  npm run example-es6
//

// By default 6to5 ignores code in node_modules, we disable this so it can find it
// when the library is installed via npm
require("6to5/register")({
    ignore: false
});

// load the library from the ES6 directory 'lib'
import * as dicomDataDictionary from '../lib';
// load the library from the node_modules directory if installed via npm install dicom-data-dictionary
//import * as dicomDataDictionary from 'node_modules/dicom-data-dictionary/lib';

// create a data element dictionary
var dictionary = new dicomDataDictionary.DataElementDictionary();

// lookup an element by tag
var element = dictionary.lookup('00000000');

// print out the name and VR
console.log('Name = ' + element.name);
console.log('VR  = ' + element.vr);

// iterate over all elements in the dictionary looking for names that begin with "Command"
for(let it of dictionary) {
    if(it[1].name.indexOf('Command') === 0) {
        console.log(it[1].name);
    }
}
