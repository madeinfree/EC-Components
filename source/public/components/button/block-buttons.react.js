import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

export default class BlockButtons extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'default'
  }

  constructor(props) {
    super(props);
  }

  render() {

    const {
      type
    } = this.props

    return (
      <p><button className={`btn btn-${type} btn-lg btn-block`}>Block Level Button</button></p>
    );
  }
};

BlockButtons.propTypes = {
  type: PropTypes.string.isRequired
}
