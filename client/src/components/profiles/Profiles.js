import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Spin } from "antd";
import { getProfiles } from "../../actions/profileAction";
import ProfileItem from "../profiles/ProfileItem";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spin size="large"> </Spin>;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h3> No profiles found ... </h3>;
      }
    }

    return <div>{profileItems}</div>;
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
