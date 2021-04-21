const fs = require('fs');
const data = 'Hello, Node 😊';

try {
  fs.writeFileSync('file1.txt', data);
  console.log('正常に完了');
}
catch(e) {
  console.log(e.message);
}

console.log('最後まで実行');