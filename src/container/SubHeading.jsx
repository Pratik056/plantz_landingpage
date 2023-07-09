import React from 'react';
import './subheading.css';

const SubHeading = ({title}) => {
  return (
    <div className='app__subheading' style={{marginBottom: '1rem'}}>
        <p>{title}</p>
        <div />
    </div>
  )
}

export default SubHeading