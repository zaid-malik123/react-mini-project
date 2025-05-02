import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../component/Card';
import Loading from '../component/Loading';
import Nav from '../component/Nav';

function Child() {
  const [ProductData, setProductData] = useState([]);

  const apiHandler = () => {
    const api = "https://fakestoreapi.com/products/category/jewelery";
    axios.get(api).then((products) => {
      setProductData(products.data);
      console.log(products.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    apiHandler();
  }, []);

  return (
    <div>
      <Nav />
      <div className='p-6 sm:p-8 md:p-10'>
        {/* Adjust grid layout for responsiveness */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {ProductData.length > 0 ? (
            ProductData.map((item, idx) => (
              <Card item={item} key={idx} />
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default Child;
