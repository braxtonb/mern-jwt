import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Header.css';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout" className="navbar-btn">Sign Out</Link>
        </li>
      );
    }

    return [
      <li className="nav-item" key={1}>
        <Link to="/signin" className="navbar-btn">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link to="/signup" className="navbar-btn">Sign Up</Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-inverse" style={styles.navbar}>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/" className="navbar-brand navbar-btn">Redux Auth</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  authenticated: auth.authenticated,
});

Header.propTypes = {
  authenticated: PropTypes.bool,
};

Header.defaultProps = {
  authenticated: false,
};

export default connect(mapStateToProps)(Header);
