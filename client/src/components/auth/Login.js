import React, { Component } from "react";
import { Form, Input, Checkbox, Button } from "antd";

const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  render() {
    const { email, password } = this.state;

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
          <h3 className="center"> Formulario de Inicio de Sesión </h3>
        </div>

        <Form onSubmit={this.onSubmit}>
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

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Iniciar Sesión
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

// const WrappedRegistrationForm = Form.create()(Register);

export default Login;
