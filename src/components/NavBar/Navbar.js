import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = ({name}) => {

  return (
    <header className='header'>
       <h1 className='header__title'>{name}</h1>
    </header>
  )

}
export default NavBar;