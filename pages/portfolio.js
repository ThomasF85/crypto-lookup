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

    setCryptos(
      currentCryptos.map((crypto) => ({ ...crypto, bookmarked: false }))
    );
  }

  useEffect(() => {
    fetchPrices();
  }, []);

  function toggleBookmark(symbol) {
    setCryptos((previousCryptos) =>
      previousCryptos.map((crypto) =>
        crypto.symbol === symbol
          ? {
              ...crypto,
              bookmarked: !crypto.bookmarked,
            }
          : crypto
      )
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Portfolio" />
      <main className={styles.main}>
        <h2>Page is under construction</h2>
      </main>
      <Navigation />
    </div>
  );
}
