import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const NavBar = ({ name }) => {

  return (
    <nav className="NavBar" >
      <Link to='/'>
        <h3>{name}</h3>
      </Link>

      <div className="Categories">
        <Link to='/category/celular' className='Option'>Celular</Link>
        <Link to='/category/tablet' className='Option'>Tablet</Link>
        <Link to='/category/notebook' className='Option'>Notebook</Link>
      </div>
      <CartWidget />
    </nav>
  )

}
export default NavBar;