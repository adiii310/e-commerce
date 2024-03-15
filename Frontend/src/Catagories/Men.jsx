import React from "react";
import { Utility } from "../Components";
import { useData } from "../context/data.context";

const Men = () => {
  const { AllProductData } = useData();
  const mensData = AllProductData.filter((data) => data.category === "men");

  return (
    <>
      <Utility Incomingdata={mensData} />
    </>
  );
};

export default Men;
