### 学习 mocha nyc [Travis CI](https://www.travis-ci.com/)

Run by Node: 14.19.1

#### 测试覆盖率
```text
nyc --reporter=lcov --reporter=text mocha 是一个命令行命令，用于在 Node.js 项目中使用 nyc 和 Mocha 运行测试并生成覆盖率报告。

具体来说，这个命令的含义如下：

nyc：这是 nyc 工具的命令行接口。
--reporter=lcov --reporter=text：这是 nyc 命令行接口的两个选项，它们告诉 nyc 生成两种格式的覆盖率报告：一种是 LCOV 格式的报告（通常用于集成到 CI/CD 系统中），另一种是文本格式的报告（用于终端输出）。
mocha：这是 Mocha 测试运行器的命令行接口，它会将测试文件作为参数传递给 nyc。
总的来说，这个命令可以让你在 Node.js 项目中轻松地运行测试并生成测试覆盖率报告，以便更好地评估你的测试覆盖率情况。
```

```shell script
npm run jest
/* 对应的文件目录为：**/__tests__/**/*.test.js
```

```shell script
npm run test
npm run coverage
/* 对应的文件目录为：test/**/*.test.js
```