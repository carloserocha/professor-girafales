const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  const directoryPath = path.join(__dirname, './modules');

  fs.readdirSync(directoryPath).forEach((module) => {
    fs.readdirSync(`${directoryPath}/${module}`)
      .filter((file) => file.indexOf('.route.js') !== -1)
      .forEach((file) => {
        const pathRoute = file.substr(0, file.indexOf('.'));
        const name = file.substr(0, file.lastIndexOf('.'));
        const router = require(`./modules/${module}/` + name);
        app.use(`/${pathRoute}`, router);
      });
  });
};