import React from "react";
import Utility from "../Components/Utility";
import { useData } from "../context/data.context";
const Women = () => {
  const { AllProductData } = useData();
  const womensData = AllProductData.filter((data) => data.category === "women");

  return (
    <>
      <Utility Incomingdata={womensData} />
    </>
  );
};

export default Women;
