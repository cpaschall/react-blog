import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/UI/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
// import BlogPost from './components/Blog/BlogPost';


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
