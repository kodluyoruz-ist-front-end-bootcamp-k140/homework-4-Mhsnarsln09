import { Routes, Route, Link} from 'react-router-dom';

import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFoundedPages from './pages/notFound';
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundedPages />} />
        
      </Routes>
      </BrowserRouter>
 
  );
}

export default App;
