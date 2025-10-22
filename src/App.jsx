import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import PageContent from "./layout/PageContent.jsx";
import HomePage from "./pages/HomePage.jsx";


function App() {
 
 return (
    <>
     
      <HomePage />
      <Footer />    
    </>
  );
}

export default App
