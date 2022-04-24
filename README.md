<div align="center">
  <h1>Bucky.js</h1>
  <p>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/v/bucky.js?style=flat-square&maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/dt/bucky.js?style=flat-square&maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/github/languages/code-size/isBucky/Bucky.js?style=flat-square&maxAge=3600" alt="NPM size" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/l/bucky.js?style=flat-square&maxAge=3600" alt="NPM license" /></a>
  </p>
  <p><a href="https://www.npmjs.com/package/bucky.js"><img src="https://nodei.co/npm/bucky.js.png?downloads=true&stars=true" alt="NPM Banner"></a></p>
  <p><strong>Simple npm that has several functions to use in everyday development.</strong></p>
</div>

# Installation:
~~~sh
npm install bucky.js --save
# or
yarn add bucky.js
~~~

# Utilities:
| Functions | Params |
| --------- | ------ |
| `compareStrings` | `string` `target` |
| `daysAgo` | `date`|
| `formatSizeUnits` | `bytes` |
| `ms` | `ms or date` `lang` |
| `pagination` | `array pages` |
| `removeAcents` | `string` |
| `removeArrayDuplicates` | `array` |
| `removeDupleChars` | `string` |
| `shorten` | `string` `max length` |
| `similarString` | `string` `array strings` |
| `timeFormat` | `date` |
| `sleep` | `ms` |
| `findArrayDuplicates` | `array` |
| `capitalizeFirstLetter` | `string` |

# Verifications:
| Functions | Params |
| --------- | ------ |
| `isEmail` | `string` |
| `isHex` | `string` |
| `isURL` | `string` |
| `isDirectory` | `path` |
| `isEmptyDirectory` | `path` |
| `isFile` | `path` |
| `isEmptyFile` | `path` |

# Generators:
| Functions | Params |
| --------- | ------ |
| `generateDecimal` |
| `generateHex` |
| `generatePassword` | `amount` |
| `generateRGB` |

# Examples:
## Utilities:
### CompareStrings:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.compareStrings('bucky', 'buc');
console.log(result); // Output: 0.6666666666666666
~~~

### DaysAgo:
~~~javascript
const bucky = require('bucky.js');

let date = new Date();
date.setMonth(date.getMonth() - 12);

let daysAgo = bucky.daysAgo(date);
console.log(daysAgo); // Output: 365
~~~

### FormatSizeUnits:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.formatSizeUnits(1000000000);
console.log(result); // Output: 1.00 GB

let result2 = bucky.formatSizeUnits(10000000000000);
console.log(result2); // Output: 10.00 TB
~~~

### Ms:
~~~javascript
const bucky = require('bucky.js');

let ms = bucky.ms(800000);
console.log(ms); /**
  * Output:
  * {
  *  year: 0,
  *  month: 0,
  *  day: 0,
  *  hour: 0,
  *  minute: 13,
  *  second: 20,
  *  milliSecond: 0,
  *  microSecond: 0,
  *  nanoSecond: 0,
  *  abbreviated: '13m, 20s'
  * }
*/

let ms2 = bucky.ms(800000, 'pt-br'); // Languages: pt-BR and EN
console.log(ms2); // Output: '13 minutos, 20 segundos'

let ms3 = bucky.ms(800000, 'en'); // Languages: pt-BR and EN
console.log(ms3); // Output: '13 minutes, 20 seconds'
~~~

### Pagination:
~~~javascript
const { Pagination } = require('bucky.js');

let
  pages = ['bucky', 'npm'],
  pagination = new Pagination(pages);
  
let data1 = pagination.next();
console.log(data1, pagination.page); // 'npm', 'npm'

let data2 = pagination.back();
console.log(data2, pagination.page); // 'bucky', 'bucky'
~~~

### RemoveAcents:
~~~javascript
const bucky = require('bucky.js');

let
  string = 'ãáäíúò çêéèëô',
  result = bucky.removeAcents(string);
console.log(result); // aaaiuo ceeeeo
~~~

### RemoveArrayDuplicates:
~~~javascript
const bucky = require('bucky.js');

let
  array = Array(10).fill('bucky') // ['bucky', 'bucky', 'bucky', ...],
  data = bucky.removeArrayDuplicates(array);
  
console.log(data); // ['bucky'];
~~~

### RemoveDupleChars:
~~~javascript
const bucky = require('bucky.js');

