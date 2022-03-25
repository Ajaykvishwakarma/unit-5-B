import { Route, Routes } from "react-router-dom";
// import { ProductsPage } from './ProductsPage'
import { Navbar } from './Navbar'
import { Todo } from './Todo'
import { TodoDatails } from "./TodoDetails"
// import { ProductsDetailsPage } from './ProductsDetailsPage'
// import { NotFoundPage } from './NotFoundPage';

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      {/* Add Routes here */}
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path='/todos/:id' element={<TodoDatails/>}/>
        {/* <Route path='/todo/:id' element={<ProductsDetailsPage/>}/> */}

      </Routes>
    </>
  );
};
