import React from "react";
import "./styles.css";
import { useWeb } from "../../context/WebContext";

export default function MainContainer({ children }) {
  const { recipes, expenses } = useWeb();
  const recipesTotal = recipes.reduce(
    (acc, recipe) => acc + parseFloat(recipe.value),
    0
  );
  const expensesTotal = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.value),
    0
  );
  return (
    <div className="main-container">
      {" "}
      <header className="header">
        Saldo na carteira:{" "}
        {(recipesTotal - expensesTotal).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </header>
      <div className="container">{children}</div>
      {}
    </div>
  );
}
