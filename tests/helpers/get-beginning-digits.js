"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_first_matching_pattern_1 = __importDefault(require("./get-first-matching-pattern"));
function getBeginningDigits(string) {
    return get_first_matching_pattern_1.default(string, /^\d+/);
}
exports.default = getBeginningDigits;
