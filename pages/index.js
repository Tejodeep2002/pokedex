import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Navbar from "@/components/Navbar";
import PokemonShow from "@/components/PokemonShow";
import Link from "next/link";

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query pokemons($first: Int!) {
        pokemons(first: $first) {
          id
          number
          name
          weight {
            minimum
            maximum
          }
          height {
            minimum
            maximum
          }
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }
    `,
    variables: {
      first: 510,
    },
  });

  console.log(data);

  return {
    props: { data },
  };
}



const index = ({ data }) => {
  const [pokemonData, setPokemonData] = useState(data.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [PageNumberLimit, setPageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1);
  const recordsPerPage = 20;
  const lastPostIndex = currentPage * recordsPerPage;
  const firstPostIndex = lastPostIndex - recordsPerPage;
  const records = pokemonData.slice(firstPostIndex, lastPostIndex);

  const noOfPages = Math.ceil(pokemonData.length / recordsPerPage);
  const pages = [];
  for (let i = 1; i <= noOfPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % maxPageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - PageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - PageNumberLimit);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 >= maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + PageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + PageNumberLimit);
    }
  };

  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className="">
        <Navbar />
        <div className="flex flex-col items-center justify-center">
          <div className="text-white font-bold text-[3rem]">
            <h1>Pokemon</h1>
          </div>
          <div className="w-9/12 bg-white rounded-3xl p-8 justify-evenly flex flex-wrap gap-1">
            {records.map((items, index) => (
              <Link href={`/details/${items.name}`} key={items.id}>
                <PokemonShow pokedata={items} keys={items.id} />
              </Link>
            ))}
          </div>

          {/* Pagination section */}
          <span className="mt-4 font-bold text-2xl">
            Page No - {currentPage}
          </span>
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
                number >= minPageNumberLimit
              ) {
                return (
                  <button
                    className={` bg-blue-500 rounded-none text-white p-2 text-xl page-link ${
                      currentPage === number
                        ? "bg-white text-blue-500 font-bold"
                        : null
                    }`}
                    key={index}
                    onClick={() => setCurrentPage(number)}
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
      </div>
    </>
  );
};

export default index;
