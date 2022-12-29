import React, { useEffect } from "react";
import style from './style'

function CompBookList({ data, onSelect }) {

  function BookList({title, author, onSelect}){
    return(
      <div onClick={onSelect} style={style.bookListContainer}>
        <div style={{fontSize:'20px'}}>{title}</div>
        <div style={{fontWeight: "500"}}>{author}</div>
      </div>
    )
  }

  return (
    <div style={{width: '60%', backgroundColor: '#E5E5CB',padding: 16}}>
      {data?.map((element,i)=>(
        <BookList onSelect={()=>{
          onSelect(element?.id)
        }} key={i} title={element?.name} author={element?.author?.name}/>
      ))}
    </div>
  );
}

export default CompBookList;
