var fs = require("fs");

function config(rootPath) {
  return function configPromise(projtsJson) {
    console.log("config()");
    function stylesPromise() {
      /* STYLES CSS */
      return new Promise((resolve, reject) => {
        const styles = `.home {
                      background: resolve("${rootPath}content/background/${
          projtsJson.meta.background
        }") no-repeat center center fixed;
                      -webkit-background-size: cover;
                      -moz-background-size: cover;
                      -o-background-size: cover;
                      background-size: cover; }`;

        fs.writeFile("src/styles/config.pcss", styles, function(err) {
          if (err) {
            reject("FAil Styles configuration");
          }

          console.log("Styles was written!");
          resolve();
        });
      });
    }

    function jsDependenciesPromise() {
      console.log("jsDependenciesPromise()");
      /* JS DEPENDENCES */
      return new Promise((resolve, reject) => {
        const iconsMap = {
          MaterialDesignIcons: "react-icons/lib/md",
          FontAwesome: "react-icons/lib/fa",
          Typicons: "react-icons/lib/ti",
          GithubOcticons: "react-icons/lib/go",
        };

        let icons = "";

        for (let key in projtsJson) {
          if (key != "meta") {
            icons += `export {${projtsJson[key].icon.icon}} from '${
              iconsMap[projtsJson[key].icon.family]
            }';`;
          }
        }

        fs.writeFile("src/es6/icons.es6", icons, function(err) {
          if (err) {
            reject("FAil JS DEPENDENCES configuration");
          }

          resolve();
        });
      });
    }

    function htmlAndThenPromise() {
      console.log("htmlAndThenPromise()");
      /* HTML AND THEN */
      return new Promise((resolve, reject) => {
        const gaCode = projtsJson.meta.google_analytics_id
          ? `<script>
                                    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                                            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                                    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                            
                                    ga('create', '${projtsJson.meta.google_analytics_id}', 'auto');
                                    ga('send', 'pageview');
                            
                                </script>`
          : "";
        let indexHtml = `<!doctype html>
                            <html lang="en" data-framework="react">
                                <head>
                                    <meta charset="utf-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1">
                                    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
                                    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16" />
                                    <link href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400" rel="stylesheet">
                                    <title>${projtsJson.meta.title}</title>
                                </head>
                                </head>
                              <body>
                                <section class="mainpage"></section>
                                
                                ${gaCode}
                            
                                <script src="build/app.js"></script>
                            
                              </body>
                            </html>`;

        fs.writeFile("./index.html", indexHtml, function(err) {
          if (err) {
            reject("FAil HTML configuration");
          }
          resolve();
        });
      });
    }

    return new Promise((resolve, reject) => {
      Promise.all([stylesPromise(), jsDependenciesPromise(), htmlAndThenPromise()])
        .then((values) => {
          resolve(projtsJson);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  };
}

module.exports = {
  config,
};
