import PokemonsList from "#/components/PokemonsList";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Pokemons</h1>
      <Suspense fallback="Loading...">
        <PokemonsList />
      </Suspense>
    </>
  );
}
