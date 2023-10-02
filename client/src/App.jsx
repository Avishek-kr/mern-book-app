import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Book from './Routes/Book/Book';
import SingleBook from './Routes/Book/singleBook';

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Book />} />
          <Route path='/books/:slug' element={<SingleBook />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
