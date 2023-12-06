import { gql } from "@apollo/client";

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($user: UserInput!) {
    createUser(user: $user) {
      email
      isAdmin
    }
  }
`;
