import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import api from "../../services/api";

function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });
      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);
      history.push("/profile");
    } catch (error) {
      alert("Ocorreu um erro ao fazer o logon");
    }
  }

  return (
    <div className="logon-container">
      <section>
        <img src={logoImg} alt="Be the hero" />

        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default Logon;
