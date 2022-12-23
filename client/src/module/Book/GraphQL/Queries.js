import { gql } from "@apollo/client";

export const GET_BOOKS_QUERIES = gql`
  query {
    books {
      name
      id
      author{
        name
      }
    }
  }
`;
