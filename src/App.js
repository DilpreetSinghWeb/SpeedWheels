import './App.css';
import React, { useState, useEffect } from "react";
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import CarModels from './components/carModels/CarModels';
import Footer from './components/footer/Footer';
import Loader from './components/loader/Loader';
import Reviews from './components/reviews/Reviews';

function App() {
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  })
  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ):(
        <>
        <Hero />
      <Info />
      <CarModels />
      <Reviews />
      <Footer />
      </>
      )}
    </>
  );
}

export default App;
