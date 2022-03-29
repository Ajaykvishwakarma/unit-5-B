// import { Link } from "react-router-dom";

// const links = [
//   // Fix this links array, it's an array of objects {to: "", title: ""}
//   {to: "/", title: "Home"},
//   {to: "/login", title : "Login"}
// ];

// export const Navbar = () => {
//   return (
    
//       <div style={{ display: "flex", justifyContent: "center" ,background:"lightblue"}}>
//         {links.map((el) => {
//           return (
//             <Link style={{ padding: "20px" }} to={el.to}>
//               {el.title}
//             </Link>
//           );
//         })}
//       </div>
  
//   );
// };

export const Navbar = ()=>{

  // function logOut(){
  //     localStorage.clear('user')
  //     return "/login"
  // }
  return (
      <>
      <div style={{border : "1px solid black", padding : "10px", width : "400px", margin : "auto", display : "flex", justifyContent : "space-between", marginTop : "10px",backgroundColor:"lightgreen", marginBottom : "50px"}}>
          <a href="/">Home</a>
          <a href="/login">{localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')).email.split('@')[0]:"Login"}</a>
      </div>
      </>
  )
}
