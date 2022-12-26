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
export declare function similarString(target: string, stringsArray: string[]): ResultSimilarString;
export interface ResultSimilarString {
    ratings: object[];
    result: {
        target: string;
        rating: number;
        index: number;
    } | null;
}
