const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


// routing 設定
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
  console.log('アクセス: /');
});

app.get('/images/:file', (req, res) => {
  const file = req.params.file;
  res.sendFile(`${__dirname}/images/${file}`);
  console.log('アクセス: /images');
});



// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
});




