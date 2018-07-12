import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-contents">
          <ul>
            <li>
              <a href="#">Chennai React JS Jobs</a>
            </li>
            <li>
              <a href="#">Chennai Vue JS Jobs</a>
            </li>
            <li>
              <a href="#">Chennai Angular JS Jobs</a>
            </li>
          </ul>
        </div>
        <p>&copy; 2019 React JS Chennai Community</p>
      </footer>
    );
  }
}

export default Footer;
