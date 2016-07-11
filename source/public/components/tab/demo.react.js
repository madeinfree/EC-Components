import React, { Component, PropTypes } from 'react';
import ReactDom, { render } from 'react-dom';

import Nav from './nav.react';
import NavTab from './nav-tab.react';
import Pane from './pane.react';
import TabPane from './tab-pane.react';

export default class Demo extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Basic Tabs</h2>
        <div>
          <Nav type='warning'>
            <NavTab active={true} dest='popular1'>Popular</NavTab>
            <NavTab dest='recent1'>Recent</NavTab>
            <NavTab dest='comments1'>Comments</NavTab>
          </Nav>
          <Pane>
            <TabPane active={true} dest='popular1'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </TabPane>
            <TabPane dest='recent1'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPane>
            <TabPane dest='comments1'>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </TabPane>
          </Pane>
        </div>
        <div>
          <Nav type='primary'>
            <NavTab active={true} dest='popular2'>Popular</NavTab>
            <NavTab dest='recent2'>Recent</NavTab>
            <NavTab dest='comments2'>Comments</NavTab>
          </Nav>
          <Pane>
            <TabPane active={true} dest='popular2'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </TabPane>
            <TabPane dest='recent2'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPane>
            <TabPane dest='comments2'>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </TabPane>
          </Pane>
        </div>
        <div>
          <Nav type='success'>
            <NavTab active={true} dest='popular3'>Popular</NavTab>
            <NavTab dest='recent3'>Recent</NavTab>
            <NavTab dest='comments3'>Comments</NavTab>
          </Nav>
          <Pane>
            <TabPane active={true} dest='popular3'>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </TabPane>
            <TabPane dest='recent3'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TabPane>
            <TabPane dest='comments3'>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </TabPane>
          </Pane>
        </div>
      </div>

    )
  }
}


