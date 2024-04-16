import React from "react";
import styles from "./convenientTrading.module.css";

const ConvenientTrading = () => {
  return(
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/images/TradingCoin.jpg" alt="Trading Coin" className="opacity-100 z-10"></img>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <p>Convenient Trading:</p>
          <img alt="trading" src="/images/trade.svg" className="w-[43.75px] h-[34.38px]"/>
        </div>
        <div className={styles.subText}>Trade cryptocurrencies seamlessly within the HelloMe Money platform. Our user-friendly interface and intuitive tools make buying, selling, and trading digital assets a hassle-free experience.</div>
      </div>
    </div>
  );
}

export default ConvenientTrading;