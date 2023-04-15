import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Head from "next/head";
import PokemonDetails from "../../components/PokemonDetails";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import DetailsBody from "@/components/DetailsBody";

export async function getStaticPaths() {
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
        }
      }
    `,
    variables: {
      first: 20,
    },
  });

  const paths = data.pokemons.map((pokemon) => {
    return {
      params: { Slug: `${pokemon.name}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // const query = context.params.slug.split("+");

  // const pokemonName = query[0];
  // const pokemonId = query[1];

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
          evolutions {
            id
            number
            name
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
      }
    `,
    variables: {
      first: 1008,
    },
  });

  return {
    props: { data },
  };
}

const Slug = ({ data }) => {


  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Navbar />
      <DetailsBody data={data} />
    </>
  );
};

export default Slug;
