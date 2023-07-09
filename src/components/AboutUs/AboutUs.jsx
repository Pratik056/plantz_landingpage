import React from 'react';
import aboutus from '../../assets/aboutus.jpg';
import './aboutus.css';


const AboutUs = () => {
  return (
    <div className='app__aboutus' id='aboutus'>
      <div className="app__aboutus-img">
        <img src={aboutus} alt="aboutus-img" />
      </div>

      <div className="app__aboutus-content">
        <h2>About Us</h2>
        <div />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur numquam, iure explicabo ullam odit saepe minima nam earum ut delectus dolor eos tempora in facere asperiores sed quos cum doloremque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus possimus, vitae quaerat harum optio eveniet esse reprehenderit suscipit! Inventore distinctio accusantium saepe explicabo soluta aspernatur, iure iste blanditiis dolorem culpa.</p>
      </div>
    </div>
  )
}

export default AboutUs