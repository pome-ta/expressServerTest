const express = require('express');

// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


// カウンタ用データ
let COUNT = 1;

// routing
app.get('/', (req, res) => {
  res.send(`あなたは、${COUNT}人目のお客様です`);
  COUNT++;
});

app.get('/reset', (req, res) => {
  res.send(`カウンタをリセットしました`);
  COUNT = 1;
});


// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
});
