import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Counter from './components/Counter'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact render={() => <Counter />} />
      </Switch>
    </Router>
  );
}

export default App;
