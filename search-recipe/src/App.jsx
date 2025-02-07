"https://dummyjson.com/recipes/search?q=Margherita";

import { useEffect, useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [recipeData, setRecipeData] = useState([]);

  async function getRecipe() {
    try {
      setRecipeData([]);
      if (inputText.length <= 2) return;
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${inputText}`
      );
      if (!response.ok) throw new Error("Failed to fetch!");
      const { recipes } = await response.json();
      console.log(recipes);
      setRecipeData(recipes);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getRecipe();
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <div className="input-bar">
        <input
          type="text"
          value={inputText}
          placeholder="Search recipe..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="results">
        <ul>
          {recipeData.length > 0 &&
            recipeData.map((recipe) => <li key={recipe.id}>{recipe.name}</li>)}
        </ul>
      </div>
    </div>
  );
}
