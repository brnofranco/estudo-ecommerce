import Head from "next/head";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import { GlobalStyles } from '../styles/globals';
import { Layout } from '../styles/layout';
import { Products } from "../components/Products";

export default function Shop() {
  return(
    <>
      <Head>
        <title>Shop</title>
      </Head>

      <GlobalStyles />

      <Header />

      <Products />
    </>
  )
}