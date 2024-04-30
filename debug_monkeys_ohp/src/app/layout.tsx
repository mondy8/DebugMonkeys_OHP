import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "デバッグモンキーズ公式サイト｜ボードゲーム販売中！",
  description: "デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。代表作：エラロト / Qubism / ゾンビパニックとライフルおじさん / 鍋代官など",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
