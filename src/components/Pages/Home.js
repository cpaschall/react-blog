import './Home.css';
// import BlogPost from '../Blog/BlogPost';
// import Nav from '../UI/Nav';
import AllPosts from '../Blog/AllPosts';

const Home = () => {
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
        <div>
            {/* <Nav /> */}
            <h1>Home Page</h1>
            <AllPosts items={blogPosts} />
        </div>
    )
}

export default Home;