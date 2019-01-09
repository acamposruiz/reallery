const cmd = require("node-cmd");
const { cyan } = require("../utils.js").colors;

module.exports = class CompilationPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    if (this.options.test) {
      compiler.plugin("compile", function() {
        console.log(cyan, "RUNNING UNIT TESTS......");
        cmd.get("npm run test", function(err, data, stderr) {
          console.log(data, stderr, err);
        });
      });
    }

    compiler.plugin("beforeRun", function(...args) {
      cmd.get(`rm -rf ${args[0].options.output.path}`, function(err, data, stderr) {
        console.log(data, stderr, err);
      });
      console.log(cyan, `MODE => ${args[0].options.mode}`);
    });

    compiler.plugin("done", () => {
      if (this.options.test) {
        console.log(cyan, "RUNNING E2E TESTS......");
        cmd.get("npm run cypress:run", function(err, data, stderr) {
          console.log(data, stderr, err);
        });
      }
    });
  }
};
