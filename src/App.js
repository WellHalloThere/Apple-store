import React from "react";
import './App.css'
import Header from "./Header";
import Alert from "./Alert";
import Section from "./Section";
import Footer from './Footer';

function App() {
   return (
      <div>
         <Header />
         <Alert />
         <section title="iphone 13" className="first-highlight-wrapper" />
         <section title="iphone 13 pro" className="second-highlight-wrapper" />
         <section title="Mac or opad" className="third-highlight-wrapper" />
         <Footer/>
      </div>
   )
}

export default App