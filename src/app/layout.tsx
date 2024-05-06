import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const font = Noto_Sans({ subsets: ["latin"] });

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
      <body className={`${font.className} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
