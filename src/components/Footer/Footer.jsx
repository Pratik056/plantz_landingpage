import React from 'react';
import { InstagramFilled, TwitterCircleFilled, FacebookFilled } from '@ant-design/icons';
import './footer.css';

export const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className="app__footer-icons">
        <InstagramFilled className='Instagram'/>
        <TwitterCircleFilled className='Twitter'/>
        <FacebookFilled className='Facebook'/>
      </div>

      <div className="app__footer-links">
        <a href="#about">about</a>
        <a href="#articles">articles</a>
        <a href="#subscribe">subscribe</a>
      </div>
    </div>
  )
}
