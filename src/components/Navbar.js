import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
    return ( 
        <div>            
            <ul className={classes.navul}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
            <li><Link to="/details" >Details</Link></li>            
            </ul>
        </div>
     );
}
 
export default Navbar;