// ApolloClient -> making request for data and store when its comes back
import { default as ApolloClient } from "apollo-client";
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { hashHistory, IndexRoute, Route, Router } from "react-router";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  // cache: new InMemoryCache()
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
