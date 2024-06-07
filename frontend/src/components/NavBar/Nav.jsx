import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <nav>
            <Link to='/widgets'><h2>Home</h2></Link>
            <Link to='/widgets/new' style={{marginLeft: 'auto', marginRight: '40px'}}><h2>Create New Widget</h2></Link>
      </nav>
    );
  };
  
  export default Nav;
  