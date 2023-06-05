import React from "react";
import FryingPan from "./FryingPan";
import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes.length === 0 && !loading && !error ? (
        <div>
          <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold">
          Hungry? Start by searching for a recipe or an ingredient. Have fun!
          </p>
          <FryingPan />
        </div>
      ) : null}
      {loading && <p>{error ? error : "loading..."}</p>}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
