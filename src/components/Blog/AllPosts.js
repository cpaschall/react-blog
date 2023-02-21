import BlogPost from './BlogPost';
import './AllPosts.css';

const AllPosts =(props) => {
    return (
        <div>
            <BlogPost 
                title={props.items[0].title}
                author={props.items[0].author}
                // date={props.items[0].date}
                post={props.items[0].post}
            />
            <BlogPost 
                title={props.items[1].title}
                author={props.items[1].author}
                // date={props.items[1].date}
                post={props.items[1].post}
            />
            <BlogPost 
                title={props.items[2].title}
                author={props.items[2].author}
                // date={props.items[2].date}
                post={props.items[2].post}
            />
            <BlogPost 
                title={props.items[3].title}
                author={props.items[3].author}
                // date={props.items[3].date}
                post={props.items[3].post}
            />
        </div>
    )
}

export default AllPosts;