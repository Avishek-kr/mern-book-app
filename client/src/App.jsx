import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home.jsx';
import About from './Routes/About/About.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Book from './Routes/Book/Book.jsx';
import Singlebook from './Routes/Book/Singlebook.jsx';
import Createbook from "./Routes/Book/Createbook.jsx";
import Editbook from "./Routes/Book/Editbook.jsx";
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Book />} />
          <Route path='/books/:slug' element={<Singlebook />} />
          <Route path='/createbook/' element={<Createbook />} />
          <Route path='/editbook/:slug' element={<Editbook />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default App
