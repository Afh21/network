import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost, getPosts } from "../../actions/postAction";
import { Form, Input, Button, Row, Col } from "antd";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  /* Para setear los errores
  componentWillReceiveProps(nextProps) {
      if(nextProps.errors) {
          this.setState({ errors: nextProps.errors})
      }
  }
  */

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });

    this.props.getPosts(); // Esto no es aqui originalmente
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <Row>
          <Col lg={12} offset={6}>
            <Form onSubmit={this.onSubmit}>
              <FormItem>
                <TextArea
                  id="text"
                  placeholder="Write a post here ... "
                  value={this.state.text}
                  onChange={this.onChange}
                />
              </FormItem>
              <FormItem>
                <Button htmlType="submit">Postear !</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // errors: state.erros
});

export default connect(
  mapStateToProps,
  { addPost, getPosts }
)(PostForm);
