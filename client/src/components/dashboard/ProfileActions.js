import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ButtonGroup = Button.Group;

const ProfileActions = () => {
  return (
    <div>
      <ButtonGroup>
        <Link to={`/dashboard/profile/edit-profile/`}>
          <Button icon="edit">Edit Profile</Button>
        </Link>

        <Link to={`/dashboard/profile/add-experience/`}>
          <Button icon="bars">Add Experience</Button>
        </Link>

        <Link to={`/dashboard/profile/add-experience/`}>
          <Button icon="book">Add Education</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default ProfileActions;
