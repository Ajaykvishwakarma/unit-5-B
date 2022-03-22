import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const ProductsDetailsPage = () => {
  const [ product , setProduct] = useState([])
  const {id} = useParams()
  useEffect(() => {
    getProduct() 
  },[])

  async function getProduct() {
    const a = await fetch(`http://localhost:3001/products/${id}`)
    const b = await a.json()
    setProduct(b)
  }
  console.log(product)

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          width:"80%",
          margin:"auto",
          marginTop:"20px",
        }}
      >
        <img src={product.image}   alt={product.title} style={{width:"200px" , height : "200px"}} />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.title}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
            <ul key={product.id}>
                <li key={" "}> Category : {product.category} </li>
                <li key={""}> Description : {product.description} </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};
