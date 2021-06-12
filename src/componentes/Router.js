import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import axios from "axios";
import Posts from "./Posts/Posts";
import Login from "./Login/Login";
import Piechart from "./Piechart/Piechart";
import Formulario from "./Formulario/Formulario";
import Editar from "./Editar";
import Swal from "sweetalert2";

class Router extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.obterPost();
  }

  obterPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  };

  apagarPost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => {
        if (resp.status === 200) {
          const posts = [...this.state.posts];

          let resultado = posts.filter((post) => post.id !== id);

          this.setState({
            posts: resultado,
          });
        }
      });
  };

  criarPost = (post) => {
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Cadastro Feito com sucesso",
            showConfirmButton: true,
          });

          let postId = { id: res.data.id }; // obter o id do json

          const novoPost = Object.assign({}, res.data.post, postId); // o json original é obtido e um novo atributo é adicionado usando a propriedade Object.assign

          this.setState((prevState) => ({
            posts: [...prevState.posts, novoPost], // uma cópia do estado original é obtida e o novo estado é adicionado.
          }));
        }
      });
  };

  editarPost = (postAtualizado) => {
    const { id } = postAtualizado;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        postAtualizado,
      })
      .then((resp) => {
        // this.obterPost();
        if (resp.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Dados Atualizados",
            showConfirmButton: true,
          });

          let postId = resp.data.id;

          const posts = [...this.state.posts]; // você consegue uma cópia da postagem

          const postEditar = posts.findIndex((post) => postId === post.id); // aqui você obtém todas os comentários
          // então o índice é obtido e os valores são passados ​​para a variável json
          // console.log(posts[postEditar]);

          posts[postEditar] = postAtualizado; // a informação é atualizada com os dados do índice

          this.setState({
            posts,
          });
        }
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <div className="row justify-content-center">
            <Switch>
              <Route
                exact
                path="/login"
                render={() => {
                  return <Login />;
                }}
              />
              <Route
                exact
                path="/"
                render={() => {
                  return <Piechart />;
                }}
              />
              <Route
                exact
                path="/consultar"
                render={() => {
                  return (
                    <Posts
                      posts={this.state.posts}
                      apagarPost={this.apagarPost}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/criar"
                render={() => {
                  return <Formulario criarPost={this.criarPost} />;
                }}
              />

              <Route
                exact
                path="/editar/:postId"
                render={(props) => {
                  let idPost = props.location.pathname.replace("/editar/", "");

                  const posts = this.state.posts;

                  let filtro;
                  filtro = posts.filter((post) => post.id === Number(idPost));

                  return (
                    <Editar post={filtro[0]} editarPost={this.editarPost} />
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
