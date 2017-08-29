'use strict'

var hasExports = typeof module !== 'undefined' && module.exports;
console.log('module.type=', typeof module);
console.log('module.exports=', module.exports);
console.log('module has exports ?:',hasExports);


console.log('define=', typeof define);

console.log('module.paths=',module.paths);
console.log('module.id=',module.id);
var je = '.js';
console.log(require.extensions[je]);


