// Next.js 16 で `next lint` が廃止されたため ESLint CLI を直接使う。
// ESLint 9 以降は Flat Config が既定で、旧 .eslintrc.json は読まれない。
// eslint-config-next 16 は Flat Config をそのまま export するので FlatCompat は不要。
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
];

export default config;
