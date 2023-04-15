import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Navbar from "@/components/Navbar";

import HomePageBody from "@/components/HomePageBody";

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
  return {
    props: { data },
  };
}

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Navbar />
      <HomePageBody data={data} />
    </>
  );
};

export default index;
