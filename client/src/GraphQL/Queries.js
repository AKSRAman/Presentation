import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
 query getAllUsersFromMongo{
   getAllUsersFromMongo{
     firstName
     lastName
     email
     password
  }
}`;