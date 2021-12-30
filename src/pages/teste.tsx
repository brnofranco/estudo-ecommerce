import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { GlobalStyles } from '../styles/globals';

type Produtos = [
    {
        id: number,
        nome: string,
        preco: number
    }
]

type Quantidade = [
    {
        id: number,
        quantidade: number
    }
]

export default function Shop() {
    const [quantidade, setQuantidade] = useState<Quantidade>(Object);
    const [produtos, setProdutos] = useState<Produtos>(Object);
    
    useEffect(() => {
        fetch('/api/teste')
        .then(async (response) => {
            const data = await response.json();
            setQuantidade(data.quantidade);
            setProdutos(data.produtos);
            console.log(data);
        })
    }, [])

  return(
    <>
      <Head>
        <title>teste</title>
      </Head>

      <GlobalStyles />

      <Header />
      <table>
            {produtos.map(produto => (
                <>
                    <li>
                        {produto.nome}
                    </li>
                    <li>
                        {produto.preco}
                    </li>
                </>
            ))}
      </table>
    </>
  )
}