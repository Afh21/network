import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Form, Input, Select, Divider, Row, Col, Button, Switch } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      displaySocialInputs: false,
      handle: "",
      status: "",
      company: "",
      website: "",
      location: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    // Binding of methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  // Only for selects
  handleStatus = value => {
    this.setState({ status: value });
  };

  onSubmit(e) {
    e.preventDefault();

    const profile = {
      handle: this.state.handle,
      status: this.state.status,
      company: this.state.company,
      website: this.state.website,
      skills: this.state.skills,
      location: this.state.location,
      githubusername: this.state.githubusername,
      bio: this.state.bio
    };
    console.log(profile);
  }

  handleStateSwitch = checked => {
    this.setState({ displaySocialInputs: checked });
  };

  onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  // Rendering application
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    const {
      displaySocialInputs,
      handle,
      status,
      company,
      website,
      location,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors
    } = this.state;

    const { TextArea } = Input;
    let socialInputs;

    console.log("Ey", displaySocialInputs);

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <FormItem {...formItemLayout} label=" Twitter">
            <Input
              id="twitter"
              name="twitter"
              placeholder=" Do u have twitter?"
              onChange={this.onChange}
              value={twitter}
            />
          </FormItem>

          <FormItem {...formItemLayout} label=" Facebook">
            <Input
              id="facebook"
              name="facebook"
              placeholder=" Do u have Facebook?"
              onChange={this.onChange}
              value={facebook}
            />
          </FormItem>

          <FormItem {...formItemLayout} label=" Linkedin">
            <Input
              id="linkedin"
              name="linkedin"
              placeholder=" Do u have Linkedin?"
              onChange={this.onChange}
              value={linkedin}
            />
          </FormItem>

          <FormItem {...formItemLayout} label=" Youtube">
            <Input
              id="youtube"
              name="youtube"
              placeholder=" Do u have Youtube?"
              onChange={this.onChange}
              value={youtube}
            />
          </FormItem>

          <FormItem {...formItemLayout} label=" Instagram">
            <Input
              id="instagram"
              name="instagram"
              placeholder=" Do u have Instagram?"
              onChange={this.onChange}
              value={instagram}
            />
          </FormItem>
        </div>
      );
    }

    return (
      <div>
        <Row align="center">
          <Col lg={{ span: 12, push: 7 }}>
            <Divider orientation="left">Create Profile</Divider>
            <p style={{ marginBottom: "5em" }}>
              Please, let's us know u adding some information in this part. Ok.
              Thanks
            </p>
            <Form onSubmit={this.onSubmit}>
              <FormItem {...formItemLayout} label=" ** Nick">
                <Input
                  id="handle"
                  name="handle"
                  placeholder="What Nickname do you want?"
                  onChange={this.onChange}
                  value={handle}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" ** Profession">
                <Select
                  id="status"
                  name={status}
                  defaultValue="0"
                  onChange={this.handleStatus}
                >
                  <Option value="0">*Select professional status</Option>
                  <Option value="Developer">Developer</Option>
                  <Option value="Junior Developer">Junior Developer</Option>
                  <Option value="Senior Developer">Senior Developer</Option>
                  <Option value="Manager ">Manager </Option>
                  <Option value="Student or Learning">
                    {" "}
                    Student or Learning
                  </Option>
                  <Option value="Instructor or Teacher">
                    {" "}
                    Instructor or Teacher
                  </Option>
                  <Option value="Intern">Intern</Option>
                  <Option value="Other">Other</Option>
                </Select>
              </FormItem>

              <FormItem {...formItemLayout} label=" ** Company">
                <Input
                  id="company"
                  name="company"
                  placeholder="What's your company?"
                  onChange={this.onChange}
                  value={company}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" Website">
                <Input
                  id="website"
                  name="website"
                  placeholder="Do you have a website?"
                  onChange={this.onChange}
                  value={website}
                />
              </FormItem>

              <FormItem {...formItemLayout} label="** Skills">
                <Input
                  id="skills"
                  name="skills"
                  placeholder="Whats are your skills?"
                  onChange={this.onChange}
                  value={skills}
                />
              </FormItem>

              <FormItem {...formItemLayout} label="** Location">
                <Input
                  id="location"
                  name="location"
                  placeholder="Where do u work?"
                  onChange={this.onChange}
                  value={location}
                />
              </FormItem>

              <FormItem {...formItemLayout} label="** Github Username">
                <Input
                  id="githubusername"
                  name="githubusername"
                  placeholder="Do u have github?"
                  onChange={this.onChange}
                  value={githubusername}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" Biographic">
                <TextArea
                  id="bio"
                  name="bio"
                  placeholder=" Write some brief of you."
                  onChange={this.onChange}
                  value={bio}
                  autosize
                />
              </FormItem>

              <FormItem {...formItemLayout}>
                <Switch
                  defaultChecked={displaySocialInputs}
                  onChange={this.handleStateSwitch}
                />
              </FormItem>

              {socialInputs}

              <FormItem {...formItemLayout}>
                <Button type="primary" htmlType="submit">
                  Create Profile
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

// Video 51 empezando

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(CreateProfile);
