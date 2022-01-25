const express = require('express');

const AppEnv = require('./config/app.env');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./route')(app);

app.listen(AppEnv.PORT, () => {
  console.log(`Server listening on port ${AppEnv.PORT}`);
});

async function shutdown() {
  server.close(async e => {
    if (e) {
      console.error(e);
      process.exit(1);
    }

    process.exit();
  });
}

process.on('SIGTERM', () => {
  shutdown();
})