import { Link } from 'react-router-dom';
import classes from './Blog.module.css';

const Blog = (props) => {
    return ( 
        
        <div className={classes.card}>
            <img alt="cardImg" className={classes.cardimg} src={props.data.image} />
            <div className={ classes.cardcontent }>
                <p>{props.data.location}</p>
                <h3>{props.data.title}</h3>
                <p>{props.data.description}</p>
            </div>
            <div className={classes.cardfooter}>
                <h3>Read More</h3>
                <Link  to="/details">-></Link>
            </div>
        </div>
             
     );
}
 
export default Blog;