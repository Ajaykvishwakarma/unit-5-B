import { Link } from "react-router-dom";

const links = [
  // Fix this links array, it's an array of objects {to: "", title: ""}
  {to: "/", title: "Home"},
  {to: "/products", title: "Products"},
  {to: "/about", title: "About"},
  {to: "/contact", title: "Contacts US"}
];

export const Navbar = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" ,background:"lightblue"}}>
        {links.map((el) => {
          return (
            <Link key={el.to} style={{ padding: "20px" }} to={el.to}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};
