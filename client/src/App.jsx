import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';

function App() {
  return (
    <>
      <Router>
      Header
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        Footer
      </Router>
    </>
  )
}

export default App
