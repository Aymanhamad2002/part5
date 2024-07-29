const BlogBody = ({ blog , handleLikesUpdate,handleDelete,user }) => {
  const removeB = () => (<button onClick={() => {handleDelete(blog.id)}}>remove </button>)

  return(<div>
    <div >
      {blog.url}
    </div>
    <div>
      <div className="likes">likes {blog.likes}</div>
      <button onClick = {() => {handleLikesUpdate(blog.id)}}>like</button>
      {user.username === blog.user.username && removeB()}
    </div>
    <div>
      {blog.user.username}
    </div>

  </div>)

}
export default BlogBody