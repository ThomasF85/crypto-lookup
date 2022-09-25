import styles from "./CryptoList.module.css";

function CryptoList({ cryptos, toggleBookmark }) {
  return (
    <ul className={styles.list}>
      {cryptos.map((crypto) => (
        <li key={crypto.symbol} className={styles.item}>
          <button
            className={`${styles.bookmark}${
              crypto.bookmarked ? " " + styles["bookmark--active"] : ""
            }`}
            aria-label="bookmark"
            type="button"
            onClick={() => toggleBookmark(crypto.symbol)}
          >
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="currentcolor"
            >
              <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
            </svg>
          </button>
          <p className={styles.symbol}>{crypto.symbol}</p>
          <p>USDT {parseFloat(crypto.price)}</p>
        </li>
      ))}
    </ul>
  );
}

export default CryptoList;
