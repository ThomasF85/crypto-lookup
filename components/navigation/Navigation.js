import { useState } from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {
  const [page, setPage] = useState("home");
  const router = useRouter();
  const currentRoute = router.pathname;
  console.log(currentRoute);
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li
          className={`${styles["list-item"]}${
            currentRoute === "/" ? " " + styles["list-item--active"] : ""
          }`}
        >
          <Link href="/">
            <a className={styles.button}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
              </svg>
            </a>
          </Link>
        </li>
        <li
          className={`${styles["list-item"]}${
            currentRoute === "/portfolio"
              ? " " + styles["list-item--active"]
              : ""
          }`}
        >
          <Link href="/portfolio">
            <a className={styles.button}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64" />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
