import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;