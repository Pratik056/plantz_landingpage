import React from 'react';

import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter section__padding ' id='newsletter'>
      <div className="app__newsletter-content">
        <h2>subscribe</h2>
        <h3>Sign-up to our newsletter</h3>
        <input type="email" name="" id="" placeholder='Your email'/>
        <button type="button" className='custom__button'>submit</button>
      </div>
    </div>
  )
}

export default Newsletter