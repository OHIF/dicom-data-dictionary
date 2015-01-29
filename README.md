# dicom-data-dictionary
DICOM Data Dictionary JavaScript Library

About
=====

The purpose of this library is to provide DICOM data dictionary functionality.  Currently it just provides
a set of standard tags from an unknown version of the DICOM standard.  See backlog for some ideas of things
to add in the future - pull requests are welcome!

Usage
=====

This library is written using JavaScript ES6 and distributed as both ES6 code and ES5 code
via NPM.  The ES5 code is generated using [6to5](http://6to5.org/) so you must use the
polyfills as described [here](https://6to5.org/docs/usage/polyfill/).  Use in a pure ES6
environment does not require any polyfills (see example/example-es6.js).  You should be able
to use this library from a web browser using [browserify](http://browserify.org/) or
[jspm](http://jspm.io/).

Install from NPM

> npm install dicom-data-dictionary

Example of using from ES5 environment using Node.JS

> npm run example

Example of using from ES6 environment using 6to5-node

> npm run example-es6

Note - this module can take several seconds to load because it contains the entire data dictionary.  It is recommended
to load this module asynchronously voa Syste.import() to avoid any startup related time penalties
(especially if the module isn't needed right away).

Building
========

Pre-requisites
--------------

NodeJs - [click to visit web site for installation instructions](http://nodejs.org).

> npm install

Common Tasks
------------

Build

> npm run build

Automatically run lint, test and build on any file change (when developing)

> npm run watch

Bump the patch version number

> npm version patch

Bump the minor version number

> npm version minor

Bump the major version number

> npm version major

Publish new version

> npm run publish

Backlog
=======

* Create tool to generate standardDataElements.js from actual standard xml file
* Add UID dictionary
* Add support for private tags

Copyright
============
Copyright 2015 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)