import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { registerUser } from "../../actions/authAction";

const FormItem = Form.Item;

class Register extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    // Action RegisterUser
    this.props.registerUser(newUser);

    /*axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
      */
  };

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { name, email, password, password2 } = this.state;

    // Esto viene del mapStateToProps
    const { user } = this.props.auth;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        lg: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        lg: { span: 7 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        },
        lg: {
          span: 10,
          offset: 4
        }
      }
    };

    return (
      <div className="indexRegister">
        <div className="title">
          {user ? user.name : "Cabron"}
          <h3 className="center"> Formulario de Registro </h3>
        </div>

        <Form onSubmit={this.onSubmit}>
          <FormItem {...formItemLayout} label="Nick">
            <Input id="name" defaultValue={name} onChange={this.onChange} />
          </FormItem>

          <FormItem {...formItemLayout} label="E-mail">
            <Input id="email" defaultValue={email} onChange={this.onChange} />
          </FormItem>

          <FormItem {...formItemLayout} label="Password">
            <Input
              id="password"
              type="password"
              defaultValue={password}
              onChange={this.onChange}
            />
          </FormItem>

          <FormItem {...formItemLayout} label="Confirm Password">
            <Input
              id="password2"
              type="password"
              defaultValue={password2}
              onChange={this.onChange}
              onBlur={this.handleConfirmBlur}
            />
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

Register.PropTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
