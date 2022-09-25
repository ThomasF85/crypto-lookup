import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "../../styles/Coin.module.css";

export default function BTC() {
  const [priceChange, setPriceChange] = useState({});
  const router = useRouter();
  const { coin } = router.query;

  const coinUpperCase = coin ? coin.toUpperCase() : "-";

  async function fetchPriceChange() {
    if (!router.isReady) {
      return;
    }
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/24hr?symbol=${coinUpperCase}USDT`
    );
    const priceChange = await response.json();

    setPriceChange(priceChange);
  }

  useEffect(() => {
    fetchPriceChange();
  }, [coin]);

  const priceChangePercent = priceChange.priceChangePercent
    ? parseFloat(priceChange.priceChangePercent)
    : 0;
  const openPrice = priceChange.openPrice
    ? parseFloat(priceChange.openPrice)
    : 0;
  const lastPrice = priceChange.lastPrice
    ? parseFloat(priceChange.lastPrice)
    : 0;

  return (
    <div className={styles.container}>
      <Head>
        <title>{coinUpperCase}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={coinUpperCase} />
      <main className={styles.main}>
        <section className={styles.coinCard}>
          <h2>Price Change 24 hrs</h2>
          <p>Current price: USDT {lastPrice}</p>
          <p>Price 24 hrs ago: USDT {openPrice}</p>
          <p
            className={
              styles["price-change"] +
              (priceChangePercent > 0
                ? " " + styles["price-change--positive"]
                : "")
            }
          >
            Price Change:{" "}
            {priceChangePercent > 0
              ? "+ " + priceChangePercent
              : priceChangePercent}
            %
          </p>
          <Link href="/">
            <a>Home</a>
          </Link>
        </section>
      </main>
    </div>
  );
}
