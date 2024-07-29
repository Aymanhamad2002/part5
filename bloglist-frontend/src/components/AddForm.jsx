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
  const addBlog = async  (event) => {
    event.preventDefault()
    const newBlog = { title,url,author }
    await onCreate(newBlog)
    setAuthor('')
    setTitle('')
    setUrl('')
    
  }

  return (
    <div>
      <form onSubmit = {addBlog}>
        <div>
        title:  <input data-testid ='title' placeholder='title' value = {title} onChange = {handleTitleChange}  />
        </div>
        <div>
        author: <input data-testid = 'author' placeholder ='author' value = {author} onChange = {handleAuthorChange} />
        </div>
        <div>
        url: <input data-testid ='url' placeholder = 'url' value = {url} onChange ={handleUrlChange} />

        </div>
        <div>
          <input  type = 'submit' value ='create'/>
        </div>
      </form>
    </div>
  )
}
export default AddForm