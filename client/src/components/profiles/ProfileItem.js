import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

import { List, Avatar, Icon, Button, Tag } from "antd";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    const data = [
      {
        id: profile._id,
        name: profile.user.name,
        email: profile.user.email,
        avatar: profile.user.avatar,
        status: profile.status,
        nickname: profile.handle,
        skills: profile.skills,
        location: profile.location
      }
    ];

    {
      /*
      console.log("profile:", profile);
      console.log("data: ", data);
    */
    }

    return (
      <div className="profileItems">
        <br />

        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <IconText type="star-o" text="156" />,
                <IconText type="like-o" text="156" />,
                <IconText type="message" text="2" />,
                <Link to={`/profile/${item.nickname}`}>
                  <Button size="small"> View Profile </Button>
                </Link>
              ]}
              extra={
                <img width={100} height={100} alt="logo" src={item.avatar} />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={`Ing. ${item.name}  #: ${item.nickname}`}
                description={profile.skills.slice(0, 4).map((skill, index) => (
                  <Tag color="orange" key={index}>
                    {" "}
                    {skill}{" "}
                  </Tag>
                ))}
              />
              Ubicacion:{" "}
              {isEmpty(item.location) ? null : <span>{item.location}</span>}
            </List.Item>
          )}
        />
      </div>
    );
  } // render()
}

export default ProfileItem;
