import { gql } from "apollo-boost";

import CartMutations from "./cart.mutations";
import UserMutations from "./user.mutations";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    RemoveItemFromCart(item: Item!): [Item]!
    ClearItemFromCart(item: Item!): [Item]!
    # Refresh: [Item]!
    SetCurrentUser(user: User!): User!
  }
`;

export const resolvers = {
  Mutation: { ...CartMutations, ...UserMutations }
};
