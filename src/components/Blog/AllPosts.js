import BlogPost from './BlogPost';
import './AllPosts.css';

const AllPosts =(props) => {
    return (
        <div className='all-posts'>
            <div className='main-article'>
                <div className='main-card'>

                </div>

            </div>
            <div className='post-board'>
                {props.items.map((item) => ( 
                <BlogPost 
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    // date={props.items[0].date}
                    post={item.post}
                    bg={item.bg}
                />
                ))}
            </div>
        </div>
    )   
}

export default AllPosts;