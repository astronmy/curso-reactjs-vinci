
import './Navbar.css'
import MenuItem from "../MenuItem/MenuItem"

const Navbar = ({backgroundColor}) =>{
  return (
      <nav style={{backgroundColor}}>
          <ul>
              <MenuItem label="Home" />
              <MenuItem label="Products" />
              <MenuItem label="Contact" />
          </ul>
      </nav>
  )
}
export default Navbar