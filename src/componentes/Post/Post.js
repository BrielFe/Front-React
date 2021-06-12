import React, { Component } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class Post extends Component {
  deletePostConfirmacao = () => {
    const { id } = this.props.info;

    Swal.fire({
      title: "Deseja Excluir o item ?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
    }).then((result) => {
      if (result.value) {
        this.props.apagarPost(id);
      }
    });
  };

  render() {
    const { id, title, body, userId } = this.props.info;

    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
        <td>{userId}</td>
        <td>
          <Link to={`/editar/${id}`} className="btn btn-warning">
            Editar
          </Link>
        </td>
        <td>
          <button
            onClick={this.deletePostConfirmacao}
            type="button"
            className="btn btn-danger"
          >
            Excluir
          </button>
          {/* versão sem o Swal */}
          {/* {<button onClick={ () => this.props.apagarPost(id) } type="button" className="btn btn-danger">Excluir</button> } */}
        </td>
      </tr>
    );
  }
}

export default Post;
