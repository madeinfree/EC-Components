import React, { Component, PropsType } from 'react';
import ReactDom, { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Index from './components/Index/index.react';
import ButtonDemo from './components/button/demo.react';

class ECComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ Index } />
        <Route path='button' component={ ButtonDemo } />
      </Router>
    );
  }
};

render(<ECComponents />, document.getElementById('app'));
