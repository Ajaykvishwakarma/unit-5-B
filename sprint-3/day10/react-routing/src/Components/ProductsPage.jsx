import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductsPage = () => {

  const [ product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
  },[])

  async function getProducts(){
    const a = await fetch(`http://localhost:3001/products`)
    const b = await a.json()
    setProduct(b)
  }
  return (
    <>
    <div style={{
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px",
      margin:"auto",
      marginTop:"30px",
      width:"80%",
      
     
    }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 35%)",
          
          width: "90%",
          margin: "auto",
          paddingTop: "50px",
          marginLeft:"40px"
          
        }}
      >
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Details</h4>
      </div>
      {product.map((el) => {
        return (
          <div
            className="container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 35%)",
            
              width: "90%",
              margin: "auto",
              paddingTop: "10px",
              padding:"5px",
              border:"1px solid green",
              marginTop:"10px"

            }}
          >
            <div className="name">{el.title}</div>
            <div className="price">{el.price}</div>
            <Link to={`/products/${el.id}`}>more details</Link>
          </div>
        );
      })}
      </div>
    </>
  );
};
