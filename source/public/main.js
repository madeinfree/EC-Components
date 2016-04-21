import React, { Component, PropsType } from 'react';
import ReactDom, { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

import Index from './components/Index/index.react';
import ButtonDemo from './components/button/demo.react';
import ButtonDemo2 from './components/button-demo/demo.react';
import Tab from './components/tab/demo.react';

class ECComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ Index } />
        <Route path='button' component={ ButtonDemo } />
        <Route path='button2' component={ ButtonDemo2 } />
        <Route path='tab' component={ Tab } />

      </Router>
    );
  }
};

render(<ECComponents />, document.getElementById('app'));
