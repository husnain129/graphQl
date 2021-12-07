import gql from "graphql-tag";
import React, { Component } from "react";
import { graphql } from "react-apollo";

class LyricList extends Component {
  onLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          __typename: "LyricType",
          likes: likes + 1,
        },
      },
    });
  }
  render() {
    let song = this.props.song;
    return (
      <div className="container" style={{ marginTop: "5vh" }}>
        <ul className="collection">
          {song &&
            song.lyrics.map((e, id) => (
              <li key={id} className="collection-item">
                {e.content}
                <span className="right" style={{ marginLeft: "20px" }}>
                  {e.likes}
                </span>
                <i
                  className="material-icons right"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.onLike(e.id, e.likes)}
                >
                  thumb_up
                </i>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
