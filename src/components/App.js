import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { Home, NotFoundPage } from 'pages';
import PageTemplate from './common/PageTemplate'
import TodoInput from './common/TodoInput';
import TodoList from './common/TodoList';

class App extends Component {
  state = {
    input: '' // 인풋 값

    todos: [
      {id: 0, text: '아이템 1', done: true},
      {id: 1, text: '아이템 2', done: false}
    ]
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }
  handleInsert = () => {
    const { todos, input } = this.state 

    // 새 데이터 객체 생성

    const newTodo = {
      text: input,
      done: false,
      id : this.getId()
    };

    this.setState({
      todos : [...todos, newTodo],
      input : ''
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
        handleChange
    } = this;

    return (
      <PageTemplate>
       <TodoInput onChange={handleChange} value={input}/>
       <TodoList></TodoList>
      </PageTemplate>
    )
  }
}

  


export default App;
