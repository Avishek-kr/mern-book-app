import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Book from './Routes/Book/Book';
import Singlebook from './Routes/Book/Singlebook';
import Createbook from "./Routes/Book/Createbook";
import Editbook from "./Routes/Book/Editbook";
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
