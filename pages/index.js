import Head from "next/head";
import { useEffect, useState } from "react";
import CryptoList from "../components/cryptolist/CryptoList";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [cryptos, setCryptos] = useState([]);

  async function fetchPrices() {
    const response = await fetch("https://api.binance.com/api/v3/ticker/price");
    const data = await response.json();

    const currentCryptos = data
      .filter((ticker) => ticker.symbol.endsWith("USDT"))
      .map((crypto) => ({ ...crypto, symbol: crypto.symbol.slice(0, -4) }));

    setCryptos(currentCryptos);
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto lookup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Crypto lookup" />
      <main className={styles.main}>
        <CryptoList cryptos={cryptos} />
      </main>
      <Navigation />
    </div>
  );
}
