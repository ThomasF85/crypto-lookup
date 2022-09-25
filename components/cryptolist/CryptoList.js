import styles from "./CryptoList.module.css";

function CryptoList({ cryptos }) {
  return (
    <ul className={styles.list}>
      {cryptos.map((crypto) => (
        <li key={crypto.symbol} className={styles.item}>
          <p className={styles.symbol}>{crypto.symbol}</p>
          <p>USDT {parseFloat(crypto.price)}</p>
        </li>
      ))}
    </ul>
  );
}

export default CryptoList;
