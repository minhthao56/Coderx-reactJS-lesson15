import React, { Component } from "react";
import "../styles/Todolist.css";

class Todolist extends Component {
  render() {
    const { todo, onClick } = this.props;
    return (
      <li onClick={onClick} className="li">
        {todo.item}
      </li>
    );
  }
}

export default Todolist;
