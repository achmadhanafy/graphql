import { gql } from "@apollo/client";

export const GET_BOOKS_QUERIES = gql`
  query {
    books {
      name
      id
      author {
        name
      }
    }
  }
`;

export const GET_AUTHORS_QUERIES = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOK_QUERIES = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;
