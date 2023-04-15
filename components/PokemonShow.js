import Image from "next/image";
import React, { useEffect } from "react";

const PokemonShow = ({ pokedata }) => {
  const data = pokedata;

  return (
    <div className=" w-[200px]  flex flex-col p-2 ">
      <div className="w-[180px] h-[180px] flex items-center justify-center">
        <Image
          src={data.image}
          alt="Picture of the author"
          height={150}
          width={150}
          className=" w-[180px] h-[180px] object-contain"
        />
      </div>

      <div className=" flex flex-col mt-3">
        <span>#{data.number}</span>
        <span className="font-bold">{data.name}</span>
        <div className="flex">
          {data.types.map((types, index) => (
            <div
              className=" w-16 h-4 bg-green-500 m-1 flex item-center justify-center text-xs rounded text-white"
              key={index}
            >
              {types}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonShow;
