"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFirstMatchingPattern(string, pattern) {
    const match = string.match(pattern);
    return match ? match[0] : '';
}
exports.default = getFirstMatchingPattern;
