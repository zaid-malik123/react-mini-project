import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../component/Card';
import Loading from '../component/Loading';
import Nav from '../component/Nav';

function Women() {
  const [ProductData, setProductData] = useState([]);

  const apiHandler = () => {
    const api = "https://fakestoreapi.com/products/category/women's clothing";
    axios.get(api)
      .then((products) => {
        setProductData(products.data);
        console.log(products.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    apiHandler();
  }, []);

  return (
    <div>
      <Nav />
      <div className='flex flex-wrap gap-6 p-10 justify-center'>
        {ProductData.length > 0 ? (
          ProductData.map((item, idx) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5" key={idx}>
              <Card item={item} />
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default Women;
