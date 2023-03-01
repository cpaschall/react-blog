import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap'
import './PostForm.css';

const PostForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredPost, setEnteredPost] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value)
    }

    const authorChangeHandler = (e) => {
        setEnteredAuthor(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)
    }

    const postChangeHandler = (e) => {
        setEnteredPost(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const postData = {
            title: enteredTitle,
            author: enteredAuthor,
            date: new Date(enteredDate),
            post: enteredPost
        }

        props.onSavePostData(postData);

        setEnteredTitle('');
        setEnteredAuthor('');
        setEnteredDate('');
        setEnteredPost('');
    }

    return (
        <form className={props.className} onSubmit={submitHandler}>
            <div className='new-post__controls'>
                <div className='new-post__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-post__control'>
                    <label>Author</label>
                    <input type='text' value={enteredAuthor} onChange={authorChangeHandler}/>
                </div>
                <div className='new-post__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} onChange={dateChangeHandler} />
                </div>
                <div className='new-post__control'>
                    <label>Post Text</label>
                    <textarea rows="20" cols="80" value={enteredPost} onChange={postChangeHandler} />
                </div>
            </div>
            <div className='new-post__actions'>
                <Link to='/'>
                    <Button type='submit' variant="secondary" className="post-btn">Add Post</Button>
                </Link>
            </div>
        </form>
    )
}

export default PostForm;