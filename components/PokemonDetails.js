import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Pokemondata = require("./Data");

const PokemonDetails = ({ data }) => {
  const [pokeInfo, setPokeInfo] = useState(data);
  const [showEvolution, setShowEvolution] = useState(false);
  const [evolutionTrack, setEvolutionTrack] = useState(data.evolutions);
  return (
    <>
      <div className="font-bold text-3xl">
        {pokeInfo.name} #{pokeInfo.number}
      </div>
      <div className="w-full p-7 flex flex-wrap justify-evenly">
        <Image
          src={pokeInfo.image}
          alt={"pokeon image"}
          height={400}
          width={400}
          className="rounded-3xl w-[400px] h-[400px]"
        />
        <div className=" w-[40%] flex flex-col justify-evenly">
          <div className="  h-40 p-4 bg-blue-500 flex flex-col flex-wrap rounded-2xl text-[1.2rem] border-black border-2">
            <span className="text-white  font-medium">Height</span>
            <span>{pokeInfo.height.maximum}</span>
            <span className="text-white  font-medium">Weight </span>
            <span>{pokeInfo.weight.maximum}</span>
            <span className="text-white  font-medium">Classification </span>
            <span>{pokeInfo.classification}</span>
          </div>
          <div className=" p-4 bg-blue-500 flex flex-col flex-wrap justify-between rounded-2xl text-[1.2rem] text-white gap-4 border-black border-2">
            <span className="font-medium">Type</span>
            <span className="flex justify-start">
              {pokeInfo.types.map((items, index) =>
                items === "Grass" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-green-600 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Poison" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-violet-600 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Fire" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-amber-600 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Water" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-cyan-600 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Ice" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-cyan-300 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Flying" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-red-300 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Psychic" ? (
                  <span className="w-24 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg">
                    {items}
                  </span>
                ) : items === "Electric" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-yellow-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fighting" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-slate-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fairy" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-red-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Bug" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Steel" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Ground" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Rock" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : null
              )}
            </span>
          </div>
        </div>

        <div className=" w-full mt-12 flex flex-wrap">
          <div className=" w-[50%] p-4  flex flex-col flex-wrap gap-3 text-[1.2rem] ">
            <span className="text-2xl font-medium">Weakness</span>
            <span className="flex justify-start flex flex-wrap gap-3">
              {pokeInfo.weaknesses.map((items, index) =>
                items === "Grass" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-green-600 rounded  flex justify-center items-center text-lg border-black border-2">
                    {items}
                  </span>
                ) : items === "Poison" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-violet-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fire" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-amber-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Water" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-cyan-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Ice" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-cyan-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Flying" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-red-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Psychic" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Electric" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-yellow-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fighting" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-slate-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fairy" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-red-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Bug" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Steel" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Ground" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Rock" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : null
              )}
            </span>
          </div>

          <div className=" w-[50%] p-4  flex flex-col flex-wrap gap-3 text-[1.2rem] ">
            <span className="text-2xl font-medium">resistant</span>
            <span className="flex justify-start flex flex-wrap gap-3">
              {pokeInfo.resistant.map((items, index) =>
                items === "Grass" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-green-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Poison" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-violet-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fire" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-amber-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Water" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-cyan-600 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Ice" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-cyan-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Flying" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-red-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Psychic" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Electric" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-yellow-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fighting" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-slate-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Fairy" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-red-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Bug" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Steel" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Ground" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : items === "Rock" ? (
                  <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                    {items}
                  </span>
                ) : null
              )}
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center mt-6">
        <div className="">
          <button
            className="  p-4 bg-blue-500 border-black border-2 rounded-3xl text-white font-bold"
            onClick={() => setShowEvolution(!showEvolution)}
          >
            Show Evolution
          </button>
        </div>
        {showEvolution === true ? (
          <div className="w-[51rem] h-[51rem] p-4 bg-blue-600 flex flex-col items-center gap-8 ">
            <span className="text-white font-semibold text-2xl">Evolution</span>
            <div className="flex gap-4">
              {
                evolutionTrack!==null ? (
                  evolutionTrack.map((pokedata, index) => (
                    <Link href={`${pokedata.name}`}>
                    <div
                      className="flex flex-col items-center gap-2 text-white text-lg font-bold"
                      keys={pokedata.id}
                    >
                      <div className="w-[10rem] h-[10rem] rounded-full border-black border-4 bg-white flex justify-center items-center">
                        <Image
                          src={pokedata.image}
                          alt={"Pokemion Image"}
                          height={150}
                          width={150}
                          className="scale-75"
                        />
                      </div>
    
                      <span>
                        {pokedata.name} #{pokedata.number}
                      </span>
    
                      <span className="flex justify-start">
                        {pokedata.types.map((items, index) =>
                          items === "Grass" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-green-600 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Poison" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-violet-600 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Fire" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-amber-600 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Water" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-cyan-600 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Ice" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-cyan-300 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Flying" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-red-300 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Psychic" ? (
                            <span className="w-24 h-6 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg">
                              {items}
                            </span>
                          ) : items === "Electric" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-yellow-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Fighting" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-slate-300 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Fairy" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-red-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Bug" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Steel" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Ground" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : items === "Rock" ? (
                            <span className="w-28 h-8 mx-2 rounded-lg bg-pink-400 rounded  flex justify-center items-center text-lg border-black border-2 ">
                              {items}
                            </span>
                          ) : null
                        )}
                      </span>
                    </div>
                    </Link>
                  ))
                  
                ):<span>This is the Maximum State. No Next Evolution</span>
              
              
              
              }
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PokemonDetails;