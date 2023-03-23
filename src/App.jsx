import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./src/products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  console.log(products)

  return (

    <div>
      <Navbar carritoIcono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"/>
      <Routes>
        <Route path="/" element={<Home  products={products}/>}/>
      </Routes>
    </div>
  )
}

export default App
