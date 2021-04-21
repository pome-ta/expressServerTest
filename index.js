const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


// routing 設定
app.get('/', (req, res) => {
  const name = req.query.name;
  // http://localhost:{port}/?name={name}
  res.send(`君の名は ${name}`);
  console.log('アクセス: /');
});



// Launch app
app.listen(port, () => {
  console.log(`Launching app... http://localhost:${port}` + '\n');
});
