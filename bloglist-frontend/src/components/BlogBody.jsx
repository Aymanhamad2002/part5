const BlogBody = ({ blog , handleLikesUpdate,handleDelete }) => {

  return(<div>
    <div>
      {blog.url}
    </div>
    <div>
      likes {blog.likes}
      <button onClick = {() => {handleLikesUpdate(blog.id)}}>like</button>
      <button onClick={() => {handleDelete(blog.id)}}>remove </button>
    </div>
    <div>
      {blog.user.username}
    </div>

  </div>)

}
export default BlogBody