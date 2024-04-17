import React from "react";
import Enterprise from "../../components/enterprise/enterprise";
import TailoredSolutions from "../../components/tailoredSolutions/tailoredSolution";
import GrowOpportunity from "../../components/growOpportunity/growOpportunity";
import StreamlinedBanking from "../../components/streamlinedBanking/streamlinedBanking";

const SME = () => {
  return(
    <div>
      <Enterprise />
      <TailoredSolutions />
      <StreamlinedBanking />
      <GrowOpportunity />
    </div>
  );
}

export default SME;

