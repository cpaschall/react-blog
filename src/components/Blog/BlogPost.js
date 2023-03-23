import BlogCard from '../UI/BlogCard';
import './BlogPost.css';

const BlogPost = (props) => {

    return (
        <BlogCard className='blog-post' style={{backgroundImage: props.bg}}>
            <div>
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <h5>By: {props.author}</h5>
                </div>
                <div>
                    <p>{props.date}</p>
                </div>
                <div>
                    <p>{props.post}</p>
                </div>
            </div>
        </BlogCard>
    )
}

export default BlogPost;