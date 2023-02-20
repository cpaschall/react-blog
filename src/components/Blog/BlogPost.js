import BlogCard from '../UI/BlogCard';
import './BlogPost.css';

const BlogPost = (props) => {

    return (
        <BlogCard className='blog-post'>
            <div>
                <div>
                    <h2>Title</h2>
                </div>
                <div>
                    <p>Author</p>
                </div>
                <div>
                    <p>Date</p>
                </div>
                <div>
                    <input type='textarea' />
                </div>
            </div>
            

        </BlogCard>
    )
}

export default BlogPost;