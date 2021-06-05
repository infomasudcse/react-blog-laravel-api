import { Link } from 'react-router-dom';
import logo from './../logo.jpg';
import classes from './Navbar.module.css';

function handleLogout(){
    alert('logout');
}

const Navbar = () => {
    return ( 
        <div className={classes.navcontainer}>
            <div className={classes.logo}><img src={logo} alt="logo" /></div>            
            <ul className={classes.navul}>
                <li><Link to="/" className='active'>Home</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/details" >Details</Link></li>      
                <li><Link to="/list" >List</Link></li>
                <li><Link to="/form" >Form</Link></li>
                <li><Link to="/login" >Login</Link></li>
                     
            </ul>
        </div>
     );
}
 
export default Navbar;