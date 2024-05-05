import Image from "next/image";
import StatusButton from "@/app/_components/StatusButton";
import parse from "html-react-parser";
import { client } from "@/libs/client";
import { notFound } from "next/navigation";
import Link from "next/link";

// TODO: gameの型定義をmicroCMSのAPIレスポンスに合わせて定義
// TODO: suspenceの設定
// TODO: stickyの設定

export default async function GameDetail({
  params,
}: {
  params: { game: string };
}) {
  try {
    const data = await client.get({
      endpoint: `details/${params.game}`,
    });

    return (
      <main>
        {data.headerImg && (
          <div className="h-40 overflow-hidden md:h-72">
            <Image
              src={data.headerImg.url}
              width={data.headerImg.width}
              height={data.headerImg.height}
              alt={data.headerImg.alt ? data.headerImg.alt : ""}
              className="w-full -translate-y-1/4 object-cover"
            />
          </div>
        )}
        <div className="mx-auto grid max-w-screen-xl p-5 md:grid-cols-[70%_1fr] md:gap-x-20 md:p-10 lg:p-14">
          <article className="prose prose-img:rounded-md w-full">
            <h2 className="text-3xl font-bold md:text-5xl">{data.title}</h2>
            <p className="mt-5 text-xl font-bold md:mt-10">{data.lead}</p>
            {parse(data.aritcle)}
          </article>
          <aside className="sticky top-5 mt-10 text-gray-800 md:mt-0">
            <StatusButton gameData={data} />
            <dl>
              {data.designer && (
                <>
                  <dt className="mt-6 font-bold">ゲームデザイン</dt>
                  <dd>{data.designer}</dd>
                </>
              )}
              {data.artwork && (
                <>
                  <dt className="mt-6 font-bold">アートワーク</dt>
                  <dd>{data.artwork}</dd>
                </>
              )}
              {data.players && (
                <>
                  <dt className="mt-6 font-bold">プレイ人数</dt>
                  <dd>{data.people}</dd>
                </>
              )}
              {data.time && (
                <>
                  <dt className="mt-6 font-bold">プレイ時間</dt>
                  <dd>{data.time}</dd>
                </>
              )}
              {data.age && (
                <>
                  <dt className="mt-6 font-bold">対象年齢</dt>
                  <dd>{data.age}</dd>
                </>
              )}
              {data.size && (
                <>
                  <dt className="mt-6 font-bold">サイズ（mm）</dt>
                  <dd>{data.size}</dd>
                </>
              )}
              {data.createdDate && (
                <>
                  <dt className="mt-6 font-bold">制作年</dt>
                  <dd>{data.createdDate}</dd>
                </>
              )}
            </dl>
            {data.hasInstruction && (
              <div className="mt-6">
                <a
                  href={`/pdf/instruction_${data.id}.pdf`}
                  className="flex items-center font-bold underline"
                  target="_blank"
                >
                  説明書を読む
                  <Image
                    src="/common/icon_external.png"
                    width={20}
                    height={20}
                    alt="別窓でPDFを開くリンク"
                    className="ml-1 inline-block"
                  />
                </a>
              </div>
            )}
          </aside>
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
