'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.isURL = void 0;
/**
 * Use this function to check if it's a URL.
 *
 * @param {string} [link] Url to be verified.
 * @returns {boolean}
 *
 * @example
 * ```js
 * import { isURL } from 'bucky.js';
 *
 * let url = 'https://www.npmjs.com/package/bucky.js';
 * console.log(isURL(url)); // Returns a Boolean value.
 * ```
 */
function isURL(link) {
    let result;
    if (typeof link !== 'string')
        return false;
    try {
        result = new URL(link);
    }
    catch (_) {
        return false;
    }
    return ['http:', 'https:'].includes(result.protocol);
}
exports.isURL = isURL;
