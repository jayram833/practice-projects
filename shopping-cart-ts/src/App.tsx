import { recipes } from "./recipes.json";
function App() {
  return (
    <div>
      <h1>Shopping Using Typescript</h1>
      <div className="divide-y divide-stone-200 px-2">
        {recipes.map((item) => (
          <RecipeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function RecipeCard({ item: { image, name, rating, ingredients } }) {
  return (
    <div className="flex gap-4">
      <img src={image} alt="name" className="w-32" loading="lazy" />
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients}</p>
        <p className="mt-auto">{rating}</p>
      </div>
    </div>
  );
}

export default App;
