import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import ItemDeatilContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = '../src/products.json'

function App() {

  const [products, setProducts] = useState([]);

  const getProductos = async () => {
    try {
    const response = await axios(URL);
    setProducts(response.data);
    } catch (error) {
    console.log("ERROR: " + error);
    }
  };

  useEffect(() => {

    getProductos();

    }, []);

  return (

    <div>
      <Navbar carritoIcono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<ItemListContainer product={products}/>} />
        <Route path="/item/:id" element={<ItemDeatilContainer product={products}/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
