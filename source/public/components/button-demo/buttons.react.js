import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';


export default class Button extends Component {

	constructor() {
  	super();
  }

  render() {

  	const {
  		type,
  		width,
  		height

  	} = this.props

  	return (
  		<button className={`btn btn-${type}`}>
  			{type}
  		</button>
  	)
  }

}