module.exports = {
  // 设置测试次数
  "count": 10000,
  // 启用高精度计时器
  "highResolution": true,
  // 加载 lodash 库
  "plugins": [
    {
      "name": "lodash",
      "path": "lodash"
    }
  ],
  "files": [
    "test/**/*.benchmark.js"
  ],
  "ignore": [
    "__tests__/**/*",
  ]
};
