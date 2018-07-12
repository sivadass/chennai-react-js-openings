import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a className="branding" href="/">
          React JS Openings
        </a>
        <a className="button button-primary" href="/post-job">
          Post a Job
        </a>
      </header>
    );
  }
}

export default Header;
