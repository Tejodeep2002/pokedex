import React, { useState } from "react";
import { useRouter } from "next/router";
import PokemonDetails from "./PokemonDetails";
import Link from "next/link";

const DetailsBody = ({ data }) => {
  const [pokemonData, setPokemonData] = useState(data);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-9/12 p-8 mt-12 bg-white rounded-3xl  justify-evenly flex flex-wrap ">
          <Link
            href="/"
            className="w-full h-12 flex justify-center items-center mr-1 bg-gray-400 rounded-2xl hover:bg-blue-500 text-white font-bold text-2xl"
          >
            Back to Menu
          </Link>
          <div className="w-full p-4 bg-slate-300 mt-8 flex flex-wrap flex-col justify-center items-center rounded-2xl">
            <PokemonDetails data={pokemonData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBody;
