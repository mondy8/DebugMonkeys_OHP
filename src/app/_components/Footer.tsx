import Link from "next/link";
import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="mt-20 w-full bg-gray-500 px-10 pb-3 pt-20 lg:px-20">
      <div className="flex justify-center gap-x-10">
        <Link
          href="https://twitter.com/debug_monkeys"
          target="_blank"
          className="transition-transform hover:-translate-y-1"
        >
          <Image
            src="/common/icon_logo_x.png"
            width={20}
            height={20}
            alt="X（旧:Twitter）ロゴ"
          />
        </Link>
        <Link
          href="https://note.com/debug_monkeys"
          target="_blank"
          className="transition-transform hover:-translate-y-1"
        >
          <Image
            src="/common/icon_logo_note.png"
            width={88}
            height={20}
            alt="noteロゴ"
          />
        </Link>
      </div>
      <p className="mt-6 text-center text-xs text-white">
        © 2025 DebugMonkeys
      </p>
    </footer>
  );
}
