# expressServerTest


[play.js](https://playdotjs.com) で、[express](https://www.npmjs.com/package/express) の挙動を理解したいリポジトリ


## はろわ

``` index.js
app.get('/', (req, res) => res.send('Hello World!'));
```


## `index.html` 呼び出し

### Routing

[参照サイト](https://blog.katsubemakito.net/nodejs/http-server-built-with-express?amp) では、`/public/` 指定をしていたが


``` sample.js
// ルーティングの設定
app.get("/", (req, res) =>{
  res.sendFile(`${__dirname}/public/index.html`);
});
```

Play.js だと、`/public/` が不要かも？

また、以下どちらでも呼び出せた

- `res.sendFile('/index.html', { root: __dirname });`
- `res.sendFile(`${__dirname}/index.html`);`


``` index.js
// routing 設定
app.get('/', (req, res) => {
  // memo: どっちの呼び方でも大丈夫だった
  //res.sendFile('/index.html', { root: __dirname });
  res.sendFile(`${__dirname}/index.html`);
});
```


### `index.html`

モバイル表示的に、`viewport` 指示を加えてる

``` index.html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```


## 参考

[[Node.js] expressで作るHTTPサーバ – 入門編 その1](https://blog.katsubemakito.net/nodejs/http-server-built-with-express?amp)