const express = require('express');


// Setup
const app = express();
const port = process.env['WEB_APP_PORT'];


app.get('/', (req, res) =>{
  res.send("Hello, world! 😊");
  console.log("req ---");
  console.log({req});
  console.log("res ---");
  console.log({res});
});

// Launch app
app.listen(port, () => {
  console.log(
    `Launching app... http://localhost:${port}` + '\n'
  );
  console.log({app});
});

