import { useState } from 'react'
const AddForm = ({ onCreate }) => {
  const [title,setTitle] = useState('')
  const [url,setUrl] = useState('')
  const [author,setAuthor] = useState('')

  const handleAuthorChange = event => {
    setAuthor(event.target.value)
  }

  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleUrlChange = event => {
    setUrl(event.target.value)
  }
  const addBlog =  (event) => {
    event.preventDefault()
    const newBlog = { title,url,author }
    onCreate(newBlog)
    setAuthor('')
    setTitle('')
    setUrl('')
  }

  return (
    <div>
      <form onSubmit = {addBlog}>
        <div>
        title:  <input value = {title} onChange = {handleTitleChange}  />
        </div>
        <div>
        author: <input value = {author} onChange = {handleAuthorChange} />
        </div>
        <div>
        url: <input value = {url} onChange ={handleUrlChange} />

        </div>
        <div>
          <button type = 'submit'>create</button>
        </div>
      </form>
    </div>
  )
}
export default AddForm