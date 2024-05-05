// NOTE: SCでデータを取得しCCに渡す
import { Suspense } from "react";
import HeaderClient from "./HeaderClient";
import Spinner from "./Spinner";
import { client } from "@/libs/client";

export default async function Header() {
  const data = await client.get({
    endpoint: `details/`,
  });
  return (
    <Suspense fallback={<Spinner />}>
      <HeaderClient data={data} />
    </Suspense>
  );
}
