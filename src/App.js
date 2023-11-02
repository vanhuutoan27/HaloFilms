import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import AddFilm from './components/AddFilm';
import UpdateFilm from './components/UpdateFilm';
import Profile from './pages/Profile';
import Detail from './pages/Detail';
import Trailer from './pages/Trailer';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/add" element={<AddFilm />}></Route>
        <Route path="/update/:id" element={<UpdateFilm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/trailer/:id" element={<Trailer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <div id="buttonDiv"></div>
    </div>
  );
}

export default App;
