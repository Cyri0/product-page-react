import logo from '../assets/logo.svg'
import cart from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src={logo} alt="Company logo" />
            <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div>
            <img className='cart' src={cart} alt="Cart icon" />
            <img className='avatar' src={avatar} alt="User avatar" />
        </div>
    </nav>
  )
}

export default Navbar