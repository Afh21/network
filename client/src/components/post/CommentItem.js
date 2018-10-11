import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postAction";
import { Col, Row, Button } from "antd";

class CommenItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };

  render() {
    const { comment, postId, auth } = this.props;

    let content;

    if (comment.user === auth.user.id) {
      content = (
        <Button
          type="danger"
          size="small"
          ghost
          onClick={this.onDeleteClick.bind(this, postId, comment._id)}
        >
          {" "}
          Eliminar{" "}
        </Button>
      );
    } else {
      content = null;
    }

    return (
      <div>
        <Row>
          <Col lg={12} offset={6}>
            <ul>
              <li> {comment.text} </li>
              <li>
                {" "}
                by <strong> {comment.name} </strong>
              </li>
              <li>{content}</li>
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

CommenItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommenItem);
