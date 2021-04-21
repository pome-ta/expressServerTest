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


## image

## GET

1. ブラウザのURL の所をタップ
1. `?name={name}`
1. [return]
1. `{name}` の所が変わる

## POST

Play.js だと、状況によりlocalhost のport が違うが、ハードコードしてる


## その2

> PHPでサーバサイドを実装する際には、Webサーバとしての機能はApacheが受け持つパターンが多いわけですが、この場合PHPはリクエストがある度に起動と終了を繰り返します。
> つまり起動時に前回の処理結果などを気にする必要は基本的にありません。ところがexpressでサーバを作っている場合には1つのプログラムが起動しっぱなしであることを意識する必要があるのです。


### アクセスカウンター(メモリ版)を作成

更新すると、カウントアップする

#### グローバル変数の扱い

`/reset` へ飛ぶと、`COUNT = 1;` が呼び出され変数`COUNT` は、`1` に戻る


## Node はシングルスレッド

C10k問題 の解決





## 参考

- [[Node.js] expressで作るHTTPサーバ – 入門編 その1](https://blog.katsubemakito.net/nodejs/http-server-built-with-express?amp)
  - 画像もお借りしてる `./images/*.png`
- [[Node.js] expressで作るHTTPサーバ – 入門編 その2「グローバル変数の生存戦略編」](https://blog.katsubemakito.net/nodejs/http-server-built-with-express2?amp)
- [[Node.js] expressで作るHTTPサーバ – 入門編 その3「非同期処理とファイル」](https://blog.katsubemakito.net/nodejs/http-server-built-with-express3?amp)
