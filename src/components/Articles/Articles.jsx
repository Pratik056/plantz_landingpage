import React from 'react';
// import { SubHeading } from '../../container';

import houseplant1 from '../../assets/house_plant1.jpg';
import houseplant2 from '../../assets/pexels-inga-seliverstova-3578393.jpg';
import houseplant3 from '../../assets/house_plant2.jpg';

import './articles.css';

const Articles = () => {
  return (
    <div className='app__articles section__padding'>
      <div className="app__articles-headtext">
        <h2>Latest Articles</h2>
        <div />
        {/* <SubHeading title="lastest articles"/> */}
      </div>

      <div className="app__articles-content">
        <div className="app__articles-content_article">
          <div className="app__articles-content_article-img">
          <img src={houseplant1} alt="" />
          </div>
          <h2>How to use mindfullness in you life</h2>
        </div>
      
        <div className="app__articles-content_article">
          <div className="app__articles-content_article-img">
          <img src={houseplant2} alt="" />
          </div>
          <h2>What the plants needs and what the plants want</h2>
        </div>
      
        <div className="app__articles-content_article">
          <div className="app__articles-content_article-img">
          <img src={houseplant3} alt="" />
          </div>
          <h2>How to go deep into the mind</h2>
        </div>
      </div>
    </div>
  )
}

export default Articles