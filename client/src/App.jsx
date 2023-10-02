import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Book from './Routes/Book/Book';
import SingleBook from './Routes/Book/singleBook';
import CreateBook from "./Routes/Book/createBook";
import EditBook from "./routes/Book/editBook";


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
          <Route path='/createbook/' element={<CreateBook />} />
          <Route path='/editbook/:slug' element={<EditBook />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
