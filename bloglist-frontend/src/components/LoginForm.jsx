const LoginForm = ({ onLogin,username,handleUsernameChange,password,handlePassChange }) => {
  return(<div className='loginForm'>
    <form onSubmit = {onLogin}>
      <div >
                Username: <input data-testid ='username' value ={username} onChange ={handleUsernameChange} />
      </div>
      <div>
                Password: <input data-testid='password' type = 'password' value ={password} onChange ={handlePassChange} />

      </div>
      <div>
        <button type ='submit '>login</button>
      </div>

    </form>

  </div>
  )
}
export default LoginForm