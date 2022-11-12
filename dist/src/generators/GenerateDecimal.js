'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDecimal = void 0;
const GenerateRGB_1 = require("./GenerateRGB");
/**
 * A function that will generate random decimals.
 * @returns {number}
 *
 * @example
 * ```js
 * import { generateDecimal } from 'bucky.js';
 *
 * console.log(generateDecimal()); // It will generate a randomized decimal.
 * ```
 */
function generateDecimal() {
    let [R, G, B] = (0, GenerateRGB_1.generateRGB)();
    return ((R << 16) + (G << 8) + B);
}
exports.generateDecimal = generateDecimal;
