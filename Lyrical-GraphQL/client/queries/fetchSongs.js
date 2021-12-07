import gql from "graphql-tag";

let fetchSongsQuery = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default fetchSongsQuery;
