// 基准测试
const { num1, num2 } = require('../src/fn');

const FnBenchmark = require('benchmark');
const suite = new FnBenchmark.Suite;

suite
  .add('parsesInt', () => {
    num1('123456');
  })
  .add('Number', () => {
    num2('123456');
  })
  .on('cycle', evt => {
    console.log(String(evt.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });

// logs:
// parsesInt x 238,391,569 ops/sec ±1.55% (86 runs sampled)
// Number x 710,391,066 ops/sec ±10.98% (73 runs sampled)
// Fastest is Number



// console.log('======== 官方demo =========');

// // add tests
// suite.add('RegExp#test', function() {
//   /o/.test('Hello World!');
// })
//   .add('String#indexOf', function() {
//     'Hello World!'.indexOf('o') > -1;
//   })
//   // add listeners
//   .on('cycle', function(event) {
//     console.log(String(event.target));
//   })
//   .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));
//   })
//   // run async
//   .run({ 'async': true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf