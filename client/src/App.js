import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/UI/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import CreatePost from './components/Pages/CreatePost'
// import BlogPost from './components/Blog/BlogPost';
import './App.css'


function App() {

  return (
    <div className="App">
      {/* <style>
      @import url('https://fonts.googleapis.com/css2?family=Miss+Fajardose&display=swap');
      </style> */}
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&display=swap');
      </style>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Ubuntu:wght@300&display=swap');
      </style>
      <Router className="all-routes">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
