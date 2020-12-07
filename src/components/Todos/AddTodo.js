import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex', marginBottom: '10px' }}>
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
