import { useState } from 'react'
import BlogBody from './BlogBody'
const Blog = ({ blog, handleLikesUpdate,handleDelete }) => {
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
    />)
  }
  const handleShowChange = () => {
    setShowInfo(!showInfo)
  }
  return (
    <div style = {blogStyle}>
      <div className='titleAndAuthor'>
        {blog.title} {blog.author}
        <button onClick={handleShowChange}>{showInfo ? 'hide' : 'view'}</button>
      </div>

      {showInfo && <div className='bodyShow'>blogBody()</div>}
    </div>
  )

}

export default Blog