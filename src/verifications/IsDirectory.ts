'use strict';

import path from 'node:path';
import { lstatSync } from 'node:fs';

/**
 * Use to check if a directory exists.
 * 
 * @example
 * ```js
 * import { isDirectory } from 'bucky.js';
 * 
 * console.log(isDirectory('/path/to/directory/'));
 * ```
 */
function isDirectory(dir: string): boolean {
  try {
    let data = lstatSync(path.resolve(dir));
    return !!data?.isDirectory();
  } catch (_) { return false; }
}

export { isDirectory };