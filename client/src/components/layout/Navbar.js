import React, { Component } from "react";
import { Menu, Button } from "antd";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    current: "login"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
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
  }
}

export default Navbar;
