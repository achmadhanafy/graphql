import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { getScreenHeight } from "../../../../App";
import { CompAddBook, CompBookDetail, CompBookList } from "../../components";
import { GET_BOOKS_QUERIES } from "../../GraphQL/Queries";

function ScBookMain() {
  const { error, loading, data } = useQuery(GET_BOOKS_QUERIES);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(data);
  }, [data]);
  console.log(getScreenHeight());
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
        <CompBookList data={books} />
        <CompBookDetail />
      </div>
      <div style={{zIndex: 10, position:'fixed', bottom: 0}}>
        <CompAddBook />
      </div>
    </div>
  );
}

export default ScBookMain;
