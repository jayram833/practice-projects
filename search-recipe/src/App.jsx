"https://dummyjson.com/recipes/search?q=Margherita";

import { useEffect, useRef, useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const inputRef = useRef();

  async function getRecipe() {
    try {
      setRecipeData([]);
      if (inputText.length <= 2) return;
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${inputText}`
      );
      if (!response.ok) throw new Error("Failed to fetch!");
      const { recipes } = await response.json();
      setRecipeData(recipes);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const timer = setTimeout(getRecipe, 300);

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
          ref={inputRef}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
      </div>
      {showResults && (
        <div className="results">
          <ul>
            {recipeData.length > 0 &&
              recipeData.map((recipe) => (
                <li key={recipe.id}>{recipe.name}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
