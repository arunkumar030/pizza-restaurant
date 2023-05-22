import ReactDOM from "react-dom/client";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import {BrowserRouter as Router,Route,Routes, BrowserRouter,} from "react-router-dom";
import Contact from './pages/Contact';


const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  )
}

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Menu' element={<Menu/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
       </BrowserRouter>
       <Footer/>
     </div>
  );
}


export default App;
