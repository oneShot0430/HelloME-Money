import React from "react";
import styles from "./streamlinedBanking.module.css";

const StreamlinedBanking = () => {
  return(
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="/images/Banking.svg" alt="Streamlined Banking" className="opacity-100 z-10"></img>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <p className="mr-6">Streamlined Banking</p>
          <img alt="Bank" src="/images/Bank.svg" className="w-[50px] h-[50px]"/>
        </div>
        <div className={styles.subText}>Experience seamless banking with HelloMe Money's Business Account. From managing cash flow to making international payments, our platform offers intuitive tools and features to simplify your day-to-day banking tasks. Say goodbye to complexity and hello to effortless financial management.</div>
      </div>
    </div>
  );
}

export default StreamlinedBanking;