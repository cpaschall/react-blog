import BlogCard from '../UI/BlogCard';
import './BlogPost.css';

const BlogPost = (props) => {

    return (
        <BlogCard className='blog-post' style={{backgroundImage: props.bg}}>
            <div className='post-content'>
                <div className='content-left'>
                    <div>
                        <h4>{props.title}</h4>
                    </div>
                    <div>
                        <p>By: {props.author}</p>
                    </div>
                    <div>
                        <p>{props.date}</p>
                    </div>
                </div>
                <div className='content-right'>
                    <div>
                        <p>{props.post}</p>
                    </div>
                </div>
                
            </div>
        </BlogCard>
    )
}

export default BlogPost;