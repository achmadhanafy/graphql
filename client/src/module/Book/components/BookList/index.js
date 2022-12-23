import React, { useEffect } from "react";
import style from './style'

function CompBookList({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  function BookList({title,author}){
    return(
      <div style={style.bookListContainer}>
        <div style={{fontSize:'20px'}}>{title}</div>
        <div>{author}</div>
      </div>
    )
  }

  return (
    <div style={{width: '60%', backgroundColor: '#E5E5CB',padding: 16}}>
      {data?.books?.map((element,i)=>(
        <BookList key={i} title={element?.name} author={element?.author?.name}/>
      ))}
    </div>
  );
}

export default CompBookList;
