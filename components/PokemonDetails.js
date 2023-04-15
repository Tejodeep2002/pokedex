import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Pokemondata = require("./Data");

const PokemonDetails = ({ data }) => {
  const [pokeInfo, setPokeInfo] = useState(data);
  const [showEvolution, setShowEvolution] = useState(false);
  const [evolutionTrack, setEvolutionTrack] = useState(data.evolutions);
  return (
    <div classname={`${showEvolution === true ? "blur-md" : ""}`}>
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
              {pokeInfo.types.map((items, index) => (
                <span
                  key={index}
                  className={`w-24 h-8 mx-2 rounded-lg flex justify-center items-center text-lg border-black border-2
                  ${
                    items === "Grass"
                      ? "bg-green-600"
                      : items === "Poison"
                      ? "bg-violet-600"
                      : items === "Fire"
                      ? "bg-amber-600"
                      : items === "Water"
                      ? "bg-cyan-600"
                      : items === "Ice"
                      ? "bg-cyan-300"
                      : items === "Flying"
                      ? "bg-red-300"
                      : items === "Psychic"
                      ? "bg-pink-400"
                      : items === "Electric"
                      ? "bg-yellow-400"
                      : items === "Fighting"
                      ? "bg-slate-300"
                      : items === "Fairy"
                      ? "bg-red-700"
                      : items === "Bug"
                      ? "bg-pink-400"
                      : items === "Steel"
                      ? "bg-gray-400"
                      : items === "Ground"
                      ? "bg-gray-500"
                      : items === "Rock"
                      ? "bg-yellow-400"
                      : ""
                  } `}
                >
                  {items}
                </span>
              ))}
            </span>
          </div>
        </div>

        <div className=" w-full mt-12 flex flex-wrap">
          <div className=" w-[50%] p-4  flex flex-col flex-wrap gap-3 text-[1.2rem] ">
            <span className="text-2xl font-medium">Weakness</span>
            <span className="flex justify-start flex flex-wrap gap-3">
              {pokeInfo.weaknesses.map((items, index) => (
                <span
                  key={index}
                  className={`w-24 h-8 mx-2 rounded-lg flex justify-center items-center text-lg border-black border-2
                ${
                  items === "Grass"
                    ? "bg-green-600"
                    : items === "Poison"
                    ? "bg-violet-600"
                    : items === "Fire"
                    ? "bg-amber-600"
                    : items === "Water"
                    ? "bg-cyan-600"
                    : items === "Ice"
                    ? "bg-cyan-300"
                    : items === "Flying"
                    ? "bg-red-300"
                    : items === "Psychic"
                    ? "bg-pink-400"
                    : items === "Electric"
                    ? "bg-yellow-400"
                    : items === "Fighting"
                    ? "bg-slate-300"
                    : items === "Fairy"
                    ? "bg-red-700"
                    : items === "Bug"
                    ? "bg-pink-400"
                    : items === "Steel"
                    ? "bg-gray-400"
                    : items === "Ground"
                    ? "bg-gray-500"
                    : items === "Rock"
                    ? "bg-yellow-400"
                    : ""
                } `}
                >
                  {items}
                </span>
              ))}
            </span>
          </div>

          <div className=" w-[50%] p-4  flex flex-col flex-wrap gap-3 text-[1.2rem] ">
            <span className="text-2xl font-medium">resistant</span>
            <span className="flex justify-start flex flex-wrap gap-3">
              {pokeInfo.resistant.map((items, index) => (
                <span
                  key={index}
                  className={`w-24 h-8 mx-2 rounded-lg flex justify-center items-center text-lg border-black border-2
                ${
                  items === "Grass"
                    ? "bg-green-600"
                    : items === "Poison"
                    ? "bg-violet-600"
                    : items === "Fire"
                    ? "bg-amber-600"
                    : items === "Water"
                    ? "bg-cyan-600"
                    : items === "Ice"
                    ? "bg-cyan-300"
                    : items === "Flying"
                    ? "bg-red-300"
                    : items === "Psychic"
                    ? "bg-pink-400"
                    : items === "Electric"
                    ? "bg-yellow-400"
                    : items === "Fighting"
                    ? "bg-slate-300"
                    : items === "Fairy"
                    ? "bg-red-700"
                    : items === "Bug"
                    ? "bg-pink-400"
                    : items === "Steel"
                    ? "bg-gray-400"
                    : items === "Ground"
                    ? "bg-gray-500"
                    : items === "Rock"
                    ? "bg-yellow-400"
                    : ""
                } `}
                >
                  {items}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center mt-6">
        <div className="">
          <button
            className={`p-4 ${
              showEvolution === true ? "bg-blue-800" : ""
            } bg-blue-500 border-black border-2 rounded-3xl text-white font-bold`}
            onClick={() => setShowEvolution(!showEvolution)}
            disabled={showEvolution === true ? "true" : ""}
          >
            Show Evolution
          </button>
        </div>
        {showEvolution === true ? (
          <div
            className={`z-10 absolute top-[25rem] w-[40rem] h-[27rem] p-4 bg-sky-700 flex flex-col items-center gap-8 rounded-3xl `}
          >
            <span className="text-white font-semibold text-2xl">Evolution</span>
            <div className="flex gap-4">
              {evolutionTrack !== null ? (
                evolutionTrack.map((pokedata, index) => (
                  <div className="flex flex-col items-center gap-2 text-white text-lg font-bold" key={index}>
                    <div className="w-[10rem] h-[10rem] rounded-full border-black border-4 bg-white flex justify-center items-center ">
                      <Image
                        src={pokedata.image}
                        alt={"Pokemion Image"}
                        height={150}
                        width={150}
                        className="scale-75 w-[10rem] h-[10rem] rounded-full"
                      />
                    </div>

                    <span>
                      {pokedata.name} #{pokedata.number}
                    </span>

                    <span className="flex justify-start">
                      {pokedata.types.map((items, index) => (
                        <span
                          key={index}
                          className={`w-24 h-8 mx-2 rounded-lg flex justify-center items-center text-lg border-black border-2
                          ${
                            items === "Grass"
                              ? "bg-green-600"
                              : items === "Poison"
                              ? "bg-violet-600"
                              : items === "Fire"
                              ? "bg-amber-600"
                              : items === "Water"
                              ? "bg-cyan-600"
                              : items === "Ice"
                              ? "bg-cyan-300"
                              : items === "Flying"
                              ? "bg-red-300"
                              : items === "Psychic"
                              ? "bg-pink-400"
                              : items === "Electric"
                              ? "bg-yellow-400"
                              : items === "Fighting"
                              ? "bg-slate-300"
                              : items === "Fairy"
                              ? "bg-red-700"
                              : items === "Bug"
                              ? "bg-pink-400"
                              : items === "Steel"
                              ? "bg-gray-400"
                              : items === "Ground"
                              ? "bg-gray-500"
                              : items === "Rock"
                              ? "bg-yellow-400"
                              : ""
                          } `}
                        >
                          {items}
                        </span>
                      ))}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-white font-bold flex justify-center items-center">
                  <h2>This is the Maximum State. No Next Evolution</h2>
                </div>
              )}
            </div>
            <button
              className="  p-3 bg-red-500 border-black border-2 rounded-3xl text-white font-bold"
              onClick={() => setShowEvolution(!showEvolution)}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PokemonDetails;
