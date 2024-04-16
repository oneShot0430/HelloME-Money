import React from "react";
import styles from "./enterprise.module.css";

const Enterprise = () => {
  return(
    <div className={styles.container}>
      <div className={styles.button}>
        <button className={styles.enterprise_button}><p>SME(Small and Medium Enterprise)</p></button>
      </div>
      <div className={styles.contain}>
        <div className={styles.description}>
          <div className={styles.subText}>
            <p className={styles.title}>Tailored financial solutions for Small and Medium <br />Enterprises (SMEs) with HelloMe Money</p>
            <p className={styles.script}>Access specialized accounts, tools, and services <br />designed to meet the unique needs of your business.</p>
            <div className={styles.buttons}>
              <button className={`${styles.account_button} mr-6`} >
                Get multicurrency account
              </button>
              <button className={styles.account_button}>
                Contact Us
              </button>
              <img src="/images/Star.svg" alt="Star" className={styles.star} />
            </div>
          </div>
        </div>
        <img src="/images/SME.svg" alt="SME" className="h-full w-1/3"/>
      </div>
    </div>
  );
}

export default Enterprise;