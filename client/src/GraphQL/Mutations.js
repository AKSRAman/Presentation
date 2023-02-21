import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUserMongo(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String
  ) {
    createUserMongo(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      firstName
      lastName
      email
      password
    }
  }
`;
