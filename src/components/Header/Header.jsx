
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           <nav>
            <span>My Website</span>
              <Link to="/">Home</Link>
              <Link to="/Aboute">Aboute</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Usger">Usgers</Link>
              </nav>
        </div>
    );
};

export default Header;