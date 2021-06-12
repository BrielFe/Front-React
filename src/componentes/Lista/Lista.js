import React, { Component } from "react";
import Post from "../Post/Post";

class Lista extends Component {
  mostrarPosts = () => {
    const posts = this.props.posts;
    if (posts.length === 0) return null;

    return (
      <React.Fragment>
        {Object.keys(posts).map((post) => (
          <Post
            key={post}
            info={this.props.posts[post]}
            apagarPost={this.props.apagarPost}
          />
        ))}
      </React.Fragment>
    );
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID </th>
            <th scope="col">Título </th>
            <th scope="col">Body </th>
            <th scope="col">UserId </th>
            <th scope="col">Ações </th>
          </tr>
        </thead>
        <tbody>{this.mostrarPosts()}</tbody>
      </table>
    );
  }
}

export default Lista;
