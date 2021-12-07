import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongQuery from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  render() {
    let song = this.props.data.song;
    return (
      <div className="container" style={{ marginTop: "5vh" }}>
        <Link to="/">Back</Link>
        <h2>{song && song.title}</h2>
        {song && <LyricCreate id={song.id} />}
        {song && <LyricList song={song} />}
      </div>
    );
  }
}

export default graphql(fetchSongQuery, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
// export default SongDetail;
