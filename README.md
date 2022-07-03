# 都道府県別総人口推移グラフ

[RESAS API](https://opendata.resas-portal.go.jp/)から都道府県と各都道府県に対する人口推移を取得し、表示するアプリケーションです。

## 技術スタック

- Next.js
- typescript
- MSW (Mock Service Worker)
- SWR
- storybook
- jest
- react-testing-library
- eslint
- prettier
- lint-staged

## 初めに

```bash
 yarn install
```

.env.local と.env.test.local に RESAS APIKey を追加

```
 .env.local and .env.test.local

 NEXT_PUBLIC_API_KEY=[your api key]
```

### 開発環境

```bash
 yarn dev
```

[http://localhost:3000/](http://localhost:3000/)に開発サーバーが起動します。

### storybook

```bash
 yarn storybook
```

[http://localhost:6006](http://localhost:6006)に storybook が起動します。

## 開発

### lint-staged

commit 時に以下のコマンドを実行しています。
bash を使用しているため、bash をインストールしてください。

```bash
prettier --write --loglevel=warn '*/**/*.{js,jsx,ts,tsx,html,gql,graphql,json}'
next lint . --fix
bash -c 'tsc --noEmit'
```

### 開発の進め方

git flow に則って開発してください。

### コンポーネント管理

atomic design を採用しています。 以下のように、各コンポーネントのフォルダ内に view、storybook、style、type を含めてください。

molecules はロジックを含む場合、index.tsx と presenter.tsx に分け、view は presenter に、ロジックはカスタムフックを切って index で読み込むようにしてください。

```
src/components
  - atoms
    - xxx
      - index.tsx
      - index.stories.ts
      - styles.ts
      - types.ts
```

### スタイリングについて

emotion css を採用しています。

なるべくマジックナンバーを使用せず、src/styles 内にある css 変数を使用してください。

### テストについて

test/内に Unit testing と Integration testing に分けて追加してください。

以下のコマンドでテストを実行できます。

```bash
yarn jest
yarn test (watch)
yarn test:unit (Unitテスト)
yarn test:integration (Integrationテスト)
```
