import { GET_CURRENT_USER } from "./user.queries";

// mutations
const setCurrentUser = (_root, { user }, { cache }, _info) => {
  cache.writeQuery({
    query: GET_CURRENT_USER,
    data: { currentUser: user }
  });

  return user;
};

export default {
  setCurrentUser
};
