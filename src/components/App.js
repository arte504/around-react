import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

import { CurrentUserContext } from '../context/CurrentUserContext.js'

export default function App() {
  return (
    <div className='page'>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}