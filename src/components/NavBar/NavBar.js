import './NavBar.scss'
import {BsCart4} from 'react-icons/bs'

const NavBar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className='header__logo'>Focacceria Barrio Sur</h1>

        <nav className='header__navbar'>
          <p className='header__navlink'>Nosotros</p>
          <p className='header__navlink'>Nuestros Productos</p>
          <p className='header__navlink'>Contacto</p>
        </nav>

        <BsCart4/>
      </div>
    </header>
  );
};

export default NavBar;
