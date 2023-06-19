import './App.css';
import { Fragment } from 'react';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React from 'react';
import Nav from "./Nav";
import Header from './Header';
import Cards from "./Cards";
import Footer from "./Footer"

function App() {
  return (
    <Fragment>
      <Nav />     
      <Header /> 
      <Cards />
      <Footer />
    </Fragment>
  );
}

export default App;
