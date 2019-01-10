# img-lazy-load

- 画像のレイジーロード処理の、ごくシンプルな手順を実装

# package

## package installed

- [package.jsonを参照](package.json)

# config

## install

### install

    npm i

### build

    npm run build

## watch command

    npm run watch

## clean dist/、tmp/ command

    npm run clean


# ルートディレクトリ構成

    bin/ : ビルド・デプロイシェル
    conf/ : 設定ファイル
    dist/ : 出力ディレクトリ
    src/ : 開発ディレクトリ
    tmp/ : 中間生成物一時保管ディレクトリ
    .editorconfig
    .gitignore
    package.json
    README.md


# 開発ディレクトリ構成

編集対象は src/ 以下のみ

    src/
      └ img/
      └ js/
      └ pug/
        └ data/ : data
        └ include/ : parts
        └ layout/ : layout
        └ page/ : page
      └ scss/


# CSS開発方針

## セレクター命名方針

- [MindBEMding](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
