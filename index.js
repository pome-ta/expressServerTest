const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


app.get('/', (req, res) => res.send('Hello World!'));

// Launch app
app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});

