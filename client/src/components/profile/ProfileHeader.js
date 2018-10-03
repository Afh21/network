import React, { Component } from "react";
import { Divider } from "antd";
import PropTypes from "prop-types";

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div>
        <Divider orientation="left">
          {" "}
          Profile: <span> {profile.user.name} </span>{" "}
          <ul className="listHeader">
            <li>Nickname: {profile.handle} </li>
            <li>
              {" "}
              Status: {profile.status} at <span> {profile.company} </span>{" "}
            </li>
          </ul>
        </Divider>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileHeader;
