# Quote Editor

このリポジトリは [HotRails.dev](https://www.hotrails.dev/) のチュートリアルに従って、Hotwire技術を学習するためのものです。

## プロジェクトについて

Quote Editorは、Hotwireを使用して構築されたシンプルな見積もり管理アプリケーションです。このプロジェクトを通じて、以下のHotwire技術を学ぶことができます：

- **Turbo Drive**: ページ遷移を高速化
- **Turbo Frames**: ページの一部を非同期に更新
- **Turbo Streams**: リアルタイム更新
- **Stimulus**: シンプルなJavaScriptフレームワーク

## 技術スタック

- Ruby on Rails 8.0.2
- Hotwire (Turbo Rails + Stimulus)
- SQLite
- Simple Form

## HotRails.devチュートリアルについて

[HotRails.dev](https://www.hotrails.dev/) は、Alexandre Rubanによる包括的なHotwireチュートリアルサイトです。このチュートリアルでは、モダンなRailsアプリケーションの構築方法を段階的に学ぶことができます。

## 学習目標

このリポジトリを通じて以下を学習します：

1. Hotwireの基本概念と使い方
2. Turbo Driveによるページ遷移の高速化
3. Turbo Framesを使った部分的なページ更新
4. Turbo Streamsによるリアルタイム機能の実装
5. Stimulusコントローラーの作成と使用方法

## セットアップ

### 通常のセットアップ

```bash
# リポジトリをクローン
git clone [repository-url]

# 依存関係のインストール
bundle install
yarn install

# データベースのセットアップ
rails db:create
rails db:migrate

# サーバーの起動
bin/dev
```

### Dockerを使用したセットアップ

#### 開発環境

```bash
# 開発用コンテナのビルドと起動
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up

# 別のターミナルでデータベースのセットアップ（初回のみ）
docker-compose -f docker-compose.dev.yml exec web rails db:prepare
```

#### 本番環境

```bash
# 本番用コンテナのビルドと起動
docker-compose build
docker-compose up

# 注意: 本番環境では適切なSECRET_KEY_BASEを設定してください
# docker-compose.ymlのSECRET_KEY_BASE環境変数を変更するか、
# 環境変数として渡してください
```

## 参考リソース

- [Hotwire公式サイト](https://hotwired.dev/)
- [Turbo Handbook](https://turbo.hotwired.dev/handbook/introduction)
- [Stimulus Handbook](https://stimulus.hotwired.dev/handbook/introduction)
