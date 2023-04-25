import { useState, createContext } from 'react'
import productAxios from '../config/axios'
export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [newProduct, setNewProduct] = useState()
  const [product, setProduct] = useState([])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  
  const getProduct = async (dataForm) => {
    try {
      const res = await productAxios.get('/product', dataForm)
      setProduct(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  
  const getProductInd = async (sku) => {
    try {
      const res = await productAxios.get(`/product/${sku}`, sku)
      setNewProduct(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const data = {
    
    getProduct,
    getProductInd,
    product,
    setProduct,
    newProduct,
    setNewProduct,
    success,
    error,
    setSuccess,
    setError,
    //deleteProduct,
  }
  console.log('CONTEXTO', data)
  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
}
