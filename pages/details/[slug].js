import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
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

  const paths =  data.pokemons.map((pokemon) => {
    return {
      params: { slug: pokemon.name },
    };
  });

  console.log(paths)

  return {
    paths: paths,
    fallback: false,
  };
}

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

const slug = ({ data }) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Navbar />
      <DetailsBody data={data.pokemons} />
    </>
  );
};

export default slug;
