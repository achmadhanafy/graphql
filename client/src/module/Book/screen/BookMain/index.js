import { useMutation, useQuery } from "@apollo/client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getScreenHeight } from "../../../../App";
import { CompAddBook, CompBookDetail, CompBookList } from "../../components";
import {
  ADD_AUTHOR_MUTATION,
  ADD_BOOK_MUTATION,
} from "../../GraphQL/Mutations";
import { GET_AUTHORS_QUERIES, GET_BOOKS_QUERIES, GET_BOOK_QUERIES } from "../../GraphQL/Queries";

function ScBookMain() {
  const [selectBook, setSelectBookId] = useState(null)

  //query
  const getBook = useQuery(GET_BOOK_QUERIES,{
    variables:{
      id: selectBook
    }
  })
  const getBooks = useQuery(GET_BOOKS_QUERIES)
  const getAuthors = useQuery(GET_AUTHORS_QUERIES);

  //mutation
  const [addAuthor, { error: errorCreateUser }] = useMutation(
    ADD_AUTHOR_MUTATION,
    {
      onCompleted: () => {
        getAuthors.refetch();
        alert("Successfull create author");
      },
      onError: ({message}) => {
        alert(message)
      },
    }
  );
  const [addBook, { error: errorCreateBook }] = useMutation(ADD_BOOK_MUTATION, {
    onCompleted: () => {
      getBooks.refetch();
      alert("Successfull create book");
    },
    onError: ({message}) => {
      alert(message);
    },
  });

  //func create author
  const addAuthorFunc = useCallback(
    (name, age) => {
      addAuthor({
        variables: {
          name: name,
          age: parseInt(age),
        },
      });
    },
    [errorCreateUser]
  );

  //func create book
  const addBookFunc = useCallback(
    (name, genre, authorId) => {
      addBook({
        variables: {
          name: name,
          genre: genre,
          authorId: authorId,
        },
      })
    },
    [errorCreateBook]
  );

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          flexDirection: "row",
          display: "flex",
          height: getScreenHeight() - 50,
        }}
      >
        <CompBookList onSelect={(id)=>{
          setSelectBookId(id)
          getBook.refetch()
        }} data={getBooks?.data?.books} />
        <CompBookDetail isLoading={getBook.loading} data={getBook?.data?.book}/>
      </div>
      <div style={{ zIndex: 10, position: "fixed", bottom: 0 }}>
        <CompAddBook
          onSubmitBook={(name, genre, authorId) =>
            addBookFunc(name, genre, authorId)
          }
          onSubmitAuthor={(name, age) => addAuthorFunc(name, age)}
          authors={getAuthors?.data?.authors}
        />
      </div>
    </div>
  );
}

export default ScBookMain;
