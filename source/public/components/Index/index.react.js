import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';

export default class Index extends Component {
  constructor(prosp) {
    super(prosp);
  }

  render() {
    return (
      <div>
        <Link className='text-info ' to='button'>Button</Link>
      </div>
    );
  }
};
