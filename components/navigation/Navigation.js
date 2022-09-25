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
            currentRoute === "/bookmarked"
              ? " " + styles["list-item--active"]
              : ""
          }`}
        >
          <Link href="/bookmarked">
            <a className={styles.button}>
              <svg className={styles.icon} viewBox="0 0 24 24">
                <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
              </svg>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
