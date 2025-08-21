# Stimulus.js ハンズオン - 初学者向けチュートリアル

このプロジェクトは、Stimulus.jsの学習を目的とした段階的なハンズオン教材です。

## 🚀 開始方法

### 1. サーバー起動
```bash
rails server
```

### 2. チュートリアルページにアクセス
```
http://localhost:3000/stimulus-tutorial
```

## 📚 学習内容

### 演習1: 基本のカウンター
- **学習目標**: Stimulusの基本概念を理解する
- **技術要素**:
  - Controller の定義
  - Target の使用
  - Action の定義
  - `initialize()` と `connect()` の違い

### 演習2: フォームバリデーション
- **学習目標**: Values APIを使用したリアルタイムバリデーション
- **技術要素**:
  - `static values` の定義
  - 動的なバリデーション
  - CSS クラスの操作
  - フォーム状態の管理

### 演習3: 表示切り替え
- **学習目標**: Classes APIを使用した要素の表示/非表示制御
- **技術要素**:
  - `static classes` の定義
  - 複数ターゲットの操作
  - 条件分岐の実装

### 演習4: ToDoリスト (上級)
- **学習目標**: 複合的な機能を持つアプリケーションの構築
- **技術要素**:
  - 動的なDOM要素の生成
  - 配列データの管理
  - LocalStorage を使った永続化
  - キーボードイベントの処理
  - 複数のイベントハンドリング

### 演習5: AJAX通信
- **学習目標**: サーバーとの非同期通信
- **技術要素**:
  - Fetch API の使用
  - async/await パターン
  - エラーハンドリング
  - ローディング状態の管理
  - JSON レスポンスの処理

### 演習6: ドロップダウンメニュー
- **学習目標**: 高度なユーザーインタラクション
- **技術要素**:
  - 外部クリック検出
  - キーボードナビゲーション
  - アクセシビリティ属性
  - カスタムイベントの発行
  - DOM イベントリスナーの管理

## 🎯 学習の進め方

### 1. 段階的な学習
各演習は前の演習の知識を基に構築されています。順序通りに進めることをお勧めします。

### 2. 実践的な学習
- 各演習のコードを読み、理解する
- 実際にブラウザで動作を確認する
- コードを変更して動作の変化を観察する

### 3. 発展的な学習
- 既存のコードを改造して新しい機能を追加する
- 複数のコントローラーを組み合わせて使用する
- 自分なりのアプリケーションを作成する

## 🛠️ 技術スタック

- **Ruby on Rails**: 8.0.2
- **Stimulus.js**: 3.2.2
- **Turbo**: 8.0.13
- **Tailwind CSS**: CDN版（スタイリング用）

## 📝 重要な概念

### Controller
Stimulus の核となるJavaScriptクラス。DOM要素と紐付けられ、ユーザーのアクションに応答します。

### Target
コントローラーが操作するDOM要素。`data-{controller-name}-target` で指定します。

### Action
ユーザーのアクション（クリック、入力など）に応答するメソッド。`data-action` で指定します。

### Values
外部から注入される設定値。`data-{controller-name}-{value-name}-value` で指定します。

### Classes
動的に操作するCSSクラス名。`data-{controller-name}-{class-name}-class` で指定します。

## 🎨 カスタマイズ

各演習のスタイルや動作は自由にカスタマイズできます。
- CSS クラスの変更
- 新しいメソッドの追加
- イベントの追加
- 機能の拡張

## 📖 参考資料

- [Stimulus.js 公式ドキュメント](https://stimulus.hotwired.dev/)
- [Hotwire 公式サイト](https://hotwired.dev/)
- [Rails Guides - Working with JavaScript](https://guides.rubyonrails.org/working_with_javascript_in_rails.html)

## 🤝 コントリビューション

このチュートリアルの改善提案やバグ報告は歓迎します。
プルリクエストやIssueを通じてご貢献ください。