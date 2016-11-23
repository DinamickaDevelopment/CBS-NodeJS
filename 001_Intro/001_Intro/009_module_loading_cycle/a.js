console.log('a starting');
const b = require('./b.js');
exports.done = false;


console.log('in a, b.done = %s', b.loaded);

exports.done = true;
console.log('a done');