import './NavBar.css'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
const NavBar = ({ name }) => {

  return (
    <header className='header'>
      <Link to='/'>
        <h1 className='header__title'>{name}</h1>
      </Link>
      <div className="menu">
        <Link to='/category/celular'  className='Option'>Celular</Link>
        <Link to='/category/tablet'   className='Option'>Tablet</Link>
        <Link to='/category/notebook' className='Option'>Notebook</Link>
      </div>
      <CartWidget />

    </header>
  )

}
export default NavBar;