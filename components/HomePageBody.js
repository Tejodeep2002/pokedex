import React, { useEffect, useState } from "react";
import PokemonShow from "@/components/PokemonShow";
import Link from "next/link";

const HomePageBody = ({ data }) => {
  const [pokemonData, setPokemonData] = useState(data.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit, setPageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const itemsPerPage = 20;
  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const records = pokemonData.slice(firstPostIndex, lastPostIndex);

  // const noOfPages = Math.ceil(pokemonData.length / recordsPerPage);
  const pages = [];
  for (let i = 1; i <= Math.ceil(pokemonData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-white font-bold text-[3rem]">
          <h1>Pokemon</h1>
        </div>
        <div className="w-9/12 bg-white rounded-3xl p-8 justify-evenly flex flex-wrap gap-1">
          {records.map((items, index) => (
            <Link href={`/details/${items.name}+${items.id}`} key={items.id}>
              <PokemonShow pokedata={items} keys={items.id} />
            </Link>
          ))}
        </div>

        {/* Pagination section */}
        <span className="mt-4 font-bold text-2xl">Page No - {currentPage}</span>
        <div className="my-8 gap-3 flex">
          <button
            className="bg-blue-500 rounded-none text-white p-2 text-xl"
            onClick={() => handlePrev()}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
          {pages.map((number, index) => {
            if (
              number < maxPageNumberLimit + 1 &&
              number > minPageNumberLimit
            ) {
              return (
                <button
                  className={` bg-blue-500 rounded-none  p-2 text-xl page-link ${
                    currentPage === number ? "bg-white text-blue-600 font-bold"
                      : null
                  }`}
                  key={index}
                  onClick={() => setCurrentPage(parseInt(number))}
                >
                  {number}
                </button>
              );
            } else {
              return null;
            }
          })}

          <button
            className="bg-blue-500 rounded-none text-white p-2 text-xl"
            onClick={() => handleNext()}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePageBody;
