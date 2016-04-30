import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

import BasicButton from './basic-buttons.react';
import BlockButton from './block-buttons.react';
import DropDownButton from './drop-down-buttons/drop-down-buttons.react';
import DropDownItem from './drop-down-buttons/drop-down-item.react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h2>BOOTSTRAP BUTTONS</h2>
            <BasicButton type='default' used='bootstrap' />
            <BasicButton type='success' used='bootstrap' />
            <BasicButton type='primary' used='bootstrap' />
        </div>
        <div>
          <h2>TEMPLATE BUTTONS</h2>
            <BasicButton type='default' used='template' />
            <BasicButton type='success' used='template' />
            <BasicButton type='primary' used='template' />
            <BasicButton type='warning' used='template' />
            <BasicButton type='danger' used='template' />
            <BasicButton type='info' used='template' />
        </div>
        <div>
          <h2>STROKED BUTTONS</h2>
            <BasicButton type='default' used='stroked' />
            <BasicButton type='success' used='stroked' />
            <BasicButton type='primary' used='stroked' />
            <BasicButton type='warning' used='stroked' />
            <BasicButton type='danger' used='stroked' />
            <BasicButton type='info' used='stroked' />
        </div>
        <div>
          <h2>ICON BUTTONS</h2>
        </div>
        <div>
          <h2>BLOCKS BUTTONS</h2>
            <BlockButton type='default'/>
            <BlockButton type='success'/>
            <BlockButton type='primary' />
            <BlockButton type='warning' />
            <BlockButton type='danger' />
            <BlockButton type='info' />
        </div>
        <div>
          <h2>BASIC DROPDOWNS BUTTONS</h2>
            <DropDownButton type='default' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='success' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='primary' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='warning' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='danger' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='info' used='basic'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
        </div>
        <div>
          <h2>TOGGLE DROPDOWNS BUTTONS</h2>
            <DropDownButton type='default' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='success' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='primary' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='warning' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='danger' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
            <DropDownButton type='info' used='toggle'>
              <DropDownItem>Action</DropDownItem>
            </DropDownButton>
        </div>
      </div>
    );
  }
};
