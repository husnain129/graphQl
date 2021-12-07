import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongQuery from "../queries/fetchSong";
import fetchSongsQuery from "../queries/fetchSongs";

class SongList extends Component {
  deleteSong(id) {
    this.props
      .mutate({
        variables: {
          id,
        },
        refetchQueries: [{ query: fetchSongQuery }],
      })
      .then(() => this.props.data.refetch());
  }
  renderSongs() {
    if (this.props.data.songs) {
      return this.props.data.songs.map((song, id) => {
        return (
          <li
            key={id}
            className="collection-item"
            style={{ cursor: "pointer" }}
          >
            <Link to={`/songs/${song.id}`}>{song.title}</Link>
            <i
              className="material-icons right"
              style={{ cursor: "pointer" }}
              onClick={() => this.deleteSong(song.id)}
            >
              delete
            </i>
          </li>
        );
      });
    } else {
      return <p>Loading ...</p>;
    }
  }
  render() {
    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongsQuery)(SongList));
