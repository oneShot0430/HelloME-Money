import React from "react";
import styles from "./getStarted.module.css";

const GetStarted = () => {
  return(
    <div className={styles.container}>
      <div className={styles.coins}>
        <div className={styles.bitcoin}>
          <img src="/images/Bitcoin.svg" alt="Bitcoin" />
        </div>
        <div className={styles.cardano}>
          <img src="/images/Cardano.svg" alt="Cardano" />
        </div>
        <div className={styles.ethereum}>
          <img src="/images/Ethereum.svg" alt="Ethereum" />
        </div>
      </div>
      <div className={styles.contain}>
        <div className={styles.exchange}>
          <button className={styles.exchange_button}>Crypto Exchange</button>
        </div>
        <div className={styles.description}>
          <p>Explore the world of cryptocurrency with HelloMe</p> 
          <p>Money's crypto exchange.</p> 
          <p>Buy, sell, and trade various cryptocurrencies securely,</p>
          <span>all within the </span>
          <span className={styles.special_letter}>HelloMe Money </span>
          <span>platform.</span>
        </div>
        <div className={styles.start}>
          <button className={styles.start_button}>
            <p>Get Started</p>
            <img src="images/CryptoExchange.svg" alt="crypto exchange" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;