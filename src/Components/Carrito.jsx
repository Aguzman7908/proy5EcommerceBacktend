import React, { useEffect, useContext } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Link } from 'react-router-dom'

import { ProductContext } from '../context/productContext'
//import { Button } from 'react-bootstrap';
import '../App.css';
import 'animate.css';
import {createItem, readItems, parseStorage} from '../utils/cart'

import PaypalButton from './PaypalButton'
import {Product} from './Product'




export default function Historial() {
  //const { readItems } = useContext(Product)
  const { getProduct, product } = useContext(ProductContext)


  useEffect(() => {
    getProduct()
  }, [])


  
 

  const data = () => {
    /*return product.map((item) => {*/
    
   return readItems((articulo) => {


    /*
      return {
               
        //description: item.description,
        sku: articulo.sku,
        precio: `$ ${articulo.price}`,
        //Cantidad: localStorage.setItem.sku
      
        
        
        
      }*/
    })
  }

  const columns = [
    {
      dataField: 'sku',
      text: 'Sku',
    },
    
    {
      dataField: 'price',
      text: 'Precio',
    },
    {
      dataField: 'quantity',
      text: 'Cantidad',
    },
    
  ]

  return (
    <>
      <BootstrapTable keyField='id' data={product ? data() : []} columns={columns} noDataIndication='Animate compra comida' hover />
      <Link to='/' className='btn btn-secondary d-flex justify-content-center'>
      <PaypalButton value='50' />
        Comprar
      </Link>
    </>
  )
}
