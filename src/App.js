import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Index from './pages/home/Index';
import ErrorPage from './components/common/error page/ErrorPage';
import Login from './components/login/login';

function App() {
  return (
    <div>
      <Header />
      <div className="">
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/home' element={<Index />} />
          <Route exact path="/login" element={<Login/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
