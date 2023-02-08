import { useState, useEffect } from "react";
import "../Styles/Card.css";
import Foto1 from "../Asset/Foto1.svg";
import Foto2 from "../Asset/Foto2.svg";
import Foto3 from "../Asset/Foto3.svg";
import Sample from "./Samplecard";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = () => {
let [products, setProducts] = useState('')

useEffect(() => {
  // axios 
  (async()=>{
    const x = await axios.get('https://dummyjson.com/products')
    console.log(x.data.products)
    setProducts(x.data.products)
  })()


},[])


  return (
    <>
      <div id="Card_Catalog">
        {products === '' ? <div className="loading_div">loading...</div> : products.map((item)=>{
         return <Link id="Card_Foto_Catalog1" to={`/products/${item.id}`}><Sample img={item.images[0]} name={item.title} price={"€" + item.price} /></Link> 
        })}
      </div>
    </>
  );
};

export default Card;
