// NOTE: SCでデータを取得しCCに渡す
import { client } from "@/libs/client";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  const data = await client.get({
    endpoint: `details/`,
  });
  return (
    <HeaderClient data={data} />
  );
}
