"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const game = [
    "papito",
    "elaa",
    "zombie",
    "banana",
    "qubism",
    "intocube",
    "nabedaikan",
    "street",
    "osumo",
    "wacryll",
  ];

  return (
    <header className="border-gray border-b px-10 py-4">
      <div className="flex flex-row justify-between align-middle">
        <h1 className="transition-transform hover:-translate-y-1">
          <Link href="/" className="">
            <Image
              src="/common/logo.svg"
              width={170}
              height={50}
              alt="デバッグモンキーズ公式サイト"
            />
          </Link>
        </h1>
        <button
          aria-controls="menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className=""
        >
          MENU
          <span className="sr-only">メニュー開閉</span>
        </button>
      </div>
      <nav id="menu" hidden={!isMenuOpen}>
        <ul>
          {game.map((game) => {
            return (
              <li key={game}>
                <Link href={`/detail/${game}/`}>{game}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
