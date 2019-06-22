"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function testSerial(name, serial, callback) {
    test(`${name} (serial: '${serial}')`, () => callback(serial));
}
exports.default = testSerial;
