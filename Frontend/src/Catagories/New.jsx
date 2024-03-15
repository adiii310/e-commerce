import React from "react";
import Utility from "../Components/Utility";
import { useData } from "../context/data.context";
const New = () => {
  const { AllProductData } = useData();
  const newData = AllProductData.filter((data) => data.category === "new");

  return (
    <>
      <Utility Incomingdata={newData} />
    </>
  );
};

export default New;
