import React from "react";
import Enterprise from "../../components/enterprise/enterprise";
import TailoredSolutions from "../../components/tailoredSolutions/tailoredSolution";
import GrowOpportunity from "../../components/growOpportunity/growOpportunity";
import StreamlinedBanking from "../../components/streamlinedBanking/streamlinedBanking";

const SME = () => {
  return(
    <div>
      <Enterprise />
      <div style={{ background: "linear-gradient(181.91deg, #121212 1.61%, #195399 89.35%)" }}> 
        <TailoredSolutions />
        <StreamlinedBanking />
        <GrowOpportunity />
      </div>
    </div>
  );
}

export default SME;