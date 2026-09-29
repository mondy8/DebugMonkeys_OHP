# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

ボードゲーム制作団体「デバッグモンキーズ」の公式HP（https://debug-monkeys.com/ ）。
Next.js App Router + TypeScript + TailwindCSS で構成し、ゲーム情報は microCMS から取得する。

## コマンド

パッケージマネージャは **pnpm**。Node は `.tool-versions` で 20.9.0 固定。

```sh
pnpm dev                  # 開発サーバー
pnpm build                # 本番ビルド
pnpm start                # ビルド成果物の起動
pnpm lint                 # next lint (eslint-config-next / core-web-vitals)
pnpm run "generate:cms types"  # src/schema のJSONから src/types/cms-types.ts を生成
```

テストフレームワークは未導入（テストコードなし）。

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

## デプロイ

master ブランチへの push でビルドが走る。microCMS の API 情報はホスティング側の環境変数で保持する。
