import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

const BASIC_THEME = 'basic';
const TOGGLE_THEME = 'toggle';

export default class DropDownButtons extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    used: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'default',
    used: 'basic'
  }

  constructor(props) {
    super(props);
  }

  render() {

    const {
      type,
      used,
      children
    } = this.props;

    console.log(this.props.children)

    let button;

    switch(used) {
      case BASIC_THEME:
        button = (
          <div className="btn-group">
            <button type="button" className={`btn btn-${type} dropdown-toggle`} data-toggle="dropdown">
              Action <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu">
              {children}
            </ul>
          </div>);
        break;
      case TOGGLE_THEME:
        button = (
          <div className="btn-group mr5">
            <button type="button" className={`btn btn-${type} dropdown-toggle`}>Action</button>
            <button type="button" className={`btn btn-${type} dropdown-toggle`} data-toggle="dropdown">
              <span className="caret"></span>
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu" role="menu">
              {children}
            </ul>
          </div>);
        break;
    }

    return (
      <span>
        {button}
      </span>
    );
  }
};
