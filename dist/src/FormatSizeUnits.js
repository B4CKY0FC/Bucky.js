'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSizeUnits = void 0;
/**
 * Use this function to format the byte size.
 *
 * @param {number} [bytes] Byte numbers.
 * @returns {string}
 *
 * @exmaple
 * ```js
 * import { formatSizeUnits } from 'bucky.js';
 *
 * console.log(formatSizeUnits(15393763));
 * ```
 */
function formatSizeUnits(bytes) {
    if (isNaN(bytes))
        throw new TypeError(`You have not defined a value in bytes of type String, received: ${typeof bytes}`);
    if (bytes >= 1e25)
        return `${(bytes / 1e25).toFixed(2)} YB`;
    if (bytes >= 1e21)
        return `${(bytes / 1e21).toFixed(2)} ZB`;
    if (bytes >= 1e18)
        return `${(bytes / 1e18).toFixed(2)} EB`;
    if (bytes >= 1e15)
        return `${(bytes / 1e15).toFixed(2)} PB`;
    if (bytes >= 1e12)
        return `${(bytes / 1e12).toFixed(2)} TB`;
    if (bytes >= 1e9)
        return `${(bytes / 1e9).toFixed(2)} GB`;
    if (bytes >= 1e6)
        return `${(bytes / 1e6).toFixed(2)} MB`;
    if (bytes >= 1e3)
        return `${(bytes / 1e3).toFixed(2)} KB`;
    if (bytes > 1)
        return `${bytes} bytes`;
    if (bytes == 1)
        return `${bytes} bytes`;
    return '0 bytes';
}
exports.formatSizeUnits = formatSizeUnits;
