'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ms = void 0;
const node_util_1 = require("node:util");
/**
 * Use this function to format milliseconds.
 *
 * @example
 * ```js
 * import { ms } from 'bucky.js';
 *
 * // Unformatted:
 * console.log(ms(153635));
 *
 * // Formatted:
 * console.log(ms(153635, 'en-us'));
 * ```
 */
function ms(time, formatted) {
    if ((0, node_util_1.isDate)(time))
        time = time === null || time === void 0 ? void 0 : time.getTime();
    if (!time)
        throw new TypeError(`You have not set a valid time in milliseconds, received: ${typeof time}`);
    if (isNaN(time))
        throw new TypeError(`Time must be of type String, received: ${typeof time}`);
    let parse = time > 0 ? Math.floor : Math.ceil, year = ~~(parse(time / 315576e6)), month = ~~((parse(time / 2592e6) % 12)), day = ~~((parse(time / 864e5) % 30)), hour = ~~((parse(time / 36e5) % 24)), minute = ~~((parse(time / 6e4) % 60)), second = ~~((parse(time / 1e3) % 60)), milliSecond = ~~((parse(time) % 1e3)), microSecond = ~~((parse(time * 1e3) % 1e3)), nanoSecond = ~~((parse(time * 1e6) % 1e3));
    if (formatted) {
        formatted = formatted.toLowerCase();
        if (!formatted)
            formatted = 'en-us';
        if (!['pt-br', 'en-us'].includes(formatted))
            throw new TypeError('Choose a valid language: pt-br or en-us!');
        let langs = {
            'pt-br': [
                [' anos', ' ano'],
                [' meses', ' mês'],
                [' dias', ' dia'],
                [' horas', ' hora'],
                [' minutos', ' minuto'],
                [' segundos', ' segundo']
            ],
            'en-us': [
                [' years', ' year'],
                [' months', ' month'],
                [' days', ' day'],
                [' hours', ' hour'],
                [' minutes', ' minute'],
                [' seconds', ' second']
            ]
        }, result = [
            (year ? year + (year > 1 ? langs[formatted][0][0] : langs[formatted][0][1]) : null),
            (month ? month + (month > 1 ? langs[formatted][1][0] : langs[formatted][1][1]) : null),
            (day ? day + (day > 1 ? langs[formatted][2][0] : langs[formatted][2][1]) : null),
            (hour ? hour + (hour > 1 ? langs[formatted][3][0] : langs[formatted][3][1]) : null),
            (minute ? minute + (minute > 1 ? langs[formatted][4][0] : langs[formatted][4][1]) : null),
            (second ? second + (second > 1 ? langs[formatted][5][0] : langs[formatted][5][1]) : null)
        ].filter(Boolean).join(', ');
        return result.length > 0 ? result : '0' + langs[formatted][5][1];
    }
    let abbreviated = [
        (year ? `${year}y` : null), (month ? `${month}ms` : null),
        (day ? `${day}d` : null), (hour ? `${hour}h` : null),
        (minute ? `${minute}m` : null), (second ? `${second}s` : null)
    ].filter(Boolean).join(', ');
    abbreviated = abbreviated.length > 0 ? abbreviated : '0s';
    return {
        year, month, day,
        hour, minute, second,
        milliSecond, microSecond,
        nanoSecond, abbreviated
    };
}
exports.ms = ms;
