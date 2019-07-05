import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { Home, NotFoundPage } from 'pages';
import PageTemplate from './common/PageTemplate'
import TodoInput from './common/TodoInput';
import TodoList from './common/TodoList';

class App extends Component {
  state = {
    input: '', // 인풋 값

    todos: [
      {id: 0, text: '아이템 1', done: true},
      {id: 1, text: '아이템 2', done: false}
    ]
  }

  id = 1
  getId = () => {
    return ++this.id;
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

  handleToggle = (id) => {

    //id로 배열의 인덱스를 찾는다
    const { todos } = this.state;  //  todos 현재 state값 가져온다.
    const index = todos.findIndex( todo => todo.id === id); //값을 찾고

    //찾은 데이터의 done 값을 반전

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

  
    this.setState({
    todos: [
      ...todos.slice(0, index),
      toggled,
      ...todos.slice(index + 1, todos.length)
    ]
  });
}

handleRemove = (id) => {
  const { todos } = this.state; // 현재 스테이트값 가저옴
  const index = todos.findIndex( todo => todo.id === id);

  this.setState({
    todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ]
  })
}


  render() {
    const { input, todos } = this.state;
    const {
        handleChange,
        handleInsert,
        handleToggle,
        handleRemove
    } = this;

    return (
      <PageTemplate>
       <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
       <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </PageTemplate>
    )
  }
}

  


export default App;
