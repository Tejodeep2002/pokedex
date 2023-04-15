import React, { useState } from 'react'
import { useRouter } from "next/router";
import PokemonDetails from './PokemonDetails';

const DetailsBody = ({data}) => {
  const router = useRouter();
  let query = router.query.Slug;
  
    console.log("Details.body",query)
  const [pokemonData, setPokemonData] = useState(data.pokemons);
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

  // const [PageNumberLimit, setPageNumberLimit] = useState(1);
  // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  // const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  // const recordsPerPage = 20;
  // const lastPostIndex = currentPage * recordsPerPage;
  // const firstPostIndex = lastPostIndex - recordsPerPage;
  // const records = pokemonData.slice(firstPostIndex, lastPostIndex);

  // const noOfPages = Math.ceil(pokemonData.length / recordsPerPage);
  // const pages = [];
  // for (let i = 1; i <= noOfPages; i++) {
  //   pages.push(i);
  // }

  // useEffect(()=>{
  //   const details = pokemonData.filter((items,index)=>items.name===query);
  //   setDetails(...details)

  // },[pokemonData])

  const handlePrev = () => {
    if (details.number - 1 !== 0) {
      window.location.href = `/details/${prevDetails.name}`;
    }

    // if ((currentPage - 1) % maxPageNumberLimit === 0) {
    //   setMaxPageNumberLimit(maxPageNumberLimit - PageNumberLimit);
    //   setMinPageNumberLimit(minPageNumberLimit - PageNumberLimit);
    // }
  };

  const handleNext = () => {
    if (pokemonData.length !== details.number) {
      window.location.href = `/details/${nextDetails.name}`;
    }
  };
  //   if (currentPage + 1 >= maxPageNumberLimit) {
  //     setMaxPageNumberLimit(maxPageNumberLimit + PageNumberLimit);
  //     setMinPageNumberLimit(minPageNumberLimit + PageNumberLimit);
  //   }
  // };

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
  )
}

export default DetailsBody
