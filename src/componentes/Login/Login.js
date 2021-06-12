import React, { Component } from "react";
import Api from "../Services/Api";
import Axios from "axios";
//const fetch = require('node-fetch');

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      users: [],
      new_user: {
        email: "",
        password: "",
      },
    };
  }

  async componentDidMount() {}

  handleInputUserChange = (pEvent) => {
    this.setState({
      new_user: {
        ...this.state.new_user,
        email: pEvent.target.value,
      },
    });
  };
  handleInputPassChange = (pEvent) => {
    this.setState({
      new_user: {
        ...this.state.new_user,
        password: pEvent.target.value,
      },
    });
  };

  render() {
    const handleSubmit = (e) => {
      //e.preventDefault();
      let todo = {
        email: this.state.new_user.email,
        password: this.state.new_user.password,
      };
      const params = JSON.stringify(todo);

      Axios.post(
        "https://bitbucket.org/thiagonobre/apirest/raw/eb4eee3039e972ccc636518f69bd5a1fd0a88d89/conta.json",
        params,
        {
          headers: {
            "content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
        .then((res) => {
          if (
            res.data.data[0].token != null &&
            res.data.data[0].token !== "undefined"
          ) {
            sessionStorage.setItem("__email", res.data.data[0].email);
            sessionStorage.setItem("__token", res.data.data[0].token);
            window.location.href = "/";
          } else {
            alert("Usuário ou senha inválido");
          }
        })
        .catch((err) => alert("erro=" + err));
    };

    return (
      <div className="container">
        <div className="users">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                className="form-control col-4"
                placeholder="E-mail"
                value={this.state.new_user.email}
                onChange={this.handleInputUserChange}
                required="required"
                type="text"
              />
              <br></br>
              <input
                name="password"
                className="form-control col-4"
                placeholder="Senha"
                value={this.state.new_user.password}
                onChange={this.handleInputPassChange}
                required="required"
                type="password"
              />
              <br></br>
              <button type="submit" className="btn btn-primary" color="success">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
