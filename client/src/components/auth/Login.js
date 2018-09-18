import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";

// Esto es para evaluar una condicion y establecer una clase css
// import classnames from "classnames";

const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    // Call action redux
    this.props.loginUser(userData);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashbaord");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

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

    // const { errors } = this.state;

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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
