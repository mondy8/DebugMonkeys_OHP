import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import parse from "html-react-parser";
import StatusButton from "@/app/_components/StatusButton";
import Spinner from "@/app/_components/Spinner";
import { client } from "@/libs/client";
import { details } from "@/types/cms-types";

// TODO: stickyの設定
// TODO: #faqがついていた時「よくある質問」にスクロールする

type Props = {
  params: { game: string };
};

export default async function GameDetail({ params }: Props) {
  try {
    const data: details = await client.get({
      endpoint: `details/${params.game}`,
    });

    return (
      <main>
        <Suspense fallback={<Spinner />}>
          {data.headerImg && (
            <div className="h-40 overflow-hidden md:h-72">
              <Image
                src={data.headerImg.url}
                width={data.headerImg.width}
                height={data.headerImg.height}
                alt="ヘッダー画像"
                className="w-full -translate-y-1/4 object-cover"
              />
            </div>
          )}
          <div className="mx-auto grid max-w-screen-xl p-5 pt-8 md:grid-cols-[70%_1fr] md:gap-x-20 md:p-10 lg:p-14">
            <article className="prose w-full prose-h2:text-3xl prose-img:rounded-md lg:prose-h2:text-4xl">
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
                    <dd>{data.players}</dd>
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
                    className="inline-block font-bold underline hover:no-underline"
                    target="_blank"
                  >
                    説明書を読む
                    <Image
                      src="/common/icon_external.png"
                      width={20}
                      height={20}
                      alt="別窓でPDFを開くリンク"
                      className="mb-1 ml-1 inline-block"
                    />
                  </a>
                </div>
              )}
            </aside>
          </div>
        </Suspense>
      </main>
    );
  } catch (error) {
    console.error(error);
    notFound();
  }
}
