import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "../ui/card";
import { ArrowRightIcon } from "lucide-react";

async function getPokemonsList(): Promise<{ name: string; url: string }[]> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0"
  );
  const { results } = await response.json();
  return results;
}

const PokemonsList = async () => {
  const pokemons = await getPokemonsList();

  return (
    <div className="grid grid-cols-3 gap-4">
      {pokemons.map((pokemon: any) => (
        <Card key={pokemon.name}>
          <CardHeader>
            <CardTitle className="capitalize">{pokemon.name}</CardTitle>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href={`/pokemon/${pokemon.name}`} className="gap-2">
                View Details <ArrowRightIcon size={14} />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PokemonsList;
