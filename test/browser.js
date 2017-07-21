if (!global.console) {
  global.console = {};
}
if (!global.console.log) {
  global.console.log = function () {};
}
if (!global.console.error) {
  global.console.error = global.console.log;
}
if (!global.console.info) {
  global.console.info = global.console.log;
}

var test = require('tape');
var foo = require('../src/foo.js').foo;

test('dummy', function (t) {
  t.equal('foo', foo);
  t.end();
})
