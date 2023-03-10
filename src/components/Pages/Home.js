import './Home.css';
import { Link } from 'react-router-dom';
// import BlogPost from '../Blog/BlogPost';
// import Nav from '../UI/Nav';
import AllPosts from '../Blog/AllPosts';
import CreatePost from './CreatePost';
import CreatePostBG from '../UI/CreatePostBG';

const Home = (props) => {
    const blogPosts = [
        {
          id: 1,
          title: 'Post 1',
          author: 'Cal',
        //   date: new Date(2023, 1, 3),
          post: "Lorem ipsum"
        },
        {
          id: 2,
          title: 'Post 2',
          author: 'Cal',
        //   date: new Date(2022, 12, 5),
          post: "Blah Blah"
        },
        {
          id: 3,
          title: 'Post 3',
          author: 'Cal',
        //   date: new Date(2022, 11, 9),
          post: "Stuff stuff"
        },
        {
          id: 4,
          title: 'Post 4',
          author: 'Cal',
        //   date: new Date(10, 1, 2022),
          post: "Another post."
        }
    ]

    return (
        <div className='home-main'>
            {/* <Nav /> */}
            <CreatePostBG>
              <div className='all-posts'>
                <h1>Home Page</h1>
                <div>
                  <Link to='/create-post'>+ Post</Link>
                </div>
                <div>
                  <AllPosts items={blogPosts}/>
                </div>
              </div>
            </CreatePostBG>
        </div>
    )
}

export default Home;