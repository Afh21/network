import React, { Component } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Divider } from "antd";

class ProfileCreds extends Component {
  render() {
    const { education, experience } = this.props;

    const expItems = experience.map(exp => (
      <li key={exp._id}>
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY/MM/DD" date={exp.from} /> -
          {exp.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD" date={exp.to} />
          )}
        </p>
        <p>
          {exp.location === "" ? null : (
            <span>
              <strong>{exp.location}</strong>
            </span>
          )}
        </p>
      </li>
    ));

    const expEduc = education.map(edu => (
      <li key={edu._id}>
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD" date={edu.from} /> -
          {edu.to === null ? (
            "Now"
          ) : (
            <Moment format="YYYY/MM/DD" date={edu.to} />
          )}
        </p>
        <p>
          {edu.degree === "" ? null : (
            <span>
              <strong>{edu.degree}</strong>
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div>
        <Divider orientation="left"> Experience </Divider>
        {expItems}
        <Divider orientation="left"> Education </Divider>
        {expEduc}
      </div>
    );
  }
}

ProfileCreds.propTypes = {
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired
};

export default ProfileCreds;
