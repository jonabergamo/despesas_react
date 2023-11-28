import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses.jsx";
import MainContainer from "./components/mainContainer/Container";
import Recipes from "./components/recipe/Recipes.jsx";
import RegisterForm from "./components/registerForm/RegisterForm";
import { useWeb } from "./context/WebContext.js";

function App() {
  const { recipes, expenses } = useWeb();

  return (
    <div className="App">
      <MainContainer>
        <RegisterForm />
        <Expenses expenses={expenses} />
        <Recipes recipes={recipes} />
      </MainContainer>
    </div>
  );
}

export default App;
