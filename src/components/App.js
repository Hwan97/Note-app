import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotFoundPage } from 'pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default App;
