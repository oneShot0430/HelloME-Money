import React from "react";
import SecureTransaction from "../../components/secureTranasction/secureTransactions"
import ConvenientTrading from "../../components/convenientTrading/convenientTrading";
import GetStarted from "../../components/getStarted/getStarted";

const CryptoExchange = () => {
  return(
    <div>
      <GetStarted />
      <SecureTransaction />
      <ConvenientTrading />
    </div>
  );
}

export default CryptoExchange;