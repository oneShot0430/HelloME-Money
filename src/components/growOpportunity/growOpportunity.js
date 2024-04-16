import React from "react";
import styles from "./growOpportunity.module.css";

const GrowOpportunity = () => {
  return(
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.title}>
          <p className="mr-4">Growth Opportunities</p>
          <img alt="Ranking" src="/images/Ranking.svg" className="w-[50px] h-[50px]"/>
        </div>
        <div className={styles.subText}>Unlock growth opportunities for your business with HelloMe Money. Our Business Account empowers SMEs to plan for the future, offering resources and support to fuel expansion and success. Whether you're scaling up or venturing into new markets, HelloMe Money is here to help you thrive.</div>
      </div>
      <div className={styles.image}>
        <img src="/images/analyse.gif" alt="Analyse" className="opacity-100 z-10"></img>
      </div>
    </div>
  );
}

export default GrowOpportunity;