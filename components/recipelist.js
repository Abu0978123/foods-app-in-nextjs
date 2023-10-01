import React from "react";
import Image from "next/image";
import Link from "next/link";

//Components
import AddToCart from "./AddToCart";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5 overflow-y-auto server">
      {recipes?.map((recipe, idx) => {
        return (
          <div
            className="rounded bg-slate-300 overflow-hidden server card"
            key={idx}
          >
            <Image
              alt="Recipe"
              width={500}
              height={500}
              src={recipe.strMealThumb}
              className="w-full"
            />
            <div className="p-5">
              <h2 className="font-bold text-2xl">{recipe.strMeal}</h2>
              <div className="flex justify-between">
              <div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
