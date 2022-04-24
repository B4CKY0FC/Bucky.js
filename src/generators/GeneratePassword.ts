'use strict';

/**
 * This function will generate a password with the number of characters you define in the parameters.
 * 
 * @param {number} [count=20] Set the number of characters to create.
 * @returns {string}
 * 
 * @example
 * ```js
 * import { generatePassword } from 'bucky.js';
 * 
 * let password = generatePassword(15); // 15 characters
 * console.log(password);
 * ```
 */
function generatePassword(count: number = 20): string {
  if (isNaN(count)) throw new TypeError('Password length numbers can only be in numbers!');
  
  let password = '';
  while (password.length < count)
    password += Math.random().toString(36).substr(2);
    
  return password.substr(0, count);
}

export { generatePassword };