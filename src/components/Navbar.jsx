
import {Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='brandLogo'>
                    <img src='sakura.png' alt='Logo' className='logo'/>
                    <Link to="/" className="navbar-brand">
                        Cherry Blossom
                    </Link>
                </div>
                <div className='nav-right'>
                <ul className='navbar-nav'>
                    <li className='nav-item'> 
                        <Link to="/login" className='nav-link'>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to="/signup" className='nav-link'>
                            Signup
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/products" className="nav-link">
                            Products
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to="/cart" className='nav-link'>
                            Cart
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar