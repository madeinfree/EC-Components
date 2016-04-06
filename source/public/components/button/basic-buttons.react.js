import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

const BOOTSTRAP_THEME = 'bootstrap';
const TEMPLATE_THEME = 'template';
const STROKED_THEME = 'stroked';

export default class BasicButtons extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    used: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'default',
    used: BOOTSTRAP_THEME
  }

  constructor(props) {
    super(props);
  }

  render() {

    const {
      type,
      used
    } = this.props

    let button;

    switch(used) {
      case BOOTSTRAP_THEME:
        button = <button className={`btn btn-${type}`}>Default</button>
        break;
      case TEMPLATE_THEME:
        button = <button className={`btn btn-${type} btn-quirk`}>Default</button>
        break;
      case STROKED_THEME:
        button = <button className={`btn btn-${type} btn-quirk btn-stroke`}>Default</button>
        break;
    }

    return (
      <span>
        {button}
      </span>
    );
  }
};
