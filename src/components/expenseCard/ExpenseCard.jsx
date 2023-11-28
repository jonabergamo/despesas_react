import React from "react";
import "./styles.css";

export default function ExpenseCard({ expense }) {
  return (
    <div className="expense-card">
      <div>
        <strong>Nome:</strong> {expense.name}
      </div>
      <div>
        <strong>Valor:</strong>{" "}
        {parseFloat(expense.value).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div>
        <strong>Pago com:</strong> {expense.payWith}
      </div>
    </div>
  );
}
