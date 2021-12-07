import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory, Link } from "react-router";
import fetchSongsQuery from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query: fetchSongsQuery }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div style={{ marginTop: "5vh" }}>
        <Link to="/">Back</Link>
        <form style={{ marginTop: "5vh" }} onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ title: e.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
