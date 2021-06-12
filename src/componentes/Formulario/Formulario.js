import React, { Component } from "react";
import { Link } from "react-router-dom";

class Formulario extends Component {
  // váriaveis ref
  titleRef = React.createRef();
  bodyRef = React.createRef();
  userIdRef = React.createRef();

  criarPost = (e) => {
    e.preventDefault();

    // declarar os objetos ref
    const newPost = {
      title: this.titleRef.current.value,
      body: this.bodyRef.current.value,
      userId: this.userIdRef.current.value,
    };

    // enviar por props a rota para solicitação com o axios
    this.props.criarPost(newPost);
  };

  render() {
    return (
      <form onSubmit={this.criarPost} className="col-6">
        <legend className="text-center">Criar Novo Post</legend>
        <div className="form-group">
          <label>Título do Post: </label>
          <input
            type="text"
            ref={this.titleRef}
            className="form-control"
            placeholder="Título"
          />
        </div>
        <div className="form-group">
          <label>Conteúdo: </label>
          <textarea
            className="form-control"
            ref={this.bodyRef}
            placeholder="Conteúdo..."
          ></textarea>
        </div>
        <div className="form-group">
          <label>userId: </label>
          <input
            type="number"
            min="1"
            ref={this.userIdRef}
            className="form-control"
            placeholder="userId"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
          <Link to={"/"}></Link>
        </button>
      </form>
    );
  }
}

export default Formulario;
