import classes from './Blog.module.css';

const Blog = () => {
    return ( 
        
        <div className={classes.card}>
            <img alt="cardImg" className={classes.cardimg} src="https://googleplus-covers.com/covers/nature_balloon_ride.jpg" width="100%" height="50%"/>
            <div className={ classes.cardcontent }>
                <p>Thursday, July 16, 2016</p>
                <h3>Epic looking place</h3>
                <p>A description so captivating<br/> it will blow your mind.</p>
            </div>
            <div className={classes.cardfooter}>
                <h3>Read More</h3>
                <a href="#">-></a>
            </div>
        </div>
             
     );
}
 
export default Blog;