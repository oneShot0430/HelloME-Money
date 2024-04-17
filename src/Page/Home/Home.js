import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

const Home = () => {
  return(
    <div className={styles.buttons}>
      <button className={`${styles.account_button} mr-16`} >
        <Link to="/cryptoexchange">Crypto Exchange</Link>
      </button>
      <button className={styles.account_button}>
        <Link to="/sme">SME</Link>
      </button>
    </div>
  );
}

export default Home;