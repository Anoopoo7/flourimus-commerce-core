import { gql } from "apollo-server-express";

export const ProductQuries = gql`
  type Query {
    product(_id: String!): Product
  }
`;