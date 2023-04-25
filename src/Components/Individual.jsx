import React, { useEffect, useContext } from 'react'
//import BootstrapTable from 'react-bootstrap-table-next'
import { Link, useParams } from 'react-router-dom'
import { ProductContext } from '../context/productContext'
import { Button } from 'react-bootstrap';
import '../App.css';
import 'animate.css';
import {createItem, readItems} from '../utils/cart'


export default function Individual() {
  const { getProductInd, newProduct } = useContext(ProductContext)
  const {sku} = useParams()

  console.log(getProductInd);

  useEffect(() => {
    getProductInd(sku)
  }, [])


  return (
    <>
      
          
           <div className="content">
             <ProductDetail description={newProduct?.description} price={`$ ${newProduct?.price}`} sku={newProduct?.sku} image={newProduct?.image} />
           </div>
          
    
    </>
  );
}



const ProductDetail = ({ description, price, sku, image }) => { 
  function handleClick(){
    createItem ({ description, price, sku, image })
  }
  return (
      

  
      <div className="content">
        <p></p>
        <h3><p>{sku}</p></h3>
        <p><span>{price}</span></p>
        <p>{description}</p>
        <p><img src={image} alt="" title class="animate__animated animate__bounce"/></p><br></br>
        <p><button  onClick={() => handleClick()} className="btn-transparent outline">Agregar Comidita</button></p><br></br>
        
        </div>
    )

}

export  {Individual};
