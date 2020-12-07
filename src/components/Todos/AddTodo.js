import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class AddTodo extends Component {
  addNewTodo = (event) => {
    event.preventDefault();
    const title = event.target.querySelector("input[type='text']").value;
    event.target.querySelector("input[type='text']").value = '';
    this.props.addTodo(title);
  };

  render() {
    return (
      <form
        style={{ display: 'flex', marginBottom: '10px' }}
        onSubmit={this.addNewTodo}
      >
        <input
          type='text'
          name='title'
          placeholder='Add TODO...'
          style={{ flex: 10, padding: '10px' }}
        ></input>
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: 1 }}
        ></input>
      </form>
    );
  }
}

export default AddTodo;
