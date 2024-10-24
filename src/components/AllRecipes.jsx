import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

export const AllRecipes = ({ handelWantToCook }) => {
  const [allData, setAllData] = useState(null);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data.recipes));
  }, []);

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 w-8/12">
      {allData
        ? allData.map((item) => (
            <RecipeCard
              handelWantToCook={handelWantToCook}
              key={item.recipe_id}
              data={item}
            />
          ))
        : ""}
    </section>
  );
};
