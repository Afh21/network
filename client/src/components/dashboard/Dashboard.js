import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileAction";
import { Spin, Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import ProfileActions from "./ProfileActions";

import Experience from "./Experience";
import Education from "./Education";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spin size="large" />;
    } else {
      // Check if logged in User has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <Tooltip placement="left" title={`Profile ${user.name}`}>
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
            </Tooltip>
            {/* Buttons of actionProfile*/}
            <ProfileActions />
            <br />
            {/* Experience */}
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <br />
            {/* Button delete account */}
            <Button
              icon="warning"
              type="danger"
              ghost
              onClick={this.onDeleteClick.bind(this)}
            >
              Delete Account
            </Button>
            <br /> <br />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <h2> Dashboard </h2>
            <p className=""> Welcome {user.name} </p>
            <p> You haven't yet setup a profile, please add some info.</p>
            <Link to="/dashboard/profile/create-profile">
              <Button type="primary" ghost>
                {" "}
                Create Profile{" "}
              </Button>
            </Link>
          </div>
        );
      }
    }

    return <div className="dashboard">{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
