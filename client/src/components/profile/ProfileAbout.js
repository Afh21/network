import React, { Component } from "react";
import { Divider, Icon } from "antd";
import PropTypes from "prop-types";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(" ")[0];

    const skills = profile.skills.map((skill, index) => (
      <div key={index}> {skill} </div>
    ));

    return (
      <div>
        <Divider orientation="left">
          {" "}
          Skills of {firstName}
          <div> {skills}</div>
        </Divider>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
