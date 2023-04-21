const { add, mul } = require('../src/math');

// 原始的测试方法
// if(add(2, 3) === 5) {
//   console.log('add(2,3) === 5, success');
// } else {
//   console.log('add(2,3) !== 5, error');
// }

// node 版本的测试代码
// const assert = require('assert');
// assert.equal(add(2,3), 5);

// mocha 版本的测试代码
const { expect } = require('chai');

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3), 5);
    });

    // it.skip 跳过执行
    it.skip('should return -1 when 2 + (-3)', () => {
      expect(add(2, -3), -1);
    });
  });

  describe('mul', () => {
    it('should return 6 when 2 * 3', () => {
      expect(mul(2, 3), 6);
    });

    // it.only 只执行该条测试
    it('should return -6 when 2 * (-3)', () => {
      expect(mul(2, -3), -6);
    });
  });
});
