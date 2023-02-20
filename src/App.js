
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navigation/navbar';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Terms from './pages/Terms';
import Footer from './footer';
import Forms from './pages/Form';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
          <Route path = '/news' element = {<News/>} />
          <Route path = '/terms' element = {<Terms/>} />    
          <Route path = '/form' element = {<Forms/>} />   
        </Routes>
      </Router>
     
      <div className='container'>
      </div>

        <Footer/>
    </div>
  );
}

export default App;
