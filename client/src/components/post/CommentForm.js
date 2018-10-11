import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost, getPost, addComment } from "../../actions/postAction";
import { Form, Input, Button, Row, Col } from "antd";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

class CommentForm extends Component {
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
    const { postId } = this.props;

    const newComment = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(postId, newComment);
    this.setState({ text: "" });

    this.props.getPost(postId); // Esto no es aqui originalmente
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div>
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
                <Button htmlType="submit">Comentar !</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  getPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
  // errors: state.erros
});

export default connect(
  mapStateToProps,
  { addPost, getPost, addComment }
)(CommentForm);
