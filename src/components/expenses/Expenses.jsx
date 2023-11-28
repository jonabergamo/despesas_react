import React from "react";
import "./styles.css";
import ExpenseCard from "../expenseCard/ExpenseCard.jsx";

export default function Expenses({ expenses = [] }) {
  const totalValue = expenses.reduce(
    (acc, expense) => acc + parseFloat(expense.value),
    0
  );

  return (
    <div className="expenses">
      <h1 className="title">Despesas</h1>
      <div className="subtitle">
        Valor Total:{" "}
        {parseFloat(totalValue).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="expenses-container">
        {expenses.map((expense, index) => (
          <div key={index}>
            <ExpenseCard expense={expense} />
          </div>
        ))}
      </div>
    </div>
  );
}
