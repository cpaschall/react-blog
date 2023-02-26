import './CreatePost.css';
import Home from './Home';
import PostForm from '../Blog/PostForm';
import CreatePostBG from '../UI/CreatePostBG';

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
            <CreatePostBG>
                <PostForm className="form-card" onSavePostData={savePostDataHandler}/>
            </CreatePostBG>
        </div>
    )
}

export default CreatePost;