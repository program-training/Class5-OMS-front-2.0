import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($user: UserLoginInput!) {
    login(user: $user) {
      message
      resInfoObj {
        user {
          email
          isadmin
        }
        token
      }
    }
  }
`;
