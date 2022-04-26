import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = ({ name }) => {

  return (
    <header className='header'>
      <h1 className='header__title'>{name}</h1>
      <div className="menu">
        <Link to='/category/celular' className='option'>Celular</Link>
        <Link to='/category/tablet' className='option'>Tablet</Link>
        <Link to='/category/notebook' className='option'>Notebook</Link>
      </div>
      <CartWidget />
    </header>
  )

}
export default NavBar;