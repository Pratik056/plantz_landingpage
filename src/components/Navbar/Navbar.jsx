import React from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';


import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="app__navbar ">
      <div className="app__navbar-logo">
        <h2>HO</h2>
      </div>

      <div className="app__navbar-links">
        <ul>
          <li> <a href="#about">about</a></li>
          <li> <a href="#articles">articles</a></li>
          <li> <button type="button" className='custom__button'>subscribe</button> </li>
        </ul>
      </div>

      <div className="app__navbar-dropdown ">
        <div className="app__navbar-dropdown-button">
          {toggleMenu
              ? <RiCloseLine color='#424941' size={50}
              onClick={() => setToggleMenu(false)}/>
              :<RiMenu3Line color='#424941' size={50}  onClick={() => setToggleMenu(true)}/>
            }
        </div>

        {toggleMenu && (
          <div className="app__navbar-dropdown_overlay scale-up-ver-top">
          <ul>
            <li> <a href="#about">about</a></li>
            <li> <a href="#articles">articles</a></li>
            <li> <a href="#newsletter">subscribe </a></li>
          </ul>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar