import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button, Tag } from "antd";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileAction";

class Education extends Component {
  id = 0;

  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "School",
        dataIndex: "school",
        key: "school"
      },
      {
        title: "Degree",
        dataIndex: "degree",
        key: "degree"
      },
      {
        title: "From",
        dataIndex: "from",
        key: "from",
        render: from => (
          <span>
            <Tag color="blue" key={from}>
              <Moment format="YYYY/MM/DD" date={from} add={{ hours: 12 }} />
            </Tag>
          </span>
        )
      },
      {
        title: "To",
        dataIndex: "to",
        key: "to",
        render: to => (
          <span>
            {to !== null ? (
              <Tag color="blue" key={to}>
                {" "}
                (<Moment
                  format="YYYY/MM/DD"
                  date={to}
                  add={{ hours: 12 }}
                />){" "}
              </Tag>
            ) : (
              <Tag color="red" key={Date.now()}>
                {" "}
                "Current"{" "}
              </Tag>
            )}
          </span>
        )
      },
      {
        title: "Action",
        key: "action",
        render: id => (
          <Button
            type="danger"
            ghost
            onClick={this.onDeleteClick.bind(this, id.key)}
          >
            {" "}
            Delete{" "}
          </Button>
        )
      }
    ];

    const data = [];
    const arrayData = this.props.education.map(edu =>
      data.unshift({
        key: edu._id,
        id: `${(this.id += 1)}`,
        school: edu.school,
        degree: edu.degree,
        from: edu.from,
        to: edu.to,
        rowKey: edu._id
      })
    );

    return (
      <div>
        <h4> Education Credentials</h4>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteEducation }
)(Education);
