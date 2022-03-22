import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [ products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
  },[])

  async function getProducts() {
    const a = await fetch(` http://localhost:3001/products`)
    const b = await a.json()
    setProducts(b)
  }



  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(5, 1fr)",
          gridGap:"10px",
          justifyContent: "space-evenly",
          paddingTop: "50px",
          width:"95%",
          margin:"auto"

        
          
        }}
      >
        {/* Iterate over products and show links */}
        {products.map((el) => {
          return <Link to={`products/${el.id}`} key={el.id}>
            <div style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", padding:"5px", height:"300px"}}>
            {/* Show product image and name */}
            <img style={{width : "150px", height : "150px"}} src = {el.image} alt=""/>
            <p>{el.title}</p>
            </div>
            </Link>;
        })}
      </div>
    </>
  );
};
