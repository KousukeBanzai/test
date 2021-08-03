# 環境情報

- Node.js（v14.17.4）
- npm（6.14.14）

# 開発環境コンセプト/概要

コンセプト「必要最低限の機能しか揃えていない環境で直感的にわかる仕組み」
「あれば便利だが、無くてもさほど問題は無い」という機能(パッケージ/ライブラリ)は開発環境に含めない（画像圧縮、ディレクトリ初期化など）
必要最低の機能が揃った汎用的な開発環境、特殊ケースには対応していないので、その場合は都度追加する必要がある環境となっている。（特殊ケース：PUG,EJSなどといったテンプレートエンジンの利用など）
Gulpは利用しない。Gulpを利用した場合、依存要素が増えてしまうため保守性が損なわれる。どうしてもGulpが必要な場合は使用して良いが、基本的にnpm標準機能で環境構築を行うこと。（npm-scriptなど）

# 作業ルール

- 画像の圧縮はNodeパッケージを使って行わない。TinyPng（TinyJpg）を使用した方が圧縮率が高いのでそちらを使うこと。
- 開発環境標準で無いことを行う場合はREADME.mdに記載もしくはコメントに記載後、アサインメンバーに周知すること

# 開発環境標準で行えること

- Sassコンパイル（ベンダープレフィックス付与、圧縮、メディアクエリの正規化）
- ES6へのトランスパイル、および圧縮 

# インストール手順

プロプトはbashを想定して```$```で表現
nodebrewがインストールされている環境を想定
※していない方はnodebrewをインストールしてください（Homebrew経由でのインストールを推奨）

1) NodebrewにてNode.jsをインストール


```
$ nobrewbrew install v14.17.4
 
```

2) 開発に必要なnodeパッケージをインストール


```
$ npm install
 
``` 

3) 警告に従い脆弱性のあるパッケージ/ライブラリをアップデート

```
$ npm audit fix
 
```

4) 下記コマンドを実行して、ローカルサーバーが立ち上がり、プロジェクトルートに ``` assets ``` ディレクトリが生成されればインストール完了


```
$ npm start
```

# コマンドリスト

``` $ npm start ``` にてSass/JSコンパイル、ローカルサーバーが起動する
上記コマンドだけで事足りる&上記コマンドの使用を求めている者はある程度の知識レベルがあることを想定しているので、その他コマンドの説明については省く。
※package.json参照

# コーディングマナー/方針

## 命名規則

単語の繋ぎにはハイフン
スペースにはアンダーバーを採用
数字はゼロパティング2桁数 (ex. img01.jpg,img12.jpg)

## Sass(CSS)

### ディレクトリ構成

```
/src/assets/scss/  
├── _functions.scss                               （scss関数を記述）
├── _mixins.scss                                  （Mixinを記述）
├── _variables.scss                               （scss変数を記述）
├── base  
│    ├── _fonts.scss                              （fontの定義等を記述）
│    ├── _global.scss                             （css全体の設定、グローバル定義）
│    ├── _index.scss                              （base配下のファイルをまとめる）
│    ├── _init.scss                               （mediaクエリ正規初期化）
│    ├── _reset.scss                              （リセット関係のスタイルを定義）
│    └── _variables.scss                          （cssカスタム変数を定義）
├── librarys                                      （ライブラリ/フレームワーク/スキンのスタイルファイル置き場）
│    └── _index.scss                              （librarys配下のファイルをまとめる）
├── pages                                         （ページ/画面固有のスタイルをシートを格納）
│    └── _index.scss                              （pages配下のファイルをまとめる）
├── parts                                         （パーツ/コンポーネント/モジュール毎にファイルを作成し格納）
│    └── _index.scss                              （parts配下のファイルを格納）
├── style.scss                                    （ルートscssファイル、このファイルが最終的なCSSファイルとしてコンパイル）
└── utility                                       （ユーティリティ＝汎用的なスタイルが定義されたファイルを格納 ex.text-center：テキスト中央揃えなど、クラス単位で
制御するスタイル）
    └── _index.scss                               （utility配下のファイルを格納）
```

### ファイル構成

scss配下にあるindexファイルは全て、直上ディレクトリの第一階層のファイルをまとめるファイルとする
parts配下におけるファイルはパーツ/コンポーネント/モジュールと分類分け出るが、分類ルールの定義が生まれるため原則的には認めない。
特殊パターンで分類分けを許可する場合は、partsディレクトリ配下に分類毎にディレクトリを作成し区分すること。その際はREADME.mdに説明を記載しアサインメンバーに周知すること。

### ID・クラス

基本的にIDは使わない（詳細度が上がるため）
HTML側へのクラス付与は「見た目」「構造」意識する

例
```
<div class="media01 media01-top">
```

命名規則はBEM（mindBEMding）を採用
ステータス(状態分け)などはOOCSSを採用


#### 変数の定義について

原則的に ``` /src/scss/_variables.scss ``` にてScss変数を定義しCSSカスタム変数にて ``` /src/scss/base/_variables.scss ``` にて root: セレクタ内部で変数定義をする
理由) 将来的Node.jsのバージョンや、それにまつわる問題で変数をプリプロセッサー領域で使用できなくなった場合、Scss内部で変数管理ができなくなる。それを考慮しCSS領域内で変数化を行い、Scssが使えない状況であってもグローバル変数的な扱いで変数が扱えるよう考慮しておく。  

## JS

- ページ/画面固有ファイルと関数ファイル、グローバル変数ファイルは分類する
- グローバル変数は基本的に定数扱いの値を定義
- 単一機能的な関数は単独の関数定義で良いが、機能を親に持ち主従関係をもつ関するはオブジェクトで定義する
- グローバール関数は全て大文字の命名で定義（ex. const API_URL = 'hoge'）

## 命名規則


### 関数名・変数名

スネースケースを採用する
※ただしグローバル変数の場合は前述の通り全て大文字

ex)

``` var target_trigger = "hoge" ```


## 変数型

暗黙の型変換がある変数・オブジェクトに対してはデータ型をコメントアウトで残す


``` 
var int = 1 //int
var float = 1.21 //float
var str = 'hoge' //str
var bool = true //bool

``` 



# メタ情報

## リリースノート

- 2021.8.4 ver1.0：開発環境初期構築完了

## タスクリスト
- Sassコンパイルの直列処理修正が一部完了（8.2）
- PostCSS、stylelintを追加

## 参考サイト
https://hibi-update.org/javascript/npm-scripts/
https://qiita.com/takeshisakuma/items/dbbb1c465099e6e4dd2e

## 最終更新

2021.8.1 阪西孝介