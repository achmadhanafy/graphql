import { useQuery } from '@apollo/client'
import React, {useEffect} from 'react'
import { GET_BOOKS_QUERIES } from '../../GraphQL/Queries'

function ScBookMain() {
 const {error, loading, data} = useQuery(GET_BOOKS_QUERIES)

 useEffect(()=>{
  console.log(data)
 },[])
  return (
    <div>ScBookMain</div>
  )
}

export default ScBookMain