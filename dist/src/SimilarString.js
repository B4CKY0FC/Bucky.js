'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarString = void 0;
const CompareStrings_1 = require("./CompareStrings");
/**
 * Use this function to find a string similar to another.
 *
 * @param {string} [target] Keyword.
 * @param {string[]} [stringsArray] Word array for similar.
 * @returns {Result}
 *
 * @example
 * ```js
 * import { similarString } from 'bucky.js';
 *
 * let name = 'bucky',
 *   listNames = ['isBucky', '7Silva', '7ohn'],
 *   search = similarString(name, listNames);
 *
 * console.log(search);
 * ```
 */
function similarString(target, stringsArray) {
    if (typeof target !== 'string' || !target.length)
        throw new TypeError(`The first parameter has to be of type string, received: ${typeof target}`);
    if (!Array.isArray(stringsArray))
        throw new TypeError(`The second parameter has to be an Array of strings, received: ${typeof stringsArray}`);
    stringsArray = stringsArray.filter(i => typeof i == 'string' && i.length);
    if (!stringsArray.length)
        return { ratings: [], result: null };
    let ratings = [], bestRatingIndex = 0;
    for (let index in stringsArray) {
        let targetIndex = stringsArray[index], rating = (0, CompareStrings_1.compareStrings)(target, targetIndex);
        ratings.push({ target: targetIndex, rating, index: Number(index) });
        if (rating > ratings[bestRatingIndex].rating)
            bestRatingIndex = Number(index);
    }
    return !ratings[bestRatingIndex].rating
        ? { ratings: ratings.splice(0), result: null }
        : { ratings, result: ratings[bestRatingIndex] };
}
exports.similarString = similarString;
