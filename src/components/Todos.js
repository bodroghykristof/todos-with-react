import { Component } from 'react';
import '../App.css';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} title={todo.title} />
    ));
  }
}

export default Todos;
