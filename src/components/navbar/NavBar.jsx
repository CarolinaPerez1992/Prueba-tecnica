import React, { PureComponent } from "react";
import "./navbar.css"

export default class Encabezado extends PureComponent {
  render() {
    return (
      <div className="encabezado">
        <h1>DEMO Streaming</h1>
        <nav className="login">
          <p>Login</p>
          <button className="btn">
            <p>Start your free trial</p>
          </button>
        </nav>
      </div>
    );
  }
}
