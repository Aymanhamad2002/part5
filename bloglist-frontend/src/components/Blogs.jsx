import Blog from './Blog'


const Blogs = ({ blogs ,user , handleLikesUpdate , handleDelete }) => {
  return (
    <div>
      {
        blogs.map(blog => (<Blog
          handleLikesUpdate = {handleLikesUpdate}
          key = {blog.id} blog = {blog}
          handleDelete = {handleDelete}
          user = {user}
        />))
      }
    </div>)

}
export default Blogs