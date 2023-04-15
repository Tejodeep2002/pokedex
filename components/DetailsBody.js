import React, { useState } from "react";
import { useRouter } from "next/router";
import PokemonDetails from "./PokemonDetails";

const DetailsBody = ({ data }) => {
  const router = useRouter();
  const query = router.query.slug;

  console.log("Details.body", query);
  const [pokemonData, setPokemonData] = useState(data);
  const [details, setDetails] = useState(
    ...pokemonData.filter((items, index) => items.name === query)
  );

  const [prevDetails, setPrevDetails] = useState(
    ...pokemonData.filter(
      (items, index) => parseInt(items.number) === parseInt(details.number) - 1
    )
  );
  const [nextDetails, setNextDetails] = useState(
    ...pokemonData.filter(
      (items, index) => parseInt(items.number) === parseInt(details.number) + 1
    )
  );

  const handlePrev = () => {
    if (details.number - 1 !== 0) {
      window.location.href = `/details/${prevDetails.name}`;
    }
  };

  const handleNext = () => {
    if (pokemonData.length !== details.number) {
      window.location.href = `/details/${nextDetails.name}`;
    }
  };

  console.log(details);

  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-9/12 p-8 mt-12 bg-white rounded-3xl  justify-evenly flex flex-wrap ">
          <div className="w-full flex ">
            <button
              className="w-2/4 h-12 mr-1 bg-gray-400 rounded-l-2xl hover:bg-blue-500 text-white font-bold text-2xl"
              onClick={() => handlePrev()}
              // disabled={currentPage === pages[0] ? true : false}
            >
              Previous
            </button>

            <button
              className="w-2/4 h-12 ml-1 bg-gray-400 rounded-r-2xl hover:bg-blue-500 text-white font-bold text-2xl"
              onClick={() => handleNext()}
              // disabled={currentPage === pages[pages.length - 1] ? true : false}
            >
              Next
            </button>
          </div>
          <div className="w-full p-4 bg-slate-300 mt-8 flex flex-wrap flex-col justify-center items-center rounded-2xl">
            <PokemonDetails data={details} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsBody;
