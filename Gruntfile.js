#!/usr/bin/env node


/*!
 * d3-Olympics®
 * ____________________________________________________________________
 * Grunt, http://gruntjs.com/
 * The JavaScript Task Runner.
 * ____________________________________________________________________
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * ____________________________________________________________________
 * @date      : 10-Oct-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : Compass
 * ____________________________________________________________________
 *
 * --/The Heart of Build + Test System/-- of "d3-Olympics®".
 * ____________________________________________________________________
 */

// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

"use strict";

// load required NPM modules.
var chalk = require('chalk');
// load required Node module.
var fs    = require('fs');
var path  = require('path');

// Default color defined.
var noop  = chalk.red;
var yeep  = chalk.green;
var okay  = chalk.blue;

// Global variables
// ~~~~~~~~~~~~~~~~
