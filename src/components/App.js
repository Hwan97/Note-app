import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { Home, NotFoundPage } from 'pages';
import PageTemplate from './common/PageTemplate'
import TodoInput from './common/TodoInput';
import TodoList from './common/TodoList';

class App extends Component {
  state = {
    input: '' // 인풋 값
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }

  render() {
    const { input } = this.state;
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
