import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav-bar'>
            <div>
                Logo
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;