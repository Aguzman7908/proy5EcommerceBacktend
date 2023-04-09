import React, { useEffect, useContext } from 'react'
//import BootstrapTable from 'react-bootstrap-table-next'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext'
import { Button } from 'react-bootstrap';
import '../App.css';
import 'animate.css';
import {createItem, readItems} from '../utils/cart'

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
  

  console.log(product);
  
  return (
    <>
      { 
        product.map((item) => (
          
           <div key={item.sku} className="content">
             <ProductDetail description={item.description} price={`$ ${item.price}`} sku={item.sku} image={item.image} />
           </div>
          
      ))}
    </>
  );
}



const ProductDetail = ({ description, price, sku,image }) => { 
  function handleClick(){
    createItem ({ description, price, sku,image })
  }
  return (
      

  
      <div className="content">
        <p></p>
        <h3><p>{sku}</p></h3>
        <p><span>{price}</span></p>
        <p>{description}</p>
        <p><img src={image} alt="" title class="animate__animated animate__bounce"/></p><br></br>
        <p><button  onClick={() => handleClick()} className="btn-transparent outline">Agregar a tu Carrito</button></p><br></br>
        
        </div>
    )

}

export  {Product};
