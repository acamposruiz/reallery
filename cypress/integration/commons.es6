

export function runOnEachViewport(tests) {
  var tasks = [];
  var viewports = [[480, 500], [1000, 600], [1780, 3000]];

  viewports.forEach(viewport => {
    tasks.push({
      prefixInCase: viewport.join('x'),
      tasks: function(cy) {
        cy.viewport(...viewport);
      }
    });
  });

  tests(tasks);
}