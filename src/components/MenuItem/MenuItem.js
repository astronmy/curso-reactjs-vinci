
import './MenuItem.css'

const MenuItem = ({label, link}) =>{
  return (
    <li><a href={link} >{label}</a></li>
  )
}
export default MenuItem