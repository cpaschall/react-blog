import './BlogCard.css';

const BlogCard = (props) => {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

export default BlogCard;