import { useEffect, useState } from "react";

const URL = `https://dummyjson.com/recipes/search?q=`;

export default function Debouncing() {
  const [inputText, setInputText] = useState("");
  const [recipesData, setRecipesData] = useState([]);

  function handleChange(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (inputText.length <= 2) {
        setRecipesData([]);
        return;
      }
      try {
        const response = await fetch(`${URL}${inputText}`);
        if (!response.ok) throw new Error("HTTP Error");
        const { recipes } = await response.json();
        setRecipesData(recipes);
        console.log(recipes);
      } catch (e) {
        console.error(e);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <div className="debounce-container">
      <h1>Debouncing</h1>
      <div className="deb">
        <input
          type="text"
          placeholder="search"
          value={inputText}
          onChange={handleChange}
        />
      </div>
      <div
        className="results"
        style={{ height: "500px", border: "1px solid", width: "500px" }}
      >
        <ul>
          {recipesData.map((recipe) => (
            <QueryResults key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function QueryResults({ recipe }) {
  return (
    <li
      style={{
        listStyle: "none",
        border: ".5px solid",
        padding: "4px 8px",
        borderRadius: "3px",
        marginTop: "2px",
      }}
    >
      <span>{recipe.name}</span>
    </li>
  );
}
