import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";
import Footer from "./_components/Footer";

// TODO: フォントの読み込み
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "デバッグモンキーズ公式サイト｜ボードゲーム販売中！",
  description:
    "デバッグモンキーズは東京と福岡で活動しているボードゲーム制作団体です。代表作：エラロト / Qubism / ゾンビパニックとライフルおじさん / 鍋代官など",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Suspense fallback={<Spinner />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
