import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-text">Belasitz Ltd.</div>
        <div className="buttons">
          <button type="button">Timeline</button>
          <button type="button">References</button>
        </div>
      </div>
    );
  }
}
