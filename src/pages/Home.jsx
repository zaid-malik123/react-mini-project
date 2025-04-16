import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../component/Card';
import Loading from '../component/Loading';
import { data } from 'react-router-dom';
import Nav from '../component/Nav';
function Home() {
 
  const [ProductData, setProductData] = useState([])
  const apiHandler = ()=>{
    const api = "https://fakestoreapi.com/products";
      axios.get(api).then((products)=>{
        setProductData(products.data);
        console.log(products.data)
      }).catch((err)=>{
        console.log(err)
      })
  }
  useEffect(()=>{
  apiHandler();
  },[])
  return (
    <div>
      <Nav/>
    <div className='flex gap-10 p-10 flex-wrap items-center justify-center '>
     {ProductData.length > 0 ? (
      ProductData.map((item, idx)=>(
   
          <Card item={item} key={idx}/>

      ))
     ):
     <Loading/>
     }
    </div>
    </div>
  )
}

export default Home;


