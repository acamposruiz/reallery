function runOnEachViewport(tests) {
  var tasks = [];
  var viewports = [[480, 500], [1000, 600], [1780, 3000]];

  viewports.forEach((viewport) => {
    tasks.push({
      describe: viewport.join("x"),
      beforeEach: function(cy) {
        cy.viewport(...viewport);
      },
    });
  });

  tests(tasks);
}

module.exports = {
  runOnEachViewport: runOnEachViewport,
};
