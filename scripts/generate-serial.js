#!/usr/bin/env node

const lpsg = require('../dist/index.js');

const state = process.argv[2];

console.log(lpsg[state]());
