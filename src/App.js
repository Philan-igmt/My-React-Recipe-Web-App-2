import React, { useState, useEffect } from "react";
import Recipe from "./Recipe.js";
import "./App.css";

function App() {
  const App_id = "e3578195";
  const App_key = "70bbe1ce21e419d12584fd68b592653b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState("carrots");

  useEffect(() => {
    getR();
  }, [query]);

  const getR = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  };
  return (
    <div className="App">
      <nav className="nav-wrapper">
        <h4>Recipe App</h4>
      </nav>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
          placeholder="Search Your Recipe"
        />
 
        <button type="submit">submit</button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          tittle={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
