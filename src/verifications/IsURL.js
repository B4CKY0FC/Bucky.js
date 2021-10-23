'use strict';

module.exports = function isURL(link) {
  if (!link) return false;
  let res;
  try {
    res = new URL(link);
  } catch (_) {
    return false;
  }
  return (res.protocol == 'http:' || res.protocol == 'https:');
}