import { useState } from 'react'
import BlogBody from './BlogBody'
const Blog = ({ blog, handleLikesUpdate,handleDelete,user }) => {
  const [showInfo,setShowInfo] = useState(false)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const blogBody = () => {
    return (<BlogBody  blog  = {blog}
      handleLikesUpdate = { handleLikesUpdate}
      handleDelete = {handleDelete}
      user = {user}
    />)
  }
  const handleShowChange = () => {
    setShowInfo(!showInfo)
  }
  return (
    <div className = 'blogClass' style = {blogStyle}>
      <div className='titleAndAuthor'>
        {blog.title} {blog.author}
        <button onClick={handleShowChange}>{showInfo ? 'hide' : 'view'}</button>
      </div>

      {showInfo && <div className='bodyShow'>{blogBody()}</div>}
    </div>
  )

}

export default Blog