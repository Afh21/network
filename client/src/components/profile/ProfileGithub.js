import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clientId: "0359518fc14a83e116a6",
      clientSecret: "9a5e44701b93af54b958be261aabebeba733ef0b",
      count: 5,
      sort: "Created: asc",
      repos: []
    };
  }

  componentDidMount = () => {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}$client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({
            repos: data
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { repos } = this.state;
    const repoItems = repos.map(repo => (
      <div key={repo.id}>
        <Link to={repo.html_url} target="_blank">
          {" "}
          {repo.name}{" "}
        </Link>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Watchers: {repo.watchers_count}</p>
        <p>Forks: {repo.forks_count}</p>
      </div>
    ));

    return (
      <div ref="myRef">
        <h3>Github Projects</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;

/*




 

 




  <div ref="myRef">
      <h3>Github Projects </h3>
      {repoItems}
    </div>
  */
