import React, { Component, PropsType } from 'react';
import ReactDom, { render } from 'react-dom';

import ButtonDemo from './components/button/demo.react';

class ECComponents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>Components for react project.</h1>
        <ButtonDemo />
      </div>
    );
  }
};

render(<ECComponents />, document.getElementById('app'));
