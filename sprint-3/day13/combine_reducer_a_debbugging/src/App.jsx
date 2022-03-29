// import logo from './logo.svg';
// import './App.css';
// import { Counter } from "./components/Counter";
// import { AllRoutes } from "./components/Routes";
// import { Todo } from "./components/Todo"
// function App() {
//   return (
//     <div className="App">
//     <Counter />
//     <AllRoutes/>
//     <Todo />
//     </div>
//   );
// }

// export default App;


// import './App.css'
// import { Navbar } from './components/Navbar'
// import { Route, Routes} from 'react-router-dom'
// import { Home } from './components/Home'
// import { Login } from './components/Login'
// function App() {
  
//   return (
//     <div className="App">
//       <Navbar/>      
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/login' element={<Login/>}/>
//       </Routes>
//     </div>

//   )
// }

// export default App



import logo from './logo.svg';
import './App.css';
import { Counter } from "./components/Counter";
import { AllRoutes } from "./components/Routes";
import { Todo } from "./components/Todo"
function App() {
  return (
    <div className="App">
    {/* <Counter /> */}
    <AllRoutes/>

    </div>
  );
}

export default App;



