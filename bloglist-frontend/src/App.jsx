import { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import Blogs from './components/Blogs'
import loginService from './services/login'
import AddForm from './components/AddForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState(null)
  const [message ,setMessage] = useState(null)
  const onLogin = async (event) => {
    event.preventDefault()
    try{
    const userTemp = await loginService.login({username,password})
    window.localStorage.setItem('loggedUser',JSON.stringify(userTemp))
    blogService.token = userTemp.token
    setUser(userTemp)
    setUsername('')
    setPassword('')

    }catch(exception){
      setMessage('wrong username or password')
      setTimeout(() => {
        setMessage(null)

      },5000)
      
    }

  }
  const handleDelete = async (id) => {
    const blogToDelete = blogs.find(blog => blog.id === id)
    try {
      if(window.confirm(`remove ${blogToDelete.title} by ${blogToDelete.author}`))
      {  
        const response = await blogService.removeBlogs(id)
        setBlogs(blogs.filter(blog => blog.id !== id ))
      }
    }
    catch(exception){

    }
  }
  const handleLikesUpdate = async (id) => {
    const blogToUpdate = blogs.find(blog => blog.id === id)
    const newObject = {...blogToUpdate,likes : blogToUpdate.likes +1 }
    try{
    
    const response = await blogService.updateLikes(newObject)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : response))
    }
    catch(exception){
      setMessage('wrong username or password')
      setTimeout(() => {
        setMessage(null)

      },5000)

    }
  }
  const handlePassChange = (event) => {
    setPassword(event.target.value)

  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)


  }
  
  const onCreate = async  (newObject) => {
    
    try{
    const response = await  blogService.create(newObject)
    setBlogs(blogs.concat(response))
    setMessage(` a new blog ${response.title} by ${response.author} added `)
    setTimeout(() => {
      setMessage('')

    },5000)
    }

    catch(exception){
      setMessage(exception.response.data.error)
      setTimeout(() => {
        setMessage('')
  
      },5000)
      

    }

  }
  const loginForm = () => {
    return(
    <LoginForm 
    username ={username}
    password = {password}
    onLogin = {onLogin}
    handlePassChange={handlePassChange}
    handleUsernameChange={handleUsernameChange}
    />)

  }
  const blogss = () => {
   return (<Blogs blogs ={blogs}
        handleLikesUpdate ={handleLikesUpdate} 
        handleDelete = {handleDelete}

   />)

  }
  const addForm = () => {
    return (<AddForm 
      onCreate={onCreate}
    />)
  }
  const handleLogout  = () =>{
    window.localStorage.clear()
    setUser(null)
  }

  useEffect( () => {
     blogService.getAll().then(result => setBlogs(result.sort((a,b) => a.likes-b.likes)))
      
  }, [])
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if(loggedUser){
    const userTemp= JSON.parse(loggedUser)
    setUser(userTemp)
    blogService.setToken(userTemp.token)
    } 
  },[])
  return (
    <div>
      <h2>blogs</h2>
      <Notification message ={message} />
      {user === null && loginForm()}
      {user !== null && (
        <div>
        <div>{user.username} logged in 
          <button onClick={handleLogout}>logout</button> 
        </div>
        <Togglable buttonLabel ='addNote'>
         {addForm()} 
        </Togglable>
         {blogss()}
        
        
        </div>)}
      
      

    </div>
  )
}

export default App