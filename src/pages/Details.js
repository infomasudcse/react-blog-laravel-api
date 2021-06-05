import classes from './Details.module.css';

const Data = 
    {
        id:'17',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description. This is description This is description This is description This is description This is description This is description This is description This is description This is description <br/> This is description This is description This is description . This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description .This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description '
    };

const Details = () => {
    return ( 
        <div>
            <h1 className={classes.title}>{Data.title}</h1>
            <div>
                <img className={classes.imge} src={Data.image} alt="feature" />
            </div>
            <div className={classes.location}>
                {Data.location}
            </div>
            <div>
                <p>{Data.description}</p>
            </div>
           
        </div>
     );
}
 
export default Details;