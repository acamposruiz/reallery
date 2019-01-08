const cmd = require('node-cmd');
const {cyan} = require('../utils.js').colors;

module.exports = class CompilationPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {

    compiler.plugin('compile', function () {
      console.log(cyan, 'RUNNING UNIT TESTS......');
      cmd.get(
        'npm run test',
        function (err, data, stderr) {
          console.log(data);
          console.log(stderr);
          console.log(err);
        }
      );
    });

    compiler.plugin('done', function () {
      console.log(cyan, 'RUNNING E2E TESTS......');
      cmd.get(
        'npm run cypress:run',
        function (err, data, stderr) {
          console.log(data);
          console.log(stderr);
          console.log(err);
        }
      );
    });

  }
};