import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
interface IPokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
}

interface IProps {
  pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: IProps) => {
  const sprites = Object.values(pokemon.sprites).filter(
    (item) => typeof item === "string"
  );

  return (
    <>
      <div className="w-full h-96 flex justify-center items-center">
        <Carousel className="w-72">
          <CarouselContent>
            {sprites.reverse().map((sprite, index) => (
              <CarouselItem key={index} className="justify-center flex">
                <Image
                  src={sprite}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default PokemonCard;
