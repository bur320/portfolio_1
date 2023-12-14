import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar.jsx';
import Footer from './component/Footer.jsx';
import Home from './component/Home.jsx';
import Contact from './component/Contact.jsx';
import Portfolio from './component/Portfolio.jsx';
import Newapp from './component/Newapp';

function App() {

  
  return (
    <div className='' >
      <BrowserRouter>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/newapp' element={<Newapp/>}/>
        </Routes>
        <Footer/>
      
      </BrowserRouter>
    </div>
  );
}


export default App;
