import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import Navbar from "../Component/Navbar";
import Fable from "../Component/Fable";
import Foto4 from "../Asset/Foto4.svg";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState('')
  const {id} = useParams()

  useEffect(()=>{
    (async ()=>{
      const y = await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(y)
      setProduct(y.data)
    })()
  },[])
console.log(product)

  return (
    <>
      <Navbar />
      {product === '' ? <div className="loading_div">loading...</div> : <Fable name={product.title} price={"€" + product.price} img={product.images === undefined ? '' : product.images[0]}  desc={product.description}/>}
    </>
  );
};

export default Product;
