# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

ボードゲーム制作団体「デバッグモンキーズ」の公式HP（https://debug-monkeys.com/ ）。
Next.js App Router + TypeScript + TailwindCSS で構成し、ゲーム情報は microCMS から取得する。

## コマンド

パッケージマネージャは **pnpm 12.8.1**。Node は 24.21.0（Active LTS）。

バージョンは3箇所で宣言している。上げるときは必ず揃えること。
- `.tool-versions` — ローカル（asdf）
- `.nvmrc` — ホスティング側のビルド環境向け
- `package.json` の `engines.node`

```sh
pnpm dev                  # 開発サーバー
pnpm build                # 本番ビルド
pnpm start                # ビルド成果物の起動
pnpm lint                 # next lint (eslint-config-next / core-web-vitals)
pnpm run "generate:cms types"  # src/schema のJSONから src/types/cms-types.ts を生成
```

テストフレームワークは未導入（テストコードなし）。

### pnpm の設定は `pnpm-workspace.yaml` に置く

pnpm v11 以降、**`package.json` の `pnpm` フィールドは読まれない**（install 時に WARN が出るだけで黙って無視される）。`.npmrc` も認証情報専用になった。`overrides` を含むすべての設定は `pnpm-workspace.yaml` に書く。

主な設定と意図:

- `minimumReleaseAge: 1440` — 公開から24時間未満のバージョンを取り込まない。パッケージ乗っ取り対策。単位は**分**（npm の `min-release-age` は日なので混同しないこと）
- `allowBuilds` — 依存のライフサイクルスクリプトは既定で全遮断（`strictDepBuilds` が既定 true）。可否を明示したパッケージのみ列挙する。未承認のものがあると install が `ERR_PNPM_IGNORED_BUILDS` で落ちる
- `overrides` — `pnpm audit` 由来の推移的依存の引き上げ

`next` は overrides で吊り上げるのではなく `package.json` 側で直接バージョンを上げること。過去に overrides の `next@>=13.3.0 <14.2.34` が連鎖して Next 16 が入り、`next lint` が廃止されてビルド以外が壊れた事故がある。

`.env.local` に `MICROCMS_API_KEY` / `MICROCMS_SERVICE_DOMAIN` が必要。未設定だと `src/libs/client.ts` が起動時に throw する。

## アーキテクチャ

### データフロー

microCMS の `details` エンドポイント1本でサイト全体のコンテンツを賄う。

- `src/libs/client.ts` — microCMS SDK クライアントの唯一の生成箇所。サーバー側でのみ import すること。
- `src/app/page.tsx`（一覧）と `src/app/_components/Header.tsx`（メニュー）は `client.get({ endpoint: 'details/' })` を直接呼ぶ。
- `src/app/detail/[game]/page.tsx`（詳細）は `src/app/_functions/getGamedata.ts` 経由で単体取得。エラー時は `null` を返し、ページ側で `notFound()` に倒す。
- ルートの `[game]` セグメントは microCMS のコンテンツID。`public/pdf/instruction_<id>.pdf` の命名もこのIDに一致させる必要がある（`hasInstruction` が true のとき参照される）。

### SC / CC の分離

基本はサーバーコンポーネント。HeadlessUI はCCでしか動かないため、`Header`(SC) がデータを取得して `HeaderClient`(CC) に props で渡す、という形を取る。同種の対応が必要な場合もこのパターンに合わせる。

ヘッダーメニューは HeadlessUI の **Popover**（Menu ではなく、メニュー内部の要素もフォーカスできるため）。App Router では Popover 外クリックで閉じないバグがあり、`src/app/layout.tsx` で `<Header>` 以下を `<div>` で包むことが対策になっている。この div を消さないこと。
参照: https://github.com/tailwindlabs/headlessui/issues/2752#issuecomment-1724096430

### 記事本文のレンダリング

microCMS のリッチエディタ／HTML入稿（繰り返しフィールド）の各ブロックを `fieldId` で引いて文字列連結し、`html-react-parser` で DOM 化、`@tailwindcss/typography` の `prose` でスタイリングする（`src/app/detail/[game]/page.tsx`）。
細かい調整は `prose-*` の修飾クラス、またはグローバルに効かせるなら `tailwind.config.ts` の `theme.extend.typography` に記述する。

### 型生成

`API設定 > APIスキーマ > この設定をエクスポートする` で得たJSONを `src/schema/` に置き `generate:cms types` を実行。
ファイル名からエンドポイント名を取り出すため **スキーマのファイル名は変更しない**。同一エンドポイントの複数ファイルがある場合は末尾の日付が最新のものが使われる。

## スタイリング

- TailwindCSS のみ。`@/*` は `src/*` のエイリアス。
- `tailwind.config.ts` で `hover` バリアントを `@media(hover:hover)` かつ `:any-link, :enabled, summary` に限定している。タッチデバイスや非活性要素に hover を効かせないための意図的な上書き。
- カスタムの gray スケール（300/500/800/900）を定義済み。
- Prettier は `prettier-plugin-tailwindcss` でクラス順を自動整列する。
- 画像は `next/image`。microCMS の `images.microcms-assets.io` のみ `next.config.mjs` で許可済み。

## マークアップ

markuplint（`markuplint:recommended-react`）を導入。a11y を意識した実装になっており、`focus-visible:ring` やスクリーンリーダー用テキスト（`sr-only`）の付与を既存コードに合わせる。

## ローカル環境

Node は **asdf**（Homebrew 導入 / `~/.asdf`）で管理している。nodenv や nvm ではない。`node` の実体は `~/.asdf/shims/node`。

```sh
asdf install nodejs <version>
asdf set nodejs <version>        # プロジェクトの .tool-versions を更新
asdf set -u nodejs <version>     # ホームの ~/.tool-versions を更新
asdf reshim                      # shim が古いパスを指すとき
```

asdf は v0.16 で Go 再実装になり、`asdf.sh` の source 方式が廃止された。`~/.zshrc` では shims を PATH に通す。旧コマンド `asdf global` / `asdf local` は `asdf set -u` / `asdf set` に変わっている。

pnpm も asdf 管理（corepack は使わない。Node 25 以降バンドルされないため）。プラグインが古いと新しい asdf で `BIN_PATH: unbound variable` を出して install に失敗するので、その場合は `asdf plugin update <name>`。

## デプロイ

ホスティングは **Netlify**。master ブランチへの push でビルドが走る。microCMS の API 情報は Netlify 側の環境変数で保持する。

README の「使用技術」に AWS Amplify と記載があるが **実際には使っていない**（README の記述が古い）。

Netlify のビルド Node バージョンはリポジトリの `.nvmrc` が参照される。
