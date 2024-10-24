import React, { useState } from "react";
import { AllRecipes } from "./AllRecipes";
import WantToCook from "./WantToCook";

export const Main = () => {
  const [wanttocook, setWanttocook] = useState([]);
  function handelWantToCook(clickedData) {
    console.log(clickedData);
    for (let wantto of wanttocook) {
      if (wantto.recipe_id === clickedData.recipe_id) {
        return;
      }
    }
    setWanttocook((pre) => [...pre, clickedData]);
  }
  return (
    <>
      <h1 className="lg:text-5xl text-2xl font-bold text-center">
        Our Recipes
      </h1>
      <p className="text-sm font-semibold max-w-[600px] mx-auto text-center mt-2 text-[#150B2B99]">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <section className="flex justify-between">
        <AllRecipes handelWantToCook={handelWantToCook} />
        <WantToCook
          setWanttocook={setWanttocook}
          wanttocook={wanttocook}
          allData={wanttocook}
        />
      </section>
    </>
  );
};
