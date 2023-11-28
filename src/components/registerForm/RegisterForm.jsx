import React, { useState } from "react";
import "./styles.css";
import { useWeb } from "../../context/WebContext";

export default function RegisterForm() {
  const { register } = useWeb();
  const [formData, setFormData] = useState({
    name: "",
    value: "",
    type: "expense",
    payWith: "PIX",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Se o campo alterado for 'value', converta o valor para um número inteiro
    if (name === "value") {
      newValue = value.replace(",", "."); // Substituir vírgula por ponto
      newValue = parseFloat(newValue).toFixed(2); // Converter para float e limitar a 2 casas decimais
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(formData);
    setFormData({
      name: "",
      value: "",
      type: "expense",
      payWith: "PIX",
    });
  };
  return (
    <div className="register">
      <h1>Cadastro</h1>
      <form className="form" onSubmit={handleRegister}>
        <p className="field" autoCorrect={false}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            required
            onChange={handleChange}
            value={formData.name}
          />
        </p>
        <p className="field">
          <input
            type="text"
            name="value"
            placeholder="Valor"
            required
            onChange={handleChange}
            value={formData.value}
          />
        </p>
        <p className="field">
          <select name="type" onChange={handleChange} value={formData.type}>
            <option value="expense">Despesa</option>
            <option value="recipe">Receita</option>
          </select>
        </p>
        <p className="field">
          <select
            name="payWith"
            onChange={handleChange}
            value={formData.payWith}>
            <option value="PIX">PIX</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="TED">TED</option>
          </select>
        </p>
        <div className="submit">
          <input type="submit" name="sent" value="Cadastrar"></input>
        </div>
      </form>
    </div>
  );
}