let
  string = 'bbbbbbbbbuuuuuuuuccccccckkkkkkyyyyy',
  result = bucky.removeDupleChars(string);
console.log(result); // Output: bucky
~~~

### Shorten:
~~~javascript
const bucky = require('bucky.js');

let
  string = 'install bucky npm, bla bla bla',
  result = bucky.shorten(string, 17);
console.log(result); // Output: install bucky npm...
~~~

### SimilarString:
~~~javascript
const bucky = require('bucky.js');

let
  arrayStrings = [ 'npm', 'install', 'yarn', 'buc' ],
  string = 'bucky',
  result = bucky.similarString(string, arrayStrings);
console.log(result); /**
  * Output:
  * {
  *   results: [
  *     { target: 'npm', rating: 0.3333333333333333 },
  *     { target: 'install', rating: 0.2 },
  *     { target: 'yarn', rating: 0.2857142857142857 },
  *     { target: 'buc', rating: 0.6666666666666666 }
  *   ],
  *   best: { target: 'buc', rating: 0.6666666666666666 },
  *   index: 3
  * }
*/
~~~

### TimeFormat:
~~~javascript
const bucky = require('bucky.js');

let
  date = new Date(),
  result = bucky.timeFormat(date);
console.log(result); /*
  * Output:
  * {
  *   year: 2021,
  *   month: 10,
  *   day: 23,
  *   hours: 15,
  *   minutes: 14,
  *   seconds: 45,
  *   parseMs: 1635002085785
  * }
*/
~~~

### Sleep:
~~~javascript
const bucky = require('bucky.js');

(async() => {
  console.log('Start');
  await bucky.sleep(5000);
  console.log('Final');
})();
~~~

### FindArrayDuplicates:
~~~javascript
const bucky = require('bucky.js');

let array = [
  'bucky.js',
  'best',
  'npm',
  'best'
];

console.log(bucky.FormatSizeUnits(array)); // Output: ['best']
~~~

### CapitalizeFirstLetter:
~~~javascript
const bucky = require('bucky.js');

let string = 'bucky.js best npm!';
console.log(bucky.capitalizeFirstLetter(string)); // Output: Bucky.js best npm!
~~~

## Verifications:
### IsDate:
~~~javascript
const bucky = require('bucky.js');

let
  date1 = '124',
  date2 = new Date();
  
console.log(bucky.isDate(date1)); // Output: false
console.log(bucky.isDate(date2)); // Output: true
~~~

### IsEmail:
~~~javascript
const bucky = require('bucky.js');

let
  email1 = '134',
  email2 = 'bucky.npm@gmail.com';
  
console.log(bucky.isEmail(email1)); // Output: false
console.log(bucky.isEmail(email2)); // Output: true
~~~

### IsHex:
~~~javascript
const bucky = require('bucky.js');

let
  hex1 = '123',
  hex2 = '#87CEFA';
  
console.log(bucky.isHex(hex1)); // Output: false
console.log(bucky.isHex(hex2)); // Output: true
~~~

### IsURL:
~~~javascript
const bucky = require('bucky.js');

let
  url1 = '7363.com',
  url2 = 'https://www.npmjs.com/package/bucky.js';
  
console.log(bucky.isURL(url1)); // Output: false
console.log(bucky.isURL(url2)); // Output: true
~~~

### IsDirectory:
~~~javascript
const bucky = require('bucky.js');

console.log(bucky.isDirectory('./')); // Output: true
~~~

### IsEmptyDirectory:
~~~javascript
const bucky = require('bucky.js');

console.log(bucky.isEmptyDirectory('./')); // Output: false
~~~

### IsFile:
~~~javascript
const bucky = require('bucky.js');

console.log(bucky.isFile('./index.js')); // Output: true
~~~

### IsEmptyFile:
~~~javascript
const bucky = require('bucky.js');

console.log(bucky.isEmptyFile('./index.js')); // Output: false
~~~

## Generators:
### GenerateDecimal:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.generateDecimal();
console.log(result); // Output: 9939304
~~~

### GenerateHex:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.generateHex();
console.log(result); // Output: #97a968
~~~

### GeneratePassword:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.generatePassword();
console.log(result); // Output: h199ix3bjq0djyx238by
~~~

### GenerateRGB:
~~~javascript
const bucky = require('bucky.js');

let result = bucky.generateRGB();
console.log(result); // Output: [ 151, 169, 104 ]
~~~