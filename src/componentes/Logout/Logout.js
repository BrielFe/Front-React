import React from "react";

export default class Logout  {
  constructor(props) {
    super(props);
    
  }

  async componentDidMount() {
/*     sessionStorage.removeItem("__token");
    sessionStorage.removeItem("__email");
    sessionStorage.clear();
    window.location.href="/login"; */
  }

  render() {
    sessionStorage.removeItem("__token");
    sessionStorage.removeItem("__email");
    sessionStorage.clear();
    window.location.href="/login";
  
 
 

    return (
      <div className="container">

      </div>
    );
  }
}