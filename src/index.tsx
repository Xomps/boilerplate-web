import './style/style.scss'
import { Fragment, render, h } from 'preact'
import { Router } from 'preact-router'


const App = () =>
  <Fragment>
    <Router>
      <h1 default>Hello world!</h1>
    </Router>
  </Fragment>

render(<App />, document.getElementById('app')!)
