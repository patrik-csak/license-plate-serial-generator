"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_serial_1 = __importDefault(require("./test-serial"));
function testSerialFormat(serial, pattern) {
    const patterns = Array.isArray(pattern) ? pattern : [pattern];
    test_serial_1.default('Should match serial format', serial, serial => {
        const matches = patterns.some(regex => regex.test(serial));
        expect(matches).toBe(true);
    });
}
exports.default = testSerialFormat;
