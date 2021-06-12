import React, { Component } from "react";

class Editar extends Component {
  // criar os refs
  tituloRef = React.createRef();
  entradaRef = React.createRef();
  idRef = React.createRef();

  editarPost = (e) => {
    e.preventDefault();

    // ler os refs
    const post = {
      title: this.tituloRef.current.value,
      body: this.entradaRef.current.value,
      userId: this.idRef.current.value,
      id: this.props.post.id,
    };

    // console.log(post);

    // enviar por props a solicitação do axios
    this.props.editarPost(post);
  };

  carregarFormulario = () => {
    if (!this.props.post) return null;

    const { title, body, userId } = this.props.post;

    return (
      <form onSubmit={this.editarPost} className="col-6">
        <legend className="text-center">Editar Post</legend>
        <div className="form-group">
          <label>Título do Post:</label>
          <input
            type="text"
            ref={this.tituloRef}
            className="form-control"
            defaultValue={title}
          />
        </div>
        <div className="form-group">
          <label>Conteúdo: </label>
          <textarea
            className="form-control"
            ref={this.entradaRef}
            defaultValue={body}
          ></textarea>
        </div>
        <div className="form-group">
          <label>userId: </label>
          <input
            type="number"
            min="1"
            ref={this.idRef}
            className="form-control"
            defaultValue={userId}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    );
  };

  render() {
    return <React.Fragment>{this.carregarFormulario()}</React.Fragment>;
  }
}

export default Editar;
