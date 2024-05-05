import Image from "next/image";
import Button from "../../_components/Button";
import parse from "html-react-parser";
import { client } from "@/libs/client";
import { notFound } from "next/navigation";

export default async function GameDetail({
  params,
}: {
  params: { game: string };
}) {
  try {
    const data = await client.get({
      endpoint: `details/${params.game}`,
    });
    console.log(data);

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
          <article className="prose prose-img:rounded-md">
            <h2 className="text-3xl font-bold md:text-5xl">{data.title}</h2>
            <p className="mt-5 text-xl font-bold md:mt-10">{data.lead}</p>
            {parse(data.aritcle)}
          </article>
          <aside className="sticky top-5 text-gray-800">
            <Button
              link="https://debug-monkeys.booth.pm/items/4744698"
              blank={true}
            >
              販売ページ
            </Button>
            <dl className="mt-10">
              <dt className="font-bold">ゲームデザイン</dt>
              <dd>{data.designer}</dd>
            </dl>
          </aside>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
