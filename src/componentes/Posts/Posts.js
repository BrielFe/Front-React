import React, { Component } from "react";
import Lista from "../Lista/Lista";

class Posts extends Component {
  render() {
    return (
      <div className="col-12 col-md-8">
        <h2 className="text-left">Consulta</h2>
        <Lista posts={this.props.posts} apagarPost={this.props.apagarPost} />
      </div>
    );
  }
}

export default Posts;
