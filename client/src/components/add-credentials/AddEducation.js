import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addEducation } from "../../actions/profileAction";

import {
  Form,
  Input,
  DatePicker,
  Divider,
  Row,
  Col,
  Button,
  Icon,
  Checkbox
} from "antd";

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const InputGroup = Input.Group;

class AddEducation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      degree: "",
      fieldofstudy: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleCheckBox = e => {
    this.setState({ current: e.target.checked });
  };

  handleDatePickerFrom = (date, dateString) => {
    this.setState({ from: dateString });
  };
  handleDatePickerTo = (date, dateString) => {
    this.setState({ to: dateString });
  };

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const education = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(education, this.props.history);
    console.log("Education: ", education);
  };

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };

    const {
      school,
      degree,
      location,
      fieldofstudy,
      current,
      description
    } = this.state;

    return (
      <div>
        <Row align="center">
          <Col lg={{ span: 12, push: 7 }}>
            <Divider orientation="left">Add Education</Divider>
            <p style={{ marginBottom: "2em" }}>
              Please, confirm all education possible. <br /> <br />
              <Link to="/dashboard">
                <Button> Go dashboard!</Button>
              </Link>
            </p>

            <Form onSubmit={this.onSubmit}>
              <FormItem {...formItemLayout} label=" School">
                <Input
                  id="school"
                  prefix={
                    <Icon type="cluster" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="school"
                  placeholder="What's your school?"
                  onChange={this.onChange}
                  value={school}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" Degree">
                <Input
                  id="degree"
                  prefix={
                    <Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="degree"
                  placeholder="Do you have a degree?"
                  onChange={this.onChange}
                  value={degree}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" FieldOfStudy">
                <Input
                  id="fieldofstudy"
                  prefix={
                    <Icon type="global" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  name="fieldofstudy"
                  placeholder="Do you have a fieldofstudy?"
                  onChange={this.onChange}
                  value={fieldofstudy}
                />
              </FormItem>

              <FormItem {...formItemLayout} label=" Location">
                <Input
                  id="location"
                  prefix={
                    <Icon
                      type="pushpin"
                      theme="outlined"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="location"
                  placeholder="What's your Location?"
                  onChange={this.onChange}
                  value={location}
                />
              </FormItem>

              <FormItem {...formItemLayout} label="** Date Degree">
                <InputGroup size="default">
                  <Col span={8}>
                    <DatePicker
                      id="from"
                      placeholder="From?"
                      name="from"
                      onChange={this.handleDatePickerFrom}
                    />
                  </Col>
                  <Col span={8}>
                    <DatePicker
                      id="to"
                      placeholder="To?"
                      name="to"
                      disabled={current}
                      onChange={this.handleDatePickerTo}
                    />
                  </Col>
                  <Col span={4}>
                    <Checkbox onChange={this.handleCheckBox}>
                      {" "}
                      Current?{" "}
                    </Checkbox>
                  </Col>
                </InputGroup>
              </FormItem>

              <FormItem {...formItemLayout} label=" Description">
                <TextArea
                  id="description"
                  prefix={
                    <Icon
                      type="solution"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  name="description"
                  placeholder=" Write some brief of you."
                  onChange={this.onChange}
                  value={description}
                  autosize
                />
              </FormItem>

              <FormItem {...formItemLayout}>
                <Button type="primary" htmlType="submit">
                  Save Experience
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

// Los errores no los voy a manejar, pero si es necesario hacerlo.

AddEducation.propTypes = {
  profile: PropTypes.object.isRequired,
  addEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
