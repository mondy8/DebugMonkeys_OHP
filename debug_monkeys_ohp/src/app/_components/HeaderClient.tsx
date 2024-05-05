// NOTE: headlessUIを使うためにクライアントコンポーネントで設定
"use client";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

// TODO: 型定義をmicroCMSのAPIレスポンスに合わせて定義
// TODO: popover外をクリックした時に閉じる処理を追加
// TODO: suspenceの設定

export default function HeaderClient({ data }) {
  try {
    return (
      <header className="border-gray relative border-b px-10 py-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="transition-transform hover:-translate-y-1">
            <Link
              href="/"
              className="block rounded-md p-1 focus:outline-none focus-visible:ring"
            >
              <Image
                src="/common/logo.svg"
                width={170}
                height={50}
                alt="デバッグモンキーズ公式サイト"
              />
            </Link>
          </h1>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "text-gray-900" : "text-gray-950"}
                group inline-flex items-center rounded-md bg-white px-3 py-2 text-base font-medium transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring`}
                >
                  <span>MENU</span>
                  <span className="sr-only">メニュー開閉</span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm px-4 md:right-10 md:px-0 lg:max-w-2xl">
                    <nav className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                      <ul className="relative grid gap-2 bg-white p-7 lg:grid-cols-2">
                        {data.contents.map((game) => {
                          return (
                            <li
                              key={game.id}
                              onClick={() => {
                                close();
                              }}
                            >
                              <Popover.Button
                                as={Link}
                                href={`/detail/${game.id}/`}
                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                              >
                                <p className="text-sm font-medium text-gray-900">
                                  {game.title}
                                </p>
                              </Popover.Button>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
      </header>
    );
  } catch (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">エラーが発生しました。</h1>
      </div>
    );
  }
}
