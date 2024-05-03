"use client";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">ページにエラーが発生しました</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
