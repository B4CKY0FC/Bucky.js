<div align="center">
  <h1>Bucky.js</h1>
  <p>Simple npm that has several functions to use in everyday development.</p>
  <p>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/v/bucky.js?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://img.shields.io/npm/dt/bucky.js?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://www.npmjs.com/package/bucky.js"><img src="https://nodei.co/npm/bucky.js.png?downloads=true&stars=true" alt="NPM Banner"></a>
  </p>
</div>

# Installation:
```sh
npm install bucky.js --save

yarn add bucky.js
```

# Utilities:
| Functions | Params | Description |
| --------- | ------ | ----------- |
| `compareStrings` | `string` `target` |
| `daysAgo` | `date`|
| `formatSizeUnits` | `bytes` |
| `ms` | `ms or date` `lang` |
| `removeAcents` | `string` |
| `removeDupleChars` | `string` |
| `shorten` | `string` `max length` |
| `similarString` | `string` `array strings` |
| `timeFormat` | `date` |

# Verifications:
| Functions | Params | Description |
| --------- | ------ | ----------- |
| `isDate` | `date` |
| `isEmail` | `string` |
| `isHex` | `string` |
| `isURL` | `string` |

# Generators:
| Functions | Params | Description |
| --------- | ------ | ----------- |
| `generateDecimal` |
| `generateHex` |
| `generatePassword` | `amount` |
| `generateRGB` |

# Examples:
## Utilities:
### CompareStrings:
```js
const bucky = require('bucky.js');

let result = bucky.compareStrings('bucky', 'buc');
console.log(result); // Output: 0.6666666666666666
```

### DaysAgo:
```js
const bucky = require('bucky.js');

let date = new Date();
date.setMonth(date.getMonth() - 12);

let daysAgo = bucky.daysAgo(date);
console.log(daysAgo); // Output: 365
````

### FormatSizeUnits:
```js
const bucky = require('bucky.js');

let result = bucky.formatSizeUnits(1000000000);
console.log(result); // Output: 1.00 GB

let result2 = bucky.formatSizeUnits(10000000000000);
console.log(result); // Output: 10.00 TB
```

### Ms:
```js
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
  *  abbreviated: '13m e 20s'
  * }
*/

let ms2 = bucky.ms(800000, 'pt-br'); // Languages: pt-BR and EN
console.log(ms2); // Output: '13 minutos, 20 segundos'

let ms3 = bucky.ms(800000, 'pt-br'); // Languages: pt-BR and EN
console.log(ms3); // Output: '13 minutes, 20 seconds'
```

### RemoveAcents:
```js
const bucky = require('bucky.js');

let
  string = 'ãáäíúò çêéèëô',
  result = bucky.removeAcents();
console.log(result); // aaaiuo ceeeeo
```

### RemoveDupleChars:
```js
const bucky = require('bucky.js');

let
  string = 'bbbbbbbbbuuuuuuuuccccccckkkkkkyyyyy',
  result = bucky.removeDupleChars(string);
console.log(string); // Output: bucky
```

### Shorten:
```js
const bucky = require('bucky.js');

let
  string = 'bla bla bla, install bucky npm',
  result = bucky.shorten(string, 13);
console.log(result); // Output: install bucky npm
```

### SimilarString:
```js
const bucky = require('bucky.js');

let
  arrayStrings = [ 'npm', 'install', 'yarn', 'buc' ],
  string = 'bucky',
  result = bucky.similarString(string, arrayStrings);
console.log(result); /**
  * Output:
  * {
  *   results: [
  *     { target: 'npm', rating: 0 },
  *     { target: 'install', rating: 0 },
  *     { target: 'yarn', rating: 0 },
  *     { target: 'buc', rating: 0.6666666666666666 }
  *   ],
  *   best: { target: 'buc', rating: 0.6666666666666666 },
  *   index: 3
  * }
*/
```

### TimeFormat:
```js
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
```

## Verifications:
### IsDate:
```js
const bucky = require('bucky.js');

let
  date1 = '124',
  date2 = '2021-10-23T18:19:40.997Z';
  
console.log(bucky.isDate(date1)); // Output: false
console.log(bucky.isDate(date2)); // Output: true
```

### IsEmail:
```js
const bucky = require('bucky.js');

let
  email1 = '134',
  email2 = 'bucky.npm@gmail.com';
  
console.log(bucky.isEmail(email1)); // Output: false
console.log(bucky.isEmail(email2)); // Output: true
```

### IsHex:
```js
const bucky = require('bucky.js');

let
  hex1 = '#123',
  hex2 = '#87CEFA';
  
console.log(bucky.isHex(hex1)); // Output: false
console.log(bucky.isHex(hex2)); // Output: true
```

### IsURL:
```js
const bucky = require('bucky.js');

let
  url1 = '7363.com',
  url2 = 'https://www.npmjs.com/package/bucky.js';
  
console.log(bucky.isHex(hex1)); // Output: false
console.log(bucky.isHex(hex2)); // Output: true
```

## Generators:
### GenerateDecimal:
```js
const bucky = require('bucky.js');

let result = bucky.generateDecimal();
console.log(result); // Output: 9939304
```

### GenerateHex:
```js
const bucky = require('bucky.js');

let result = bucky.generateHex();
console.log(result); // Output: #97a968
```

### GeneratePassword:
```js
const bucky = require('bucky.js');

let result = bucky.generatePassword();
console.log(result); // Output: h199ix3bjq0djyx238by
```

### GenerateRGB:
```js
const bucky = require('bucky.js');

let result = bucky.generateRGB();
console.log(result); // Output: [ 151, 169, 104 ]
```