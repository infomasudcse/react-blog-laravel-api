import Blog from './../components/Blog';
import classes from './Home.module.css';

const DummyData = [
    {
        id:'1',
        title:'This is first Blog',
        image:'https://free4kwallpapers.com/uploads/wallpaper/reflections-nature-tranquil-beautiful-trees-1024x768-wallpaper.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'2',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'3',
        title:'This is second Blog',
        image:'https://free4kwallpapers.com/uploads/wallpaper/reflections-nature-tranquil-beautiful-trees-1024x768-wallpaper.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'4',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'5',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'6',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'7',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'8',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'9',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'10',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'11',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'12',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'13',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'14',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'15',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'16',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    },
    {
        id:'17',
        title:'This is second Blog',
        image:'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg',
        location:'Dhaka',
        description:'This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description This is description'
    }
];


const Home = () => {
    return ( 
        <div>
            <h1 className={classes.title}>Latest Blogs</h1>
            <div className={classes.container}>
            { DummyData.map((blog)=>{
                return <Blog data={blog} key={blog.id}/>
            })  }
            </div>
        </div>
     );
}
 
export default Home;