import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

export default class NavTab extends React.Component {
  static propTypes = {
    dest: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
  	const {
  	  dest,
      active,
      children
  	} = this.props;

    let isActive = (active ? 'active' : '')

    return (
      <li>
        <a href={`#${dest}`} className={isActive} data-toggle="tab">
          <strong>{children}</strong>
        </a>
      </li>
    );
  }
}
