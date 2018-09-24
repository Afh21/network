import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import { Spin, Button } from "antd";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spin size="large" />;
    } else {
      // Check if logged in User has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4> Display Profile </h4>;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <h2> Dashboard </h2>
            <p className=""> Welcome {user.name} </p>
            <p> You haven't yet setup a profile, please add some info.</p>
            <Link to="/dashboard/create-profile">
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
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
