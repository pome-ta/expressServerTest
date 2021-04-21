const fs = require('fs');
const data = 'Hello, Node 😊';

fs.writeFile('file2.txt', data, (err) => {
  if (err) {
    console.log(`[error] ${err}`);
  }
  console.log('正常に完了');
});

console.log('最後まで実行');