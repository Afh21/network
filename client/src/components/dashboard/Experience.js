import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Table, Button, Tag } from "antd";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";

class Experience extends Component {
  id = 0;

  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company"
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
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
    const arrayData = this.props.experience.map(exp =>
      data.unshift({
        key: exp._id,
        id: `${(this.id += 1)}`,
        company: exp.company,
        title: exp.title,
        from: exp.from,
        to: exp.to,
        rowKey: exp._id
      })
    );

    return (
      <div>
        <h4> Experience Credentials</h4>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { deleteExperience }
)(Experience);
