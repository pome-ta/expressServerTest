const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];

// routing 設定
app.get('/', (req, res) => {
  // memo: どっちの呼び方でも大丈夫だった
  //res.sendFile('/index.html', { root: __dirname });
  res.sendFile(`${__dirname}/index.html`);
  console.log("req ---");
  console.log({req});
  console.log("res ---");
  console.log({res});
});

// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
  console.log({app});
});

