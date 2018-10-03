import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "../../actions/profileAction";

import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileCreds from "./ProfileCreds";
import ProfileGithub from "./ProfileGithub";
import { Spin, Row, Col, Card } from "antd";
import { Button } from "antd/lib/radio";

class Profile extends Component {
  componentDidMount() {
    // Capture params by Route. Awesome
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spin />;
    } else {
      profileContent = (
        <Row>
          <br />
          <Col span={8} offset={4}>
            <Link to="/profiles">
              {" "}
              <Button> Back to Profiles </Button>
            </Link>
          </Col>
          <br /> <br />
          <Col span={15} offset={6}>
            <Card title="Card title">
              <Card type="inner" title="Header">
                <ProfileHeader profile={profile} />
              </Card>

              <Card type="inner" title="Body about">
                <ProfileAbout profile={profile} />
              </Card>

              <Card type="inner" title="Body Creds">
                <ProfileCreds
                  education={profile.education}
                  experience={profile.experience}
                />
              </Card>

              <Card type="inner" title="Links Github">
                <ProfileGithub profile={profile} />
              </Card>
            </Card>
          </Col>
        </Row>
      );
    }

    return <div>{profileContent}</div>;
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
