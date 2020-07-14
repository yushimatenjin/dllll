### このパッケージについて

インターネットからコピーペーストをしたときに紛れてくる`$`を無視してコマンドを実行できるようにするパッケージです。


### インストール

```bash
npm -g install dlll
```

※注意 yarnの場合、`warning`が出ます。詳しくはこちら
https://github.com/valerybugakov/yarn/blob/84fc1b51e1d9ce424c495e225a790c2eeaca8627/src/util/normalize-manifest/util.js

### 使用例

使用例

```bash
$ ls
zsh: command not found: $
```

```bash
npm -g install dlll
$ ls
README.md               node_modules            package.json            tsconfig.json
built                   package-lock.json       src
```

### 削除方法

```bash
npm -g uninstall dlll
```
