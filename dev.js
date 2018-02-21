const egg = require('egg');
let eggPort = 7001;

if (process.argv.length) {
  eggPort = process.argv.pop();
}

egg.startCluster({
  port: eggPort,
  workers: 1,
  baseDir: __dirname,
});