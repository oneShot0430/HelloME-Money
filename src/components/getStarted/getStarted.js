import React from "react";
import styels from "./getStarted.module.css";

const GetStarted = () => {
  return(
    <div className={styels.container}>
      <div className={styels.coins}>
        <div className={styels.bitcoin}>
          <img src="/images/Bitcoin.svg" alt="Bitcoin" />
        </div>
        <div className={styels.cardano}>
          <img src="/images/Cardano.svg" alt="Cardano" />
        </div>
        <div className={styels.ethereum}>
          <img src="/images/Ethereum.svg" alt="Ethereum" />
        </div>
      </div>
      <div className={styels.contain}>
        <div className={styels.exchange}>
          <button className={styels.exchange_button}>Crypto Exchange</button>
        </div>
        <div className={styels.description}>
          <p>Explore the world of cryptocurrency with HelloMe</p> 
          <p>Money's crypto exchange.</p> 
          <p>Buy, sell, and trade various cryptocurrencies securely,</p>
          <span>all within the </span>
          <span className={styels.special_letter}>HelloMe Money </span>
          <span>platform.</span>
        </div>
        <div className={styels.start}>
          <button className={styels.start_button}>
            <p>Get Started</p>
            <img src="images/CryptoExchange.svg" alt="crypto exchange" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;