import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
//import Historial from './Components/Historial'
import Header from './Components/Header'
import Register from './Components/Register'
import Login from './Components/Login'
import PrivateRoute from './Components/Auth/PrivateRoute'
import Product from './Components/Product'
import Carrito from './Components/Carrito'
import Individual from './Components/Individual'

//import Products from './pages/Productsreviso.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/product' element={<Product />} />
        </Route>
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/individual/:id' element={<Individual />} />
      </Routes>
    </>
  )
}

export default App
