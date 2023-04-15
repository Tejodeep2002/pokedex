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

  const paths = data.pokemons.map((pokemon) => {
    return {
      params: { slug: `${pokemon.name}+${pokemon.id}` },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const query = context.params.slug.split("+");

  const pokemonName = query[0];
  const pokemonId = query[1];

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query pokemon($id: String, $name: String) {
        pokemon(id: $id, name: $name) {
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
      "id": pokemonId,
      "name": pokemonName
    },
  });


  return {
    props: { data },
    revalidate: 1,
  };
}

const slug = ({ data }) => {

  console.log(data)
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Navbar />
      <DetailsBody data={data.pokemon} />
    </>
  );
};

export default slug;
