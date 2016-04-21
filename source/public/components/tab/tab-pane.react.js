import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

export default class TabPane extends React.Component {
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
      <div className={`tab-pane ${isActive}`} id={dest}>
        {children}
      </div>
    );
  }
}
