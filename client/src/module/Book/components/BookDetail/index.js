import React from 'react'
import style from './style'

function CompBookDetail({data,isLoading}) {
  if (!data){
    return (
      <div style={style.container}>
        {isLoading ? "...Loading" : "Choose book to see the detail" }
      </div>
    )
  }

  return (
    <div style={style.container}>
      <h2>{data?.name}</h2>
      <div style={{display:'flex'}}>
        <div style={{width:70}}>Genre:</div>
        <div>{data?.genre}</div>
      </div>
      <div style={{display:'flex'}}>
        <div style={{width:70}}>Author:</div>
        <div>{data?.author?.name}</div>
      </div>
      <div style={{marginTop:20}}>More book have created by author</div>
      <ul>
       {data?.author?.books?.map((element,i)=>(
        <li key={i}>{element?.name}</li>
       ))}
      </ul>
    </div>
  )
}

export default CompBookDetail