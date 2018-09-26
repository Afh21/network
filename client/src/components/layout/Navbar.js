import React, { Component } from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";

class Navbar extends Component {
  state = {
    current: "home"
  };

  onLogoutClick(e) {
    e.preventDefault();

    // Call to function to action redux
    this.props.logoutUser();

    // Set clearCurrentProfile
    this.props.clearCurrentProfile();
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    const authLinks = (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Button type="dashed" ghost>
              <Link to="/dashboard">Home</Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="logout">
            <Button
              type="primary"
              ghost
              onClick={this.onLogoutClick.bind(this)}
            >
              {" "}
              Cerrar Sesión
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );

    const guessLinks = (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Button type="dashed" ghost>
              <Link to="/">Home</Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="login">
            <Button type="primary" ghost>
              <Link to="/login">Iniciar Sesion</Link>
            </Button>
          </Menu.Item>

          <Menu.Item key="register">
            <Button type="danger" ghost>
              <Link to="/register">Registrarse</Link>
            </Button>
          </Menu.Item>
        </Menu>
      </div>
    );

    return <div> {isAuthenticated ? authLinks : guessLinks}</div>;
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(withRouter(Navbar));
