import Head from "next/head";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import { GlobalStyles } from '../styles/globals';
import { Layout } from '../styles/layout';

export default function Home() {
  return(
    <>
      {/* Head Igual do html */}
      <Head>
        <title>Crypto Store</title>
      </Head>

      <GlobalStyles />

      <Header />
      <Layout>
        <Carousel />
      </Layout>
    </>
  )
}