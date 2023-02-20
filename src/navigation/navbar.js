import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = () => {
    return (  

<ul>
  <li><a class="/" href="/">Home</a></li>
  <li><a href="/news">News</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><a href="/about">About</a></li>
  <li><a href="/form">Form</a></li>
</ul>
    );
}
 
export default Navbar;