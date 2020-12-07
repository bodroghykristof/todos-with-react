import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Todos from './components/Todos/Todos';
import Header from './components/Layout/Header';
import AddTodo from './components/Todos/AddTodo';
import About from './components/Pages/About';

class App extends Component {
  componentDidMount = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => (this.state.todos = response.data));
  };

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

  state = {};

  addTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.todos.length + 1, title: title, completed: false },
      ],
    });
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
