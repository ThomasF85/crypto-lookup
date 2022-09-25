import Head from "next/head";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import styles from "../styles/Portfolio.module.css";

export default function Portfolio() {
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
