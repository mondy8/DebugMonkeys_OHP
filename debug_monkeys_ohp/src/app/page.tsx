import Button from "./_components/Button";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/libs/client";
import StatusButton from "./_components/StatusButton";

// TODO: 型定義をmicroCMSのAPIレスポンスに合わせて定義
// TODO: suspenceの設定
type game = {
  id: string;
  thumb: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  noSale: boolean;
  saleLink?: string;
  reservationLink?: string;
  status: "完売" | "販売中" | "予約受付中" | "近日登場";
};

export default async function Home() {
  try {
    const data = await client.get({
      endpoint: `details/`,
    });

    return (
      <main className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 px-5 md:mt-20 md:grid-cols-2 md:gap-y-20 md:px-10 xl:grid-cols-3 xl:gap-x-16 xl:px-20">
        {data.contents.map((game: game) => {
          return (
            <div key={game.id} className="grid gap-y-3">
              <Link
                href={`/detail/${game.id}`}
                className="relative block h-[58vw] overflow-hidden rounded-md focus:outline-none focus-visible:ring md:h-[28vw] xl:h-[18vw]"
              >
                <Image
                  src={game.thumb.url}
                  width={game.thumb.width}
                  height={game.thumb.height}
                  alt={`「${game.title}」の製品画像`}
                  className="absolute left-2/4 top-2/4 w-full -translate-x-2/4 -translate-y-2/4 transition duration-200 ease-in-out hover:scale-110 hover:bg-gray-100"
                />
              </Link>
              <h2 className="text-2xl font-bold">{game.title}</h2>
              <p className="text-gray-800">{game.description}</p>
              <div className="grid h-11 grid-cols-2 gap-5">
                <StatusButton gameData={game} />
                <Button link={`/detail/${game.id}`} color="gray">
                  詳細を見る
                </Button>
              </div>
            </div>
          );
        })}
      </main>
    );
  } catch (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">エラーが発生しました。</h1>
      </div>
    );
  }
}
