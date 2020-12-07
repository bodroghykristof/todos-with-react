import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      borderBottom: '1px #ccc dotted',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          ></input>
          {this.props.todo.title}
          <button
            style={deleteButtonStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
};

const deleteButtonStyle = {
  backgroundColor: '#ccc',
  padding: '1px',
  margin: '3px',
};

export default TodoItem;
