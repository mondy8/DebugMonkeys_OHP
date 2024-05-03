import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const game = ["papito", "papito2", "papito3"];
  return (
    <main className="mt-10 grid grid-cols-1 gap-10 px-10 md:grid-cols-2 lg:grid-cols-3">
      {game.map((game) => {
        return (
          <div key={game} className="grid gap-y-5">
            <Link
              href={`/detail/papito`}
              className="block overflow-hidden rounded-md focus:outline-none focus-visible:ring"
            >
              <Image
                src="/img_index_papito.png"
                width={1571}
                height={1079}
                alt="パピトー"
                className="transition duration-200 ease-in-out hover:scale-110"
              />
            </Link>
            <h2 className="text-2xl font-bold">PAPITO パピトー</h2>
            <p className="text-gray-900">
              ぬいぐるみのサーカス「パピトー」のマネージャーになって、みんなでショーを成功させよう！ジジ抜きをベースにした推理×協力ゲーム！
            </p>
            <div className="grid grid-cols-2 gap-5">
              <Button
                link="https://debug-monkeys.booth.pm/items/4744698"
                blank={true}
              >
                販売ページ
              </Button>
              <Button link="/detail/papito" color="gray">
                詳細を見る
              </Button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
