import React, { Component } from 'react';

class AppBar extends Component {
  render() {
    return (
      <div className="AppBar">
        <header className="AppBar-header">
          <img src={logo} className="AppBar-logo" alt="logo" />
          <p>
            Edit <code>src/AppBar.js</code> and save to reload.
          </p>
          <a
            className="AppBar-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default AppBar;