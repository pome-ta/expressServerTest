const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


// routing 設定
app.get('/', (req, res) => {
  const data = {
    "message": "Hello world",
    "date": "2020-06-29"
  };
  res.json(data);
});


// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
});
