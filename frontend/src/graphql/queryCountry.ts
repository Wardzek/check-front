import { gql } from "@apollo/client";

export const queryCountry = gql`
  query country($id: ID!) {
    item: country(id: $id) {
      id
      name
      emoji
      code
    }
  }
`;
