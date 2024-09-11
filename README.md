# ウィンズ音楽教室 ランディングページ

## 概要

このプロジェクトは、ウィンズ音楽教室のオンラインレッスン特別キャンペーンのためのランディングページです。

## GitHub Pagesでの公開手順

1. GitHubアカウントの作成:
   - [GitHub](https://github.com/)にアクセスし、アカウントを作成します（既にある場合はスキップ）。

2. 新しいリポジトリの作成:
   - GitHubにログインし、右上の「+」アイコンをクリックして「New repository」を選択します。
   - リポジトリ名を入力し（例：wins-music-landing）、必要に応じて説明を追加します。
   - 「Public」を選択し、「Create repository」をクリックします。

3. プロジェクトのアップロード:
   - 作成したリポジトリページで「uploading an existing file」リンクをクリックします。
   - プロジェクトフォルダ内のすべてのファイルとフォルダをドラッグ＆ドロップするか、「choose your files」をクリックして選択します。
   - 「Commit changes」をクリックしてアップロードを完了します。

4. GitHub Pagesの設定:
   - リポジトリページの「Settings」タブをクリックします。
   - 左側のメニューから「Pages」を選択します。
   - 「Source」セクションで、「Branch」を「main」に、フォルダを「/(root)」に設定します。
   - 「Save」をクリックします。

5. サイトの公開:
   - 数分後、GitHub Pagesセクションに「Your site is published at https://yourusername.github.io/your-repo-name/」というメッセージが表示されます。
   - このURLがあなたのサイトの公開URLとなります。

注意: GitHub Pagesでは、ビルドされたファイルを直接公開する必要があります。そのため、`npm run build`を実行して生成された`dist`フォルダの内容をリポジトリのルートに配置してください。

## ローカルでの開発

1. 依存関係をインストール:
   - `npm install`を実行。

2. 開発サーバーを起動:
   - `npm run dev`を実行。
   - ブラウザで`http://localhost:5173`を開いてプレビュー。

3. ビルド:
   - `npm run build`を実行してプロジェクトをビルド。
   - ビルドされたファイルは`dist`フォルダに生成されます。

## サポート

質問や問題がある場合は、このリポジトリのIssuesセクションで報告してください。