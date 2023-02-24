import './CreatePost.css';
import Home from './Home';
import PostForm from '../Blog/PostForm';

const CreatePost = (props) => {
    const savePostDataHandler = (enteredPostData) => {
        const postData = {
            ...enteredPostData,
            id: Math.random().toString()
        };

        props.onAddPost();
    }
    
    return (
        <div className="home-dark">
            <PostForm className="form-card" onSavePostData={savePostDataHandler}/>
        </div>
    )
}

export default CreatePost;