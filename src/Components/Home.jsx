//import React, { useContext, useState, useEffect } from 'react'
import React, { useContext} from 'react'
import '../styles.css'
//import { AppContext } from '../context/globalContext'
import { UserContext } from '../context/userContext'
//import { ProductContext } from '../context/productContext'
import { Link } from 'react-router-dom'
//import PaypalButton from './PaypalButton'
import Product from './Product'
//import Products from '../pages/Productsreviso'

export default function Home() {
  //const { createBalance, newBalance, setNewBalance, success, error, setError, setSuccess } = useContext(AppContext)
  //const { createBalance, newBalance, setNewBalance, success, error, setError, setSuccess } = useContext(AppContext)
  //const { getProduct, success, error, setError, setSuccess } = useContext(ProductContext)
  //const { getProduct } = useContext(ProductContext)
  const { authStatus, success, error } = useContext(UserContext)
  //const [ok, setOk] = useState(false)

  //const handleChange = (event) => {
  //  setNewBalance({
  //    ...newBalance,
  //    [event.target.name]: event.target.value,
  //  })
 // }

  //const handleClick = async (event) => {
  //  setError(false)
  //  setSuccess(false)
  //  await handleChange(event)
  //  setOk(true)
 // }

 // useEffect(() => {
 //   ok && getProduct()
 //   setOk(false)
 // }, [ok])

  return (
    <div className='container'>
      <h1>Restaurant Online App</h1>
      {authStatus ? (
        <>
          <p className='homeP'>Bienvenido a la  Carta</p>
          
          <Link to='/product' className='p-4'>
            Ver Carta
          </Link>
          {success && (
            <div className='alert alert-success mt-4' role='alert'>
              Sus datos se guardaron exito
            </div>
          )}
          {error && (
            <div className='alert alert-danger mt-4' role='alert'>
              Hubo un error guardando sus datos
            </div>
          )}
        </>
      ) : (
        <p className='homeP'>Para ver la carta, inicia sesión</p>
      )}
      
   
    </div>
  )
}
