import React from "react";
import Data from "./Data.js";
import Display from "./Display.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDo: Data
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {

    this.setState(prevState => {
      const updated = prevState.ToDo.map(item => {
        if(item.id === id){
          item.completed = !item.completed;
        }
        return item
      })
      return {
        ToDo:updated
      }
    })
  }

  render() {
    const ToDoItems = this.state.ToDo.map(item => (
      <Display
        key={item.id}
        name={item.name}
        id={item.id}
        completed={item.completed}
        handleChange={this.handleChange}
      />
    ));
    return <div>{ToDoItems}</div>;
  }
}
export default App;
