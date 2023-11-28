import React, { createContext, useState, useContext, useEffect } from "react";

const WebContext = createContext();

export const WebProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    // Tentar recuperar receitas do localStorage
    const localData = localStorage.getItem("recipes");
    return localData ? JSON.parse(localData) : [];
  });

  const [expenses, setExpenses] = useState(() => {
    // Tentar recuperar despesas do localStorage
    const localData = localStorage.getItem("expenses");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    // Armazenar receitas no localStorage
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    // Armazenar despesas no localStorage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const register = (data) => {
    if (data.type === "recipe") {
      setRecipes((currentRecipes) => [...currentRecipes, data]);
    } else if (data.type === "expense") {
      setExpenses((currentExpenses) => [...currentExpenses, data]);
    }
  };

  return (
    <WebContext.Provider value={{ recipes, expenses, register }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWeb = () => {
  return useContext(WebContext);
};
