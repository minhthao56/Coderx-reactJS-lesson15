import React, { Component } from "react";
import "./styles.css";
import Todolist from "./Components/Todolist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      listtodos: [
        { item: "Go to school", isDone: false },
        { item: "Go to mark", isDone: false },
        { item: "Go to bed", isDone: false }
      ]
    };
  }
  onClickList(todo) {
    console.log(todo);
  }
  render() {
    return (
      <div className="App">
        <div className="background">
          <p className="titile">DAILIST</p>
          <div className="todolist">
            <span>upcoming</span>
            <ol>
              {this.state.listtodos.map(function(todo, index) {
                return (
                  <Todolist
                    key={index}
                    todo={todo}
                    onClick={this.onClickList}
                  />
                );
              })}
            </ol>
          </div>
          <div className="button">
            <button>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
