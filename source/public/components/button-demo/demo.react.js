import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

import Button from './buttons.react';
import IconButton from './icon-buttons.react';

export default class Demo extends Component {

	constructor() {
  	super();
  }

  render() {
  	return (
  		<div>
  			<div>
	  			<h2>Basic Buttons</h2>
	  				<Button type='default' />
	  				<Button type='primary' />
	  				<Button type='success' />
	  				<Button type='warning' />
	  				<Button type='danger' />
	  				<Button type='info' />
  			</div>
  			<div>
	  			<h2>Icon Buttons</h2>
	  				<IconButton type='default' icon='fast-backward' />
	  				<IconButton type='primary' icon='backward' />
	  				<IconButton type='success' icon='play' />
	  				<IconButton type='warning' icon='stop' />
	  				<IconButton type='danger' icon='forward' />
	  				<IconButton type='info' icon='fast-forward' />
  			</div>

  		</div>

  	)
  }

}
// styles.map(function(i){
// 	console.log(i)
// }

