import PokemonCard from "#/components/PokemonCard";
import { Button } from "#/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

async function getPokemon(slug: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`);
  const data = await response.json();
  return data;
}

const PokemonPage = async ({ params }: any) => {
  const pokemon = await getPokemon(params.slug);

  return (
    <div className="p-4 border-2 rounded-lg w-[600px] mx-auto my-12">
      <Button asChild className="mb-4">
        <Link href="/" className="gap-2">
          <ArrowLeftIcon size={14} />
          Voltar
        </Link>
      </Button>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default PokemonPage;
