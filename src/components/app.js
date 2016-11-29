/**
 * Main app layout file
 */

import React, {Component} from 'react';
// Containers

// CSS
import './app.scss';

/* eslint-disable no-console */

export default class App extends Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
