import Blog from './Blog'


const Blogs = ({ blogs , handleLikesUpdate , handleDelete }) => {
  return (
    <div>
      {
        blogs.map(blog => (<Blog
          handleLikesUpdate = {handleLikesUpdate}
          key = {blog.id} blog = {blog}
          handleDelete = {handleDelete}
        />))
      }
    </div>)

}
export default Blogs