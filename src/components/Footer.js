import classes from './Footer.module.css';


const Footer = () => {
    return ( 
        <div className={classes.container}>
            <p className={classes.copyright}>Copyright {new Date().getFullYear() }</p>
        </div>
     );
}
 
export default Footer;