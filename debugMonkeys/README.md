# debugMonkeys

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### memo
assetsのimg内に配置する場合は、最終的に表示されるときには、base64という形式にエンコードされて出力される。
呼び出すときには、assetsの前に@/をつけるのが特徴。
```
<img src="@/assets/img/sample.png">
```
src属性やv-bindの:srcで使うときにはassets内に画像を置いて指定する。

public内に配置した画像ファイルは、プロジェクトルートにそのまま移動される

この2箇所の使い分けは、webpackでコンパイルしたいかどうかの違い。
 - assets：webpackでコンパイルしたい
 - public：webpackでコンパイルしたくない