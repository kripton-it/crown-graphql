import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";

import App from "./App";

import { GET_CURRENT_USER, SET_CURRENT_USER } from "./graphql/user.queries";

const AppContainer = ({ currentUserData, setCurrentUser }) => (
  <App
    currentUser={currentUserData.currentUser}
    setCurrentUser={setCurrentUser}
  />
);

export default flowRight(
  graphql(GET_CURRENT_USER, { name: "currentUserData" }),
  graphql(SET_CURRENT_USER, { name: "setCurrentUser" })
)(AppContainer);
