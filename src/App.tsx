import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header/>
        <div style={{paddingTop:'60px'}}>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
         </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
