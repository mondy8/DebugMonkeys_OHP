type Props = {
  params: { gameID: string };
};

export default function GameDetail({ params }: Props) {
  return (
    <main>
      <h1>{params.gameID}</h1>
    </main>
  );
}
