import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postAction";

import { List, Avatar, Icon, Col, Row, Button } from "antd";

class PostItem extends Component {
  deleteOwnPost(id) {
    this.props.deletePost(id);
  }

  onUnLikeClick(id) {
    this.props.removeLike(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;
    let content;

    if (post.user._id === auth.user.id) {
      content = (
        <Button
          type="danger"
          size="small"
          ghost
          onClick={this.deleteOwnPost.bind(this, post._id)}
        >
          {" "}
          Eliminar{" "}
        </Button>
      );
    } else {
      content = null;
    }

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    const listData = [
      {
        id: post._id,
        user: post.name,
        description: post.text,
        avatar: auth.user.avatar
      }
    ];

    return (
      <div>
        <Row>
          <Col lg={12} offset={6}>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={listData}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  actions={
                    showActions
                      ? [
                          <Button
                            type="primary"
                            onClick={this.onLikeClick.bind(this, post._id)}
                            icon="like-o"
                            size="small"
                          >
                            {" "}
                            Me gusta &nbsp; (<span>{post.likes.length}</span>)
                          </Button>,
                          <Button
                            onClick={this.onUnLikeClick.bind(this, post._id)}
                            icon="dislike-o"
                            size="small"
                          >
                            {" "}
                            No Me gusta
                          </Button>,
                          <Link to={`/dashboard/post/${post._id}`}>
                            <IconText type="message" text="2" />
                          </Link>,
                          <Link to="#">{content}</Link>
                        ]
                      : []
                  }
                  extra={
                    <img
                      width={100}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={`${item.user}`}
                    description={`${item.description}`}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <br />
        <br />
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  showActions: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
