"use client";
import Image from "next/image";
import Button from "../../_components/Button";
import { useParams } from "next/navigation";

export default function GameDetail() {
  const params = useParams();
  console.log(params.id);
  return (
    <main className="text-gray-900">
      <div className="h-40 overflow-hidden md:h-80">
        <Image
          src="/img_detail_papito_mv.jpg"
          width={1920}
          height={1280}
          alt=""
          className="w-full -translate-y-1/4 object-cover"
        />
      </div>
      <div className="mx-auto grid max-w-screen-xl p-5 md:grid-cols-[70%_1fr] md:gap-x-20 md:p-10 lg:p-14">
        <article>
          <h1 className="text-3xl font-bold md:text-5xl">PAPITO パピトー</h1>
          <p className="mt-5 text-xl font-bold md:mt-10">
            ジジ抜きをベースにした推理×協力ゲーム！
          </p>
          <div className="md:mt-15 mt-10 overflow-hidden rounded-md lg:mt-20">
            <Image
              src="/img_detail_papito_01.png"
              width={1920}
              height={1280}
              alt=""
              className=""
            />
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold">あらすじ</h3>
            <p className="mt-5 leading-relaxed md:leading-loose">
              『Show Must Go On!!』
              <br />
              ぬいぐるみたちのサーカス「パピトー」は、巷で一躍有名になっていた。
              <br />
              ある日、ショーの本番開始前に厄介ファンたちにぬいぐるみがさらわれてしまった！
              <br />
              しかも、どのぬいぐるみたちがさらわれたのかわからない・・！？
              <br />
              大急ぎで座長によって生み出された“マジカルパペット”が欠員をカバーすることになったが、数は限られている。
              <br />
              あなたたちはサーカスマネージャーとして、無事にショーを終えることはできるだろうか？
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold">あらすじ</h3>
            <p className="mt-5 leading-loose">
              『Show Must Go On!!』
              <br />
              ぬいぐるみたちのサーカス「パピトー」は、巷で一躍有名になっていた。
              <br />
              ある日、ショーの本番開始前に厄介ファンたちにぬいぐるみがさらわれてしまった！
              <br />
              しかも、どのぬいぐるみたちがさらわれたのかわからない・・！？
              <br />
              大急ぎで座長によって生み出された“マジカルパペット”が欠員をカバーすることになったが、数は限られている。
              <br />
              あなたたちはサーカスマネージャーとして、無事にショーを終えることはできるだろうか？
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-lg font-bold">あらすじ</h3>
            <p className="mt-5 leading-loose">
              『Show Must Go On!!』
              <br />
              ぬいぐるみたちのサーカス「パピトー」は、巷で一躍有名になっていた。
              <br />
              ある日、ショーの本番開始前に厄介ファンたちにぬいぐるみがさらわれてしまった！
              <br />
              しかも、どのぬいぐるみたちがさらわれたのかわからない・・！？
              <br />
              大急ぎで座長によって生み出された“マジカルパペット”が欠員をカバーすることになったが、数は限られている。
              <br />
              あなたたちはサーカスマネージャーとして、無事にショーを終えることはできるだろうか？
            </p>
          </div>
        </article>
        <aside className="sticky top-5">
          <Button
            link="https://debug-monkeys.booth.pm/items/4744698"
            blank={true}
          >
            販売ページ
          </Button>
          <dl className="mt-10">
            <dt className="font-bold">ゲームデザイン</dt>
            <dd>デバッグモンキーズ</dd>
          </dl>
        </aside>
      </div>
    </main>
  );
}
