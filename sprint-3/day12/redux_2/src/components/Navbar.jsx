import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
  {to: "/", title: "Home"},

];

export const Navbar = () => {
  return (
    
      <div style={{ display: "flex", justifyContent: "center" ,background:"lightblue"}}>
        {links.map((el) => {
          return (
            <Link style={{ padding: "20px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
  
  );
};
