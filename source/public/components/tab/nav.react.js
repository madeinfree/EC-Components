import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

export default class Nav extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {
  	  type,
      children
  	} = this.props;

    return (
      <ul className={`nav nav-tabs nav-${type}`}>
        {children}
      </ul>
    );
  }
}
