import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
      <nav>
            <Link to='/widgets'><h2>Home</h2></Link>
            <Link to='/widgets/new'><h2>Create New Widget</h2></Link>
      </nav>
    );
  };
  
  export default Nav;
  