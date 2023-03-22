#!/usr/bin/env node

import process from 'node:process';
import * as serialGenerator from '../dist/index.js';

const state = process.argv[2];

console.log(`${state} : ${serialGenerator[state]()}`);
