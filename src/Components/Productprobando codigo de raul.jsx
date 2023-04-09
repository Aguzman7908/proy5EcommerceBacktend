import React, { useEffect, useContext } from 'react'
//import BootstrapTable from 'react-bootstrap-table-next'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext'

export default function Product() {
  const { getProduct, product } = useContext(ProductContext)

  useEffect(() => {
    getProduct()
  }, [])

  const data = () => {
    return product.map((item) => {
      

      return {
        description: item.description,
        price: `$ ${item.price}`,
        sku: item.sku,
       
      }
      
    })
  }
  
  
    return (
      <>
        { <span>Cargando1</span>  ? (
          <span>Cargando2</span>
        ) : (
          product.map((item) => (
            <div key={item.sku} className="col-3">
              <div description={item.description} price={`$ ${item.price}`} />
            </div>
          ))
        )}
      </>
    );
}
