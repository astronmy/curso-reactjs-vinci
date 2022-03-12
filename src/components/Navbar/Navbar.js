
import './Navbar.css'
import MenuItem from "../MenuItem/MenuItem"
const Navbar = ({storeName, backgroundColor}) =>{
  return (
      <nav style={{backgroundColor}}>
          <h1 className='title-store'>{storeName}</h1>
          <ul>
              <MenuItem label="Home" link="#home" />
              <MenuItem label="Products" link="#products" />
              <MenuItem label="Contact" link="#contact" />
          </ul>
      </nav>
  )
}
export default Navbar