import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

import TabPane from './tab-pane.react';

export default class Pane extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const {
  	  children
  	} = this.props;

    return (
      <div className="tab-content mb20">
      	{children}
      </div>
    );
  }
}
