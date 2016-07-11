import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

export default class IconButtons extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {

  	const {
  		type,
  		icon	
  	} = this.props

    return (
    	<button className={`btn btn-${type} btn-icon`}>
				<i className={`fa fa-${icon}`}></i>
			</button>
    );
  }
}
