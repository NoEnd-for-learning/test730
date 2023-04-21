function min(a, b) {
  const c = 3;
  return (b - a) * c;
}

module.exports = {
  add: (...args) => {
    return args.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    }, 0);
  },

  mul: (...args) => {
    return args.reduce((previousValue, currentValue) => {
      return previousValue * currentValue;
    }, 1);
  },

  cover: (a, b) => {
    if (a > b) {
      return a - b;
    } else if (a === b) {
      return a + b;
    } else {
      return min(a, b);
    }
  }
};
