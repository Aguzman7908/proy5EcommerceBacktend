import React, { useEffect, useContext } from 'react'
//import BootstrapTable from 'react-bootstrap-table-next'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/productContext'
//import { Button } from 'react-bootstrap';
import '../App.css';
import 'animate.css';
import {createItem, readItems} from '../utils/cart'
import Product from './Product';


export default function Individual() {
  const { getProductInd, newProduct } = useContext(ProductContext)
  const sku = useParams()



  useEffect(() => {
    getProductInd(sku)
     //newProduct(sku)
    
  }, [])


  console.log('SKU2:', {sku});
  
  const data = () => {
    return getProductInd.map((sku) => {
      

      return {
        description: sku.description,
        price: `$ ${sku.price}`,
        sku: sku.sku,
        
       
      }
      
    })
  }


  return (
   <>
      
          
           <div className="content">
             <ProductDetail description={getProductInd?.description} price={`$ ${getProductInd?.price}`} sku={getProductInd?.sku} image={getProductInd?.image} />
           </div>
           
    
    </>
  );

  
}



const ProductDetail = ({ description, price, sku, image }) => { 
  function handleClick(){
    readItems ({ description, price, sku, image })
  }
  return (
      

  
      <div className="content">
        <p></p>
        
        <h3><p>{sku}Hola1</p></h3>
        <p><span>{price}Hola2</span></p>
        <p>{description}Hola3</p>
        <p><img src={image} alt="" title class="animate__animated animate__bounce"/>Hola4</p><br></br>
        <p><button  onClick={() => handleClick()} className="btn-transparent outline">Agregar Comidita</button></p><br></br>
        
        </div>
    )

}

export  {Individual};
