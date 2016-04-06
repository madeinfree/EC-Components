import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

export default class DropDownItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      children
    } = this.props;

    return (
      <li>
        <a href="#">{children}</a>
      </li>
    );
  }
};
