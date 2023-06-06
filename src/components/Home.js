import React from "react";
import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import { useNavigate } from "react-router-dom";

const Home = ({ recipes, loading, error, setError }) => {
  const navigate = useNavigate();

  const handleRandomRecipe = () => {
    try {
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      
      if (randomRecipe) {
        const recipeId = `/recipe-item/${randomRecipe.id}`;
        navigate(recipeId);
      } else {
        throw new Error("No random recipe found");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes.length === 0 && !loading && !error ? (
        <div>
          <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold">
            Hungry? Start by searching for a recipe or an ingredient. Have fun!
          </p>
          <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold mt-12">
            Feeling lost? Try our mystery recipe
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRandomRecipe}
          >
            Get Random Recipe
          </button>
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
