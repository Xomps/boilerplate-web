import { Fragment, render, h } from 'preact'
import { Router } from 'preact-router'

const App = () =>
  <Fragment>
    <Router>
      <h1>Hello world</h1>
    </Router>
  </Fragment>

render(<App />, document.getElementById('app')!)
