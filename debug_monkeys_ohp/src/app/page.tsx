import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
      <p>
        ぬいぐるみのサーカス「パピトー」のマネージャーになって、みんなでショーを成功させよう！ジジ抜きをベースにした推理×協力ゲーム！
      </p>
      <p>
        2つの種族の闘いの物語ー。自身の種族の生き残りをかけた、非対称×エリアコントロール×拡大再生産の2人専用ボードゲーム！
      </p>
      <p>
        世界はゾンビウイルスに汚染された。プレイヤーたちの中にはゾンビが一人混ざっている。人間サイドはゾンビを倒せ！ゾンビは、ゲーム終了時まで生き延びろ！
      </p>
    </main>
  );
}
