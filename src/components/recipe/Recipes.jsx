import React from "react";
import "./styles.css";
import ExpenseCard from "../expenseCard/ExpenseCard.jsx";

export default function Recipes({ recipes = [] }) {
  const totalValue = recipes.reduce(
    (acc, recipe) => acc + parseFloat(recipe.value),
    0
  );

  return (
    <div className="recipes">
      <h1 className="title">Receitas</h1>
      <div className="subtitle">
        Valor Total:{" "}
        {parseFloat(totalValue).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="recipes-container">
        {recipes.map((expense, index) => (
          <div key={index}>
            <ExpenseCard expense={expense} />
          </div>
        ))}
      </div>
    </div>
  );
}
