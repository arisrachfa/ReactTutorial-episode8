// libraries 
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// style
import './App.css';

// pages
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <Navbar />
        </div>

        <Routes>
          {/* Pada react router v6 sudah tidak diperlukan menggunakan exact pada path='/' */}
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
