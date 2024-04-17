import React from "react";
import styles from "./secureTransaction.module.css";

const SecureTransaction = () => {
  return(
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title}>
          <p>Secure Transaction:</p>
          <img alt="safe-guard" src="/images/safe-guard.svg" className="w-[50px] h-[50px]"/>
        </div>
        <div className={styles.subText}>Explore the world of cryptocurrency with confidence on HelloMe Money's secure platform. Buy, sell, and trade various cryptocurrencies knowing that your transactions are protected by advanced security measures.</div>
      </div>
      <div className={styles.image}>
        <img src="/images/Cardino.jpg" alt="cardino-blockchain" className="opacity-100 z-10 w-full h-[368px]"></img>
      </div>
    </div>
  );
}

export default SecureTransaction;