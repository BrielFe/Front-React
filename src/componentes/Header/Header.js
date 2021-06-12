import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link to={"/"}>
          <h1 className="text-center"> CGE-RJ </h1>
        </Link>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to={"/consultar"} className="nav-link">
            Consulta
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/criar"} className="nav-link">
            Cadastro
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/logout"} className="nav-link" title="Encerrar Sessão">
            Sair
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
