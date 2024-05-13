import { gql } from "@apollo/client";

export const mutationCreateCountry = gql`
  mutation addCountry($data: NewCountryInput!) {
    item: addCountry(data: $data) {
      id
    }
  }
`;
