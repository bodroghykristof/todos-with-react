import { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: 3,
        title: 'Feed the pets',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className='App'>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
