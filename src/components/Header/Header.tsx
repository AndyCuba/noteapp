import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return(
        <header className="header">   
                <h1>
                    <Link to="/">Note App</Link>
                </h1>             
        </header>
    );
};

export default Header;