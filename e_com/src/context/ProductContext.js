import React, { createContext, useEffect, useState } from 'react'

export const ProductContext =createContext();

function ProductProvider({children}) {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchProduct=async()=>{
          const response=await fetch('https://dummyjson.com/products');
          const data = await response.json();
          setProducts(data.products)
        }
        fetchProduct();
    },[])
    
   
  return <ProductContext.Provider value={{products,setProducts}}>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider
