import { AppMemoryGame } from './memory-game';

export function GamesScreen() {
  return (
    <>
      <header>
        <h2 className="text-stone-100 text-5xl text-center font-bold uppercase">Juegos</h2>
      </header>

      <AppMemoryGame />
    </>
  );
}
