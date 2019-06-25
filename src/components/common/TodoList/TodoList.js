import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>여기에 아이템이 저장됨.</TodoItem>
        <TodoItem>투두 리스트에</TodoItem>

      </div>
    );
  }
}

export default TodoList;