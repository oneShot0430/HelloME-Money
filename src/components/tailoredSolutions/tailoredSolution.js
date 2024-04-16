import React from "react";
import styles from "./tailoredSolution.module.css";

const TailoredSolutions = () => {
  return(
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title}>
          <p className="mr-4">Tailored Solutions</p>
          <img alt="Tele" src="/images/Tele.svg" className="w-[50px] h-[34.67px]"/>
        </div>
        <div className={styles.subText}>Discover tailored financial solutions crafted specifically for Small and Medium Enterprises (SMEs). Our Business Account is designed to address the unique needs of your growing business, providing specialized accounts, tools, and services to streamline your financial operations</div>
      </div>
      <div className={styles.image}>
        {/* <img src="/images/Soultion.jpg" alt="Solution" className="opacity-100 z-10"></img> */}
      </div>
    </div>
  );
}

export default TailoredSolutions;