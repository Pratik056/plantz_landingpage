import React from 'react';
import {Navbar, Header, Articles, AboutUs, Newsletter, Footer} from './components';

import './App.css';


const App = () => {
  return (
    <div>
      <div className="background__image">
        <Navbar />
        <Header />
      </div>
      <Articles />
      <AboutUs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App